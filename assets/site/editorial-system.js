
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveal = document.querySelectorAll('.reveal');
if (!reduce && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target);} });
  }, {threshold:.12, rootMargin:'0px 0px -8%'});
  reveal.forEach(el=>observer.observe(el));
} else reveal.forEach(el=>el.classList.add('in'));

document.querySelectorAll('details').forEach((item)=>{
  item.addEventListener('toggle',()=>{
    if(item.open) document.querySelectorAll('details[open]').forEach(other=>{if(other!==item)other.open=false;});
  });
});

const nav=document.querySelector('.site-nav');
let last=0;
addEventListener('scroll',()=>{
  const y=scrollY;
  nav.style.background=y>40?'rgba(5,7,12,.86)':'rgba(5,7,12,.66)';
  nav.style.transform=`translateX(-50%) translateY(${y>last&&y>180?'-90px':'0'})`;
  nav.style.transition='transform .35s ease,background .25s ease';
  last=y;
},{passive:true});
