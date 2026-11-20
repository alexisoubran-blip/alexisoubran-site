/* EDEM · gráficas conceptuales en SVG. <div class="chart" data-chart="nombre"></div> */
(function(){
  function svg(w,h,inner,label){return '<svg viewBox="0 0 '+w+' '+h+'" role="img" aria-label="'+label+'">'+inner+'</svg>';}
  function t(x,y,s,cls,anchor,size){return '<text x="'+x+'" y="'+y+'" class="'+(cls||'')+'" text-anchor="'+(anchor||'start')+'" font-size="'+(size||14)+'">'+s+'</text>';}
  function path(pts){return pts.map(function(p,i){return (i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1);}).join(' ');}
  function smooth(pts){var d='M'+pts[0][0]+' '+pts[0][1];for(var i=1;i<pts.length;i++){var p0=pts[i-1],p1=pts[i],mx=(p0[0]+p1[0])/2;d+=' C'+mx+' '+p0[1]+' '+mx+' '+p1[1]+' '+p1[0]+' '+p1[1];}return d;}

  var C={
    /* Campaña vs contenido */
    asset:function(){
      var W=1000,H=380,L=60,R=960,T=30,B=320,o='';
      for(var g=0;g<=4;g++){var y=B-(B-T)*g/4;o+='<line class="grid-l" x1="'+L+'" x2="'+R+'" y1="'+y+'" y2="'+y+'"/>';}
      o+='<line class="axis" x1="'+L+'" x2="'+R+'" y1="'+B+'" y2="'+B+'"/>';
      var X=function(m){return L+(R-L)*(m-1)/11;}, Y=function(v){return B-(B-T)*v/100;};
      var camp=[[1,4],[2,6],[3,88],[3.6,30],[4.3,8],[5,5],[6,4],[7,5],[8,82],[8.6,28],[9.3,7],[10,5],[11,4],[12,4]];
      var cont=[[1,3],[2,7],[3,12],[4,18],[5,25],[6,32],[7,40],[8,48],[9,55],[10,63],[11,70],[12,78]];
      o+='<path class="s-gray draw" stroke-width="3" d="'+path(camp.map(function(p){return [X(p[0]),Y(p[1])];}))+'"/>';
      o+='<path class="s-red draw" stroke-width="5" d="'+smooth(cont.map(function(p){return [X(p[0]),Y(p[1])];}))+'"/>';
      for(var m=1;m<=12;m++) o+=t(X(m),B+26,'M'+m,'','middle',13);
      o+=t(X(3)+12,Y(88),'Campaña','t-strong t-cond','start',16)+t(X(8)-12,Y(82),'Campaña','t-strong t-cond','end',16);
      o+=t(X(12),Y(58),'Contenido que se acumula','t-strong t-cond','end',18);
      o+=t(L-12,T+4,'Atención','','end',12);
      return svg(W,H,o,'Comparación ilustrativa: picos de campaña que se apagan vs contenido que se acumula')+
        '<div class="legend"><span><i></i>Contenido (activo)</span><span><i class="gray"></i>Campaña (renta)</span></div><p class="cap">Ilustrativo: la forma típica de cada curva, no datos reales.</p>';
    },
    /* Hero / Hub / Help pirámide */
    hhh:function(){
      var o='',cx=230;
      o+='<path class="f-red pop" d="M'+cx+' 20 L'+(cx+70)+' 120 L'+(cx-70)+' 120 Z"/>';
      o+='<path class="f-ink pop" style="transition-delay:.15s" d="M'+(cx-74)+' 130 L'+(cx+74)+' 130 L'+(cx+140)+' 225 L'+(cx-140)+' 225 Z"/>';
      o+='<path class="pop" fill="#8d8d8d" style="transition-delay:.3s" d="M'+(cx-144)+' 235 L'+(cx+144)+' 235 L'+(cx+215)+' 335 L'+(cx-215)+' 335 Z"/>';
      o+='<line class="axis" x1="470" x2="980" y1="120" y2="120"/><line class="axis" x1="470" x2="980" y1="225" y2="225"/>';
      o+=t(500,72,'HERO','t-strong t-cond','start',26)+t(500,100,'Pocos momentos al año, con presupuesto y pauta','','start',16);
      o+=t(500,177,'HUB','t-strong t-cond','start',26)+t(500,205,'Series recurrentes que crean hábito','','start',16);
      o+=t(500,285,'HELP','t-strong t-cond','start',26)+t(500,313,'Siempre activo: responde lo que ya te preguntan','','start',16);
      return svg(1000,345,o,'Pirámide Hero, Hub, Help')+'<p class="cap">El tamaño de cada nivel representa cuánto del calendario ocupa: la base sostiene todo lo demás.</p>';
    },
    /* See Think Do Care */
    stdc:function(){
      var rows=[['SEE','Toda la categoría',100,'#8d8d8d'],['THINK','Considerando',74,'var(--fg)'],['DO','Lista para actuar',48,'var(--red)'],['CARE','Ya es cliente',60,'var(--red)']],o='',W=1000;
      rows.forEach(function(r,i){var w=(W-260)*r[2]/100,x=130+((W-260)-w)/2,y=14+i*72;
        o+='<rect class="grow" style="transition-delay:'+(i*.12)+'s;transform-origin:center" x="'+x+'" y="'+y+'" width="'+w+'" height="56" fill="'+r[3]+'"'+(i==3?' opacity=".55"':'')+'/>';
        o+=t(110,y+35,r[0],'t-strong t-cond','end',20)+t(W-110,y+35,r[1],'','start',15);});
      o+='<path class="s-red" stroke-width="2.5" stroke-dasharray="6 6" d="M'+(W-150)+' 260 C'+(W-60)+' 240 '+(W-60)+' 60 '+(W-150)+' 42"/>';
      o+=t(W-40,150,'recompra y','','middle',12)+t(W-40,166,'recomendación','','middle',12);
      return svg(W,310,o,'Embudo See Think Do Care')+'<p class="cap">Tamaños ilustrativos: cada etapa es una audiencia distinta con una intención distinta.</p>';
    },
    /* Matriz de priorización */
    matrix:function(){
      var L=90,R=940,T=20,B=380,o='',X=function(v){return L+(R-L)*(v-0.5)/5;},Y=function(v){return B-(B-T)*(v-0.5)/5;};
      o+='<rect x="'+X(3)+'" y="'+T+'" width="'+(R-X(3))+'" height="'+(Y(3)-T)+'" class="f-soft"/>';
      o+=t(R-12,Y(3)-14,'ZONA DE PILARES','t-strong t-cond','end',16);
      for(var g=1;g<=5;g++){o+='<line class="grid-l" x1="'+X(g)+'" x2="'+X(g)+'" y1="'+T+'" y2="'+B+'"/><line class="grid-l" x1="'+L+'" x2="'+R+'" y1="'+Y(g)+'" y2="'+Y(g)+'"/>'+t(X(g),B+22,g,'','middle',13)+t(L-14,Y(g)+5,g,'','end',13);}
      o+=t((L+R)/2,B+50,'DEMANDA · ¿lo buscan?','t-strong t-cond','middle',15);
      o+='<text x="24" y="'+((T+B)/2)+'" transform="rotate(-90 24 '+((T+B)/2)+')" text-anchor="middle" font-size="15" class="t-strong t-cond">AUTORIDAD · ¿podemos ganar?</text>';
      var d=[[5,5,4,'Preparar café en casa',0],[3,5,4,'Origen y productores',0],[4,2,2,'Café y productividad',1],[3,2,1,'Tendencias globales',0]];
      d.forEach(function(p,i){var r=10+p[2]*9,hot=p[0]+p[1]>=8;o+='<circle class="pop" style="transition-delay:'+(i*.12)+'s" cx="'+X(p[0])+'" cy="'+Y(p[1])+'" r="'+r+'" fill="'+(hot?'var(--red)':'#8d8d8d')+'" opacity=".9"/>'+(p[4]?t(X(p[0])+r+8,Y(p[1])+5,p[3],'t-strong','start',14):t(X(p[0])-r-8,Y(p[1])+5,p[3],'t-strong','end',14));});
      return svg(1000,440,o,'Matriz de priorización de temas')+'<p class="cap">El tamaño de cada burbuja es el valor de negocio. Calificaciones ilustrativas del ejemplo de café.</p>';
    },
    /* Pieza pilar y derivados */
    atom:function(){
      var cx=500,cy=210,o='',items=['Clips verticales','Carrusel','Newsletter','Artículo + FAQs','Post LinkedIn','Pauta'];
      items.forEach(function(s,i){var a=-Math.PI/2+i*2*Math.PI/items.length,x=cx+Math.cos(a)*330,y=cy+Math.sin(a)*165;
        o+='<line class="s-red draw" stroke-width="2" x1="'+cx+'" y1="'+cy+'" x2="'+x+'" y2="'+y+'"/>';
        o+='<g class="pop" style="transition-delay:'+(.3+i*.08)+'s"><rect x="'+(x-90)+'" y="'+(y-24)+'" width="180" height="48" class="f-card"/>'+t(x,y+6,s,'t-strong t-cond','middle',15)+'</g>';});
      o+='<circle class="f-red pop" cx="'+cx+'" cy="'+cy+'" r="78"/>'+'<text x="'+cx+'" y="'+(cy-4)+'" text-anchor="middle" font-size="20" style="fill:#fff" class="t-cond" font-weight="600">PIEZA</text><text x="'+cx+'" y="'+(cy+20)+'" text-anchor="middle" font-size="20" style="fill:#fff" class="t-cond" font-weight="600">PILAR</text>';
      return svg(1000,420,o,'Una pieza pilar alimenta seis derivados');
    },
    /* Curva de retención de video */
    retention:function(){
      var L=70,R=960,T=20,B=320,o='',X=function(s){return L+(R-L)*s/45;},Y=function(v){return B-(B-T)*v/100;};
      var z=[[0,3,'GANCHO'],[3,10,'PROMESA'],[10,35,'DESARROLLO'],[35,45,'PAYOFF + CTA']];
      z.forEach(function(q,i){o+='<rect x="'+X(q[0])+'" y="'+T+'" width="'+(X(q[1])-X(q[0]))+'" height="'+(B-T)+'" '+(i==0?'class="f-soft"':'fill="transparent"')+'/>'+'<line class="grid-l" x1="'+X(q[1])+'" x2="'+X(q[1])+'" y1="'+T+'" y2="'+B+'"/>'+t((X(q[0])+X(q[1]))/2,B-12,q[2],'t-strong t-cond','middle',i==0?12:13);});
      var strong=[[0,100],[1,92],[3,80],[6,72],[10,66],[20,57],[30,50],[35,47],[40,42],[45,38]];
      var weak=[[0,100],[1,70],[3,42],[6,33],[10,28],[20,22],[30,18],[35,16],[40,14],[45,12]];
      o+='<line class="axis" x1="'+L+'" x2="'+R+'" y1="'+B+'" y2="'+B+'"/>';
      [0,10,20,30,40,45].forEach(function(s){o+=t(X(s),B+24,s+' s','','middle',13);});
      [0,50,100].forEach(function(v){o+=t(L-10,Y(v)+5,v+'%','','end',12);});
      o+='<path class="s-gray draw" stroke-width="3" d="'+smooth(weak.map(function(p){return [X(p[0]),Y(p[1])];}))+'"/>';
      o+='<path class="s-red draw" stroke-width="5" d="'+smooth(strong.map(function(p){return [X(p[0]),Y(p[1])];}))+'"/>';
      return svg(1000,360,o,'Curva de retención ilustrativa de un video corto')+'<div class="legend"><span><i></i>Gancho fuerte</span><span><i class="gray"></i>Gancho débil</span></div><p class="cap">Ilustrativo: casi toda la diferencia entre un video que funciona y uno que no se decide en los primeros 3 segundos.</p>';
    },
    /* Arco de tensión Story Spine */
    arc:function(){
      var L=60,R=960,T=40,B=300,o='',labels=['Había una vez','Todos los días','Hasta que un día','Por eso','Por eso','Finalmente','Y desde entonces'],v=[18,18,55,66,78,96,40];
      var X=function(i){return L+(R-L)*i/6;},Y=function(x){return B-(B-T)*x/100;};
      o+='<line class="axis" x1="'+L+'" x2="'+R+'" y1="'+B+'" y2="'+B+'"/>';
      o+='<path class="s-red draw" stroke-width="5" d="'+smooth(v.map(function(x,i){return [X(i),Y(x)];}))+'"/>';
      v.forEach(function(x,i){var hl=(i==2||i==5);o+='<circle class="pop" style="transition-delay:'+(.2+i*.1)+'s" cx="'+X(i)+'" cy="'+Y(x)+'" r="'+(hl?11:7)+'" fill="'+(hl?'var(--red)':'var(--fg)')+'"/>'+t(X(i),B+28,(i+1),'t-strong t-cond','middle',18)+t(X(i),B+50,labels[i],'','middle',13);});
      o+=t(X(2)+16,Y(55)-14,'DETONANTE','t-strong t-cond','start',14)+t(X(5),Y(96)-20,'CLÍMAX','t-strong t-cond','middle',14);
      o+='<text x="20" y="'+((T+B)/2)+'" transform="rotate(-90 20 '+((T+B)/2)+')" text-anchor="middle" font-size="13">tensión</text>';
      return svg(1000,370,o,'Arco de tensión de una historia en siete pasos');
    },
    /* PESO */
    peso:function(){
      var o='',c=[[400,150,'PAGADO','Paid'],[600,150,'GANADO','Earned'],[400,310,'COMPARTIDO','Shared'],[600,310,'PROPIO','Owned']];
      c.forEach(function(p,i){o+='<circle class="pop" style="transition-delay:'+(i*.12)+'s" cx="'+p[0]+'" cy="'+p[1]+'" r="140" fill="'+(i==3?'var(--red)':'var(--fg)')+'" fill-opacity="'+(i==3?.55:.1)+'" stroke="'+(i==3?'var(--red)':'var(--fg)')+'" stroke-opacity=".5"/>';
        var dx=p[0]<500?-70:70,dy=p[1]<230?-60:60;o+=t(p[0]+dx,p[1]+dy,p[2],'t-strong t-cond','middle',20)+t(p[0]+dx,p[1]+dy+20,p[3],'','middle',13);});
      o+='<circle cx="500" cy="230" r="54" fill="var(--ink)" stroke="#fff" stroke-width="2"/><text x="500" y="226" text-anchor="middle" font-size="15" style="fill:#fff" class="t-cond" font-weight="600">TU PIEZA</text><text x="500" y="246" text-anchor="middle" font-size="15" style="fill:#fff" class="t-cond" font-weight="600">PILAR</text>';
      return svg(1000,470,o,'Modelo PESO: pagado, ganado, compartido y propio');
    },
    /* Gantt distribución */
    gantt:function(){
      var L=250,R=970,T=40,o='',rows=[['Pieza pilar + canales propios',0,.6],['Clips y carrusel',.4,1.6],['Pauta a los mejores derivados',1.2,3.2],['Creadores y aliados',1.6,4.2],['Respuestas, nuevos ángulos, prensa',3.6,8],['Actualizar y recircular',7.4,8]],X=function(w){return L+(R-L)*w/8;};
      for(var w=0;w<=8;w++){o+='<line class="grid-l" x1="'+X(w)+'" x2="'+X(w)+'" y1="'+(T-10)+'" y2="'+(T+rows.length*46)+'"/>'+t(X(w),T-16,w==0?'Día 0':'S'+w,'t-cond','middle',13);}
      rows.forEach(function(r,i){var y=T+i*46+8;o+=t(L-14,y+21,r[0],'t-strong','end',14)+'<rect class="grow" style="transition-delay:'+(i*.12)+'s" x="'+X(r[1])+'" y="'+y+'" width="'+(X(r[2])-X(r[1]))+'" height="28" fill="'+(i==0?'var(--red)':i==2?'var(--red)':'var(--fg)')+'" '+(i==0||i==2?'':'fill-opacity=".75"')+'/>';});
      return svg(1000,T+rows.length*46+20,o,'Calendario de distribución de una pieza pilar en ocho semanas');
    },
    /* Cadena de métricas */
    chain:function(){
      var rows=[['ACTIVIDAD','¿Lo hicimos?',100],['ATENCIÓN','¿Lo vieron?',82],['INTERÉS','¿Les importó?',60],['ACCIÓN','¿Hicieron algo?',38],['VALOR','¿Le sirvió al negocio?',22]],o='';
      rows.forEach(function(r,i){var w=700*r[2]/100,y=10+i*62;o+='<rect class="grow" style="transition-delay:'+(i*.12)+'s" x="190" y="'+y+'" width="'+w+'" height="48" fill="'+(i==4?'var(--red)':'var(--fg)')+'" '+(i==4?'':'fill-opacity="'+(0.18+i*0.12)+'"')+'/>'+t(176,y+31,r[0],'t-strong t-cond','end',18)+t(200+w,y+31,r[1],'','start',14);});
      return svg(1000,330,o,'Cadena de métricas de la actividad al valor')+'<p class="cap">Cada eslabón filtra al siguiente. Ante dirección se reporta el último; los demás explican por qué se movió.</p>';
    },
    /* Mapa del módulo */
    modulo:function(){
      var o='',s=[['S1','PENSAR','19 nov'],['S2','CREAR','24 nov'],['S3','ESCALAR Y MEDIR','26 nov']];
      s.forEach(function(x,i){var cx=170+i*330;o+='<line class="s-red draw" stroke-width="3" x1="'+(cx+70)+'" y1="90" x2="'+(cx+260)+'" y2="90"'+(i==2?' style="display:none"':'')+'/>';
        o+='<g class="pop" style="transition-delay:'+(i*.15)+'s"><circle cx="'+cx+'" cy="90" r="70" fill="'+(i==0?'var(--red)':'var(--card)')+'" stroke="var(--red)" stroke-width="3"/><text x="'+cx+'" y="104" text-anchor="middle" font-size="40" class="t-cond" font-weight="500" style="fill:'+(i==0?'#fff':'var(--red)')+'">'+x[0]+'</text></g>'+t(cx,196,x[1],'t-strong t-cond','middle',20)+t(cx,220,x[2],'','middle',14);});
      return svg(1000,240,o,'Las tres sesiones del módulo');
    }
  };

  var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.25}):null;
  document.querySelectorAll('[data-chart]').forEach(function(el){
    var f=C[el.getAttribute('data-chart')]; if(!f) return;
    el.innerHTML=f();
    el.querySelectorAll('.draw').forEach(function(p){try{p.style.setProperty('--len',Math.ceil(p.getTotalLength()+2));}catch(e){}});
    if(io) io.observe(el); else el.classList.add('in');
  });
})();
