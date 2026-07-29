(() => {
  'use strict';
  const DATA = window.DASHBOARD_DATA;
  if (!DATA || !window.Plotly) {
    document.body.innerHTML = '<main style="padding:40px;font-family:sans-serif"><h1>No se pudo cargar el dashboard.</h1><p>Verifica que las carpetas <b>assets</b> y <b>data</b> se hayan subido junto con index.html.</p></main>';
    return;
  }

  const COLORS = {
    green: '#006b3c', green2: '#13845c', green3: '#8bc9ac', pale: '#dff2e9',
    red: '#c41230', red2: '#e26779', ink: '#17221e', muted: '#65716b',
    gray: '#b5c0ba', gray2: '#e5ebe7', gold: '#dba72c', blue: '#4a7ea8'
  };
  const PLOT_CONFIG = {responsive:true, displaylogo:false, modeBarButtonsToRemove:['lasso2d','select2d','autoScale2d']};
  const BASE_LAYOUT = {
    paper_bgcolor:'rgba(0,0,0,0)', plot_bgcolor:'rgba(0,0,0,0)',
    font:{family:'Inter, system-ui, sans-serif', color:COLORS.ink, size:12},
    margin:{l:58,r:28,t:18,b:54}, hoverlabel:{bgcolor:'#fff',bordercolor:'#dfe7e2',font:{color:COLORS.ink}},
    legend:{orientation:'h', y:1.12, x:0, font:{size:11}},
    xaxis:{gridcolor:'#edf1ef',zerolinecolor:'#dfe7e2',tickfont:{size:11},automargin:true},
    yaxis:{gridcolor:'#edf1ef',zerolinecolor:'#dfe7e2',tickfont:{size:11},automargin:true}
  };

  const els = Object.fromEntries([
    'phaseFilter','startDate','endDate','zoneFilter','storeFilter','departmentFilter','mediaScopeFilter','contentScopeFilter','granularityFilter',
    'resetBtn','exportBtn','printBtn','filterFootnote','overviewKpis','executiveInsights','salesKpis','salesTable','metaKpis','metaTable',
    'organicKpis','topContentGrid','categoryMovement','offlineKpis','activationKpis','cityScorecards','actionGrid','methodologyContent','metaScopeBadge','contentScopeBadge','loadingOverlay'
  ].map(id => [id, document.getElementById(id)]));

  const state = {
    phase:'full', start:'2026-06-01', end:'2026-07-19', zone:'All', store:'All', department:'All',
    mediaScope:'mundial', contentScope:'owned', granularity:'week'
  };

  // ---------- Utilities ----------
  const num = v => Number(v || 0);
  const sum = (arr, key) => arr.reduce((a,r)=>a+num(typeof key === 'function' ? key(r) : r[key]),0);
  const safeDiv = (a,b) => b ? a/b : 0;
  const money = v => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(v || 0);
  const money2 = v => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2}).format(v || 0);
  const integer = v => new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(v || 0);
  const decimal = (v,d=1) => new Intl.NumberFormat('en-US',{minimumFractionDigits:d,maximumFractionDigits:d}).format(v || 0);
  const pct = (v,d=1) => `${decimal((v || 0)*100,d)}%`;
  const pctRaw = (v,d=2) => `${decimal(v || 0,d)}%`;
  const iso = d => d.toISOString().slice(0,10);
  const chartDate = s => `${s}T12:00:00`; // Prevent browser timezone from shifting labels to the prior day.
  const parseDate = s => new Date(`${s}T00:00:00Z`);
  const addDays = (s,n) => {const d=parseDate(s);d.setUTCDate(d.getUTCDate()+n);return iso(d)};
  const shiftYear = (s,n) => {const d=parseDate(s);d.setUTCFullYear(d.getUTCFullYear()+n);return iso(d)};
  const between = (d,a,b) => d >= a && d <= b;
  const clampStart = s => s < '2026-06-01' ? '2026-06-01' : s;
  const clampEnd = s => s > '2026-07-19' ? '2026-07-19' : s;
  const escapeHtml = s => String(s ?? '').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const truncate = (s,n=115) => String(s || '').length > n ? `${String(s).slice(0,n-1)}…` : String(s || '');
  const median = values => {const a=values.filter(Number.isFinite).sort((x,y)=>x-y); if(!a.length)return 0; const m=Math.floor(a.length/2); return a.length%2?a[m]:(a[m-1]+a[m])/2};
  const groupBy = (arr, keyFn) => arr.reduce((m,r)=>{const k=keyFn(r);(m[k] ||= []).push(r);return m},{});
  const layout = extra => Object.assign({}, BASE_LAYOUT, extra || {}, {
    xaxis:Object.assign({},BASE_LAYOUT.xaxis,(extra||{}).xaxis||{}),
    yaxis:Object.assign({},BASE_LAYOUT.yaxis,(extra||{}).yaxis||{})
  });
  const plot = (id,traces,l) => Plotly.react(id,traces,layout(l),PLOT_CONFIG);
  const badge = (text, cls='') => `<span class="${cls}">${escapeHtml(text)}</span>`;
  const phaseLabel = () => state.phase==='prelaunch'?'Pre-launch':state.phase==='live'?'Campaña live':state.phase==='full'?'Campaña completa':'Periodo personalizado';
  const mediaLabel = () => state.mediaScope==='mundial'?'Campaña Mundial':'Toda la actividad';
  const selectedWindowText = () => `${formatShortDate(state.start)} – ${formatShortDate(state.end)}`;
  function formatShortDate(s){return parseDate(s).toLocaleDateString('es-MX',{day:'numeric',month:'short',timeZone:'UTC'})}
  function setText(id, text){const e=document.getElementById(id); if(e)e.textContent=text}

  function bucketKey(dateString, alignYear=2026){
    let d=parseDate(dateString);
    if(d.getUTCFullYear()!==alignYear)d.setUTCFullYear(alignYear);
    if(state.granularity==='day') return iso(d);
    const start=parseDate(state.start);
    const diff=Math.floor((d-start)/86400000);
    const idx=Math.floor(diff/7);
    return addDays(state.start,idx*7);
  }
  function sortDates(keys){return [...keys].sort((a,b)=>a.localeCompare(b))}
  function aggregatePeriod(rows, valueFn, alignYear=2026){
    const out={}; rows.forEach(r=>{const k=bucketKey(r.date,alignYear);out[k]=(out[k]||0)+num(valueFn(r))}); return out;
  }

  // ---------- Filters ----------
  function initFilters(){
    const stores = DATA.metadata.stores;
    els.departmentFilter.innerHTML = '<option value="All">Todos</option>' + DATA.metadata.departments.map(d=>`<option>${escapeHtml(d)}</option>`).join('');
    updateStoreOptions();
    ['phaseFilter','startDate','endDate','zoneFilter','storeFilter','departmentFilter','mediaScopeFilter','contentScopeFilter','granularityFilter'].forEach(id=>{
      els[id].addEventListener('change', onFilterChange);
    });
    els.resetBtn.addEventListener('click', resetFilters);
    els.exportBtn.addEventListener('click', exportSummary);
    els.printBtn.addEventListener('click', ()=>window.print());
  }
  function updateStoreOptions(){
    const current=state.store;
    const options=DATA.metadata.stores.filter(s=>state.zone==='All'||s.city===state.zone);
    els.storeFilter.innerHTML='<option value="All">Todas</option>'+options.map(s=>`<option value="${escapeHtml(s.store)}">${escapeHtml(s.store)}</option>`).join('');
    if(options.some(s=>s.store===current)){els.storeFilter.value=current}else{state.store='All';els.storeFilter.value='All'}
  }
  function onFilterChange(e){
    const id=e.target.id;
    if(id==='phaseFilter'){
      state.phase=e.target.value;
      if(state.phase==='full'){state.start='2026-06-01';state.end='2026-07-19'}
      if(state.phase==='prelaunch'){state.start='2026-06-01';state.end='2026-06-10'}
      if(state.phase==='live'){state.start='2026-06-11';state.end='2026-07-19'}
      els.startDate.value=state.start;els.endDate.value=state.end;
    } else if(id==='startDate' || id==='endDate'){
      state.start=clampStart(els.startDate.value);state.end=clampEnd(els.endDate.value);
      if(state.start>state.end){if(id==='startDate')state.end=state.start;else state.start=state.end}
      els.startDate.value=state.start;els.endDate.value=state.end;state.phase='custom';els.phaseFilter.value='custom';
    } else if(id==='zoneFilter'){
      state.zone=e.target.value; updateStoreOptions();
    } else if(id==='storeFilter') state.store=e.target.value;
    else if(id==='departmentFilter') state.department=e.target.value;
    else if(id==='mediaScopeFilter') state.mediaScope=e.target.value;
    else if(id==='contentScopeFilter') state.contentScope=e.target.value;
    else if(id==='granularityFilter') state.granularity=e.target.value;
    renderAll();
  }
  function resetFilters(){
    Object.assign(state,{phase:'full',start:'2026-06-01',end:'2026-07-19',zone:'All',store:'All',department:'All',mediaScope:'mundial',contentScope:'owned',granularity:'week'});
    els.phaseFilter.value='full';els.startDate.value=state.start;els.endDate.value=state.end;els.zoneFilter.value='All';els.departmentFilter.value='All';els.mediaScopeFilter.value='mundial';els.contentScopeFilter.value='owned';els.granularityFilter.value='week';
    updateStoreOptions();renderAll();
  }

  // ---------- Data selectors ----------
  function salesRows(year=2026, comparableOnly=false){
    let start=state.start,end=state.end;
    if(year===2025){start=shiftYear(start,-1);end=shiftYear(end,-1)}
    return DATA.sales_daily.filter(r=>r.year===year && between(r.date,start,end)
      && (!comparableOnly || r.comparability==='COMPARABLES')
      && (state.zone==='All'||r.city===state.zone)
      && (state.store==='All'||r.store===state.store)
      && (state.department==='All'||r.department===state.department));
  }
  function comparisonSalesRows(year){
    return salesRows(year,true);
  }
  function salesComparisonSummary(){
    const current=comparisonSalesRows(2026),previous=comparisonSalesRows(2025);
    const currentByDept=groupBy(current,r=>r.department),previousByDept=groupBy(previous,r=>r.department);
    const departments=[...new Set([...Object.keys(currentByDept),...Object.keys(previousByDept)])];
    const commonDepartments=departments.filter(d=>sum(currentByDept[d]||[],'sales_usd')!==0 && sum(previousByDept[d]||[],'sales_usd')!==0);
    const newDepartments=departments.filter(d=>sum(currentByDept[d]||[],'sales_usd')>0 && sum(previousByDept[d]||[],'sales_usd')===0);
    const currentLfl=current.filter(r=>commonDepartments.includes(r.department));
    const previousLfl=previous.filter(r=>commonDepartments.includes(r.department));
    const currentTotal=sum(current,'sales_usd'),previousTotal=sum(previous,'sales_usd');
    const currentLflTotal=sum(currentLfl,'sales_usd'),previousLflTotal=sum(previousLfl,'sales_usd');
    return {
      current,previous,currentLfl,previousLfl,commonDepartments,newDepartments,
      currentTotal,previousTotal,delta:currentTotal-previousTotal,growth:previousTotal?safeDiv(currentTotal,previousTotal)-1:null,
      currentLflTotal,previousLflTotal,lflDelta:currentLflTotal-previousLflTotal,lflGrowth:previousLflTotal?safeDiv(currentLflTotal,previousLflTotal)-1:null
    };
  }
  function metaRows(){
    return DATA.meta_daily.filter(r=>between(r.date,state.start,state.end) && (state.mediaScope==='all'||r.is_mundial_campaign===true));
  }
  function organicRows(){
    return DATA.organic.filter(r=>between(r.date,state.start,state.end)
      && (state.mediaScope==='all'||r.is_mundial_campaign===true)
      && (state.contentScope==='all'||r.owned_flag===true));
  }
  function contentMetrics(rows){
    const organicEng=sum(rows,'organic_engagements'),totalEng=sum(rows,'total_engagements');
    return {
      records:rows.length,placements:sum(rows,'estimated_placements'),
      totalViews:sum(rows,'views'),organicViews:sum(rows,'views_organic'),boostedViews:sum(rows,'views_from_ads'),
      totalReach:sum(rows,'reach'),organicReach:sum(rows,'reach_organic'),boostedReach:sum(rows,'reach_from_ads'),
      totalEngagements:totalEng,organicEngagements:organicEng,boostedEngagements:totalEng-organicEng,
      totalEr:safeDiv(totalEng,sum(rows,'reach')),organicEr:safeDiv(organicEng,sum(rows,'reach_organic'))
    };
  }
  function filteredPrizes(){return DATA.prizes.filter(r=>(state.zone==='All'||r.city===state.zone)&&(state.store==='All'||r.store===state.store))}
  function filteredPassports(){return DATA.passports.filter(r=>(state.zone==='All'||r.city===state.zone)&&(state.store==='All'||r.store===state.store))}
  function filteredFutbolito(){return DATA.futbolito.filter(r=>(state.zone==='All'||r.city===state.zone)&&(state.store==='All'||r.store===state.store))}
  function offlineTotals(){
    const city=state.zone==='All'?'All':state.zone;
    return DATA.offline_summary.filter(r=>r.period==='Total'&&r.city===city);
  }
  function outletRows(){return DATA.offline_outlets.filter(r=>state.zone==='All'||r.city===state.zone)}

  // ---------- KPI components ----------
  function kpiCard(label,value,sub,delta=null,accent=''){
    const d=delta===null?'':`<div class="kpi-delta ${delta<0?'negative':''}">${delta>=0?'+':''}${decimal(delta*100,1)}% YoY</div>`;
    return `<article class="kpi-card ${accent}"><div class="kpi-label">${escapeHtml(label)}</div><div><div class="kpi-value">${escapeHtml(value)}</div>${d}<div class="kpi-sub">${escapeHtml(sub||'')}</div></div></article>`;
  }
  function miniCards(container,cards){container.innerHTML=cards.map(c=>kpiCard(c[0],c[1],c[2],c[3]??null,c[4]||'')).join('')}

  function renderOverview(){
    const s26=salesRows(2026,false),comp=salesComparisonSummary(),meta=metaRows(),org=organicRows(),off=offlineTotals();
    const content=contentMetrics(org),sales=sum(s26,'sales_usd'),metaSpend=sum(meta,'spend'),offlineSpend=sum(off,'investment'),totalInvestment=metaSpend+offlineSpend,spots=sum(off,'spots');
    const prizes=sum(filteredPrizes(),'total_prizes'),interactions=sum(filteredFutbolito(),'interactions'),passports=sum(filteredPassports(),'passports_in_urn');
    els.overviewKpis.innerHTML=[
      kpiCard('Tracked Category Sales',money(sales),`${selectedWindowText()} · 7 departamentos`),
      kpiCard('Portfolio Sales Growth',comp.growth===null?'N/A':pct(comp.growth),comp.newDepartments.length?`Incluye ${comp.newDepartments.join(', ')} sin baseline`:'Mismo universo de categorías',null,comp.growth!==null&&comp.growth<0?'red':''),
      kpiCard('Like-for-like Growth',comp.lflGrowth===null?'N/A':pct(comp.lflGrowth),`${comp.commonDepartments.length} departamentos con baseline`,null,comp.lflGrowth!==null&&comp.lflGrowth<0?'red':''),
      kpiCard('Incremental Tracked Sales',comp.growth===null?'N/A':money(comp.delta),'Tiendas comparables · incl. nuevas categorías',null,comp.delta<0?'red':'gold'),
      kpiCard('Media Investment',money2(totalInvestment),`Online ${money2(metaSpend)} + Offline ${money2(offlineSpend)} (report total)`),
      kpiCard('Content Reach — Total',integer(content.totalReach),`Organic ${integer(content.organicReach)} + Boost ${integer(content.boostedReach)}`),
      kpiCard('Offline Spots',integer(spots),state.zone==='All'?'TV + radio · OKC + Tulsa':`TV + radio · ${state.zone}`),
      kpiCard('Premios entregados',integer(prizes),`${integer(interactions)} interacciones · ${integer(passports)} pasaportes`,null,'gold')
    ].join('');

    const stores=storeComparison();
    const comparable=stores.filter(x=>x.lflGrowth!==null);
    const best=[...comparable].sort((a,b)=>b.lflGrowth-a.lflGrowth)[0];
    const deptRows=departmentComparison();
    const rising=deptRows.filter(r=>r.status==='Comparable'&&r.delta>0).sort((a,b)=>b.delta-a.delta);
    const falling=deptRows.filter(r=>r.status==='Comparable'&&r.delta<0).sort((a,b)=>a.delta-b.delta);
    const newDept=deptRows.filter(r=>r.status==='No baseline').sort((a,b)=>b.current-a.current)[0];
    const insights=[
      {tag:'RESULTADO VALIDADO',title:comp.lflGrowth===null?'Sin baseline comparable':`${comp.lflGrowth>=0?'+':''}${decimal(comp.lflGrowth*100,1)}% like-for-like`,text:`El portfolio completo marca ${comp.growth===null?'N/A':pct(comp.growth)}; el LFL excluye categorías sin baseline 2025.`,cls:comp.lflGrowth!==null&&comp.lflGrowth<0?'alerting':''},
      {tag:'TIENDA CON MAYOR VELOCIDAD LFL',title:best?`${best.store}: ${best.lflGrowth>=0?'+':''}${decimal(best.lflGrowth*100,1)}%`:'Sin baseline',text:best?`${money(best.lflDelta)} de cambio comparable, excluyendo categorías nuevas.`:'La ventana elegida no permite comparar.',cls:''},
      {tag:'MOVIMIENTO POR CATEGORÍA',title:rising.length?`${rising[0].department} lidera el crecimiento`:'Sin categorías al alza',text:`Suben: ${rising.map(r=>r.department).join(', ')||'ninguna'}. Bajan: ${falling.map(r=>r.department).join(', ')||'ninguna'}.`,cls:falling.length?'warning':''},
      {tag:'INVERSIÓN Y NUEVO SURTIDO',title:`${money2(totalInvestment)} en medios`,text:newDept?`${newDept.department} aportó ${money(newDept.current)} sin baseline 2025; se reporta separado del LFL.`:`Online ${money2(metaSpend)} y offline ${money2(offlineSpend)}.`,cls:'warning'}
    ];
    els.executiveInsights.innerHTML=insights.map(i=>`<article class="insight-card ${i.cls}"><span>${i.tag}</span><h3>${escapeHtml(i.title)}</h3><p>${escapeHtml(i.text)}</p></article>`).join('');
    els.filterFootnote.textContent=`${phaseLabel()} · ${selectedWindowText()} · ${state.zone==='All'?'OKC + Tulsa':state.zone} · ${state.store==='All'?'Todas las tiendas':state.store}. Meta y Organic: ${mediaLabel()}.` + (state.zone!=='All'?' La pauta Meta permanece mayoritariamente broad y no se reasigna artificialmente por ciudad.':'');
  }

  // ---------- Sales ----------
  function storeComparison(){
    const comp=salesComparisonSummary(),allCurrent=salesRows(2026,false);
    const current=groupBy(allCurrent,r=>`${r.city}|${r.store}`),previous=groupBy(comp.previous,r=>`${r.city}|${r.store}`);
    const currentLfl=groupBy(allCurrent.filter(r=>comp.commonDepartments.includes(r.department)),r=>`${r.city}|${r.store}`),previousLfl=groupBy(comp.previousLfl,r=>`${r.city}|${r.store}`);
    const keys=new Set([...Object.keys(current),...Object.keys(previous)]);
    return [...keys].map(k=>{
      const [city,store]=k.split('|'),currentRows=current[k]||[],previousRows=previous[k]||[];
      const currentTotal=sum(currentRows,'sales_usd'),prevTotal=sum(previousRows,'sales_usd'),lflCurrent=sum(currentLfl[k]||[],'sales_usd'),lflPrev=sum(previousLfl[k]||[],'sales_usd');
      const comparable=currentRows.some(r=>r.comparability==='COMPARABLES') && lflPrev!==0;
      return {city,store,current:currentTotal,prev:prevTotal,delta:currentTotal-prevTotal,growth:prevTotal?safeDiv(currentTotal,prevTotal)-1:null,
        lflCurrent,lflPrev,lflDelta:lflCurrent-lflPrev,lflGrowth:comparable?safeDiv(lflCurrent,lflPrev)-1:null,units:sum(currentRows,'units'),comparable};
    });
  }
  function departmentComparison(){
    const comp=salesComparisonSummary(),a=groupBy(comp.current,r=>r.department),b=groupBy(comp.previous,r=>r.department);
    return [...new Set([...Object.keys(a),...Object.keys(b)])].map(department=>{
      const current=sum(a[department]||[],'sales_usd'),prev=sum(b[department]||[],'sales_usd');
      return {department,current,prev,delta:current-prev,growth:prev?safeDiv(current,prev)-1:null,status:prev?'Comparable':'No baseline'};
    });
  }
  function zoneComparison(){
    const comp=salesComparisonSummary(),a=groupBy(comp.current,r=>r.city),b=groupBy(comp.previous,r=>r.city),al=groupBy(comp.currentLfl,r=>r.city),bl=groupBy(comp.previousLfl,r=>r.city);
    return ['OKC','Tulsa'].filter(z=>state.zone==='All'||z===state.zone).map(city=>{
      const current=sum(a[city]||[],'sales_usd'),prev=sum(b[city]||[],'sales_usd'),lflCurrent=sum(al[city]||[],'sales_usd'),lflPrev=sum(bl[city]||[],'sales_usd');
      return {city,current,prev,growth:prev?safeDiv(current,prev)-1:null,lflCurrent,lflPrev,lflGrowth:lflPrev?safeDiv(lflCurrent,lflPrev)-1:null};
    });
  }
  function renderSales(){
    const all=salesRows(2026,false),comp=salesComparisonSummary(),stores=storeComparison();
    const sales=sum(all,'sales_usd'),units=sum(all,'units'),growing=stores.filter(s=>s.lflGrowth!==null&&s.lflGrowth>0).length,totalComp=stores.filter(s=>s.lflGrowth!==null).length;
    const avgDaily=safeDiv(sales,new Set(all.map(r=>r.date)).size),newDeptSales=departmentComparison().filter(r=>r.status==='No baseline').reduce((a,r)=>a+r.current,0);
    miniCards(els.salesKpis,[
      ['Tracked Sales',money(sales),selectedWindowText()],['Portfolio YoY',comp.growth===null?'N/A':pct(comp.growth),'Incluye categorías nuevas',comp.growth],['Incremental Sales',comp.growth===null?'N/A':money(comp.delta),'Tiendas comparables'],
      ['Like-for-like YoY',comp.lflGrowth===null?'N/A':pct(comp.lflGrowth),'Solo categorías con baseline',comp.lflGrowth],['New-category Sales',money(newDeptSales),comp.newDepartments.join(', ')||'Sin categorías nuevas'],['Growing Stores LFL',`${growing}/${totalComp}`,'Tiendas comparables']
    ]);
    renderCategoryMovement();renderSalesTrend();renderZoneSales();renderStoreGrowth();renderStoreMatrix();renderDepartment();renderSalesTable(stores);
  }
  function renderCategoryMovement(){
    const rows=departmentComparison(),up=rows.filter(r=>r.status==='Comparable'&&r.delta>0).sort((a,b)=>b.delta-a.delta),down=rows.filter(r=>r.status==='Comparable'&&r.delta<0).sort((a,b)=>a.delta-b.delta),newRows=rows.filter(r=>r.status==='No baseline').sort((a,b)=>b.current-a.current);
    els.categoryMovement.innerHTML=[
      `<article class="movement-card up"><span>CATEGORÍAS AL ALZA</span><strong>${up.map(r=>r.department).join(' · ')||'Ninguna'}</strong><p>${up.map(r=>`${r.department} ${money(r.delta)}`).join(' · ')||'Sin incremento comparable.'}</p></article>`,
      `<article class="movement-card down"><span>CATEGORÍAS A LA BAJA</span><strong>${down.map(r=>r.department).join(' · ')||'Ninguna'}</strong><p>${down.map(r=>`${r.department} ${money(r.delta)}`).join(' · ')||'Sin contracción comparable.'}</p></article>`,
      `<article class="movement-card new"><span>NUEVA / SIN BASELINE</span><strong>${newRows.map(r=>r.department).join(' · ')||'Ninguna'}</strong><p>${newRows.map(r=>`${r.department} ${money(r.current)} en 2026`).join(' · ')||'Todas las categorías tienen baseline.'}</p></article>`
    ].join('');
  }
  function renderSalesTrend(){
    const r26=comparisonSalesRows(2026),r25=comparisonSalesRows(2025);
    const a=aggregatePeriod(r26,r=>r.sales_usd,2026),b=aggregatePeriod(r25,r=>r.sales_usd,2026),x=sortDates(new Set([...Object.keys(a),...Object.keys(b)]));
    plot('salesTrendChart',[
      {type:'scatter',mode:'lines+markers',name:'2026 comparable',x:x.map(chartDate),y:x.map(k=>a[k]||null),line:{color:COLORS.green,width:3},marker:{size:7},hovertemplate:'%{x}<br>2026: $%{y:,.0f}<extra></extra>'},
      {type:'scatter',mode:'lines+markers',name:'2025 same dates',x:x.map(chartDate),y:x.map(k=>b[k]||null),line:{color:COLORS.gray,width:2,dash:'dot'},marker:{size:6},hovertemplate:'%{x}<br>2025: $%{y:,.0f}<extra></extra>'}
    ],{yaxis:{tickprefix:'$',tickformat:',.0f'},xaxis:{type:'date',tick0:chartDate(state.start),dtick:state.granularity==='week'?604800000:86400000},hovermode:'x unified'});
  }
  function renderZoneSales(){
    const rows=zoneComparison();
    plot('zoneSalesChart',[
      {type:'bar',name:'2025',x:rows.map(r=>r.city),y:rows.map(r=>r.prev),marker:{color:COLORS.gray}},
      {type:'bar',name:'2026',x:rows.map(r=>r.city),y:rows.map(r=>r.current),marker:{color:COLORS.green},text:rows.map(r=>r.growth===null?'N/A':`${pct(r.growth)} portfolio · ${pct(r.lflGrowth)} LFL`),textposition:'outside',cliponaxis:false}
    ],{barmode:'group',yaxis:{tickprefix:'$',tickformat:'~s'},margin:{l:55,r:18,t:25,b:45}});
  }
  function renderStoreGrowth(){
    const rows=storeComparison().filter(r=>r.lflGrowth!==null).sort((a,b)=>a.lflDelta-b.lflDelta);
    plot('storeGrowthChart',[{type:'bar',orientation:'h',x:rows.map(r=>r.lflDelta),y:rows.map(r=>r.store),marker:{color:rows.map(r=>r.lflDelta>=0?COLORS.green:COLORS.red)},text:rows.map(r=>money(r.lflDelta)),textposition:'auto',hovertemplate:'%{y}<br>LFL change: $%{x:,.0f}<extra></extra>'}],{showlegend:false,xaxis:{tickprefix:'$',tickformat:'~s',zeroline:true,zerolinecolor:'#7d8983'},margin:{l:105,r:24,t:12,b:45}});
  }
  function renderStoreMatrix(){
    const rows=storeComparison(),comp=rows.filter(r=>r.lflGrowth!==null),noBase=rows.filter(r=>r.lflGrowth===null);
    const traces=['OKC','Tulsa'].map(city=>{const rr=comp.filter(r=>r.city===city);return {type:'scatter',mode:'markers+text',name:city,x:rr.map(r=>r.lflGrowth*100),y:rr.map(r=>r.current),text:rr.map(r=>r.store),textposition:'top center',marker:{size:rr.map(r=>Math.max(12,Math.sqrt(r.units)/4)),color:city==='OKC'?COLORS.green:COLORS.gold,opacity:.8,line:{color:'#fff',width:1}},hovertemplate:'%{text}<br>LFL YoY: %{x:.1f}%<br>Tracked sales: $%{y:,.0f}<extra></extra>'}});
    if(noBase.length)traces.push({type:'scatter',mode:'markers+text',name:'Sin baseline',x:noBase.map(()=>0),y:noBase.map(r=>r.current),text:noBase.map(r=>r.store),textposition:'top center',marker:{size:18,color:COLORS.gray,symbol:'diamond'},hovertemplate:'%{text}<br>Sin baseline<br>Sales: $%{y:,.0f}<extra></extra>'});
    plot('storeMatrixChart',traces,{xaxis:{title:'Like-for-like Sales Growth YoY',ticksuffix:'%',zeroline:true,zerolinecolor:COLORS.red},yaxis:{title:'Tracked Sales 2026',tickprefix:'$',tickformat:'~s'},margin:{l:62,r:18,t:26,b:58},shapes:[{type:'line',x0:0,x1:0,y0:0,y1:1,yref:'paper',line:{color:COLORS.red,width:1,dash:'dot'}}]});
  }
  function renderDepartment(){
    const rows=departmentComparison().sort((a,b)=>a.delta-b.delta);
    plot('departmentChart',[{type:'bar',orientation:'h',x:rows.map(r=>r.status==='No baseline'?r.current:r.delta),y:rows.map(r=>r.department),marker:{color:rows.map(r=>r.status==='No baseline'?COLORS.gold:r.delta<0?COLORS.red:COLORS.green)},text:rows.map(r=>r.status==='No baseline'?`${money(r.current)} · no baseline`:`${money(r.delta)} · ${pct(r.growth)}`),textposition:'auto',insidetextanchor:'middle',cliponaxis:false,customdata:rows.map(r=>[r.current,r.prev,r.status]),hovertemplate:'%{y}<br>Displayed change: $%{x:,.0f}<br>2026: $%{customdata[0]:,.0f}<br>2025: $%{customdata[1]:,.0f}<br>%{customdata[2]}<extra></extra>'}],{showlegend:false,xaxis:{title:'Cambio vs. 2025 · categorías nuevas muestran ventas 2026',tickprefix:'$',tickformat:'~s',zeroline:true,zerolinecolor:'#7d8983'},margin:{l:100,r:130,t:15,b:55}});
  }
  function renderSalesTable(rows){
    const sorted=[...rows].sort((a,b)=>b.current-a.current);
    els.salesTable.innerHTML=`<thead><tr><th>Zona</th><th>Tienda</th><th class="num">Sales 2025</th><th class="num">Sales 2026</th><th class="num">Portfolio Delta</th><th class="num">Portfolio YoY</th><th class="num">LFL Delta</th><th class="num">LFL YoY</th><th>Status</th></tr></thead><tbody>`+sorted.map(r=>`<tr><td>${r.city}</td><td><b>${escapeHtml(r.store)}</b></td><td class="num">${r.prev?money(r.prev):'—'}</td><td class="num">${money(r.current)}</td><td class="num ${r.delta<0?'negative':'positive'}">${r.prev?money(r.delta):'—'}</td><td class="num ${r.growth===null?'neutral':r.growth<0?'negative':'positive'}">${r.growth===null?'N/A':pct(r.growth)}</td><td class="num ${r.lflDelta<0?'negative':'positive'}">${r.lflGrowth===null?'—':money(r.lflDelta)}</td><td class="num ${r.lflGrowth===null?'neutral':r.lflGrowth<0?'negative':'positive'}">${r.lflGrowth===null?'N/A':pct(r.lflGrowth)}</td><td>${r.lflGrowth===null?'No comparable':r.lflGrowth>=.15?'Scale':r.lflGrowth>=0?'Maintain':'Recovery priority'}</td></tr>`).join('')+'</tbody>';
  }

  // ---------- Meta ----------
  function aggregateMetaCampaigns(rows){
    const groups=groupBy(rows,r=>r.campaign||'Sin campaña');
    return Object.entries(groups).map(([campaign,rr])=>{const spend=sum(rr,'spend'),impressions=sum(rr,'impressions'),reach=sum(rr,'reach'),link=sum(rr,'link_clicks'),all=sum(rr,'all_clicks'),results=sum(rr,'results');return {campaign,spend,impressions,reach,link,all,results,cpm:safeDiv(spend,impressions)*1000,ctr:safeDiv(link,impressions)*100,cpc:safeDiv(spend,link)}})
  }
  function metaObjectiveLabel(indicator){
    const v=String(indicator||'').toLowerCase();
    if(v.includes('reach'))return 'Awareness / Reach';
    if(v.includes('post_engagement'))return 'Engagement';
    if(v.includes('profile_visit'))return 'Profile Growth';
    if(v.includes('link_click')||v.includes('page_visit'))return 'Traffic / Visits';
    if(v.includes('conversion'))return 'Conversion Signal';
    return 'Other';
  }
  function aggregateMetaObjectives(rows){
    const groups=groupBy(rows,r=>metaObjectiveLabel(r.result_indicator));
    return Object.entries(groups).map(([objective,rr])=>({objective,spend:sum(rr,'spend'),impressions:sum(rr,'impressions'),results:sum(rr,'results'),linkClicks:sum(rr,'link_clicks')})).filter(r=>r.spend>=1).sort((a,b)=>a.spend-b.spend);
  }
  function renderMeta(){
    const rows=metaRows(),spend=sum(rows,'spend'),impr=sum(rows,'impressions'),link=sum(rows,'link_clicks'),all=sum(rows,'all_clicks');
    miniCards(els.metaKpis,[['Online Spend',money2(spend),mediaLabel()],['Impressions',integer(impr),'Entrega pagada'],['Link Clicks',integer(link),'Clicks al destino'],['Weighted CPM',money2(safeDiv(spend,impr)*1000),'Costo por mil'],['Link CTR',pctRaw(safeDiv(link,impr)*100,2),'Clicks / impresiones'],['Link CPC',money2(safeDiv(spend,link)),'Spend / link clicks']]);
    els.metaScopeBadge.textContent=mediaLabel();
    const agg=aggregateMetaCampaigns(rows);renderMetaMix(agg);renderMetaObjectives(rows);renderMetaEfficiency(agg);renderMetaTable(agg);
  }
  function renderMetaMix(rows){
    const rr=[...rows].filter(r=>r.spend>=1).sort((a,b)=>a.spend-b.spend);
    plot('metaMixChart',[{type:'bar',orientation:'h',x:rr.map(r=>r.spend),y:rr.map(r=>truncate(r.campaign.replace(/^.*\|\s*/,''),34)),marker:{color:rr.map(r=>r.campaign.toLowerCase().includes('mundial')?COLORS.green:COLORS.green3)},text:rr.map(r=>money2(r.spend)),textposition:'outside',cliponaxis:false,hovertemplate:'%{y}<br>Spend: $%{x:,.2f}<extra></extra>'}],{showlegend:false,xaxis:{tickprefix:'$',tickformat:',.0f'},margin:{l:180,r:75,t:12,b:45}});
  }
  function renderMetaObjectives(rows){
    const rr=aggregateMetaObjectives(rows),total=sum(rr,'spend');
    plot('metaObjectiveChart',[{type:'bar',orientation:'h',x:rr.map(r=>r.spend),y:rr.map(r=>r.objective),marker:{color:rr.map((r,i)=>[COLORS.green3,COLORS.green2,COLORS.gold,COLORS.red2,COLORS.blue][i%5])},text:rr.map(r=>`${money2(r.spend)} · ${pct(safeDiv(r.spend,total))}`),textposition:'outside',cliponaxis:false,customdata:rr.map(r=>[r.impressions,r.results,r.linkClicks]),hovertemplate:'%{y}<br>Spend: $%{x:,.2f}<br>Impressions: %{customdata[0]:,.0f}<br>Reported results: %{customdata[1]:,.0f}<br>Link clicks: %{customdata[2]:,.0f}<extra></extra>'}],{showlegend:false,xaxis:{title:'Inversión por objetivo',tickprefix:'$',tickformat:'~s'},margin:{l:135,r:105,t:20,b:52}});
  }
  function renderMetaEfficiency(rows){
    const filtered=rows.filter(r=>r.spend>=25&&r.impressions>=1000);
    plot('metaEfficiencyChart',[{type:'scatter',mode:'markers+text',x:filtered.map(r=>r.cpm),y:filtered.map(r=>r.ctr),text:filtered.map(r=>truncate(r.campaign.replace(/^.*\|\s*/,''),24)),textposition:'top center',marker:{size:filtered.map(r=>Math.max(13,Math.sqrt(r.spend)*1.4)),color:filtered.map(r=>r.campaign.toLowerCase().includes('mundial')?COLORS.green:COLORS.gold),opacity:.78,line:{color:'#fff',width:1}},hovertemplate:'%{text}<br>CPM: $%{x:.2f}<br>Link CTR: %{y:.2f}%<extra></extra>'}],{showlegend:false,xaxis:{title:'Weighted CPM (lower is better)',tickprefix:'$'},yaxis:{title:'Link CTR',ticksuffix:'%'},margin:{l:65,r:30,t:26,b:62}});
  }
  function renderMetaTable(rows){
    const valid=rows.filter(r=>r.spend>0);const medCtr=median(valid.map(r=>r.ctr)),medCpm=median(valid.map(r=>r.cpm));
    const sorted=[...valid].sort((a,b)=>b.spend-a.spend);
    els.metaTable.innerHTML='<thead><tr><th>Campaign</th><th class="num">Spend</th><th class="num">Impressions</th><th class="num">Link Clicks</th><th class="num">CPM</th><th class="num">CTR</th><th class="num">CPC</th><th>Recommendation</th></tr></thead><tbody>'+sorted.map(r=>{
      let rec='Maintain';if(r.spend<25||r.impressions<5000)rec='Insufficient data';else if(r.ctr>=medCtr&&r.cpm<=medCpm)rec='Scale';else if(r.ctr<medCtr&&r.cpm>medCpm)rec='Optimize';
      return `<tr><td title="${escapeHtml(r.campaign)}"><b>${escapeHtml(truncate(r.campaign,62))}</b></td><td class="num">${money2(r.spend)}</td><td class="num">${integer(r.impressions)}</td><td class="num">${integer(r.link)}</td><td class="num">${money2(r.cpm)}</td><td class="num">${pctRaw(r.ctr,2)}</td><td class="num">${money2(r.cpc)}</td><td>${rec}</td></tr>`}).join('')+'</tbody>';
  }

  // ---------- Organic ----------
  function renderOrganic(){
    const rows=organicRows(),m=contentMetrics(rows);
    miniCards(els.organicKpis,[
      ['Content Records',integer(m.records),state.contentScope==='owned'?'Owned':'Owned + earned'],['Estimated Placements',integer(m.placements),'FB + IG'],
      ['Total Reach',integer(m.totalReach),`Organic ${integer(m.organicReach)} + Boost ${integer(m.boostedReach)}`],['Organic Reach',integer(m.organicReach),'Distribución no pagada'],['Boosted Reach',integer(m.boostedReach),'Amplificación identificada'],
      ['Total Views',integer(m.totalViews),`Organic ${integer(m.organicViews)} + Boost ${integer(m.boostedViews)}`],['Total Engagements',integer(m.totalEngagements),`Organic ${integer(m.organicEngagements)} + Boost ${integer(m.boostedEngagements)}`],['Total ER',pct(m.totalEr),'Total engagements / total reach']
    ]);
    els.contentScopeBadge.textContent=state.contentScope==='owned'?'Owned':'Owned + earned';
    renderOrganicStack(rows);renderFormat(rows);renderContentMatrix(rows);renderTopContent(rows);
  }
  function renderOrganicStack(rows){
    const org=aggregatePeriod(rows,r=>r.reach_organic),paid=aggregatePeriod(rows,r=>r.reach_from_ads),x=sortDates(new Set([...Object.keys(org),...Object.keys(paid)]));
    plot('organicStackChart',[
      {type:'bar',name:'Organic Reach',x:x.map(chartDate),y:x.map(k=>org[k]||0),marker:{color:COLORS.green},hovertemplate:'%{x}<br>Organic reach: %{y:,.0f}<extra></extra>'},
      {type:'bar',name:'Boosted Reach',x:x.map(chartDate),y:x.map(k=>paid[k]||0),marker:{color:COLORS.gold},hovertemplate:'%{x}<br>Boosted reach: %{y:,.0f}<extra></extra>'}
    ],{barmode:'stack',yaxis:{title:'Total content reach'},xaxis:{type:'date'},hovermode:'x unified',margin:{l:60,r:25,t:25,b:50}});
  }
  function formatAgg(rows){
    const g=groupBy(rows,r=>r.format||'Other');
    return Object.entries(g).map(([format,rr])=>{const posts=rr.length,organicReach=sum(rr,'reach_organic'),boostedReach=sum(rr,'reach_from_ads'),totalReach=sum(rr,'reach'),organicEng=sum(rr,'organic_engagements'),totalEng=sum(rr,'total_engagements'),totalViews=sum(rr,'views');return {format,posts,organicReach,boostedReach,totalReach,organicEng,totalEng,totalViews,avgOrganicReach:safeDiv(organicReach,posts),avgBoostedReach:safeDiv(boostedReach,posts),avgTotalReach:safeDiv(totalReach,posts),avgEng:safeDiv(totalEng,posts),er:safeDiv(totalEng,totalReach)*100}}).sort((a,b)=>b.avgEng-a.avgEng)
  }
  function renderFormat(rows){
    const rr=formatAgg(rows);
    plot('formatChart',[
      {type:'bar',name:'Organic avg reach',x:rr.map(r=>r.format),y:rr.map(r=>r.avgOrganicReach),marker:{color:COLORS.green}},
      {type:'bar',name:'Boost avg reach',x:rr.map(r=>r.format),y:rr.map(r=>r.avgBoostedReach),marker:{color:COLORS.gold},text:rr.map(r=>`${decimal(r.er,1)}% total ER`),textposition:'outside',cliponaxis:false}
    ],{barmode:'stack',yaxis:{title:'Average total reach / record'},margin:{l:55,r:25,t:28,b:48}});
  }
  function renderContentMatrix(rows){
    const rr=rows.filter(r=>num(r.reach)>0),formats=[...new Set(rr.map(r=>r.format))],palette=[COLORS.green,COLORS.gold,COLORS.red2,COLORS.blue];
    const traces=formats.map((f,i)=>{const x=rr.filter(r=>r.format===f);return {type:'scatter',mode:'markers',name:f,x:x.map(r=>r.reach),y:x.map(r=>safeDiv(r.total_engagements,r.reach)*100),text:x.map(r=>truncate(r.content,90)),customdata:x.map(r=>[r.views,r.total_engagements,r.date,r.reach_organic,r.reach_from_ads]),marker:{size:x.map(r=>Math.max(10,Math.sqrt(num(r.views))/3)),color:palette[i%palette.length],opacity:.72,line:{width:0}},hovertemplate:'%{text}<br>%{customdata[2]}<br>Total reach: %{x:,.0f}<br>Organic: %{customdata[3]:,.0f}<br>Boost: %{customdata[4]:,.0f}<br>Total ER: %{y:.2f}%<br>Views: %{customdata[0]:,.0f}<br>Eng: %{customdata[1]:,.0f}<extra></extra>'}});
    plot('contentMatrixChart',traces,{xaxis:{title:'Total Reach',tickformat:'~s'},yaxis:{title:'Total Engagement Rate',ticksuffix:'%'},margin:{l:58,r:22,t:28,b:58}});
  }
  function renderTopContent(rows){
    const ranked=[...rows].sort((a,b)=>(num(b.reach)+num(b.total_engagements)*15)-(num(a.reach)+num(a.total_engagements)*15)).slice(0,6);
    els.topContentGrid.innerHTML=ranked.map((r,i)=>`<article class="content-card"><div class="content-card-head"><div class="content-rank">${i+1}</div><div class="content-tags">${badge(r.format)}${r.is_mundial_campaign?badge('Mundial'):''}${r.ownership==='Partner/External'?badge('Earned'):''}</div></div><p title="${escapeHtml(r.content)}">${escapeHtml(truncate(r.content,260))}</p><div class="content-metrics"><div><small>Total Reach</small><strong>${integer(r.reach)}</strong></div><div><small>Organic</small><strong>${integer(r.reach_organic)}</strong></div><div><small>Boost</small><strong>${integer(r.reach_from_ads)}</strong></div><div><small>Total ER</small><strong>${pct(safeDiv(r.total_engagements,r.reach))}</strong></div></div></article>`).join('') || '<p>No hay contenido para los filtros seleccionados.</p>';
  }

  // ---------- Offline ----------
  function renderOffline(){
    const totals=offlineTotals(),investment=sum(totals,'investment'),spots=sum(totals,'spots'),tv=sum(totals.filter(r=>r.medium==='TV'),'spots'),radio=sum(totals.filter(r=>r.medium==='Radio'),'spots');
    const bonus=DATA.offline_placements.filter(r=>String(r.program).toLowerCase()==='bonus'&&(state.zone==='All'||r.city===state.zone)).reduce((a,r)=>a+num(r.total_spots),0);
    const outlets=new Set(outletRows().filter(r=>r.spots>0).map(r=>r.outlet)).size;
    miniCards(els.offlineKpis,[['Offline Spend',money2(investment),state.zone==='All'?'OKC + Tulsa':state.zone],['Total Spots',integer(spots),'TV + Radio'],['Cost per Spot',money2(safeDiv(investment,spots)),'Blended CPS'],['TV Spots',integer(tv),'Televisión'],['Radio Spots',integer(radio),'Radio'],['Confirmed Bonus',integer(bonus),`${outlets} outlets activos`]]);
    renderOfflineMix();renderOfflineMonth();renderOutlets();
  }
  function renderOfflineMix(){
    let rows=DATA.offline_summary.filter(r=>r.period==='Total'&&r.city!=='All');
    if(state.zone!=='All')rows=rows.filter(r=>r.city===state.zone);
    const cities=[...new Set(rows.map(r=>r.city))];
    plot('offlineMixChart',['TV','Radio'].map((m,i)=>({type:'bar',name:m,x:cities,y:cities.map(c=>sum(rows.filter(r=>r.city===c&&r.medium===m),'investment')),marker:{color:i===0?COLORS.green:COLORS.gold},text:cities.map(c=>money2(sum(rows.filter(r=>r.city===c&&r.medium===m),'investment'))),textposition:'auto'})),{barmode:'stack',yaxis:{tickprefix:'$',tickformat:'~s'},margin:{l:55,r:18,t:26,b:45}});
  }
  function renderOfflineMonth(){
    const rows=DATA.offline_summary.filter(r=>['June','July'].includes(r.period)&&r.city==='All');
    const months=['June','July'];
    const invest=months.map(m=>sum(rows.filter(r=>r.period===m),'investment')),spots=months.map(m=>sum(rows.filter(r=>r.period===m),'spots'));
    plot('offlineMonthChart',[
      {type:'bar',name:'Investment',x:months,y:invest,marker:{color:COLORS.green},text:invest.map(money2),textposition:'auto'},
      {type:'scatter',name:'Spots',mode:'lines+markers+text',x:months,y:spots,yaxis:'y2',line:{color:COLORS.red,width:3},marker:{size:8},text:spots.map(integer),textposition:'top center'}
    ],{yaxis:{title:'Investment',tickprefix:'$',tickformat:'~s'},yaxis2:{title:'Spots',overlaying:'y',side:'right',showgrid:false},margin:{l:55,r:60,t:28,b:45}});
  }
  function renderOutlets(){
    const rows=outletRows().filter(r=>r.spots>0).sort((a,b)=>a.spots-b.spots).slice(-15);
    plot('outletChart',[{type:'bar',orientation:'h',x:rows.map(r=>r.spots),y:rows.map(r=>`${r.outlet} · ${r.city}`),marker:{color:rows.map(r=>r.medium==='TV'?COLORS.green:COLORS.gold)},text:rows.map(r=>integer(r.spots)),textposition:'outside',cliponaxis:false,hovertemplate:'%{y}<br>Spots: %{x}<extra></extra>'}],{showlegend:false,xaxis:{title:'Spots'},margin:{l:190,r:60,t:15,b:45}});
  }

  // ---------- Activations ----------
  function renderActivations(){
    const prizes=filteredPrizes(),pass=filteredPassports(),fut=filteredFutbolito();
    const total=sum(prizes,'total_prizes'),balls=sum(prizes,'balls'),lunch=sum(prizes,'lunchboxes'),inUrn=sum(pass,'passports_in_urn'),alloc=sum(pass,'passports_allocated'),interactions=sum(fut,'interactions');
    const inventory = state.zone==='All'&&state.store==='All' ? DATA.metadata.prize_inventory.total : null;
    miniCards(els.activationKpis,[['Prizes Delivered',integer(total),'Balones + loncheras'],['Balls',integer(balls),'Entregados'],['Lunchboxes',integer(lunch),'Entregadas'],['Inventory Utilization',inventory?pct(safeDiv(total,inventory)):'N/A',inventory?'Vs. 6,000 total':'Inventario no asignado por filtro'],['Passports in Urn',integer(inUrn),`${integer(alloc)} asignados`],['Futbolito Interactions',integer(interactions),'MacArthur + Admiral']]);
    renderPrizes(prizes);renderPassports(pass);renderFutbolito(fut);renderQr();
  }
  function renderPrizes(rows){
    const rr=[...rows].sort((a,b)=>a.total_prizes-b.total_prizes);
    plot('prizesChart',[
      {type:'bar',orientation:'h',name:'Balones',x:rr.map(r=>r.balls),y:rr.map(r=>r.store),marker:{color:COLORS.green}},
      {type:'bar',orientation:'h',name:'Loncheras',x:rr.map(r=>r.lunchboxes),y:rr.map(r=>r.store),marker:{color:COLORS.gold}}
    ],{barmode:'stack',xaxis:{title:'Premios'},margin:{l:100,r:25,t:24,b:45}});
  }
  function renderPassports(rows){
    const rr=[...rows].sort((a,b)=>a.passports_in_urn-b.passports_in_urn);
    plot('passportsChart',[{type:'bar',orientation:'h',x:rr.map(r=>r.passports_in_urn),y:rr.map(r=>r.store),marker:{color:COLORS.green},text:rr.map(r=>integer(r.passports_in_urn)),textposition:'outside',cliponaxis:false}],{showlegend:false,xaxis:{title:'Pasaportes en urna'},margin:{l:100,r:50,t:12,b:45}});
  }
  function renderFutbolito(rows){
    plot('activationChart',[{type:'bar',x:rows.map(r=>r.store),y:rows.map(r=>r.interactions),marker:{color:rows.map(r=>r.city==='OKC'?COLORS.green:COLORS.gold)},text:rows.map(r=>integer(r.interactions)),textposition:'outside'}],{showlegend:false,yaxis:{title:'Interacciones'},margin:{l:55,r:20,t:20,b:45}});
  }
  function renderQr(){
    const rows=DATA.qr.filter(r=>r.date).sort((a,b)=>a.date.localeCompare(b.date));
    plot('qrChart',[{type:'scatter',mode:'lines+markers+text',x:rows.map(r=>chartDate(r.date)),y:rows.map(r=>r.cumulative_qr_scans),line:{color:COLORS.green,width:3},marker:{size:9,color:COLORS.green},text:rows.map(r=>integer(r.cumulative_qr_scans)),textposition:'top center',hovertemplate:'%{x}<br>Scans acumulados: %{y}<extra></extra>'}],{showlegend:false,xaxis:{type:'date'},yaxis:{title:'QR scans acumulados'},margin:{l:60,r:25,t:25,b:50}});
  }

  // ---------- Integrated ----------
  function renderIntegrated(){
    const sales=comparisonSalesRows(2026),org=organicRows();
    const s=aggregatePeriod(sales,r=>r.sales_usd),reach=aggregatePeriod(org,r=>r.reach),posts=aggregatePeriod(org,()=>1),keys=sortDates(new Set([...Object.keys(s),...Object.keys(reach),...Object.keys(posts)]));
    const firstSales=keys.map(k=>s[k]||0).find(v=>v>0)||1,salesIndex=keys.map(k=>s[k]?s[k]/firstSales*100:null),shapes=[];
    if(between('2026-06-11',state.start,state.end)) shapes.push({type:'line',x0:chartDate('2026-06-11'),x1:chartDate('2026-06-11'),y0:0,y1:1,yref:'paper',line:{color:COLORS.red,width:2,dash:'dot'}});
    plot('integratedChart',[
      {type:'scatter',mode:'lines+markers',name:'Comparable Sales Index',x:keys.map(chartDate),y:salesIndex,line:{color:COLORS.green,width:4},marker:{size:7},xaxis:'x',yaxis:'y',hovertemplate:'%{x}<br>Sales index: %{y:.1f}<extra></extra>'},
      {type:'bar',name:'Total Content Reach',x:keys.map(chartDate),y:keys.map(k=>reach[k]||0),marker:{color:COLORS.gold},xaxis:'x2',yaxis:'y2',hovertemplate:'%{x}<br>Total content reach: %{y:,.0f}<extra></extra>'},
      {type:'scatter',mode:'lines+markers',name:'Content Records',x:keys.map(chartDate),y:keys.map(k=>posts[k]||0),line:{color:COLORS.red,width:2},marker:{size:6},xaxis:'x2',yaxis:'y3',hovertemplate:'%{x}<br>Content records: %{y}<extra></extra>'}
    ],{
      margin:{l:62,r:62,t:40,b:50},hovermode:'x unified',shapes,
      xaxis:{domain:[0,1],anchor:'y',type:'date',showticklabels:false,gridcolor:'#edf1ef'},yaxis:{domain:[.46,1],title:'Comparable Sales Index',gridcolor:'#e4ece8'},
      xaxis2:{domain:[0,1],anchor:'y2',type:'date',matches:'x'},yaxis2:{domain:[0,.34],title:'Total Content Reach',gridcolor:'#e4ece8'},yaxis3:{domain:[0,.34],overlaying:'y2',side:'right',title:'Content',showgrid:false},
      annotations:[
        {xref:'paper',yref:'paper',x:0,y:1.08,text:'COMERCIAL',showarrow:false,font:{size:10,color:COLORS.muted}},
        {xref:'paper',yref:'paper',x:0,y:.38,text:'CONTENT DISTRIBUTION',showarrow:false,font:{size:10,color:COLORS.muted}},
        ...(between('2026-06-11',state.start,state.end)?[{x:chartDate('2026-06-11'),y:1.01,xref:'x',yref:'paper',text:'Inicio live',showarrow:false,font:{size:10,color:COLORS.red}}]:[]),
        {xref:'paper',yref:'paper',x:1,y:.38,text:'Inversión se reporta agregada, no como timeline',showarrow:false,xanchor:'right',font:{size:10,color:COLORS.muted}}
      ]
    });
    renderCityCards();
  }
  function cityMetrics(city){
    const prevZone=state.zone,prevStore=state.store;state.zone=city;state.store='All';
    const comp=salesComparisonSummary(),sales=sum(salesRows(2026,false),'sales_usd');
    const offline=DATA.offline_summary.filter(r=>r.period==='Total'&&r.city===city),prizes=sum(DATA.prizes.filter(r=>r.city===city),'total_prizes'),passports=sum(DATA.passports.filter(r=>r.city===city),'passports_in_urn'),interactions=sum(DATA.futbolito.filter(r=>r.city===city),'interactions');
    state.zone=prevZone;state.store=prevStore;
    return {city,sales,growth:comp.growth,lflGrowth:comp.lflGrowth,offlineSpend:sum(offline,'investment'),spots:sum(offline,'spots'),prizes,passports,interactions};
  }
  function renderCityCards(){
    els.cityScorecards.innerHTML=['OKC','Tulsa'].map(city=>{const c=cityMetrics(city);return `<article class="city-card"><h3>${city}</h3><div class="city-metrics"><div><span>Tracked Sales</span><strong>${money(c.sales)}</strong></div><div><span>Portfolio YoY</span><strong class="${c.growth!==null&&c.growth<0?'negative':'positive'}">${c.growth===null?'N/A':pct(c.growth)}</strong></div><div><span>LFL YoY</span><strong class="${c.lflGrowth!==null&&c.lflGrowth<0?'negative':'positive'}">${c.lflGrowth===null?'N/A':pct(c.lflGrowth)}</strong></div><div><span>Offline Spend</span><strong>${money(c.offlineSpend)}</strong></div><div><span>Spots</span><strong>${integer(c.spots)}</strong></div><div><span>Prizes</span><strong>${integer(c.prizes)}</strong></div><div><span>Passports</span><strong>${integer(c.passports)}</strong></div><div><span>Futbolito</span><strong>${integer(c.interactions)}</strong></div><div><span>Meta</span><strong>Broad</strong></div></div></article>`}).join('');
  }

  // ---------- Actions / methodology ----------
  function renderActions(){
    const stores=storeComparison().filter(r=>r.lflGrowth!==null),best=[...stores].sort((a,b)=>b.lflGrowth-a.lflGrowth)[0],worst=[...stores].sort((a,b)=>a.lflGrowth-b.lflGrowth)[0];
    const formats=formatAgg(organicRows()),bestFormat=formats[0];
    const actions=[
      {p:'ALTA',t:`Escalar el playbook de ${best?.store||'la tienda líder'}`,d:best?`Documentar oferta, temporalidad y ejecución que acompañaron ${pct(best.lflGrowth)} LFL YoY; probar réplica controlada en tiendas de perfil similar.`:'Esperar una ventana comparable.',owner:'Agency Strategy + Morelos',deadline:'Próxima campaña',kpi:'Comparable Sales Lift'},
      {p:'ALTA',t:'Separar OKC y Tulsa en Meta',d:'La mayor parte de la pauta fue broad. Crear ad sets mutuamente excluyentes por ciudad y, cuando haya volumen, por cluster de tiendas.',owner:'Performance',deadline:'Antes del próximo flight',kpi:'CPM, CTR, geo lift'},
      {p:'ALTA',t:`Recovery sprint para ${worst?.store||'la tienda de menor desempeño'}`,d:worst?`${worst.store} registró ${pct(worst.lflGrowth)} LFL YoY en categorías comparables. Auditar inventario, pricing, competencia y ejecución local antes de culpar a medios.`:'Sin tienda comparable negativa en el filtro.',owner:'Morelos Ops + Agency',deadline:'30 días',kpi:'Sales YoY / availability'},
      {p:'MEDIA',t:`Priorizar ${bestFormat?.format||'el formato líder'}`,d:bestFormat?`${bestFormat.format} lidera el promedio de engagements por pieza dentro del scope actual. Aumentar producción manteniendo un holdout creativo.`:'No hay contenido suficiente.',owner:'Social + Creative',deadline:'Próximo calendario',kpi:'Reach/post, ER, shares'},
      {p:'ALTA',t:'Instrumentar QR y códigos por tienda',d:'El QR acumulado y los pasaportes no tienen denominador de entrega. Usar QR únicos, códigos de caja y conteo de pasaportes entregados.',owner:'Trade + Data',deadline:'Próxima activación',kpi:'Scans/store, completion rate'}
    ];
    els.actionGrid.innerHTML=actions.map(a=>`<article class="action-card"><div class="action-priority">Prioridad ${a.p}</div><h3>${escapeHtml(a.t)}</h3><p>${escapeHtml(a.d)}</p><div class="action-meta"><div><span>Owner</span><b>${escapeHtml(a.owner)}</b></div><div><span>Deadline</span><b>${escapeHtml(a.deadline)}</b></div><div><span>KPI</span><b>${escapeHtml(a.kpi)}</b></div></div></article>`).join('');
    const methods=[
      ['Ventas','Siete departamentos suministrados. No representa revenue total de la cadena; el 20 de julio se excluye por ser parcial.'],
      ['YoY','Se comparan exactamente las mismas fechas de 2025 y 2026. Admiral no entra al YoY; FROZEN se separa porque no tiene baseline en el mismo periodo de 2025.'],
      ['Meta Ads','La campaña se clasifica por Campaign, Ad Set y Ad Name: fútbol, futbolito, Mundial, soccer, balón, partido, pasaporte, sellos y afición.'],
      ['Organic','Total Content Results suma orgánico + boost; el dashboard también separa ambos componentes. Owned es headline y partner/external se reporta como earned amplification.'],
      ['Offline','Inversión y spots vienen por mes/ciudad/medio. No existe timestamp diario para prorratear la presión.'],
      ['Atribución','El dashboard muestra asociación y contribución observada; no prueba causalidad incremental ni calcula ROAS.'],
      ['Pasaportes','10,000 asignados y 166 en urna. Sin registro de entregados al consumidor no existe completion rate válido.'],
      ['Reach','La suma de reach de Meta proviene de breakdown diario y puede repetir usuarios entre días.'],
      ['Divisa','Los montos se presentan en USD de acuerdo con los archivos de Ads y el reporte offline.']
    ];
    els.methodologyContent.innerHTML=methods.map(m=>`<div class="method-item"><strong>${m[0]}</strong><p>${m[1]}</p></div>`).join('');
  }

  // ---------- Export ----------
  function exportSummary(){
    const s26=salesRows(2026,false),comp=salesComparisonSummary(),meta=metaRows(),org=organicRows(),content=contentMetrics(org),off=offlineTotals();
    const metaSpend=sum(meta,'spend'),offlineSpend=sum(off,'investment');
    const rows=[
      ['Metric','Value','Scope'],
      ['Tracked Category Sales',sum(s26,'sales_usd'),selectedWindowText()],
      ['Portfolio Sales Growth',comp.growth??'N/A','Comparable stores; includes categories without prior baseline'],
      ['Portfolio Incremental Sales',comp.delta,'Comparable stores'],
      ['Like-for-like Department Growth',comp.lflGrowth??'N/A',comp.commonDepartments.join('|')],
      ['Like-for-like Incremental Sales',comp.lflDelta,comp.commonDepartments.join('|')],
      ['Total Media Investment',metaSpend+offlineSpend,'Online filtered + offline report total'],
      ['Meta Spend',metaSpend,mediaLabel()],
      ['Offline Spend',offlineSpend,state.zone],
      ['Meta Impressions',sum(meta,'impressions'),mediaLabel()],
      ['Content Total Reach',content.totalReach,state.contentScope],
      ['Content Organic Reach',content.organicReach,state.contentScope],
      ['Content Boosted Reach',content.boostedReach,state.contentScope],
      ['Content Total Engagements',content.totalEngagements,state.contentScope],
      ['Content Organic Engagements',content.organicEngagements,state.contentScope],
      ['Content Boosted Engagements',content.boostedEngagements,state.contentScope],
      ['Offline Spots',sum(off,'spots'),state.zone],
      ['Prizes',sum(filteredPrizes(),'total_prizes'),state.store],
      ['Passports in urn',sum(filteredPassports(),'passports_in_urn'),state.store],
      ['Futbolito interactions',sum(filteredFutbolito(),'interactions'),state.store]
    ];
    const csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='smm_mundial_dashboard_summary.csv';a.click();URL.revokeObjectURL(url);
  }

  // ---------- Render orchestrator ----------
  let rendering=false;
  function renderAll(){
    if(rendering)return;rendering=true;
    requestAnimationFrame(()=>{
      renderOverview();renderSales();renderMeta();renderOrganic();renderOffline();renderActivations();renderIntegrated();renderActions();
      rendering=false;
      setTimeout(()=>window.dispatchEvent(new Event('resize')),50);
    });
  }

  initFilters();
  renderAll();
  setTimeout(()=>els.loadingOverlay.classList.add('hidden'),500);
})();
