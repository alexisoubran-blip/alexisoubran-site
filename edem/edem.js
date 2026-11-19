/* EDEM class engine: keyboard nav, progress, fullscreen, speaker notes, workshop timer, builders */
(function(){
  var slides=[].slice.call(document.querySelectorAll('.slide'));
  var prog=document.querySelector('.progress'), count=document.querySelector('.count');
  function current(){
    var y=window.innerHeight*0.4, idx=0;
    slides.forEach(function(s,i){ if(s.getBoundingClientRect().top<=y) idx=i; });
    return idx;
  }
  function update(){
    var i=current();
    if(prog) prog.style.width=((i+1)/slides.length*100)+'%';
    if(count) count.textContent=(i+1)+' / '+slides.length;
  }
  function go(d){
    var i=Math.max(0,Math.min(slides.length-1,current()+d));
    slides[i].scrollIntoView({behavior:'smooth',block:'start'});
  }
  function fs(){
    var d=document;
    if(!d.fullscreenElement){ (d.documentElement.requestFullscreen||function(){}).call(d.documentElement); d.body.classList.add('present'); }
    else { d.exitFullscreen(); }
  }
  document.addEventListener('fullscreenchange',function(){ if(!document.fullscreenElement) document.body.classList.remove('present'); });
  function notes(){ document.body.classList.toggle('notes'); }
  document.addEventListener('keydown',function(e){
    var t=e.target.tagName; if(t==='INPUT'||t==='TEXTAREA'||t==='SELECT') return;
    if(e.metaKey||e.ctrlKey||e.altKey) return;
    if(['ArrowRight','ArrowDown','PageDown',' '].indexOf(e.key)>-1){ e.preventDefault(); go(1); }
    else if(['ArrowLeft','ArrowUp','PageUp'].indexOf(e.key)>-1){ e.preventDefault(); go(-1); }
    else if(e.key==='f'||e.key==='F'){ fs(); }
    else if(e.key==='n'||e.key==='N'){ notes(); }
    else if(e.key==='Home'){ e.preventDefault(); slides[0].scrollIntoView(); }
    else if(e.key==='End'){ e.preventDefault(); slides[slides.length-1].scrollIntoView(); }
  });
  window.addEventListener('scroll',update,{passive:true}); update();
  var b;
  if(b=document.querySelector('[data-fs]')) b.addEventListener('click',fs);
  if(b=document.querySelector('[data-notes]')) b.addEventListener('click',notes);
  if(location.search.indexOf('notas')>-1) document.body.classList.add('notes');

  /* timer */
  var timer=document.querySelector('.timer'), tOut, tEnd, tInt;
  function fmt(ms){ var s=Math.max(0,Math.round(ms/1000)); return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); }
  function tick(){ var left=tEnd-Date.now(); tOut.textContent=fmt(left); if(left<=0){ clearInterval(tInt); timer.classList.add('done'); } }
  document.querySelectorAll('[data-timer]').forEach(function(btn){
    btn.addEventListener('click',function(){
      if(!timer) return; tOut=timer.querySelector('strong');
      clearInterval(tInt); timer.classList.remove('done'); timer.classList.add('on');
      tEnd=Date.now()+parseFloat(btn.getAttribute('data-timer'))*60000; tick(); tInt=setInterval(tick,500);
    });
  });
  if(timer) timer.querySelector('button').addEventListener('click',function(){ clearInterval(tInt); timer.classList.remove('on','done'); });

  /* builders: <div class="builder" data-template="Soy {a} que ..."> inputs with name=a ... output .output */
  document.querySelectorAll('[data-template]').forEach(function(box){
    var tpl=box.getAttribute('data-template'), out=box.querySelector('.output'), key='edem:'+(box.id||'b');
    var fields=box.querySelectorAll('input,textarea,select');
    try{ var saved=JSON.parse(localStorage.getItem(key)||'{}'); fields.forEach(function(f){ if(saved[f.name]) f.value=saved[f.name]; }); }catch(e){}
    function esc(s){ return s.replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); }
    function render(){
      var data={};
      fields.forEach(function(f){ data[f.name]=f.value.trim(); });
      out.innerHTML=tpl.replace(/\{(\w+)\}/g,function(_,k){ return data[k]?esc(data[k]):'<span class="ph">['+(box.querySelector('[name='+k+']').getAttribute('data-ph')||k)+']</span>'; });
      try{ localStorage.setItem(key,JSON.stringify(data)); }catch(e){}
    }
    fields.forEach(function(f){ f.addEventListener('input',render); });
    var copy=box.querySelector('[data-copy]');
    if(copy) copy.addEventListener('click',function(){
      var txt=out.innerText;
      (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(function(){ copy.textContent='Copiado ✓'; setTimeout(function(){copy.textContent='Copiar';},1600); }).catch(function(){});
    });
    render();
  });
})();
