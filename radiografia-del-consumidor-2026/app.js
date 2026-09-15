(() => {
  'use strict';
  const dataset = JSON.parse(document.getElementById('consumer-data').textContent);
  const { states, metrics } = dataset;
  const stateSelect = document.getElementById('state-select');
  const metricSelect = document.getElementById('metric-select');
  const paths = [...document.querySelectorAll('.state-path')];
  const tooltip = document.getElementById('map-tooltip');
  const frame = document.querySelector('.map-frame');
  const intFormat = new Intl.NumberFormat('es-MX');
  let selected = states.find(s => s.id === 'ciudad-de-mexico');
  let metric = metrics.find(m => m.key === 'hogares-internet');

  function format(value, m) {
    if (!Number.isFinite(value)) return 'No disponible';
    if (m.type === 'percent') return new Intl.NumberFormat('es-MX', {style:'percent', minimumFractionDigits:m.decimals, maximumFractionDigits:m.decimals}).format(value);
    if (m.type === 'money') return '$' + intFormat.format(value);
    if (m.type === 'decimal') return new Intl.NumberFormat('es-MX', {minimumFractionDigits:1, maximumFractionDigits:1}).format(value);
    return intFormat.format(value);
  }
  function track(event, extra) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event, resource:'radiografia_consumidor_2026', state:selected.id, metric:metric.key, ...extra});
  }
  function color(value, min, max) {
    const t = max === min ? .5 : Math.max(0, Math.min(1, (value-min)/(max-min)));
    const stops = [[73,50,46],[130,67,54],[188,76,53],[241,90,59],[255,186,164]];
    const step = Math.min(3, Math.floor(t*4));
    const local = t*4-step;
    return `rgb(${stops[step].map((a,i) => Math.round(a+(stops[step+1][i]-a)*local)).join(',')})`;
  }
  function updateURL() {
    const url = new URL(window.location.href);
    url.searchParams.set('estado', selected.id);
    url.searchParams.set('indicador', metric.key);
    history.replaceState(null, '', url);
  }
  function readURL() {
    const p = new URLSearchParams(location.search);
    selected = states.find(s => s.id === p.get('estado')) || states.find(s => s.id === 'ciudad-de-mexico');
    metric = metrics.find(m => m.key === p.get('indicador')) || metrics.find(m => m.key === 'hogares-internet');
  }
  function update(writeURL = true) {
    stateSelect.value = selected.id;
    metricSelect.value = metric.key;
    document.getElementById('state-name').textContent = selected.name;
    document.getElementById('selected-label').textContent = metric.label;
    document.getElementById('selected-value').textContent = format(selected.values[metric.key], metric);
    document.getElementById('selected-unit').textContent = metric.unit;
    document.getElementById('map-metric').textContent = metric.label;
    const values = states.map(s => s.values[metric.key]).filter(Number.isFinite);
    const min = Math.min(...values), max = Math.max(...values);
    document.getElementById('legend-min').textContent = format(min,metric);
    document.getElementById('legend-max').textContent = format(max,metric);
    document.getElementById('metric-definition').textContent = metric.description;
    paths.forEach(path => {
      const state = states.find(s => s.id === path.dataset.state);
      const value = state.values[metric.key];
      path.style.fill = Number.isFinite(value) ? color(value,min,max) : '#36383d';
      path.setAttribute('aria-pressed', String(state.id === selected.id));
      path.setAttribute('aria-label', `${state.name}. ${metric.label}: ${format(value,metric)}`);
      path.querySelector('title').textContent = `${state.name}: ${format(value,metric)}`;
    });
    const groups = document.getElementById('profile-metrics');
    groups.replaceChildren();
    [...new Set(metrics.map(m => m.group))].forEach(groupName => {
      const section = document.createElement('section');
      section.className = 'profile-group';
      const heading = document.createElement('h3'); heading.textContent = groupName;
      const dl = document.createElement('dl');
      metrics.filter(m => m.group === groupName).forEach(m => {
        const row = document.createElement('div'); row.className = 'metric-row' + (m.key === metric.key ? ' active' : '');
        const dt = document.createElement('dt'); dt.textContent = m.shortLabel || m.label;
        const dd = document.createElement('dd'); dd.textContent = format(selected.values[m.key],m);
        row.append(dt,dd); dl.append(row);
      });
      section.append(heading,dl); groups.append(section);
    });
    document.querySelectorAll('.small-states button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.state === selected.id)));
    document.querySelectorAll('.data-table tbody tr').forEach(row => row.setAttribute('aria-selected', String(row.dataset.state === selected.id)));
    document.querySelectorAll('.data-table td').forEach(cell => cell.classList.toggle('highlight',cell.dataset.metric === metric.key));
    document.getElementById('selection-status').textContent = `${selected.name}. ${metric.label}: ${format(selected.values[metric.key],metric)}. Ficha actualizada.`;
    document.getElementById('source-discrepancy').hidden = !selected.sourceNote;
    document.getElementById('source-discrepancy-text').textContent = selected.sourceNote || '';
    tooltip.hidden = true;
    if (writeURL) updateURL();
  }
  function chooseState(id, origin) {
    const next = states.find(s => s.id === id);
    if (!next) return;
    selected = next; update(); track('consumer_state_select',{selection_origin:origin});
  }
  function showTooltip(path, clientX, clientY) {
    const state = states.find(s => s.id === path.dataset.state);
    tooltip.querySelector('strong').textContent = state.name;
    tooltip.querySelector('span').textContent = format(state.values[metric.key],metric);
    tooltip.hidden = false;
    const rect = frame.getBoundingClientRect();
    const p = path.getBoundingClientRect();
    const x = clientX ?? p.x+p.width/2, y = clientY ?? p.y+p.height/2;
    tooltip.style.left = `${Math.max(8,Math.min(rect.width-tooltip.offsetWidth-8,x-rect.x+12))}px`;
    tooltip.style.top = `${Math.max(8,Math.min(rect.height-tooltip.offsetHeight-8,y-rect.y-tooltip.offsetHeight-10))}px`;
  }
  paths.forEach(path => {
    path.addEventListener('click', () => chooseState(path.dataset.state,'map'));
    path.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); chooseState(path.dataset.state,'keyboard');}
      if (e.key === 'Escape') tooltip.hidden = true;
    });
    path.addEventListener('pointermove', e => {if(e.pointerType !== 'touch') showTooltip(path,e.clientX,e.clientY);});
    path.addEventListener('pointerleave', () => {tooltip.hidden = true;});
    path.addEventListener('focus', () => showTooltip(path));
    path.addEventListener('blur', () => {tooltip.hidden = true;});
  });
  document.querySelectorAll('[data-state-button]').forEach(button => button.addEventListener('click', () => {
    chooseState(button.dataset.state,button.closest('table')?'table':'small_state');
    if(button.closest('table')) {document.getElementById('state-select').focus(); document.getElementById('explorar').scrollIntoView({block:'start'});}
  }));
  stateSelect.addEventListener('change', () => chooseState(stateSelect.value,'select'));
  metricSelect.addEventListener('change', () => {metric = metrics.find(m => m.key === metricSelect.value);update();track('consumer_metric_select',{});});
  document.getElementById('show-table').addEventListener('click', () => {
    document.getElementById('datos-completos').open = true;
    document.querySelector('#datos-completos summary').focus();
    document.getElementById('datos-completos').scrollIntoView({block:'start'});
    track('consumer_table_open',{});
  });
  document.querySelectorAll('[data-source-link]').forEach(a => a.addEventListener('click', () => track('consumer_source_click',{})));
  document.querySelector('[data-diagnostic-link]').addEventListener('click', () => track('consumer_diagnostic_click',{}));
  window.addEventListener('popstate', () => {readURL(); update(false);});
  readURL(); update(false);
  stateSelect.disabled = false; metricSelect.disabled = false;
})();
