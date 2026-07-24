(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const yt=(o,t)=>{for(let e in t)o[e]=t[e];return o},S=(o,t)=>Array.from(o.querySelectorAll(t)),Jt=(o,t,e)=>{e?o.classList.add(t):o.classList.remove(t)},bt=o=>{if(typeof o=="string"){if(o==="null")return null;if(o==="true")return!0;if(o==="false")return!1;if(o.match(/^-?[\d\.]+$/))return parseFloat(o)}return o},ct=(o,t)=>{o.style.transform=t},$t=(o,t)=>{let e=o.matches||o.matchesSelector||o.msMatchesSelector;return!(!e||!e.call(o,t))},j=(o,t)=>{if(typeof o.closest=="function")return o.closest(t);for(;o;){if($t(o,t))return o;o=o.parentNode}return null},Xe=o=>{let t=(o=o||document.documentElement).requestFullscreen||o.webkitRequestFullscreen||o.webkitRequestFullScreen||o.mozRequestFullScreen||o.msRequestFullscreen;t&&t.apply(o)},ne=o=>{let t=document.createElement("style");return t.type="text/css",o&&o.length>0&&(t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o))),document.head.appendChild(t),t},qe=()=>{let o={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(t=>{o[t.split("=").shift()]=t.split("=").pop()}));for(let t in o){let e=o[t];o[t]=bt(unescape(e))}return o.dependencies!==void 0&&delete o.dependencies,o},vi={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},ti=navigator.userAgent,Et=/(iphone|ipod|ipad|android)/gi.test(ti)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ei=/android/gi.test(ti);var fi=(function(o){if(o){var t=function(v){return[].slice.call(v)},e=3,i=[],n=null,a="requestAnimationFrame"in o?function(){o.cancelAnimationFrame(n),n=o.requestAnimationFrame((function(){return l(i.filter((function(v){return v.dirty&&v.active})))}))}:function(){},s=function(v){return function(){i.forEach((function(T){return T.dirty=v})),a()}},l=function(v){v.filter((function(C){return!C.styleComputed})).forEach((function(C){C.styleComputed=d(C)})),v.filter(g).forEach(b);var T=v.filter(h);T.forEach(p),T.forEach((function(C){b(C),r(C)})),T.forEach(L)},r=function(v){return v.dirty=0},p=function(v){v.availableWidth=v.element.parentNode.clientWidth,v.currentWidth=v.element.scrollWidth,v.previousFontSize=v.currentFontSize,v.currentFontSize=Math.min(Math.max(v.minSize,v.availableWidth/v.currentWidth*v.previousFontSize),v.maxSize),v.whiteSpace=v.multiLine&&v.currentFontSize===v.minSize?"normal":"nowrap"},h=function(v){return v.dirty!==2||v.dirty===2&&v.element.parentNode.clientWidth!==v.availableWidth},d=function(v){var T=o.getComputedStyle(v.element,null);return v.currentFontSize=parseFloat(T.getPropertyValue("font-size")),v.display=T.getPropertyValue("display"),v.whiteSpace=T.getPropertyValue("white-space"),!0},g=function(v){var T=!1;return!v.preStyleTestCompleted&&(/inline-/.test(v.display)||(T=!0,v.display="inline-block"),v.whiteSpace!=="nowrap"&&(T=!0,v.whiteSpace="nowrap"),v.preStyleTestCompleted=!0,T)},b=function(v){v.element.style.whiteSpace=v.whiteSpace,v.element.style.display=v.display,v.element.style.fontSize=v.currentFontSize+"px"},L=function(v){v.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:v.previousFontSize,newValue:v.currentFontSize,scaleFactor:v.currentFontSize/v.previousFontSize}}))},u=function(v,T){return function(){v.dirty=T,v.active&&a()}},$=function(v){return function(){i=i.filter((function(T){return T.element!==v.element})),v.observeMutations&&v.observer.disconnect(),v.element.style.whiteSpace=v.originalStyle.whiteSpace,v.element.style.display=v.originalStyle.display,v.element.style.fontSize=v.originalStyle.fontSize}},w=function(v){return function(){v.active||(v.active=!0,a())}},q=function(v){return function(){return v.active=!1}},Y=function(v){v.observeMutations&&(v.observer=new MutationObserver(u(v,1)),v.observer.observe(v.element,v.observeMutations))},P={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in o&&{subtree:!0,childList:!0,characterData:!0}},I=null,x=function(){o.clearTimeout(I),I=o.setTimeout(s(2),O.observeWindowDelay)},H=["resize","orientationchange"];return Object.defineProperty(O,"observeWindow",{set:function(v){var T="".concat(v?"add":"remove","EventListener");H.forEach((function(C){o[T](C,x)}))}}),O.observeWindow=!0,O.observeWindowDelay=100,O.fitAll=s(e),O}function V(v,T){var C=Object.assign({},P,T),D=v.map((function(W){var G=Object.assign({},C,{element:W,active:!0});return(function(_){_.originalStyle={whiteSpace:_.element.style.whiteSpace,display:_.element.style.display,fontSize:_.element.style.fontSize},Y(_),_.newbie=!0,_.dirty=!0,i.push(_)})(G),{element:W,fit:u(G,e),unfreeze:w(G),freeze:q(G),unsubscribe:$(G)}}));return a(),D}function O(v){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof v=="string"?V(t(document.querySelectorAll(v)),T):V([v],T)[0]}})(typeof window>"u"?null:window);let bi=class{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){if(this.Reveal.isScrollView())return!0;let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,S(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((n=>{(n.tagName!=="IFRAME"||this.shouldPreload(n))&&(n.setAttribute("src",n.getAttribute("data-src")),n.setAttribute("data-lazy-loaded",""),n.removeAttribute("data-src"))})),S(t,"video, audio").forEach((n=>{let a=0;S(n,"source[data-src]").forEach((s=>{s.setAttribute("src",s.getAttribute("data-src")),s.removeAttribute("data-src"),s.setAttribute("data-lazy-loaded",""),a+=1})),Et&&n.tagName==="VIDEO"&&n.setAttribute("playsinline",""),a>0&&n.load()}));let i=t.slideBackgroundElement;if(i){i.style.display="block";let n=t.slideBackgroundContentElement,a=t.getAttribute("data-background-iframe");if(i.hasAttribute("data-loaded")===!1){i.setAttribute("data-loaded","true");let l=t.getAttribute("data-background-image"),r=t.getAttribute("data-background-video"),p=t.hasAttribute("data-background-video-loop"),h=t.hasAttribute("data-background-video-muted");if(l)/^data:/.test(l.trim())?n.style.backgroundImage=`url(${l.trim()})`:n.style.backgroundImage=l.split(",").map((d=>`url(${((g="")=>encodeURI(g).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,(b=>`%${b.charCodeAt(0).toString(16).toUpperCase()}`)))(decodeURI(d.trim()))})`)).join(",");else if(r){let d=document.createElement("video");p&&d.setAttribute("loop",""),(h||this.Reveal.isSpeakerNotes())&&(d.muted=!0),Et&&(d.muted=!0,d.setAttribute("playsinline","")),r.split(",").forEach((g=>{const b=document.createElement("source");b.setAttribute("src",g);let L=((u="")=>vi[u.split(".").pop()])(g);L&&b.setAttribute("type",L),d.appendChild(b)})),n.appendChild(d)}else if(a&&e.excludeIframes!==!0){let d=document.createElement("iframe");d.setAttribute("allowfullscreen",""),d.setAttribute("mozallowfullscreen",""),d.setAttribute("webkitallowfullscreen",""),d.setAttribute("allow","autoplay"),d.setAttribute("data-src",a),d.style.width="100%",d.style.height="100%",d.style.maxHeight="100%",d.style.maxWidth="100%",n.appendChild(d)}}let s=n.querySelector("iframe[data-src]");s&&this.shouldPreload(i)&&!/autoplay=(1|true|yes)/gi.test(a)&&s.getAttribute("src")!==a&&s.setAttribute("src",a)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach((e=>{fi(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})}))}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",S(e,"iframe[src]").forEach((i=>{i.removeAttribute("src")}))),S(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((i=>{i.setAttribute("data-src",i.getAttribute("src")),i.removeAttribute("src")})),S(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach((i=>{i.setAttribute("data-src",i.getAttribute("src")),i.removeAttribute("src")}))}formatEmbeddedContent(){let t=(e,i,n)=>{S(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+i+'"]').forEach((a=>{let s=a.getAttribute(e);s&&s.indexOf(n)===-1&&a.setAttribute(e,s+(/\?/.test(s)?"&":"?")+n)}))};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){if(t){const e=this.Reveal.isSpeakerNotes();S(t,'img[src$=".gif"]').forEach((i=>{i.setAttribute("src",i.getAttribute("src"))})),S(t,"video, audio").forEach((i=>{if(j(i,".fragment")&&!j(i,".fragment.visible"))return;let n=this.Reveal.getConfig().autoPlayMedia;if(typeof n!="boolean"&&(n=i.hasAttribute("data-autoplay")||!!j(i,".slide-background")),n&&typeof i.play=="function"){if(e&&!i.muted)return;if(i.readyState>1)this.startEmbeddedMedia({target:i});else if(Et){let a=i.play();a&&typeof a.catch=="function"&&i.controls===!1&&a.catch((()=>{i.controls=!0,i.addEventListener("play",(()=>{i.controls=!1}))}))}else i.removeEventListener("loadeddata",this.startEmbeddedMedia),i.addEventListener("loadeddata",this.startEmbeddedMedia)}})),e||(S(t,"iframe[src]").forEach((i=>{j(i,".fragment")&&!j(i,".fragment.visible")||this.startEmbeddedIframe({target:i})})),S(t,"iframe[data-src]").forEach((i=>{j(i,".fragment")&&!j(i,".fragment.visible")||i.getAttribute("src")!==i.getAttribute("data-src")&&(i.removeEventListener("load",this.startEmbeddedIframe),i.addEventListener("load",this.startEmbeddedIframe),i.setAttribute("src",i.getAttribute("data-src")))})))}}startEmbeddedMedia(t){let e=!!j(t.target,"html"),i=!!j(t.target,".present");e&&i&&(t.target.paused||t.target.ended)&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let i=!!j(t.target,"html"),n=!!j(t.target,".present");if(i&&n){let a=this.Reveal.getConfig().autoPlayMedia;typeof a!="boolean"&&(a=e.hasAttribute("data-autoplay")||!!j(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&a?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&a?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=yt({unloadIframes:!0},e),t&&t.parentNode&&(S(t,"video, audio").forEach((i=>{i.hasAttribute("data-ignore")||typeof i.pause!="function"||(i.setAttribute("data-paused-by-reveal",""),i.pause())})),S(t,"iframe").forEach((i=>{i.contentWindow&&i.contentWindow.postMessage("slide:stop","*"),i.removeEventListener("load",this.startEmbeddedIframe)})),S(t,'iframe[src*="youtube.com/embed/"]').forEach((i=>{!i.hasAttribute("data-ignore")&&i.contentWindow&&typeof i.contentWindow.postMessage=="function"&&i.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),S(t,'iframe[src*="player.vimeo.com/"]').forEach((i=>{!i.hasAttribute("data-ignore")&&i.contentWindow&&typeof i.contentWindow.postMessage=="function"&&i.contentWindow.postMessage('{"method":"pause"}',"*")})),e.unloadIframes===!0&&S(t,"iframe[data-src]").forEach((i=>{i.setAttribute("src","about:blank"),i.removeAttribute("src")})))}};const gt=".slides section",ot=".slides>section",He=".slides>section.present>section",yi=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;let Ei=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let i="none";t.slideNumber&&!this.Reveal.isPrintView()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(i="block"),this.element.style.display=i}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,i=this.Reveal.getConfig(),n="h.v";if(typeof i.slideNumber=="function")e=i.slideNumber(t);else{typeof i.slideNumber=="string"&&(n=i.slideNumber),/c/.test(n)||this.Reveal.getHorizontalSlides().length!==1||(n="c");let s=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],n){case"c":e.push(this.Reveal.getSlidePastCount(t)+s);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+s,"/",this.Reveal.getTotalSlides());break;default:let l=this.Reveal.getIndices(t);e.push(l.h+s);let r=n==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(r,l.v+1)}}let a="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],a)}formatNumber(t,e,i,n="#"+this.Reveal.location.getHash()){return typeof i!="number"||isNaN(i)?`<a href="${n}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${n}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${i}</span>
					</a>`}destroy(){this.element.remove()}},Ai=class{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let t,e=this.jumpInput.value.trim("");if(/^\d+$/.test(e)){const i=this.Reveal.getConfig().slideNumber;if(i==="c"||i==="c/t"){const n=this.Reveal.getSlides()[parseInt(e,10)-1];n&&(t=this.Reveal.getIndices(n))}}return t||(/^\d+\.\d+$/.test(e)&&(e=e.replace(".","/")),t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0})),!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==""?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout((()=>this.jump()),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),i=this.Reveal.getSlides().find((n=>e.test(n.innerText)));return i?this.Reveal.getIndices(i):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout((()=>this.hide()),1)}};const Xt=o=>{let t=o.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=o.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let i=o.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(i)return{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10)};let n=o.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return n?{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10),a:parseFloat(n[4])}:null};let wi=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach((t=>{let e=this.createBackground(t,this.element);S(t,"section").forEach((i=>{this.createBackground(i,e),e.classList.add("stack")}))})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")}),1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let i=document.createElement("div");i.className="slide-background "+t.className.replace(/present|past|future/,"");let n=document.createElement("div");return n.className="slide-background-content",i.appendChild(n),e.appendChild(i),t.slideBackgroundElement=i,t.slideBackgroundContentElement=n,this.sync(t),i}sync(t){const e=t.slideBackgroundElement,i=t.slideBackgroundContentElement,n={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},a=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",i.style.backgroundSize="",i.style.backgroundRepeat="",i.style.backgroundPosition="",i.style.backgroundImage="",i.style.opacity="",i.innerHTML="",n.background&&(/^(http|file|\/\/)/gi.test(n.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(n.background)?t.setAttribute("data-background-image",n.background):e.style.background=n.background),(n.background||n.backgroundColor||n.backgroundGradient||n.backgroundImage||n.backgroundVideo||n.backgroundIframe)&&e.setAttribute("data-background-hash",n.background+n.backgroundSize+n.backgroundImage+n.backgroundVideo+n.backgroundIframe+n.backgroundColor+n.backgroundGradient+n.backgroundRepeat+n.backgroundPosition+n.backgroundTransition+n.backgroundOpacity),n.backgroundSize&&e.setAttribute("data-background-size",n.backgroundSize),n.backgroundColor&&(e.style.backgroundColor=n.backgroundColor),n.backgroundGradient&&(e.style.backgroundImage=n.backgroundGradient),n.backgroundTransition&&e.setAttribute("data-background-transition",n.backgroundTransition),a&&e.setAttribute("data-preload",""),n.backgroundSize&&(i.style.backgroundSize=n.backgroundSize),n.backgroundRepeat&&(i.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(i.style.backgroundPosition=n.backgroundPosition),n.backgroundOpacity&&(i.style.opacity=n.backgroundOpacity);const s=this.getContrastClass(t);typeof s=="string"&&t.classList.add(s)}getContrastClass(t){const e=t.slideBackgroundElement;let i=t.getAttribute("data-background-color");if(!i||!Xt(i)){let a=window.getComputedStyle(e);a&&a.backgroundColor&&(i=a.backgroundColor)}if(i){const a=Xt(i);if(a&&a.a!==0)return typeof(n=i)=="string"&&(n=Xt(n)),(n?(299*n.r+587*n.g+114*n.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var n;return null}bubbleSlideContrastClassToElement(t,e){["has-light-background","has-dark-background"].forEach((i=>{t.classList.contains(i)?e.classList.add(i):e.classList.remove(i)}),this)}update(t=!1){let e=this.Reveal.getConfig(),i=this.Reveal.getCurrentSlide(),n=this.Reveal.getIndices(),a=null,s=e.rtl?"future":"past",l=e.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach(((p,h)=>{p.classList.remove("past","present","future"),h<n.h?p.classList.add(s):h>n.h?p.classList.add(l):(p.classList.add("present"),a=p),(t||h===n.h)&&S(p,".slide-background").forEach(((d,g)=>{d.classList.remove("past","present","future");const b=typeof n.v=="number"?n.v:0;g<b?d.classList.add("past"):g>b?d.classList.add("future"):(d.classList.add("present"),h===n.h&&(a=d))}))})),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),a&&this.previousBackground){let p=this.previousBackground.getAttribute("data-background-hash"),h=a.getAttribute("data-background-hash");if(h&&h===p&&a!==this.previousBackground){this.element.classList.add("no-transition");const d=a.querySelector("video"),g=this.previousBackground.querySelector("video");if(d&&g){const b=d.parentNode;g.parentNode.appendChild(d),b.appendChild(g)}}}const r=a!==this.previousBackground;if(r&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),r&&a){this.Reveal.slideContent.startEmbeddedContent(a);let p=a.querySelector(".slide-background-content");if(p){let h=p.style.backgroundImage||"";/\.gif/i.test(h)&&(p.style.backgroundImage="",window.getComputedStyle(p).opacity,p.style.backgroundImage=h)}this.previousBackground=a}i&&this.bubbleSlideContrastClassToElement(i,this.Reveal.getRevealElement()),setTimeout((()=>{this.element.classList.remove("no-transition")}),10)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,i,n=this.Reveal.getHorizontalSlides(),a=this.Reveal.getVerticalSlides(),s=this.element.style.backgroundSize.split(" ");s.length===1?e=i=parseInt(s[0],10):(e=parseInt(s[0],10),i=parseInt(s[1],10));let l,r,p=this.element.offsetWidth,h=n.length;l=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:h>1?(e-p)/(h-1):0,r=l*t.h*-1;let d,g,b=this.element.offsetHeight,L=a.length;d=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(i-b)/(L-1),g=L>0?d*t.v:0,this.element.style.backgroundPosition=r+"px "+-g+"px"}}destroy(){this.element.remove()}},Fe=0,Si=class{constructor(t){this.Reveal=t}run(t,e){this.reset();let i=this.Reveal.getSlides(),n=i.indexOf(e),a=i.indexOf(t);if(t&&e&&t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(n>a?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||ne();let s=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",s.slideDirection=n>a?"forward":"backward";let l=t.style.display==="none";l&&(t.style.display=this.Reveal.getConfig().display);let r=this.getAutoAnimatableElements(t,e).map((p=>this.autoAnimateElements(p.from,p.to,p.options||{},s,Fe++)));if(l&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let p=.8*s.duration,h=.2*s.duration;this.getUnmatchedAutoAnimateElements(e).forEach((d=>{let g=this.getAutoAnimateOptions(d,s),b="unmatched";g.duration===s.duration&&g.delay===s.delay||(b="unmatched-"+Fe++,r.push(`[data-auto-animate="running"] [data-auto-animate-target="${b}"] { transition: opacity ${g.duration}s ease ${g.delay}s; }`)),d.dataset.autoAnimateTarget=b}),this),r.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${p}s ease ${h}s; }`)}this.autoAnimateStyleSheet.innerHTML=r.join(""),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")})),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){S(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach((t=>{t.dataset.autoAnimate=""})),S(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach((t=>{delete t.dataset.autoAnimateTarget})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,i,n,a){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=a;let s=this.getAutoAnimateOptions(e,n);i.delay!==void 0&&(s.delay=i.delay),i.duration!==void 0&&(s.duration=i.duration),i.easing!==void 0&&(s.easing=i.easing);let l=this.getAutoAnimatableProperties("from",t,i),r=this.getAutoAnimatableProperties("to",e,i);if(e.classList.contains("fragment")&&delete r.styles.opacity,i.translate!==!1||i.scale!==!1){let d=this.Reveal.getScale(),g={x:(l.x-r.x)/d,y:(l.y-r.y)/d,scaleX:l.width/r.width,scaleY:l.height/r.height};g.x=Math.round(1e3*g.x)/1e3,g.y=Math.round(1e3*g.y)/1e3,g.scaleX=Math.round(1e3*g.scaleX)/1e3,g.scaleX=Math.round(1e3*g.scaleX)/1e3;let b=i.translate!==!1&&(g.x!==0||g.y!==0),L=i.scale!==!1&&(g.scaleX!==0||g.scaleY!==0);if(b||L){let u=[];b&&u.push(`translate(${g.x}px, ${g.y}px)`),L&&u.push(`scale(${g.scaleX}, ${g.scaleY})`),l.styles.transform=u.join(" "),l.styles["transform-origin"]="top left",r.styles.transform="none"}}for(let d in r.styles){const g=r.styles[d],b=l.styles[d];g===b?delete r.styles[d]:(g.explicitValue===!0&&(r.styles[d]=g.value),b.explicitValue===!0&&(l.styles[d]=b.value))}let p="",h=Object.keys(r.styles);return h.length>0&&(l.styles.transition="none",r.styles.transition=`all ${s.duration}s ${s.easing} ${s.delay}s`,r.styles["transition-property"]=h.join(", "),r.styles["will-change"]=h.join(", "),p='[data-auto-animate-target="'+a+'"] {'+Object.keys(l.styles).map((d=>d+": "+l.styles[d]+" !important;")).join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+a+'"] {'+Object.keys(r.styles).map((d=>d+": "+r.styles[d]+" !important;")).join("")+"}"),p}getAutoAnimateOptions(t,e){let i={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(i=yt(i,e),t.parentNode){let n=j(t.parentNode,"[data-auto-animate-target]");n&&(i=this.getAutoAnimateOptions(n,i))}return t.dataset.autoAnimateEasing&&(i.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(i.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(i.delay=parseFloat(t.dataset.autoAnimateDelay)),i}getAutoAnimatableProperties(t,e,i){let n=this.Reveal.getConfig(),a={styles:[]};if(i.translate!==!1||i.scale!==!1){let l;if(typeof i.measure=="function")l=i.measure(e);else if(n.center)l=e.getBoundingClientRect();else{let r=this.Reveal.getScale();l={x:e.offsetLeft*r,y:e.offsetTop*r,width:e.offsetWidth*r,height:e.offsetHeight*r}}a.x=l.x,a.y=l.y,a.width=l.width,a.height=l.height}const s=getComputedStyle(e);return(i.styles||n.autoAnimateStyles).forEach((l=>{let r;typeof l=="string"&&(l={property:l}),l.from!==void 0&&t==="from"?r={value:l.from,explicitValue:!0}:l.to!==void 0&&t==="to"?r={value:l.to,explicitValue:!0}:(l.property==="line-height"&&(r=parseFloat(s["line-height"])/parseFloat(s["font-size"])),isNaN(r)&&(r=s[l.property])),r!==""&&(a.styles[l.property]=r)})),a}getAutoAnimatableElements(t,e){let i=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),n=[];return i.filter(((a,s)=>{if(n.indexOf(a.to)===-1)return n.push(a.to),!0}))}getAutoAnimatePairs(t,e){let i=[];const n="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(i,t,e,"[data-id]",(a=>a.nodeName+":::"+a.getAttribute("data-id"))),this.findAutoAnimateMatches(i,t,e,n,(a=>a.nodeName+":::"+a.textContent.trim())),this.findAutoAnimateMatches(i,t,e,"img, video, iframe",(a=>a.nodeName+":::"+(a.getAttribute("src")||a.getAttribute("data-src")))),this.findAutoAnimateMatches(i,t,e,"pre",(a=>a.nodeName+":::"+a.textContent.trim())),i.forEach((a=>{$t(a.from,n)?a.options={scale:!1}:$t(a.from,"pre")&&(a.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(i,a.from,a.to,".hljs .hljs-ln-code",(s=>s.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(i,a.from,a.to,".hljs .hljs-ln-numbers[data-line-number]",(s=>s.getAttribute("data-line-number")),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))}),this),i}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,i,n,a,s){let l={},r={};[].slice.call(e.querySelectorAll(n)).forEach(((p,h)=>{const d=a(p);typeof d=="string"&&d.length&&(l[d]=l[d]||[],l[d].push(p))})),[].slice.call(i.querySelectorAll(n)).forEach(((p,h)=>{const d=a(p);let g;if(r[d]=r[d]||[],r[d].push(p),l[d]){const b=r[d].length-1,L=l[d].length-1;l[d][b]?(g=l[d][b],l[d][b]=null):l[d][L]&&(g=l[d][L],l[d][L]=null)}g&&t.push({from:g,to:p,options:s})}))}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce(((e,i)=>{const n=i.querySelector("[data-auto-animate-target]");return i.hasAttribute("data-auto-animate-target")||n||e.push(i),i.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(i))),e}),[])}},ki=class{constructor(t){this.Reveal=t,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const t=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const e=S(this.Reveal.getRevealElement(),ot),i=S(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let n;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const a=window.getComputedStyle(this.viewportElement);a&&a.background&&(n=a.background);const s=[],l=e[0].parentNode;let r;const p=(h,d,g,b)=>{let L;if(r&&this.Reveal.shouldAutoAnimateBetween(r,h))L=document.createElement("div"),L.className="scroll-page-content scroll-auto-animate-page",L.style.display="none",r.closest(".scroll-page-content").parentNode.appendChild(L);else{const u=document.createElement("div");if(u.className="scroll-page",s.push(u),b&&i.length>d){const w=i[d],q=window.getComputedStyle(w);q&&q.background?u.style.background=q.background:n&&(u.style.background=n)}else n&&(u.style.background=n);const $=document.createElement("div");$.className="scroll-page-sticky",u.appendChild($),L=document.createElement("div"),L.className="scroll-page-content",$.appendChild(L)}L.appendChild(h),h.classList.remove("past","future"),h.setAttribute("data-index-h",d),h.setAttribute("data-index-v",g),h.slideBackgroundElement&&(h.slideBackgroundElement.remove("past","future"),L.insertBefore(h.slideBackgroundElement,h)),r=h};e.forEach(((h,d)=>{this.Reveal.isVerticalStack(h)?h.querySelectorAll("section").forEach(((g,b)=>{p(g,d,b,!0)})):p(h,d,0)}),this),this.createProgressBar(),S(this.Reveal.getRevealElement(),".stack").forEach((h=>h.remove())),s.forEach((h=>l.appendChild(h))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(t),this.activatedCallbacks.forEach((h=>h())),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const t=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(t),this.slideHTMLBeforeActivation=null}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const t=i=>{let n=(i.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;n=Math.max(Math.min(n,1),0),this.viewportElement.scrollTop=n*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},e=i=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)};this.progressBarInner.addEventListener("mousedown",(i=>{i.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),t(i)}))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const t=this.Reveal.getConfig(),e=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),i=this.Reveal.getScale(),n=t.scrollLayout==="compact",a=this.viewportElement.offsetHeight,s=e.height*i,l=n?s:a;this.scrollTriggerHeight=n?s:a,this.viewportElement.style.setProperty("--page-height",l+"px"),this.viewportElement.style.scrollSnapType=typeof t.scrollSnap=="string"?`y ${t.scrollSnap}`:"",this.slideTriggers=[];const r=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=r.map((p=>{const h=this.createPage({pageElement:p,slideElement:p.querySelector("section"),stickyElement:p.querySelector(".scroll-page-sticky"),contentElement:p.querySelector(".scroll-page-content"),backgroundElement:p.querySelector(".slide-background"),autoAnimateElements:p.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});h.pageElement.style.setProperty("--slide-height",t.center===!0?"auto":e.height+"px"),this.slideTriggers.push({page:h,activate:()=>this.activatePage(h),deactivate:()=>this.deactivatePage(h)}),this.createFragmentTriggersForPage(h),h.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(h);let d=Math.max(h.scrollTriggers.length-1,0);d+=h.autoAnimatePages.reduce(((g,b)=>g+Math.max(b.scrollTriggers.length-1,0)),h.autoAnimatePages.length),h.pageElement.querySelectorAll(".scroll-snap-point").forEach((g=>g.remove()));for(let g=0;g<d+1;g++){const b=document.createElement("div");b.className="scroll-snap-point",b.style.height=this.scrollTriggerHeight+"px",b.style.scrollSnapAlign=n?"center":"start",h.pageElement.appendChild(b),g===0&&(b.style.marginTop=-this.scrollTriggerHeight+"px")}return n&&h.scrollTriggers.length>0?(h.pageHeight=a,h.pageElement.style.setProperty("--page-height",a+"px")):(h.pageHeight=l,h.pageElement.style.removeProperty("--page-height")),h.scrollPadding=this.scrollTriggerHeight*d,h.totalHeight=h.pageHeight+h.scrollPadding,h.pageElement.style.setProperty("--page-scroll-padding",h.scrollPadding+"px"),d>0?(h.stickyElement.style.position="sticky",h.stickyElement.style.top=Math.max((a-h.pageHeight)/2,0)+"px"):(h.stickyElement.style.position="relative",h.pageElement.style.scrollSnapAlign=h.pageHeight<a?"center":"start"),h})),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",t.scrollProgress),t.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce(((e,i)=>e+Math.max(i.page.scrollTriggers.length,1)),0);let t=0;this.slideTriggers.forEach(((e,i)=>{e.range=[t,t+Math.max(e.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const n=(e.range[1]-e.range[0])/e.page.scrollTriggers.length;e.page.scrollTriggers.forEach(((a,s)=>{a.range=[t+s*n,t+(s+1)*n]})),t=e.range[1]})),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(t,e){e=e||t.slideElement;const i=this.Reveal.fragments.sort(e.querySelectorAll(".fragment"),!0);return i.length&&(t.fragments=this.Reveal.fragments.sort(e.querySelectorAll(".fragment:not(.disabled)")),t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,t.fragments,e)}}),i.forEach(((n,a)=>{t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(a,t.fragments,e)}})}))),t.scrollTriggers.length}createAutoAnimateTriggersForPage(t){t.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(t.autoAnimateElements).map(((e,i)=>{let n=this.createPage({slideElement:e.querySelector("section"),contentElement:e,backgroundElement:e.querySelector(".slide-background")});return this.createFragmentTriggersForPage(n,n.slideElement),t.autoAnimatePages.push(n),{page:n,activate:()=>this.activatePage(n),deactivate:()=>this.deactivatePage(n)}})))}createPage(t){return t.scrollTriggers=[],t.indexh=parseInt(t.slideElement.getAttribute("data-index-h"),10),t.indexv=parseInt(t.slideElement.getAttribute("data-index-v"),10),t}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((s=>s.remove()));const t=this.viewportElement.scrollHeight,e=this.viewportElement.offsetHeight,i=e/t;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(i*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const n=e/t*this.progressBarHeight,a=Math.min(n/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-a+"px",n>6?this.slideTriggers.forEach((s=>{const{page:l}=s;l.progressBarSlide=document.createElement("div"),l.progressBarSlide.className="scrollbar-slide",l.progressBarSlide.style.top=s.range[0]*this.progressBarHeight+"px",l.progressBarSlide.style.height=(s.range[1]-s.range[0])*this.progressBarHeight-a+"px",l.progressBarSlide.classList.toggle("has-triggers",l.scrollTriggers.length>0),this.progressBarInner.appendChild(l.progressBarSlide),l.scrollTriggerElements=l.scrollTriggers.map(((r,p)=>{const h=document.createElement("div");return h.className="scrollbar-trigger",h.style.top=(r.range[0]-s.range[0])*this.progressBarHeight+"px",h.style.height=(r.range[1]-r.range[0])*this.progressBarHeight-a+"px",l.progressBarSlide.appendChild(h),p===0&&(h.style.display="none"),h}))})):this.pages.forEach((s=>s.progressBarSlide=null))}syncScrollPosition(){const t=this.viewportElement.offsetHeight,e=t/this.viewportElement.scrollHeight,i=this.viewportElement.scrollTop,n=this.viewportElement.scrollHeight-t,a=Math.max(Math.min(i/n,1),0),s=Math.max(Math.min((i+t/2)/this.viewportElement.scrollHeight,1),0);let l;this.slideTriggers.forEach((r=>{const{page:p}=r;a>=r.range[0]-2*e&&a<=r.range[1]+2*e&&!p.loaded?(p.loaded=!0,this.Reveal.slideContent.load(p.slideElement)):p.loaded&&(p.loaded=!1,this.Reveal.slideContent.unload(p.slideElement)),a>=r.range[0]&&a<=r.range[1]?(this.activateTrigger(r),l=r.page):r.active&&this.deactivateTrigger(r)})),l&&l.scrollTriggers.forEach((r=>{s>=r.range[0]&&s<=r.range[1]?this.activateTrigger(r):r.active&&this.deactivateTrigger(r)})),this.setProgressBarValue(i/(this.viewportElement.scrollHeight-t))}setProgressBarValue(t){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${t*this.progressBarScrollableHeight}px)`,this.getAllPages().filter((e=>e.progressBarSlide)).forEach((e=>{e.progressBarSlide.classList.toggle("active",e.active===!0),e.scrollTriggers.forEach(((i,n)=>{e.scrollTriggerElements[n].classList.toggle("active",e.active===!0&&i.active===!0)}))})),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout((()=>{this.progressBar&&this.progressBar.classList.remove("visible")}),500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(t){if(this.active){const e=this.getScrollTriggerBySlide(t);e&&(this.viewportElement.scrollTop=e.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push((()=>this.scrollToSlide(t)))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout((()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null}),50)}restoreScrollPosition(){const t=sessionStorage.getItem("reveal-scroll-top"),e=sessionStorage.getItem("reveal-scroll-origin");t&&e===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(t,10))}activatePage(t){if(!t.active){t.active=!0;const{slideElement:e,backgroundElement:i,contentElement:n,indexh:a,indexv:s}=t;n.style.display="block",e.classList.add("present"),i&&i.classList.add("present"),this.Reveal.setCurrentScrollPage(e,a,s),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(e,this.viewportElement),Array.from(n.parentNode.querySelectorAll(".scroll-page-content")).forEach((l=>{l!==n&&(l.style.display="none")}))}}deactivatePage(t){t.active&&(t.active=!1,t.slideElement&&t.slideElement.classList.remove("present"),t.backgroundElement&&t.backgroundElement.classList.remove("present"))}activateTrigger(t){t.active||(t.active=!0,t.activate())}deactivateTrigger(t){t.active&&(t.active=!1,t.deactivate&&t.deactivate())}getSlideByIndices(t,e){const i=this.getAllPages().find((n=>n.indexh===t&&n.indexv===e));return i?i.slideElement:null}getScrollTriggerBySlide(t){return this.slideTriggers.find((e=>e.page.slideElement===t))}getAllPages(){return this.pages.flatMap((t=>[t,...t.autoAnimatePages||[]]))}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}},Ri=class{constructor(t){this.Reveal=t}async activate(){const t=this.Reveal.getConfig(),e=S(this.Reveal.getRevealElement(),gt),i=t.slideNumber&&/all|print/i.test(t.showSlideNumber),n=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),a=Math.floor(n.width*(1+t.margin)),s=Math.floor(n.height*(1+t.margin)),l=n.width,r=n.height;await new Promise(requestAnimationFrame),ne("@page{size:"+a+"px "+s+"px; margin: 0px;}"),ne(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+l+"px; max-height:"+r+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=a+"px",document.body.style.height=s+"px";const p=this.Reveal.getViewportElement();let h;if(p){const u=window.getComputedStyle(p);u&&u.background&&(h=u.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(l,r),await new Promise(requestAnimationFrame);const d=e.map((u=>u.scrollHeight)),g=[],b=e[0].parentNode;let L=1;e.forEach((function(u,$){if(u.classList.contains("stack")===!1){let w=(a-l)/2,q=(s-r)/2;const Y=d[$];let P=Math.max(Math.ceil(Y/s),1);P=Math.min(P,t.pdfMaxPagesPerSlide),(P===1&&t.center||u.classList.contains("center"))&&(q=Math.max((s-Y)/2,0));const I=document.createElement("div");if(g.push(I),I.className="pdf-page",I.style.height=(s+t.pdfPageHeightOffset)*P+"px",h&&(I.style.background=h),I.appendChild(u),u.style.left=w+"px",u.style.top=q+"px",u.style.width=l+"px",this.Reveal.slideContent.layout(u),u.slideBackgroundElement&&I.insertBefore(u.slideBackgroundElement,u),t.showNotes){const x=this.Reveal.getSlideNotes(u);if(x){const V=typeof t.showNotes=="string"?t.showNotes:"inline",O=document.createElement("div");O.classList.add("speaker-notes"),O.classList.add("speaker-notes-pdf"),O.setAttribute("data-layout",V),O.innerHTML=x,V==="separate-page"?g.push(O):(O.style.left="8px",O.style.bottom="8px",O.style.width=a-16+"px",I.appendChild(O))}}if(i){const x=document.createElement("div");x.classList.add("slide-number"),x.classList.add("slide-number-pdf"),x.innerHTML=L++,I.appendChild(x)}if(t.pdfSeparateFragments){const x=this.Reveal.fragments.sort(I.querySelectorAll(".fragment"),!0);let H;x.forEach((function(V,O){H&&H.forEach((function(T){T.classList.remove("current-fragment")})),V.forEach((function(T){T.classList.add("visible","current-fragment")}),this);const v=I.cloneNode(!0);if(i){const T=O+1;v.querySelector(".slide-number-pdf").innerHTML+="."+T}g.push(v),H=V}),this),x.forEach((function(V){V.forEach((function(O){O.classList.remove("visible","current-fragment")}))}))}else S(I,".fragment:not(.fade-out)").forEach((function(x){x.classList.add("visible")}))}}),this),await new Promise(requestAnimationFrame),g.forEach((u=>b.appendChild(u))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),p.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}},Ii=class{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){S(this.Reveal.getSlidesElement(),".fragment").forEach((t=>{t.classList.add("visible"),t.classList.remove("current-fragment")}))}enable(){S(this.Reveal.getSlidesElement(),".fragment").forEach((t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")}))}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),i=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-i.length>0,next:!!i.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let i=[],n=[],a=[];t.forEach((l=>{if(l.hasAttribute("data-fragment-index")){let r=parseInt(l.getAttribute("data-fragment-index"),10);i[r]||(i[r]=[]),i[r].push(l)}else n.push([l])})),i=i.concat(n);let s=0;return i.forEach((l=>{l.forEach((r=>{a.push(r),r.setAttribute("data-fragment-index",s)})),s++})),e===!0?i:a}sortAll(){this.Reveal.getHorizontalSlides().forEach((t=>{let e=S(t,"section");e.forEach(((i,n)=>{this.sort(i.querySelectorAll(".fragment"))}),this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))}))}update(t,e,i=this.Reveal.getCurrentSlide()){let n={shown:[],hidden:[]};if(i&&this.Reveal.getConfig().fragments&&(e=e||this.sort(i.querySelectorAll(".fragment"))).length){let a=0;if(typeof t!="number"){let s=this.sort(i.querySelectorAll(".fragment.visible")).pop();s&&(t=parseInt(s.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach(((s,l)=>{if(s.hasAttribute("data-fragment-index")&&(l=parseInt(s.getAttribute("data-fragment-index"),10)),a=Math.max(a,l),l<=t){let r=s.classList.contains("visible");s.classList.add("visible"),s.classList.remove("current-fragment"),l===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(s)),s.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(s)),r||(n.shown.push(s),this.Reveal.dispatchEvent({target:s,type:"visible",bubbles:!1}))}else{let r=s.classList.contains("visible");s.classList.remove("visible"),s.classList.remove("current-fragment"),r&&(this.Reveal.slideContent.stopEmbeddedContent(s),n.hidden.push(s),this.Reveal.dispatchEvent({target:s,type:"hidden",bubbles:!1}))}})),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,a),-1),i.setAttribute("data-fragment",t)}return n.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:n.hidden[0],fragments:n.hidden}}),n.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:n.shown[0],fragments:n.shown}}),n}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments){let n=this.sort(i.querySelectorAll(".fragment:not(.disabled)"));if(n.length){if(typeof t!="number"){let s=this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=s?parseInt(s.getAttribute("data-fragment-index")||0,10):-1}t+=e;let a=this.update(t,n);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!a.shown.length&&!a.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Li=class{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),S(this.Reveal.getRevealElement(),gt).forEach((n=>{n.classList.contains("stack")||n.addEventListener("click",this.onSlideClicked,!0)}));const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const i=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:i.h,indexv:i.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach(((t,e)=>{t.setAttribute("data-index-h",e),ct(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&S(t,"section").forEach(((i,n)=>{i.setAttribute("data-index-h",e),i.setAttribute("data-index-v",n),ct(i,"translate3d(0, "+n*this.overviewSlideHeight+"px, 0)")}))})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((t,e)=>{ct(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),S(t,".slide-background").forEach(((i,n)=>{ct(i,"translate3d(0, "+n*this.overviewSlideHeight+"px, 0)")}))}))}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,i=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-i.h*this.overviewSlideWidth+"px)","translateY("+-i.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),S(this.Reveal.getRevealElement(),gt).forEach((e=>{ct(e,""),e.removeEventListener("click",this.onSlideClicked,!0)})),S(this.Reveal.getBackgroundsElement(),".slide-background").forEach((e=>{ct(e,"")})),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let i=parseInt(e.getAttribute("data-index-h"),10),n=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(i,n)}}}},xi=class{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let i=t.keyCode,n=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let a=document.activeElement&&document.activeElement.isContentEditable===!0,s=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),l=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),r=!([32,37,38,39,40,63,78,80,191].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(a||s||l||r)return;let p,h=[66,86,190,191,112];if(typeof e.keyboard=="object")for(p in e.keyboard)e.keyboard[p]==="togglePause"&&h.push(parseInt(p,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(t.key)||this.Reveal.isPaused()&&h.indexOf(i)===-1)return!1;let d=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),g=!1;if(typeof e.keyboard=="object"){for(p in e.keyboard)if(parseInt(p,10)===i){let b=e.keyboard[p];typeof b=="function"?b.apply(null,[t]):typeof b=="string"&&typeof this.Reveal[b]=="function"&&this.Reveal[b].call(),g=!0}}if(g===!1){for(p in this.bindings)if(parseInt(p,10)===i){let b=this.bindings[p].callback;typeof b=="function"?b.apply(null,[t]):typeof b=="string"&&typeof this.Reveal[b]=="function"&&this.Reveal[b].call(),g=!0}}g===!1&&(g=!0,i===80||i===33?this.Reveal.prev({skipFragments:t.altKey}):i===78||i===34?this.Reveal.next({skipFragments:t.altKey}):i===72||i===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&d?e.rtl?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):i===76||i===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&d?e.rtl?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):i===75||i===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&d?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):i===74||i===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&d?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):i===36?this.Reveal.slide(0):i===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):i===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):[58,59,66,86,190].includes(i)||i===191&&!t.shiftKey?this.Reveal.togglePause():i===70?Xe(e.embedded?this.Reveal.getViewportElement():document.documentElement):i===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(n):i===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():i===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():i!==63&&i!==191||!t.shiftKey?i===112?this.Reveal.toggleHelp():g=!1:this.Reveal.toggleHelp()),g?t.preventDefault&&t.preventDefault():i!==27&&i!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}},Ti=class{MAX_REPLACE_STATE_FREQUENCY=1e3;constructor(t){this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let i=t.replace(/^#\/?/,""),n=i.split("/");if(/^[0-9]*$/.test(n[0])||!i.length){const a=this.Reveal.getConfig();let s,l=a.hashOneBasedIndex||e.oneBasedIndex?1:0,r=parseInt(n[0],10)-l||0,p=parseInt(n[1],10)-l||0;return a.fragmentInURL&&(s=parseInt(n[2],10),isNaN(s)&&(s=void 0)),{h:r,v:p,f:s}}{let a,s;/\/[-\d]+$/g.test(i)&&(s=parseInt(i.split("/").pop(),10),s=isNaN(s)?void 0:s,i=i.split("/").shift());try{a=document.getElementById(decodeURIComponent(i)).closest(".slides section")}catch{}if(a)return{...this.Reveal.getIndices(a),f:s}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),i=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(i){let n=this.getHash();e.history?window.location.hash=n:e.hash&&(n==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+n))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout((()=>this.replaceState(t)),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",i=t||this.Reveal.getCurrentSlide(),n=i?i.getAttribute("id"):null;n&&(n=encodeURIComponent(n));let a=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(a.f=void 0),typeof n=="string"&&n.length)e="/"+n,a.f>=0&&(e+="/"+a.f);else{let s=this.Reveal.getConfig().hashOneBasedIndex?1:0;(a.h>0||a.v>0||a.f>=0)&&(e+=a.h+s),(a.v>0||a.f>=0)&&(e+="/"+(a.v+s)),a.f>=0&&(e+="/"+a.f)}return e}onWindowHashChange(t){this.readURL()}},Ci=class{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=S(e,".navigate-left"),this.controlsRight=S(e,".navigate-right"),this.controlsUp=S(e,".navigate-up"),this.controlsDown=S(e,".navigate-down"),this.controlsPrev=S(e,".navigate-prev"),this.controlsNext=S(e,".navigate-next"),this.controlsFullscreen=S(e,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls&&(t.controls!=="speaker-only"||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];ei&&(t=["touchstart"]),t.forEach((e=>{this.controlsLeft.forEach((i=>i.addEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((i=>i.addEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((i=>i.addEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((i=>i.addEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((i=>i.addEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((i=>i.addEventListener(e,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((i=>i.addEventListener(e,this.onEnterFullscreen,!1)))}))}unbind(){["touchstart","click"].forEach((t=>{this.controlsLeft.forEach((e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((e=>e.removeEventListener(t,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((e=>e.removeEventListener(t,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((e=>e.removeEventListener(t,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((e=>e.removeEventListener(t,this.onEnterFullscreen,!1)))}))}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((i=>{i.classList.remove("enabled","fragmented"),i.setAttribute("disabled","disabled")})),t.left&&this.controlsLeft.forEach((i=>{i.classList.add("enabled"),i.removeAttribute("disabled")})),t.right&&this.controlsRight.forEach((i=>{i.classList.add("enabled"),i.removeAttribute("disabled")})),t.up&&this.controlsUp.forEach((i=>{i.classList.add("enabled"),i.removeAttribute("disabled")})),t.down&&this.controlsDown.forEach((i=>{i.classList.add("enabled"),i.removeAttribute("disabled")})),(t.left||t.up)&&this.controlsPrev.forEach((i=>{i.classList.add("enabled"),i.removeAttribute("disabled")})),(t.right||t.down)&&this.controlsNext.forEach((i=>{i.classList.add("enabled"),i.removeAttribute("disabled")}));let e=this.Reveal.getCurrentSlide();if(e){let i=this.Reveal.fragments.availableRoutes();i.prev&&this.controlsPrev.forEach((s=>{s.classList.add("fragmented","enabled"),s.removeAttribute("disabled")})),i.next&&this.controlsNext.forEach((s=>{s.classList.add("fragmented","enabled"),s.removeAttribute("disabled")}));const n=this.Reveal.isVerticalSlide(e),a=n&&e.parentElement&&e.parentElement.querySelectorAll(":scope > section").length>1;n&&a?(i.prev&&this.controlsUp.forEach((s=>{s.classList.add("fragmented","enabled"),s.removeAttribute("disabled")})),i.next&&this.controlsDown.forEach((s=>{s.classList.add("fragmented","enabled"),s.removeAttribute("disabled")}))):(i.prev&&this.controlsLeft.forEach((s=>{s.classList.add("fragmented","enabled"),s.removeAttribute("disabled")})),i.next&&this.controlsRight.forEach((s=>{s.classList.add("fragmented","enabled"),s.removeAttribute("disabled")})))}if(this.Reveal.getConfig().controlsTutorial){let i=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&i.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&i.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(t){const e=this.Reveal.getConfig(),i=this.Reveal.getViewportElement();Xe(e.embedded?i:i.parentElement)}},Ni=class{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),i=e.length,n=Math.floor(t.clientX/this.getMaxWidth()*i);this.Reveal.getConfig().rtl&&(n=i-n);let a=this.Reveal.getIndices(e[n]);this.Reveal.slide(a.h,a.v)}destroy(){this.element.remove()}};class Oi{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const Ve=(o,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=o,typeof t=="function"&&(e.onload=e.onreadystatechange=n=>{(n.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=n=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+n))});const i=document.querySelector("head");i.insertBefore(e,i.lastChild)};class Pi{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise((i=>{let n=[],a=0;if(e.forEach((s=>{s.condition&&!s.condition()||(s.async?this.asyncDependencies.push(s):n.push(s))})),n.length){a=n.length;const s=l=>{l&&typeof l.callback=="function"&&l.callback(),--a==0&&this.initPlugins().then(i)};n.forEach((l=>{typeof l.id=="string"?(this.registerPlugin(l),s(l)):typeof l.src=="string"?Ve(l.src,(()=>s(l))):(console.warn("Unrecognized plugin format",l),s())}))}else this.initPlugins().then(i)}))}initPlugins(){return new Promise((t=>{let e=Object.values(this.registeredPlugins),i=e.length;if(i===0)this.loadAsync().then(t);else{let n,a=()=>{--i==0?this.loadAsync().then(t):n()},s=0;n=()=>{let l=e[s++];if(typeof l.init=="function"){let r=l.init(this.Reveal);r&&typeof r.then=="function"?r.then(a):a()}else a()},n()}}))}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach((t=>{Ve(t.src,t.callback)})),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((t=>{typeof t.destroy=="function"&&t.destroy()})),this.registeredPlugins={},this.asyncDependencies=[]}}class Mi{constructor(t){this.Reveal=t,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector="a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":this.iframeTriggerSelector="[data-preview-link]:not([data-preview-link=false])";const t=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,e=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;t||e?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(t){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(t),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(t){this.close(),this.state={previewIframe:t},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-button r-overlay-external" href="${t}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${t}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector("iframe").addEventListener("load",(e=>{this.dom.dataset.state="loaded"}),!1),this.dom.querySelector(".r-overlay-close").addEventListener("click",(e=>{this.close(),e.preventDefault()}),!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",(e=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:t}})}previewMedia(t,e,i){if(e!=="image"&&e!=="video")return void console.warn("Please specify a valid media type to preview (image|video)");this.close(),i=i||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=i,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;const n=this.dom.querySelector(".r-overlay-content");if(e==="image"){this.state={previewImage:t,previewFit:i};const a=document.createElement("img",{});a.src=t,n.appendChild(a),a.addEventListener("load",(()=>{this.dom.dataset.state="loaded"}),!1),a.addEventListener("error",(()=>{this.dom.dataset.state="error",n.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'}),!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",(s=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:t}})}else{if(e!=="video")throw new Error("Please specify a valid media type to preview");{this.state={previewVideo:t,previewFit:i};const a=document.createElement("video");a.autoplay=this.dom.dataset.previewAutoplay!=="false",a.controls=this.dom.dataset.previewControls!=="false",a.loop=this.dom.dataset.previewLoop==="true",a.muted=this.dom.dataset.previewMuted==="true",a.playsInline=!0,a.src=t,n.appendChild(a),a.addEventListener("loadeddata",(()=>{this.dom.dataset.state="loaded"}),!1),a.addEventListener("error",(()=>{this.dom.dataset.state="error",n.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'}),!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:t}})}}this.dom.querySelector(".r-overlay-close").addEventListener("click",(a=>{this.close(),a.preventDefault()}),!1)}previewImage(t,e){this.previewMedia(t,"image",e)}previewVideo(t,e){this.previewMedia(t,"video",e)}toggleHelp(t){typeof t=="boolean"?t?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let t='<p class="title">Keyboard Shortcuts</p>',e=this.Reveal.keyboard.getShortcuts(),i=this.Reveal.keyboard.getBindings();t+="<table><th>KEY</th><th>ACTION</th>";for(let n in e)t+=`<tr><td>${n}</td><td>${e[n]}</td></tr>`;for(let n in i)i[n].key&&i[n].description&&(t+=`<tr><td>${i[n].key}</td><td>${i[n].description}</td></tr>`);t+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${t}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",(n=>{this.close(),n.preventDefault()}),!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return!!this.dom&&(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0)}getState(){return this.state}setState(t){this.stateProps.every((e=>this.state[e]===t[e]))||(t.previewIframe?this.previewIframe(t.previewIframe):t.previewImage?this.previewImage(t.previewImage,t.previewFit):t.previewVideo?this.previewVideo(t.previewVideo,t.previewFit):this.close())}onSlidesClicked(t){const e=t.target,i=e.closest(this.iframeTriggerSelector),n=e.closest(this.mediaTriggerSelector);if(i){if(t.metaKey||t.shiftKey||t.altKey)return;let a=i.getAttribute("href")||i.getAttribute("data-preview-link");a&&(this.previewIframe(a),t.preventDefault())}else if(n){if(n.hasAttribute("data-preview-image")){let a=n.dataset.previewImage||n.getAttribute("src");a&&(this.previewImage(a,n.dataset.previewFit),t.preventDefault())}else if(n.hasAttribute("data-preview-video")){let a=n.dataset.previewVideo||n.getAttribute("src");if(!a){let s=n.querySelector("source");s&&(a=s.getAttribute("src"))}a&&(this.previewVideo(a,n.dataset.previewFit),t.preventDefault())}}}destroy(){this.close()}}let Di=class{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if($t(t,"video[controls], audio[controls]"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.touchCaptured=!1,this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)ei&&t.preventDefault();else{this.Reveal.onUserInput(t);let i=t.touches[0].clientX,n=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let a=this.Reveal.availableRoutes({includeFragments:!0}),s=i-this.touchStartX,l=n-this.touchStartY;s>40&&Math.abs(s)>Math.abs(l)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):s<-40&&Math.abs(s)>Math.abs(l)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):l>40&&a.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):l<-40&&a.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}};const te="focus",_e="blur";class Ui{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==te&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=te}blur(){this.state!==_e&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=_e}isFocused(){return this.state===te}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=j(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class Bi{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map((i=>i.innerHTML)).join(`
`):null}destroy(){this.element.remove()}}class zi{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,i=this.diameter2,n=this.diameter2,a=28;this.progressOffset+=.1*(1-this.progressOffset);const s=-Math.PI/2+t*(2*Math.PI),l=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(i,n,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(i,n,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(i,n,e,l,s,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(i-14,n-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,a),this.context.fillRect(18,0,10,a)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,a),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var $i={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const ii="5.2.1";function ni(o,t){arguments.length<2&&(t=arguments[0],o=document.querySelector(".reveal"));const e={};let i,n,a,s,l,r={},p=!1,h=!1,d={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},g=[],b=1,L={layout:"",overview:""},u={},$="idle",w=0,q=0,Y=-1,P=!1,I=new bi(e),x=new Ei(e),H=new Ai(e),V=new Si(e),O=new wi(e),v=new ki(e),T=new Ri(e),C=new Ii(e),D=new Li(e),W=new xi(e),G=new Ti(e),_=new Ci(e),nt=new Ni(e),oe=new Oi(e),et=new Pi(e),F=new Mi(e),ht=new Ui(e),Ht=new Di(e),X=new Bi(e);function pi(){p!==!1&&(h=!0,r.showHiddenSlides||S(u.wrapper,'section[data-visibility="hidden"]').forEach((c=>{const m=c.parentNode;m.childElementCount===1&&/section/i.test(m.nodeName)?m.remove():c.remove()})),(function(){u.slides.classList.add("no-transition"),Et?u.wrapper.classList.add("no-hover"):u.wrapper.classList.remove("no-hover"),O.render(),x.render(),H.render(),_.render(),nt.render(),X.render(),u.pauseOverlay=((c,m,f,y="")=>{let E=c.querySelectorAll("."+f);for(let M=0;M<E.length;M++){let B=E[M];if(B.parentNode===c)return B}let N=document.createElement(m);return N.className=f,N.innerHTML=y,c.appendChild(N),N})(u.wrapper,"div","pause-overlay",r.controls?'<button class="resume-button">Resume presentation</button>':null),u.statusElement=(function(){let c=u.wrapper.querySelector(".aria-status");return c||(c=document.createElement("div"),c.style.position="absolute",c.style.height="1px",c.style.width="1px",c.style.overflow="hidden",c.style.clip="rect( 1px, 1px, 1px, 1px )",c.classList.add("aria-status"),c.setAttribute("aria-live","polite"),c.setAttribute("aria-atomic","true"),u.wrapper.appendChild(c)),c})(),u.wrapper.setAttribute("role","application")})(),r.postMessage&&window.addEventListener("message",Me,!1),setInterval((()=>{(!v.isActive()&&u.wrapper.scrollTop!==0||u.wrapper.scrollLeft!==0)&&(u.wrapper.scrollTop=0,u.wrapper.scrollLeft=0)}),1e3),document.addEventListener("fullscreenchange",Mt),document.addEventListener("webkitfullscreenchange",Mt),rt().forEach((c=>{S(c,"section").forEach(((m,f)=>{f>0&&(m.classList.remove("present"),m.classList.remove("past"),m.classList.add("future"),m.setAttribute("aria-hidden","true"))}))})),le(),O.update(!0),(function(){const c=r.view==="print",m=r.view==="scroll"||r.view==="reader";(c||m)&&(c?Lt():Ht.unbind(),u.viewport.classList.add("loading-scroll-mode"),c?document.readyState==="complete"?T.activate():window.addEventListener("load",(()=>T.activate())):v.activate())})(),G.readURL(),setTimeout((()=>{u.slides.classList.remove("no-transition"),u.wrapper.classList.add("ready"),J({type:"ready",data:{indexh:i,indexv:n,currentSlide:s}})}),1))}function Ft(c){u.statusElement.textContent=c}function It(c){let m="";if(c.nodeType===3)m+=c.textContent;else if(c.nodeType===1){let f=c.getAttribute("aria-hidden"),y=window.getComputedStyle(c).display==="none";f==="true"||y||Array.from(c.childNodes).forEach((E=>{m+=It(E)}))}return m=m.trim(),m===""?"":m+" "}function le(c){const m={...r};if(typeof c=="object"&&yt(r,c),e.isReady()===!1)return;const f=u.wrapper.querySelectorAll(gt).length;u.wrapper.classList.remove(m.transition),u.wrapper.classList.add(r.transition),u.wrapper.setAttribute("data-transition-speed",r.transitionSpeed),u.wrapper.setAttribute("data-background-transition",r.backgroundTransition),u.viewport.style.setProperty("--slide-width",typeof r.width=="string"?r.width:r.width+"px"),u.viewport.style.setProperty("--slide-height",typeof r.height=="string"?r.height:r.height+"px"),r.shuffle&&Kt(),Jt(u.wrapper,"embedded",r.embedded),Jt(u.wrapper,"rtl",r.rtl),Jt(u.wrapper,"center",r.center),r.pause===!1&&wt(),V.reset(),l&&(l.destroy(),l=null),f>1&&r.autoSlide&&r.autoSlideStoppable&&(l=new zi(u.wrapper,(()=>Math.min(Math.max((Date.now()-Y)/w,0),1))),l.on("click",gi),P=!1),r.navigationMode!=="default"?u.wrapper.setAttribute("data-navigation-mode",r.navigationMode):u.wrapper.removeAttribute("data-navigation-mode"),X.configure(r,m),ht.configure(r,m),oe.configure(r,m),_.configure(r,m),nt.configure(r,m),W.configure(r,m),C.configure(r,m),x.configure(r,m),Ae()}function ce(){window.addEventListener("resize",Be,!1),r.touch&&Ht.bind(),r.keyboard&&W.bind(),r.progress&&nt.bind(),r.respondToHashChanges&&G.bind(),_.bind(),ht.bind(),u.slides.addEventListener("click",Ue,!1),u.slides.addEventListener("transitionend",De,!1),u.pauseOverlay.addEventListener("click",wt,!1),r.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",ze,!1)}function Lt(){Ht.unbind(),ht.unbind(),W.unbind(),_.unbind(),nt.unbind(),G.unbind(),window.removeEventListener("resize",Be,!1),u.slides.removeEventListener("click",Ue,!1),u.slides.removeEventListener("transitionend",De,!1),u.pauseOverlay.removeEventListener("click",wt,!1)}function de(c,m,f){o.addEventListener(c,m,f)}function ue(c,m,f){o.removeEventListener(c,m,f)}function Vt(c){typeof c.layout=="string"&&(L.layout=c.layout),typeof c.overview=="string"&&(L.overview=c.overview),L.layout?ct(u.slides,L.layout+" "+L.overview):ct(u.slides,L.overview)}function J({target:c=u.wrapper,type:m,data:f,bubbles:y=!0}){let E=document.createEvent("HTMLEvents",1,2);return E.initEvent(m,y,!0),yt(E,f),c.dispatchEvent(E),c===u.wrapper&&pe(m),E}function he(c){J({type:"slidechanged",data:{indexh:i,indexv:n,previousSlide:a,currentSlide:s,origin:c}})}function pe(c,m){if(r.postMessageEvents&&window.parent!==window.self){let f={namespace:"reveal",eventName:c,state:Oe()};yt(f,m),window.parent.postMessage(JSON.stringify(f),"*")}}function vt(){if(u.wrapper&&!T.isActive()){const c=u.viewport.offsetWidth,m=u.viewport.offsetHeight;if(!r.disableLayout){Et&&!r.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const f=v.isActive()?xt(c,m):xt(),y=b;ge(r.width,r.height),u.slides.style.width=f.width+"px",u.slides.style.height=f.height+"px",b=Math.min(f.presentationWidth/f.width,f.presentationHeight/f.height),b=Math.max(b,r.minScale),b=Math.min(b,r.maxScale),b===1||v.isActive()?(u.slides.style.zoom="",u.slides.style.left="",u.slides.style.top="",u.slides.style.bottom="",u.slides.style.right="",Vt({layout:""})):(u.slides.style.zoom="",u.slides.style.left="50%",u.slides.style.top="50%",u.slides.style.bottom="auto",u.slides.style.right="auto",Vt({layout:"translate(-50%, -50%) scale("+b+")"}));const E=Array.from(u.wrapper.querySelectorAll(gt));for(let N=0,M=E.length;N<M;N++){const B=E[N];B.style.display!=="none"&&(r.center||B.classList.contains("center")?B.classList.contains("stack")?B.style.top=0:B.style.top=Math.max((f.height-B.scrollHeight)/2,0)+"px":B.style.top="")}y!==b&&J({type:"resize",data:{oldScale:y,scale:b,size:f}})}(function(){if(u.wrapper&&!r.disableLayout&&!T.isActive()&&typeof r.scrollActivationWidth=="number"&&r.view!=="scroll"){const f=xt();f.presentationWidth>0&&f.presentationWidth<=r.scrollActivationWidth?v.isActive()||(O.create(),v.activate()):v.isActive()&&v.deactivate()}})(),u.viewport.style.setProperty("--slide-scale",b),u.viewport.style.setProperty("--viewport-width",c+"px"),u.viewport.style.setProperty("--viewport-height",m+"px"),v.layout(),nt.update(),O.updateParallax(),D.isActive()&&D.update()}}function ge(c,m){S(u.slides,"section > .stretch, section > .r-stretch").forEach((f=>{let y=((E,N=0)=>{if(E){let M,B=E.style.height;return E.style.height="0px",E.parentNode.style.height="auto",M=N-E.parentNode.offsetHeight,E.style.height=B+"px",E.parentNode.style.removeProperty("height"),M}return N})(f,m);if(/(img|video)/gi.test(f.nodeName)){const E=f.naturalWidth||f.videoWidth,N=f.naturalHeight||f.videoHeight,M=Math.min(c/E,y/N);f.style.width=E*M+"px",f.style.height=N*M+"px"}else f.style.width=c+"px",f.style.height=y+"px"}))}function xt(c,m){let f=r.width,y=r.height;r.disableLayout&&(f=u.slides.offsetWidth,y=u.slides.offsetHeight);const E={width:f,height:y,presentationWidth:c||u.wrapper.offsetWidth,presentationHeight:m||u.wrapper.offsetHeight};return E.presentationWidth-=E.presentationWidth*r.margin,E.presentationHeight-=E.presentationHeight*r.margin,typeof E.width=="string"&&/%$/.test(E.width)&&(E.width=parseInt(E.width,10)/100*E.presentationWidth),typeof E.height=="string"&&/%$/.test(E.height)&&(E.height=parseInt(E.height,10)/100*E.presentationHeight),E}function me(c,m){typeof c=="object"&&typeof c.setAttribute=="function"&&c.setAttribute("data-previous-indexv",m||0)}function ve(c){if(typeof c=="object"&&typeof c.setAttribute=="function"&&c.classList.contains("stack")){const m=c.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(c.getAttribute(m)||0,10)}return 0}function At(c=s){return c&&c.parentNode&&!!c.parentNode.nodeName.match(/section/i)}function fe(){return!(!s||!At(s))&&!s.nextElementSibling}function be(){return i===0&&n===0}function _t(){return!!s&&!s.nextElementSibling&&(!At(s)||!s.parentNode.nextElementSibling)}function ye(){if(r.pause){const c=u.wrapper.classList.contains("paused");Tt(),u.wrapper.classList.add("paused"),c===!1&&J({type:"paused"})}}function wt(){const c=u.wrapper.classList.contains("paused");u.wrapper.classList.remove("paused"),ft(),c&&J({type:"resumed"})}function Ee(c){typeof c=="boolean"?c?ye():wt():St()?wt():ye()}function St(){return u.wrapper.classList.contains("paused")}function it(c,m,f,y){if(J({type:"beforeslidechange",data:{indexh:c===void 0?i:c,indexv:m===void 0?n:m,origin:y}}).defaultPrevented)return;a=s;const E=u.wrapper.querySelectorAll(ot);if(v.isActive()){const Z=v.getSlideByIndices(c,m);return void(Z&&v.scrollToSlide(Z))}if(E.length===0)return;m!==void 0||D.isActive()||(m=ve(E[c])),a&&a.parentNode&&a.parentNode.classList.contains("stack")&&me(a.parentNode,n);const N=g.concat();g.length=0;let M=i||0,B=n||0;i=we(ot,c===void 0?i:c),n=we(He,m===void 0?n:m);let st=i!==M||n!==B;st||(a=null);let pt=E[i],Q=pt.querySelectorAll("section");o.classList.toggle("is-vertical-slide",Q.length>1),s=Q[n]||pt;let z=!1;st&&a&&s&&!D.isActive()&&($="running",z=jt(a,s,M,B),z&&u.slides.classList.add("disable-slide-transitions")),Wt(),vt(),D.isActive()&&D.update(),f!==void 0&&C.goto(f),a&&a!==s&&(a.classList.remove("present"),a.setAttribute("aria-hidden","true"),be()&&setTimeout((()=>{S(u.wrapper,ot+".stack").forEach((Z=>{me(Z,0)}))}),0));t:for(let Z=0,mi=g.length;Z<mi;Z++){for(let Dt=0;Dt<N.length;Dt++)if(N[Dt]===g[Z]){N.splice(Dt,1);continue t}u.viewport.classList.add(g[Z]),J({type:g[Z]})}for(;N.length;)u.viewport.classList.remove(N.pop());st&&he(y),!st&&a||(I.stopEmbeddedContent(a),I.startEmbeddedContent(s)),requestAnimationFrame((()=>{Ft(It(s))})),nt.update(),_.update(),X.update(),O.update(),O.updateParallax(),x.update(),C.update(),G.writeURL(),ft(),z&&(setTimeout((()=>{u.slides.classList.remove("disable-slide-transitions")}),0),r.autoAnimate&&V.run(a,s))}function jt(c,m,f,y){return c.hasAttribute("data-auto-animate")&&m.hasAttribute("data-auto-animate")&&c.getAttribute("data-auto-animate-id")===m.getAttribute("data-auto-animate-id")&&!(i>f||n>y?m:c).hasAttribute("data-auto-animate-restart")}function Ae(){Lt(),ce(),vt(),w=r.autoSlide,ft(),O.create(),G.writeURL(),r.sortFragmentsOnSync===!0&&C.sortAll(),_.update(),nt.update(),Wt(),X.update(),X.updateVisibility(),F.update(),O.update(!0),x.update(),I.formatEmbeddedContent(),r.autoPlayMedia===!1?I.stopEmbeddedContent(s,{unloadIframes:!1}):I.startEmbeddedContent(s),D.isActive()&&D.layout()}function Kt(c=rt()){c.forEach(((m,f)=>{let y=c[Math.floor(Math.random()*c.length)];y.parentNode===m.parentNode&&m.parentNode.insertBefore(m,y);let E=m.querySelectorAll("section");E.length&&Kt(E)}))}function we(c,m){let f=S(u.wrapper,c),y=f.length,E=v.isActive()||T.isActive(),N=!1,M=!1;if(y){r.loop&&(m>=y&&(N=!0),(m%=y)<0&&(m=y+m,M=!0)),m=Math.max(Math.min(m,y-1),0);for(let Q=0;Q<y;Q++){let z=f[Q],Z=r.rtl&&!At(z);z.classList.remove("past"),z.classList.remove("present"),z.classList.remove("future"),z.setAttribute("hidden",""),z.setAttribute("aria-hidden","true"),z.querySelector("section")&&z.classList.add("stack"),E?z.classList.add("present"):Q<m?(z.classList.add(Z?"future":"past"),r.fragments&&Se(z)):Q>m?(z.classList.add(Z?"past":"future"),r.fragments&&ke(z)):Q===m&&r.fragments&&(N?ke(z):M&&Se(z))}let B=f[m],st=B.classList.contains("present");B.classList.add("present"),B.removeAttribute("hidden"),B.removeAttribute("aria-hidden"),st||J({target:B,type:"visible",bubbles:!1});let pt=B.getAttribute("data-state");pt&&(g=g.concat(pt.split(" ")))}else m=0;return m}function Se(c){S(c,".fragment").forEach((m=>{m.classList.add("visible"),m.classList.remove("current-fragment")}))}function ke(c){S(c,".fragment.visible").forEach((m=>{m.classList.remove("visible","current-fragment")}))}function Wt(){let c,m,f=rt(),y=f.length;if(y&&i!==void 0){let E=D.isActive()?10:r.viewDistance;Et&&(E=D.isActive()?6:r.mobileViewDistance),T.isActive()&&(E=Number.MAX_VALUE);for(let N=0;N<y;N++){let M=f[N],B=S(M,"section"),st=B.length;if(c=Math.abs((i||0)-N)||0,r.loop&&(c=Math.abs(((i||0)-N)%(y-E))||0),c<E?I.load(M):I.unload(M),st){let pt=ve(M);for(let Q=0;Q<st;Q++){let z=B[Q];m=Math.abs(N===(i||0)?(n||0)-Q:Q-pt),c+m<E?I.load(z):I.unload(z)}}}Te()?u.wrapper.classList.add("has-vertical-slides"):u.wrapper.classList.remove("has-vertical-slides"),xe()?u.wrapper.classList.add("has-horizontal-slides"):u.wrapper.classList.remove("has-horizontal-slides")}}function at({includeFragments:c=!1}={}){let m=u.wrapper.querySelectorAll(ot),f=u.wrapper.querySelectorAll(He),y={left:i>0,right:i<m.length-1,up:n>0,down:n<f.length-1};if(r.loop&&(m.length>1&&(y.left=!0,y.right=!0),f.length>1&&(y.up=!0,y.down=!0)),m.length>1&&r.navigationMode==="linear"&&(y.right=y.right||y.down,y.left=y.left||y.up),c===!0){let E=C.availableRoutes();y.left=y.left||E.prev,y.up=y.up||E.prev,y.down=y.down||E.next,y.right=y.right||E.next}if(r.rtl){let E=y.left;y.left=y.right,y.right=E}return y}function Re(c=s){let m=rt(),f=0;t:for(let y=0;y<m.length;y++){let E=m[y],N=E.querySelectorAll("section");for(let M=0;M<N.length;M++){if(N[M]===c)break t;N[M].dataset.visibility!=="uncounted"&&f++}if(E===c)break;E.classList.contains("stack")===!1&&E.dataset.visibility!=="uncounted"&&f++}return f}function Ie(c){let m,f=i,y=n;if(c)if(v.isActive())f=parseInt(c.getAttribute("data-index-h"),10),c.getAttribute("data-index-v")&&(y=parseInt(c.getAttribute("data-index-v"),10));else{let E=At(c),N=E?c.parentNode:c,M=rt();f=Math.max(M.indexOf(N),0),y=void 0,E&&(y=Math.max(S(c.parentNode,"section").indexOf(c),0))}if(!c&&s&&s.querySelectorAll(".fragment").length>0){let E=s.querySelector(".current-fragment");m=E&&E.hasAttribute("data-fragment-index")?parseInt(E.getAttribute("data-fragment-index"),10):s.querySelectorAll(".fragment.visible").length-1}return{h:f,v:y,f:m}}function Gt(){return S(u.wrapper,gt+':not(.stack):not([data-visibility="uncounted"])')}function rt(){return S(u.wrapper,ot)}function Le(){return S(u.wrapper,".slides>section>section")}function xe(){return rt().length>1}function Te(){return Le().length>1}function Ce(){return Gt().length}function Ne(c,m){let f=rt()[c],y=f&&f.querySelectorAll("section");return y&&y.length&&typeof m=="number"?y?y[m]:void 0:f}function Oe(){let c=Ie();return{indexh:c.h,indexv:c.v,indexf:c.f,paused:St(),overview:D.isActive(),...F.getState()}}function ft(){if(Tt(),s&&r.autoSlide!==!1){let c=s.querySelector(".current-fragment[data-autoslide]"),m=c?c.getAttribute("data-autoslide"):null,f=s.parentNode?s.parentNode.getAttribute("data-autoslide"):null,y=s.getAttribute("data-autoslide");m?w=parseInt(m,10):y?w=parseInt(y,10):f?w=parseInt(f,10):(w=r.autoSlide,s.querySelectorAll(".fragment").length===0&&S(s,"video, audio").forEach((E=>{E.hasAttribute("data-autoplay")&&w&&1e3*E.duration/E.playbackRate>w&&(w=1e3*E.duration/E.playbackRate+1e3)}))),!w||P||St()||D.isActive()||_t()&&!C.availableRoutes().next&&r.loop!==!0||(q=setTimeout((()=>{typeof r.autoSlideMethod=="function"?r.autoSlideMethod():Zt(),ft()}),w),Y=Date.now()),l&&l.setPlaying(q!==-1)}}function Tt(){clearTimeout(q),q=-1}function Ct(){w&&!P&&(P=!0,J({type:"autoslidepaused"}),clearTimeout(q),l&&l.setPlaying(!1))}function Nt(){w&&P&&(P=!1,J({type:"autoslideresumed"}),ft())}function Ot({skipFragments:c=!1}={}){if(d.hasNavigatedHorizontally=!0,v.isActive())return v.prev();r.rtl?(D.isActive()||c||C.next()===!1)&&at().left&&it(i+1,r.navigationMode==="grid"?n:void 0):(D.isActive()||c||C.prev()===!1)&&at().left&&it(i-1,r.navigationMode==="grid"?n:void 0)}function Pt({skipFragments:c=!1}={}){if(d.hasNavigatedHorizontally=!0,v.isActive())return v.next();r.rtl?(D.isActive()||c||C.prev()===!1)&&at().right&&it(i-1,r.navigationMode==="grid"?n:void 0):(D.isActive()||c||C.next()===!1)&&at().right&&it(i+1,r.navigationMode==="grid"?n:void 0)}function Qt({skipFragments:c=!1}={}){if(v.isActive())return v.prev();(D.isActive()||c||C.prev()===!1)&&at().up&&it(i,n-1)}function Yt({skipFragments:c=!1}={}){if(d.hasNavigatedVertically=!0,v.isActive())return v.next();(D.isActive()||c||C.next()===!1)&&at().down&&it(i,n+1)}function Pe({skipFragments:c=!1}={}){if(v.isActive())return v.prev();if(c||C.prev()===!1)if(at().up)Qt({skipFragments:c});else{let m;if(m=r.rtl?S(u.wrapper,ot+".future").pop():S(u.wrapper,ot+".past").pop(),m&&m.classList.contains("stack")){let f=m.querySelectorAll("section").length-1||void 0;it(i-1,f)}else r.rtl?Pt({skipFragments:c}):Ot({skipFragments:c})}}function Zt({skipFragments:c=!1}={}){if(d.hasNavigatedHorizontally=!0,d.hasNavigatedVertically=!0,v.isActive())return v.next();if(c||C.next()===!1){let m=at();m.down&&m.right&&r.loop&&fe()&&(m.down=!1),m.down?Yt({skipFragments:c}):r.rtl?Ot({skipFragments:c}):Pt({skipFragments:c})}}function Me(c){let m=c.data;if(typeof m=="string"&&m.charAt(0)==="{"&&m.charAt(m.length-1)==="}"&&(m=JSON.parse(m),m.method&&typeof e[m.method]=="function"))if(yi.test(m.method)===!1){const f=e[m.method].apply(e,m.args);pe("callback",{method:m.method,result:f})}else console.warn('reveal.js: "'+m.method+'" is is blacklisted from the postMessage API')}function De(c){$==="running"&&/section/gi.test(c.target.nodeName)&&($="idle",J({type:"slidetransitionend",data:{indexh:i,indexv:n,previousSlide:a,currentSlide:s}}))}function Ue(c){const m=j(c.target,'a[href^="#"]');if(m){const f=m.getAttribute("href"),y=G.getIndicesFromHash(f);y&&(e.slide(y.h,y.v,y.f),c.preventDefault())}}function Be(c){vt()}function ze(c){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Mt(c){(document.fullscreenElement||document.webkitFullscreenElement)===u.wrapper&&(c.stopImmediatePropagation(),setTimeout((()=>{e.layout(),e.focus.focus()}),1))}function gi(c){_t()&&r.loop===!1?(it(0,0),Nt()):P?Nt():Ct()}const $e={VERSION:ii,initialize:function(c){if(!o)throw'Unable to find presentation root (<div class="reveal">).';if(p)throw"Reveal.js has already been initialized.";if(p=!0,u.wrapper=o,u.slides=o.querySelector(".slides"),!u.slides)throw'Unable to find slides container (<div class="slides">).';return r={...$i,...r,...t,...c,...qe()},/print-pdf/gi.test(window.location.search)&&(r.view="print"),(function(){r.embedded===!0?u.viewport=j(o,".reveal-viewport")||o:(u.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),u.viewport.classList.add("reveal-viewport")})(),window.addEventListener("load",vt,!1),et.load(r.plugins,r.dependencies).then(pi),new Promise((m=>e.on("ready",m)))},configure:le,destroy:function(){p=!1,h!==!1&&(Lt(),Tt(),X.destroy(),ht.destroy(),F.destroy(),et.destroy(),oe.destroy(),_.destroy(),nt.destroy(),O.destroy(),x.destroy(),H.destroy(),document.removeEventListener("fullscreenchange",Mt),document.removeEventListener("webkitfullscreenchange",Mt),document.removeEventListener("visibilitychange",ze,!1),window.removeEventListener("message",Me,!1),window.removeEventListener("load",vt,!1),u.pauseOverlay&&u.pauseOverlay.remove(),u.statusElement&&u.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),u.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),u.wrapper.removeAttribute("data-transition-speed"),u.wrapper.removeAttribute("data-background-transition"),u.viewport.classList.remove("reveal-viewport"),u.viewport.style.removeProperty("--slide-width"),u.viewport.style.removeProperty("--slide-height"),u.slides.style.removeProperty("width"),u.slides.style.removeProperty("height"),u.slides.style.removeProperty("zoom"),u.slides.style.removeProperty("left"),u.slides.style.removeProperty("top"),u.slides.style.removeProperty("bottom"),u.slides.style.removeProperty("right"),u.slides.style.removeProperty("transform"),Array.from(u.wrapper.querySelectorAll(gt)).forEach((c=>{c.style.removeProperty("display"),c.style.removeProperty("top"),c.removeAttribute("hidden"),c.removeAttribute("aria-hidden")})))},sync:Ae,syncSlide:function(c=s){O.sync(c),C.sync(c),I.load(c),O.update(),X.update()},syncFragments:C.sync.bind(C),slide:it,left:Ot,right:Pt,up:Qt,down:Yt,prev:Pe,next:Zt,navigateLeft:Ot,navigateRight:Pt,navigateUp:Qt,navigateDown:Yt,navigatePrev:Pe,navigateNext:Zt,navigateFragment:C.goto.bind(C),prevFragment:C.prev.bind(C),nextFragment:C.next.bind(C),on:de,off:ue,addEventListener:de,removeEventListener:ue,layout:vt,shuffle:Kt,availableRoutes:at,availableFragments:C.availableRoutes.bind(C),toggleHelp:F.toggleHelp.bind(F),toggleOverview:D.toggle.bind(D),toggleScrollView:v.toggle.bind(v),togglePause:Ee,toggleAutoSlide:function(c){typeof c=="boolean"?c?Nt():Ct():P?Nt():Ct()},toggleJumpToSlide:function(c){typeof c=="boolean"?c?H.show():H.hide():H.isVisible()?H.hide():H.show()},isFirstSlide:be,isLastSlide:_t,isLastVerticalSlide:fe,isVerticalSlide:At,isVerticalStack:function(c=s){return c.classList.contains(".stack")||c.querySelector("section")!==null},isPaused:St,isAutoSliding:function(){return!(!w||P)},isSpeakerNotes:X.isSpeakerNotesWindow.bind(X),isOverview:D.isActive.bind(D),isFocused:ht.isFocused.bind(ht),isOverlayOpen:F.isOpen.bind(F),isScrollView:v.isActive.bind(v),isPrintView:T.isActive.bind(T),isReady:()=>h,loadSlide:I.load.bind(I),unloadSlide:I.unload.bind(I),startEmbeddedContent:()=>I.startEmbeddedContent(s),stopEmbeddedContent:()=>I.stopEmbeddedContent(s,{unloadIframes:!1}),previewIframe:F.previewIframe.bind(F),previewImage:F.previewImage.bind(F),previewVideo:F.previewVideo.bind(F),showPreview:F.previewIframe.bind(F),hidePreview:F.close.bind(F),addEventListeners:ce,removeEventListeners:Lt,dispatchEvent:J,getState:Oe,setState:function(c){if(typeof c=="object"){it(bt(c.indexh),bt(c.indexv),bt(c.indexf));let m=bt(c.paused),f=bt(c.overview);typeof m=="boolean"&&m!==St()&&Ee(m),typeof f=="boolean"&&f!==D.isActive()&&D.toggle(f),F.setState(c)}},getProgress:function(){let c=Ce(),m=Re();if(s){let f=s.querySelectorAll(".fragment");f.length>0&&(m+=s.querySelectorAll(".fragment.visible").length/f.length*.9)}return Math.min(m/(c-1),1)},getIndices:Ie,getSlidesAttributes:function(){return Gt().map((c=>{let m={};for(let f=0;f<c.attributes.length;f++){let y=c.attributes[f];m[y.name]=y.value}return m}))},getSlidePastCount:Re,getTotalSlides:Ce,getSlide:Ne,getPreviousSlide:()=>a,getCurrentSlide:()=>s,getSlideBackground:function(c,m){let f=typeof c=="number"?Ne(c,m):c;if(f)return f.slideBackgroundElement},getSlideNotes:X.getSlideNotes.bind(X),getSlides:Gt,getHorizontalSlides:rt,getVerticalSlides:Le,hasHorizontalSlides:xe,hasVerticalSlides:Te,hasNavigatedHorizontally:()=>d.hasNavigatedHorizontally,hasNavigatedVertically:()=>d.hasNavigatedVertically,shouldAutoAnimateBetween:jt,addKeyBinding:W.addKeyBinding.bind(W),removeKeyBinding:W.removeKeyBinding.bind(W),triggerKey:W.triggerKey.bind(W),registerKeyboardShortcut:W.registerKeyboardShortcut.bind(W),getComputedSlideSize:xt,setCurrentScrollPage:function(c,m,f){let y=i||0;i=m,n=f;const E=s!==c;a=s,s=c,s&&a&&r.autoAnimate&&jt(a,s,y,n)&&V.run(a,s),E&&(a&&(I.stopEmbeddedContent(a),I.stopEmbeddedContent(a.slideBackgroundElement)),I.startEmbeddedContent(s),I.startEmbeddedContent(s.slideBackgroundElement)),requestAnimationFrame((()=>{Ft(It(s))})),he()},getScale:()=>b,getConfig:()=>r,getQueryHash:qe,getSlidePath:G.getHash.bind(G),getRevealElement:()=>o,getSlidesElement:()=>u.slides,getViewportElement:()=>u.viewport,getBackgroundsElement:()=>O.element,registerPlugin:et.registerPlugin.bind(et),hasPlugin:et.hasPlugin.bind(et),getPlugin:et.getPlugin.bind(et),getPlugins:et.getRegisteredPlugins.bind(et)};return yt(e,{...$e,announceStatus:Ft,getStatusText:It,focus:ht,scroll:v,progress:nt,controls:_,location:G,overview:D,keyboard:W,fragments:C,backgrounds:O,slideContent:I,slideNumber:x,onUserInput:function(c){r.autoSlideStoppable&&Ct()},closeOverlay:F.close.bind(F),updateSlidesVisibility:Wt,layoutSlideContents:ge,transformSlides:Vt,cueAutoSlide:ft,cancelAutoSlide:Tt}),$e}let lt=ni,je=[];lt.initialize=o=>(Object.assign(lt,new ni(document.querySelector(".reveal"),o)),je.map((t=>t(lt))),lt.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach((o=>{lt[o]=(...t)=>{je.push((e=>e[o].call(null,...t)))}})),lt.isReady=()=>!1,lt.VERSION=ii;function qi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let mt={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const ai=/[&<>"']/,Hi=new RegExp(ai.source,"g"),si=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Fi=new RegExp(si.source,"g"),Vi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ke=o=>Vi[o];function K(o,t){if(t){if(ai.test(o))return o.replace(Hi,Ke)}else if(si.test(o))return o.replace(Fi,Ke);return o}const _i=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function ri(o){return o.replace(_i,((t,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const ji=/(^|[^\[])\^/g;function U(o,t){o=typeof o=="string"?o:o.source,t=t||"";const e={replace:(i,n)=>(n=(n=n.source||n).replace(ji,"$1"),o=o.replace(i,n),e),getRegex:()=>new RegExp(o,t)};return e}const Ki=/[^\w:]/g,Wi=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function We(o,t,e){if(o){let i;try{i=decodeURIComponent(ri(e)).replace(Ki,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}t&&!Wi.test(e)&&(e=(function(i,n){Ut[" "+i]||(Gi.test(i)?Ut[" "+i]=i+"/":Ut[" "+i]=Bt(i,"/",!0)),i=Ut[" "+i];const a=i.indexOf(":")===-1;return n.substring(0,2)==="//"?a?n:i.replace(Qi,"$1")+n:n.charAt(0)==="/"?a?n:i.replace(Yi,"$1")+n:i+n})(t,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Ut={},Gi=/^[^:]+:\/*[^/]*$/,Qi=/^([^:]+:)[\s\S]*$/,Yi=/^([^:]+:\/*[^/]*)[\s\S]*$/,qt={exec:function(){}};function Ge(o,t){const e=o.replace(/\|/g,((n,a,s)=>{let l=!1,r=a;for(;--r>=0&&s[r]==="\\";)l=!l;return l?"|":" |"})).split(/ \|/);let i=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;i<e.length;i++)e[i]=e[i].trim().replace(/\\\|/g,"|");return e}function Bt(o,t,e){const i=o.length;if(i===0)return"";let n=0;for(;n<i;){const a=o.charAt(i-n-1);if(a!==t||e){if(a===t||!e)break;n++}else n++}return o.slice(0,i-n)}function Qe(o,t){if(t<1)return"";let e="";for(;t>1;)1&t&&(e+=o),t>>=1,o+=o;return e+o}function Ye(o,t,e,i){const n=t.href,a=t.title?K(t.title):null,s=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){i.state.inLink=!0;const l={type:"link",raw:e,href:n,title:a,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,l}return{type:"image",raw:e,href:n,title:a,text:K(s)}}class ae{constructor(t){this.options=t||mt}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const i=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Bt(i,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const i=e[0],n=(function(a,s){const l=a.match(/^(\s+)(?:```)/);if(l===null)return s;const r=l[1];return s.split(`
`).map((p=>{const h=p.match(/^\s+/);if(h===null)return p;const[d]=h;return d.length>=r.length?p.slice(r.length):p})).join(`
`)})(i,e[3]||"");return{type:"code",raw:i,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:n}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let i=e[2].trim();if(/#$/.test(i)){const n=Bt(i,"#");this.options.pedantic?i=n.trim():n&&!/ $/.test(n)||(i=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const i=e[0].replace(/^ *>[ \t]?/gm,""),n=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(i);return this.lexer.state.top=n,{type:"blockquote",raw:e[0],tokens:a,text:i}}}list(t){let e=this.rules.block.list.exec(t);if(e){let i,n,a,s,l,r,p,h,d,g,b,L,u=e[1].trim();const $=u.length>1,w={type:"list",raw:"",ordered:$,start:$?+u.slice(0,-1):"",loose:!1,items:[]};u=$?`\\d{1,9}\\${u.slice(-1)}`:`\\${u}`,this.options.pedantic&&(u=$?u:"[*+-]");const q=new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(L=!1,e=q.exec(t))&&!this.rules.block.hr.test(t);){if(i=e[0],t=t.substring(i.length),h=e[2].split(`
`,1)[0].replace(/^\t+/,(P=>" ".repeat(3*P.length))),d=t.split(`
`,1)[0],this.options.pedantic?(s=2,b=h.trimLeft()):(s=e[2].search(/[^ ]/),s=s>4?1:s,b=h.slice(s),s+=e[1].length),r=!1,!h&&/^ *$/.test(d)&&(i+=d+`
`,t=t.substring(d.length+1),L=!0),!L){const P=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),I=new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),x=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),H=new RegExp(`^ {0,${Math.min(3,s-1)}}#`);for(;t&&(g=t.split(`
`,1)[0],d=g,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!x.test(d))&&!H.test(d)&&!P.test(d)&&!I.test(t);){if(d.search(/[^ ]/)>=s||!d.trim())b+=`
`+d.slice(s);else{if(r||h.search(/[^ ]/)>=4||x.test(h)||H.test(h)||I.test(h))break;b+=`
`+d}r||d.trim()||(r=!0),i+=g+`
`,t=t.substring(g.length+1),h=d.slice(s)}}w.loose||(p?w.loose=!0:/\n *\n *$/.test(i)&&(p=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(b),n&&(a=n[0]!=="[ ] ",b=b.replace(/^\[[ xX]\] +/,""))),w.items.push({type:"list_item",raw:i,task:!!n,checked:a,loose:!1,text:b}),w.raw+=i}w.items[w.items.length-1].raw=i.trimRight(),w.items[w.items.length-1].text=b.trimRight(),w.raw=w.raw.trimRight();const Y=w.items.length;for(l=0;l<Y;l++)if(this.lexer.state.top=!1,w.items[l].tokens=this.lexer.blockTokens(w.items[l].text,[]),!w.loose){const P=w.items[l].tokens.filter((x=>x.type==="space")),I=P.length>0&&P.some((x=>/\n.*\n/.test(x.raw)));w.loose=I}if(w.loose)for(l=0;l<Y;l++)w.items[l].loose=!0;return w}}html(t){const e=this.rules.block.html.exec(t);if(e){const i={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};if(this.options.sanitize){const n=this.options.sanitizer?this.options.sanitizer(e[0]):K(e[0]);i.type="paragraph",i.text=n,i.tokens=this.lexer.inline(n)}return i}}def(t){const e=this.rules.block.def.exec(t);if(e){const i=e[1].toLowerCase().replace(/\s+/g," "),n=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:i,raw:e[0],href:n,title:a}}}table(t){const e=this.rules.block.table.exec(t);if(e){const i={type:"table",header:Ge(e[1]).map((n=>({text:n}))),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=e[0];let n,a,s,l,r=i.align.length;for(n=0;n<r;n++)/^ *-+: *$/.test(i.align[n])?i.align[n]="right":/^ *:-+: *$/.test(i.align[n])?i.align[n]="center":/^ *:-+ *$/.test(i.align[n])?i.align[n]="left":i.align[n]=null;for(r=i.rows.length,n=0;n<r;n++)i.rows[n]=Ge(i.rows[n],i.header.length).map((p=>({text:p})));for(r=i.header.length,a=0;a<r;a++)i.header[a].tokens=this.lexer.inline(i.header[a].text);for(r=i.rows.length,a=0;a<r;a++)for(l=i.rows[a],s=0;s<l.length;s++)l[s].tokens=this.lexer.inline(l[s].text);return i}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const i=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:i,tokens:this.lexer.inline(i)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:K(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):K(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const i=e[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const s=Bt(i.slice(0,-1),"\\");if((i.length-s.length)%2==0)return}else{const s=(function(l,r){if(l.indexOf(r[1])===-1)return-1;const p=l.length;let h=0,d=0;for(;d<p;d++)if(l[d]==="\\")d++;else if(l[d]===r[0])h++;else if(l[d]===r[1]&&(h--,h<0))return d;return-1})(e[2],"()");if(s>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let n=e[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);s&&(n=s[1],a=s[3])}else a=e[3]?e[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(i)?n.slice(1):n.slice(1,-1)),Ye(e,{href:n&&n.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let n=(i[2]||i[1]).replace(/\s+/g," ");if(n=e[n.toLowerCase()],!n){const a=i[0].charAt(0);return{type:"text",raw:a,text:a}}return Ye(i,n,i[0],this.lexer)}}emStrong(t,e,i=""){let n=this.rules.inline.emStrong.lDelim.exec(t);if(!n||n[3]&&i.match(/[\p{L}\p{N}]/u))return;const a=n[1]||n[2]||"";if(!a||a&&(i===""||this.rules.inline.punctuation.exec(i))){const s=n[0].length-1;let l,r,p=s,h=0;const d=n[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,e=e.slice(-1*t.length+s);(n=d.exec(e))!=null;){if(l=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!l)continue;if(r=l.length,n[3]||n[4]){p+=r;continue}if((n[5]||n[6])&&s%3&&!((s+r)%3)){h+=r;continue}if(p-=r,p>0)continue;r=Math.min(r,r+p+h);const g=t.slice(0,s+n.index+(n[0].length-l.length)+r);if(Math.min(s,r)%2){const L=g.slice(1,-1);return{type:"em",raw:g,text:L,tokens:this.lexer.inlineTokens(L)}}const b=g.slice(2,-2);return{type:"strong",raw:g,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let i=e[2].replace(/\n/g," ");const n=/[^ ]/.test(i),a=/^ /.test(i)&&/ $/.test(i);return n&&a&&(i=i.substring(1,i.length-1)),i=K(i,!0),{type:"codespan",raw:e[0],text:i}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t,e){const i=this.rules.inline.autolink.exec(t);if(i){let n,a;return i[2]==="@"?(n=K(this.options.mangle?e(i[1]):i[1]),a="mailto:"+n):(n=K(i[1]),a=n),{type:"link",raw:i[0],text:n,href:a,tokens:[{type:"text",raw:n,text:n}]}}}url(t,e){let i;if(i=this.rules.inline.url.exec(t)){let n,a;if(i[2]==="@")n=K(this.options.mangle?e(i[0]):i[0]),a="mailto:"+n;else{let s;do s=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(s!==i[0]);n=K(i[0]),a=i[1]==="www."?"http://"+i[0]:i[0]}return{type:"link",raw:i[0],text:n,href:a,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t,e){const i=this.rules.inline.text.exec(t);if(i){let n;return n=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):K(i[0]):i[0]:K(this.options.smartypants?e(i[0]):i[0]),{type:"text",raw:i[0],text:n}}}}const R={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:qt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};R.def=U(R.def).replace("label",R._label).replace("title",R._title).getRegex(),R.bullet=/(?:[*+-]|\d{1,9}[.)])/,R.listItemStart=U(/^( *)(bull) */).replace("bull",R.bullet).getRegex(),R.list=U(R.list).replace(/bull/g,R.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+R.def.source+")").getRegex(),R._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",R._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,R.html=U(R.html,"i").replace("comment",R._comment).replace("tag",R._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),R.paragraph=U(R._paragraph).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.blockquote=U(R.blockquote).replace("paragraph",R.paragraph).getRegex(),R.normal={...R},R.gfm={...R.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},R.gfm.table=U(R.gfm.table).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.gfm.paragraph=U(R._paragraph).replace("hr",R.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",R.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",R._tag).getRegex(),R.pedantic={...R.normal,html:U(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",R._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:U(R.normal._paragraph).replace("hr",R.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",R.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const A={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:qt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:qt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Zi(o){return o.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ze(o){let t,e,i="";const n=o.length;for(t=0;t<n;t++)e=o.charCodeAt(t),Math.random()>.5&&(e="x"+e.toString(16)),i+="&#"+e+";";return i}A._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",A.punctuation=U(A.punctuation).replace(/punctuation/g,A._punctuation).getRegex(),A.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,A.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,A._comment=U(R._comment).replace("(?:-->|$)","-->").getRegex(),A.emStrong.lDelim=U(A.emStrong.lDelim).replace(/punct/g,A._punctuation).getRegex(),A.emStrong.rDelimAst=U(A.emStrong.rDelimAst,"g").replace(/punct/g,A._punctuation).getRegex(),A.emStrong.rDelimUnd=U(A.emStrong.rDelimUnd,"g").replace(/punct/g,A._punctuation).getRegex(),A._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,A._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,A._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,A.autolink=U(A.autolink).replace("scheme",A._scheme).replace("email",A._email).getRegex(),A._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,A.tag=U(A.tag).replace("comment",A._comment).replace("attribute",A._attribute).getRegex(),A._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,A._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,A._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,A.link=U(A.link).replace("label",A._label).replace("href",A._href).replace("title",A._title).getRegex(),A.reflink=U(A.reflink).replace("label",A._label).replace("ref",R._label).getRegex(),A.nolink=U(A.nolink).replace("ref",R._label).getRegex(),A.reflinkSearch=U(A.reflinkSearch,"g").replace("reflink",A.reflink).replace("nolink",A.nolink).getRegex(),A.normal={...A},A.pedantic={...A.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:U(/^!?\[(label)\]\((.*?)\)/).replace("label",A._label).getRegex(),reflink:U(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",A._label).getRegex()},A.gfm={...A.normal,escape:U(A.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},A.gfm.url=U(A.gfm.url,"i").replace("email",A.gfm._extended_email).getRegex(),A.breaks={...A.gfm,br:U(A.br).replace("{2,}","*").getRegex(),text:U(A.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class dt{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||mt,this.options.tokenizer=this.options.tokenizer||new ae,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:R.normal,inline:A.normal};this.options.pedantic?(e.block=R.pedantic,e.inline=A.pedantic):this.options.gfm&&(e.block=R.gfm,this.options.breaks?e.inline=A.breaks:e.inline=A.gfm),this.tokenizer.rules=e}static get rules(){return{block:R,inline:A}}static lex(t,e){return new dt(e).lex(t)}static lexInline(t,e){return new dt(e).inlineTokens(t)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let i,n,a,s;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,((l,r,p)=>r+"    ".repeat(p.length)));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((l=>!!(i=l.call({lexer:this},t,e))&&(t=t.substring(i.raw.length),e.push(i),!0)))))if(i=this.tokenizer.space(t))t=t.substring(i.raw.length),i.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(i);else if(i=this.tokenizer.code(t))t=t.substring(i.raw.length),n=e[e.length-1],!n||n.type!=="paragraph"&&n.type!=="text"?e.push(i):(n.raw+=`
`+i.raw,n.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(i=this.tokenizer.fences(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.heading(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.hr(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.blockquote(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.list(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.html(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.def(t))t=t.substring(i.raw.length),n=e[e.length-1],!n||n.type!=="paragraph"&&n.type!=="text"?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(n.raw+=`
`+i.raw,n.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(i=this.tokenizer.table(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.lheading(t))t=t.substring(i.raw.length),e.push(i);else{if(a=t,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const r=t.slice(1);let p;this.options.extensions.startBlock.forEach((function(h){p=h.call({lexer:this},r),typeof p=="number"&&p>=0&&(l=Math.min(l,p))})),l<1/0&&l>=0&&(a=t.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a)))n=e[e.length-1],s&&n.type==="paragraph"?(n.raw+=`
`+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):e.push(i),s=a.length!==t.length,t=t.substring(i.raw.length);else if(i=this.tokenizer.text(t))t=t.substring(i.raw.length),n=e[e.length-1],n&&n.type==="text"?(n.raw+=`
`+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):e.push(i);else if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let i,n,a,s,l,r,p=t;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(p))!=null;)h.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(p=p.slice(0,s.index)+"["+Qe("a",s[0].length-2)+"]"+p.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(p))!=null;)p=p.slice(0,s.index)+"["+Qe("a",s[0].length-2)+"]"+p.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.escapedEmSt.exec(p))!=null;)p=p.slice(0,s.index+s[0].length-2)+"++"+p.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(l||(r=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((h=>!!(i=h.call({lexer:this},t,e))&&(t=t.substring(i.raw.length),e.push(i),!0)))))if(i=this.tokenizer.escape(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.tag(t))t=t.substring(i.raw.length),n=e[e.length-1],n&&i.type==="text"&&n.type==="text"?(n.raw+=i.raw,n.text+=i.text):e.push(i);else if(i=this.tokenizer.link(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(i.raw.length),n=e[e.length-1],n&&i.type==="text"&&n.type==="text"?(n.raw+=i.raw,n.text+=i.text):e.push(i);else if(i=this.tokenizer.emStrong(t,p,r))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.codespan(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.br(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.del(t))t=t.substring(i.raw.length),e.push(i);else if(i=this.tokenizer.autolink(t,Ze))t=t.substring(i.raw.length),e.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(t,Ze))){if(a=t,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const d=t.slice(1);let g;this.options.extensions.startInline.forEach((function(b){g=b.call({lexer:this},d),typeof g=="number"&&g>=0&&(h=Math.min(h,g))})),h<1/0&&h>=0&&(a=t.substring(0,h+1))}if(i=this.tokenizer.inlineText(a,Zi))t=t.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(r=i.raw.slice(-1)),l=!0,n=e[e.length-1],n&&n.type==="text"?(n.raw+=i.raw,n.text+=i.text):e.push(i);else if(t){const h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}else t=t.substring(i.raw.length),e.push(i);return e}}class se{constructor(t){this.options=t||mt}code(t,e,i){const n=(e||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(t,n);a!=null&&a!==t&&(i=!0,t=a)}return t=t.replace(/\n$/,"")+`
`,n?'<pre><code class="'+this.options.langPrefix+K(n)+'">'+(i?t:K(t,!0))+`</code></pre>
`:"<pre><code>"+(i?t:K(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,e,i,n){return this.options.headerIds?`<h${e} id="${this.options.headerPrefix+n.slug(i)}">${t}</h${e}>
`:`<h${e}>${t}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,i){const n=e?"ol":"ul";return"<"+n+(e&&i!==1?' start="'+i+'"':"")+`>
`+t+"</"+n+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,e,i){if((t=We(this.options.sanitize,this.options.baseUrl,t))===null)return i;let n='<a href="'+t+'"';return e&&(n+=' title="'+e+'"'),n+=">"+i+"</a>",n}image(t,e,i){if((t=We(this.options.sanitize,this.options.baseUrl,t))===null)return i;let n=`<img src="${t}" alt="${i}"`;return e&&(n+=` title="${e}"`),n+=this.options.xhtml?"/>":">",n}text(t){return t}}class oi{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,i){return""+i}image(t,e,i){return""+i}br(){return""}}class li{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let i=t,n=0;if(this.seen.hasOwnProperty(i)){n=this.seen[t];do n++,i=t+"-"+n;while(this.seen.hasOwnProperty(i))}return e||(this.seen[t]=n,this.seen[i]=0),i}slug(t,e={}){const i=this.serialize(t);return this.getNextSafeSlug(i,e.dryrun)}}class ut{constructor(t){this.options=t||mt,this.options.renderer=this.options.renderer||new se,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new oi,this.slugger=new li}static parse(t,e){return new ut(e).parse(t)}static parseInline(t,e){return new ut(e).parseInline(t)}parse(t,e=!0){let i,n,a,s,l,r,p,h,d,g,b,L,u,$,w,q,Y,P,I,x="";const H=t.length;for(i=0;i<H;i++)if(g=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]&&(I=this.options.extensions.renderers[g.type].call({parser:this},g),I!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type)))x+=I||"";else switch(g.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(g.tokens),g.depth,ri(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(g.text,g.lang,g.escaped);continue;case"table":for(h="",p="",s=g.header.length,n=0;n<s;n++)p+=this.renderer.tablecell(this.parseInline(g.header[n].tokens),{header:!0,align:g.align[n]});for(h+=this.renderer.tablerow(p),d="",s=g.rows.length,n=0;n<s;n++){for(r=g.rows[n],p="",l=r.length,a=0;a<l;a++)p+=this.renderer.tablecell(this.parseInline(r[a].tokens),{header:!1,align:g.align[a]});d+=this.renderer.tablerow(p)}x+=this.renderer.table(h,d);continue;case"blockquote":d=this.parse(g.tokens),x+=this.renderer.blockquote(d);continue;case"list":for(b=g.ordered,L=g.start,u=g.loose,s=g.items.length,d="",n=0;n<s;n++)w=g.items[n],q=w.checked,Y=w.task,$="",w.task&&(P=this.renderer.checkbox(q),u?w.tokens.length>0&&w.tokens[0].type==="paragraph"?(w.tokens[0].text=P+" "+w.tokens[0].text,w.tokens[0].tokens&&w.tokens[0].tokens.length>0&&w.tokens[0].tokens[0].type==="text"&&(w.tokens[0].tokens[0].text=P+" "+w.tokens[0].tokens[0].text)):w.tokens.unshift({type:"text",text:P}):$+=P),$+=this.parse(w.tokens,u),d+=this.renderer.listitem($,Y,q);x+=this.renderer.list(d,b,L);continue;case"html":x+=this.renderer.html(g.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(g.tokens));continue;case"text":for(d=g.tokens?this.parseInline(g.tokens):g.text;i+1<H&&t[i+1].type==="text";)g=t[++i],d+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);x+=e?this.renderer.paragraph(d):d;continue;default:{const V='Token with "'+g.type+'" type was not found.';if(this.options.silent)return void console.error(V);throw new Error(V)}}return x}parseInline(t,e){e=e||this.renderer;let i,n,a,s="";const l=t.length;for(i=0;i<l;i++)if(n=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]&&(a=this.options.extensions.renderers[n.type].call({parser:this},n),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)))s+=a||"";else switch(n.type){case"escape":case"text":s+=e.text(n.text);break;case"html":s+=e.html(n.text);break;case"link":s+=e.link(n.href,n.title,this.parseInline(n.tokens,e));break;case"image":s+=e.image(n.href,n.title,n.text);break;case"strong":s+=e.strong(this.parseInline(n.tokens,e));break;case"em":s+=e.em(this.parseInline(n.tokens,e));break;case"codespan":s+=e.codespan(n.text);break;case"br":s+=e.br();break;case"del":s+=e.del(this.parseInline(n.tokens,e));break;default:{const r='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(r);throw new Error(r)}}return s}}class ee{constructor(t){this.options=t||mt}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(t){return t}postprocess(t){return t}}function ci(o,t){return(e,i,n)=>{typeof i=="function"&&(n=i,i=null);const a={...i},s=(function(l,r,p){return h=>{if(h.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const d="<p>An error occurred:</p><pre>"+K(h.message+"",!0)+"</pre>";return r?Promise.resolve(d):p?void p(null,d):d}if(r)return Promise.reject(h);if(!p)throw h;p(h)}})((i={...k.defaults,...a}).silent,i.async,n);if(e==null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if((function(l){l&&l.sanitize&&!l.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(i),i.hooks&&(i.hooks.options=i),n){const l=i.highlight;let r;try{i.hooks&&(e=i.hooks.preprocess(e)),r=o(e,i)}catch(d){return s(d)}const p=function(d){let g;if(!d)try{i.walkTokens&&k.walkTokens(r,i.walkTokens),g=t(r,i),i.hooks&&(g=i.hooks.postprocess(g))}catch(b){d=b}return i.highlight=l,d?s(d):n(null,g)};if(!l||l.length<3||(delete i.highlight,!r.length))return p();let h=0;return k.walkTokens(r,(function(d){d.type==="code"&&(h++,setTimeout((()=>{l(d.text,d.lang,(function(g,b){if(g)return p(g);b!=null&&b!==d.text&&(d.text=b,d.escaped=!0),h--,h===0&&p()}))}),0))})),void(h===0&&p())}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(e):e).then((l=>o(l,i))).then((l=>i.walkTokens?Promise.all(k.walkTokens(l,i.walkTokens)).then((()=>l)):l)).then((l=>t(l,i))).then((l=>i.hooks?i.hooks.postprocess(l):l)).catch(s);try{i.hooks&&(e=i.hooks.preprocess(e));const l=o(e,i);i.walkTokens&&k.walkTokens(l,i.walkTokens);let r=t(l,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(l){return s(l)}}}function k(o,t,e){return ci(dt.lex,ut.parse)(o,t,e)}k.options=k.setOptions=function(o){var t;return k.defaults={...k.defaults,...o},t=k.defaults,mt=t,k},k.getDefaults=qi,k.defaults=mt,k.use=function(...o){const t=k.defaults.extensions||{renderers:{},childTokens:{}};o.forEach((e=>{const i={...e};if(i.async=k.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach((n=>{if(!n.name)throw new Error("extension name required");if(n.renderer){const a=t.renderers[n.name];t.renderers[n.name]=a?function(...s){let l=n.renderer.apply(this,s);return l===!1&&(l=a.apply(this,s)),l}:n.renderer}if(n.tokenizer){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[n.level]?t[n.level].unshift(n.tokenizer):t[n.level]=[n.tokenizer],n.start&&(n.level==="block"?t.startBlock?t.startBlock.push(n.start):t.startBlock=[n.start]:n.level==="inline"&&(t.startInline?t.startInline.push(n.start):t.startInline=[n.start]))}n.childTokens&&(t.childTokens[n.name]=n.childTokens)})),i.extensions=t),e.renderer){const n=k.defaults.renderer||new se;for(const a in e.renderer){const s=n[a];n[a]=(...l)=>{let r=e.renderer[a].apply(n,l);return r===!1&&(r=s.apply(n,l)),r}}i.renderer=n}if(e.tokenizer){const n=k.defaults.tokenizer||new ae;for(const a in e.tokenizer){const s=n[a];n[a]=(...l)=>{let r=e.tokenizer[a].apply(n,l);return r===!1&&(r=s.apply(n,l)),r}}i.tokenizer=n}if(e.hooks){const n=k.defaults.hooks||new ee;for(const a in e.hooks){const s=n[a];ee.passThroughHooks.has(a)?n[a]=l=>{if(k.defaults.async)return Promise.resolve(e.hooks[a].call(n,l)).then((p=>s.call(n,p)));const r=e.hooks[a].call(n,l);return s.call(n,r)}:n[a]=(...l)=>{let r=e.hooks[a].apply(n,l);return r===!1&&(r=s.apply(n,l)),r}}i.hooks=n}if(e.walkTokens){const n=k.defaults.walkTokens;i.walkTokens=function(a){let s=[];return s.push(e.walkTokens.call(this,a)),n&&(s=s.concat(n.call(this,a))),s}}k.setOptions(i)}))},k.walkTokens=function(o,t){let e=[];for(const i of o)switch(e=e.concat(t.call(k,i)),i.type){case"table":for(const n of i.header)e=e.concat(k.walkTokens(n.tokens,t));for(const n of i.rows)for(const a of n)e=e.concat(k.walkTokens(a.tokens,t));break;case"list":e=e.concat(k.walkTokens(i.items,t));break;default:k.defaults.extensions&&k.defaults.extensions.childTokens&&k.defaults.extensions.childTokens[i.type]?k.defaults.extensions.childTokens[i.type].forEach((function(n){e=e.concat(k.walkTokens(i[n],t))})):i.tokens&&(e=e.concat(k.walkTokens(i.tokens,t)))}return e},k.parseInline=ci(dt.lexInline,ut.parseInline),k.Parser=ut,k.parser=ut.parse,k.Renderer=se,k.TextRenderer=oi,k.Lexer=dt,k.lexer=dt.lex,k.Tokenizer=ae,k.Slugger=li,k.Hooks=ee,k.parse=k,k.options,k.setOptions,k.use,k.walkTokens,k.parseInline,ut.parse,dt.lex;const Ji=()=>{let o,t,e=null;function i(){if(e&&!e.closed)e.focus();else{if(e=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),e.marked=k,e.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!e)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const l=t.getConfig().url,r=typeof l=="string"?l:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;o=setInterval((function(){e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:t.getState(),url:r}),"*")}),500),window.addEventListener("message",a)})()}}function n(l){let r=t.getCurrentSlide(),p=r.querySelectorAll("aside.notes"),h=r.querySelector(".current-fragment"),d={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:t.getState()};if(r.hasAttribute("data-notes")&&(d.notes=r.getAttribute("data-notes"),d.whitespace="pre-wrap"),h){let g=h.querySelector("aside.notes");g?(d.notes=g.innerHTML,d.markdown=typeof g.getAttribute("data-markdown")=="string",p=null):h.hasAttribute("data-notes")&&(d.notes=h.getAttribute("data-notes"),d.whitespace="pre-wrap",p=null)}p&&p.length&&(p=Array.from(p).filter((g=>g.closest(".fragment")===null)),d.notes=p.map((g=>g.innerHTML)).join(`
`),d.markdown=p[0]&&typeof p[0].getAttribute("data-markdown")=="string"),e.postMessage(JSON.stringify(d),"*")}function a(l){if((function(r){try{return window.location.origin===r.source.location.origin}catch{return!1}})(l))try{let r=JSON.parse(l.data);r&&r.namespace==="reveal-notes"&&r.type==="connected"?(clearInterval(o),s()):r&&r.namespace==="reveal-notes"&&r.type==="call"&&(function(p,h,d){let g=t[p].apply(t,h);e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:g,callId:d}),"*")})(r.methodName,r.arguments,r.callId)}catch{}}function s(){t.on("slidechanged",n),t.on("fragmentshown",n),t.on("fragmenthidden",n),t.on("overviewhidden",n),t.on("overviewshown",n),t.on("paused",n),t.on("resumed",n),t.on("previewiframe",n),t.on("previewimage",n),t.on("previewvideo",n),t.on("closeoverlay",n),n()}return{id:"notes",init:function(l){t=l,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?i():window.addEventListener("message",(r=>{if(!e&&typeof r.data=="string"){let h;try{h=JSON.parse(r.data)}catch{}h&&h.namespace==="reveal-notes"&&h.type==="heartbeat"&&(p=r.source,e&&!e.closed?e.focus():(e=p,window.addEventListener("message",a),s()))}var p})),t.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){i()})))},open:i}},tt=(o,t)=>({label:o,url:t}),Xi=[{id:"cover",kind:"cover",theme:"light",eyebrow:"EDEM · FORMACIÓN EJECUTIVA",title:"IA PARA <span>LÍDERES</span><br>DEL MARKETING<br>ACTUAL.",subtitle:"Cómo invertir, decidir y crecer con inteligencia artificial sin comprar humo.",meta:["5 HORAS","85 SLIDES","100% APLICABLE","MX & LATAM"],notes:"Abrir sin definiciones. La clase trata sobre decisiones de negocio, no sobre prompts."},{id:"opening-question",kind:"statement",theme:"dark",eyebrow:"OPEN MIC",title:"¿TU ORGANIZACIÓN ESTÁ LISTA PARA LA IA…<br><span>O SOLO CREE QUE LO ESTÁ?</span>",subtitle:"Levanten la mano quienes ya tienen al menos un piloto de IA. Manténganla arriba si pueden demostrar impacto financiero.",notes:"Usar el contraste entre adopción aparente y valor probado. No juzgar respuestas todavía."},{id:"adoption-gap",kind:"metrics",theme:"red",eyebrow:"LA BRECHA 2026",title:"LA IA YA ENTRÓ.<br>EL VALOR TODAVÍA NO.",meta:["88% USA IA","≈1/3 ESCALA","39% VE EBIT","2/3 SIGUE EN PILOTOS"],subtitle:"Adopción no es transformación. Una licencia activa no equivale a un workflow rediseñado.",sources:[tt("McKinsey — State of AI 2025","https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-in-2025.pdf"),tt("Stanford HAI — AI Index 2026","https://hai.stanford.edu/ai-index/2026-ai-index-report")],notes:"88% reporta uso regular en al menos una función; 39% reporta impacto en EBIT a nivel empresa. Diferenciar encuesta de causalidad."},{id:"icebreaker",kind:"activity",theme:"light",duration:8,eyebrow:"ICE BREAKER · PAREJAS",title:"CUÉNTAME EL PILOTO<br>QUE NADIE QUIERE MATAR.",body:`
      <ol class="steps">
        <li>¿Qué problema prometía resolver?</li>
        <li>¿Quién lo patrocina y quién lo usa?</li>
        <li>¿Qué evidencia existe de que funciona?</li>
        <li>¿Por qué sigue vivo si no genera resultado?</li>
      </ol>
      <p class="activity-output">OUTPUT: una frase que explique el verdadero bloqueo.</p>`,notes:"Pedir dos historias. Capturar patrones: vanity, ausencia de owner, herramienta sin workflow, miedo reputacional."},{id:"alexis",kind:"profile",theme:"light",eyebrow:"¡HOLA! SOY…",title:"ALEXIS<br><span>SOUBRAN</span>",subtitle:"CEO · MINIMALIST",body:`
      <ul class="clean-list">
        <li>Growth, data, performance y transformación</li>
        <li>Google · Meta · TikTok · Microsoft Partners</li>
        <li>Construcción de sistemas de revenue, no demos</li>
        <li>Obsesión: traducir tecnología en decisiones</li>
      </ul>`,image:"assets/alexis-soubran.png",notes:"Presentación breve. Conectar experiencia con las decisiones que enfrentan líderes, no con credenciales técnicas."},{id:"promise",kind:"statement",theme:"dark",eyebrow:"LA PROMESA",title:"NO VAS A SALIR SABIENDO MÁS DE IA.<br><span>VAS A SALIR DECIDIENDO MEJOR.</span>",subtitle:"Diagnosticar · priorizar · evaluar · anticipar · personalizar · ejecutar.",notes:"Marcar que el curso no compite con tutoriales. El deliverable es criterio ejecutivo."},{id:"journey",kind:"journey",theme:"light",eyebrow:"EL VIAJE DE HOY",title:"DE LA ANSIEDAD<br>A UN PORTAFOLIO FINANCIABLE.",body:`
      <div class="journey-line">
        <div><b>01</b><span>READINESS</span></div>
        <div><b>02</b><span>CAPITAL</span></div>
        <div><b>03</b><span>VENDORS</span></div>
        <div><b>04</b><span>PREDICCIÓN</span></div>
        <div><b>05</b><span>INTELLIGENCE</span></div>
        <div><b>06</b><span>TRUST</span></div>
        <div><b>07</b><span>STACK</span></div>
      </div>`,notes:"La progresión es deliberada: primero capacidad, después inversión, después aplicaciones."},{id:"objectives",kind:"cards",theme:"light",eyebrow:"LOS OBJETIVOS DE HOY",title:"TRES CAMBIOS DE COMPORTAMIENTO.",body:`
      <div class="numbered-cards">
        <article><b>01</b><h3>DETECTAR</h3><p>Separar capacidad real de adopción cosmética.</p></article>
        <article><b>02</b><h3>DECIDIR</h3><p>Asignar capital con impacto, payback y riesgo.</p></article>
        <article><b>03</b><h3>DEMOSTRAR</h3><p>Diseñar experimentos que conecten IA con dinero.</p></article>
      </div>`,notes:"Revisar al final si se cumplieron."},{id:"rules",kind:"cards",theme:"dark",eyebrow:"CÓMO VAMOS A TRABAJAR",title:"MENOS ESPECTADORES.<br>MÁS COMITÉ DE INVERSIÓN.",body:`
      <div class="rule-grid">
        <div><b>01</b><p>Trae un problema real.</p></div>
        <div><b>02</b><p>Cuestiona el dato.</p></div>
        <div><b>03</b><p>Habla de dinero.</p></div>
        <div><b>04</b><p>Define un owner.</p></div>
        <div><b>05</b><p>Mata ideas débiles.</p></div>
        <div><b>06</b><p>Protege la confianza.</p></div>
      </div>`,notes:"Permiso explícito para cuestionar y descartar iniciativas."},{id:"readiness-section",kind:"section",theme:"red",eyebrow:"BLOQUE 01 · 30 MIN",title:"¿ESTÁS LISTO<br>PARA LA IA?",subtitle:"Antes de elegir una herramienta, audita el sistema que tendrá que absorberla.",notes:"Transición al primer bloque."},{id:"readiness-tension",kind:"statement",theme:"light",eyebrow:"LA HISTORIA CLÍNICA",title:"LA EMPRESA PIDE<br>UN AGENTE AUTÓNOMO.",subtitle:"Pero sus datos viven en hojas distintas, Legal llega al final y nadie puede definir qué decisión debe tomar el agente.",notes:"Preguntar: ¿el problema es tecnológico? Respuesta: normalmente es arquitectura organizacional."},{id:"tool-myth",kind:"split",theme:"dark",eyebrow:"EL GRAN MITO",title:"COMPRAR IA<br>NO CREA CAPACIDAD.",body:`
      <div class="versus">
        <article><span>COMPRAR</span><h3>TOOL</h3><p>Licencia, acceso, demo, capacitación.</p></article>
        <strong>≠</strong>
        <article><span>CONSTRUIR</span><h3>SISTEMA</h3><p>Datos, workflow, owner, control y medición.</p></article>
      </div>`,notes:"La herramienta es el componente más visible y con frecuencia el menos escaso."},{id:"readiness-definition",kind:"definition",theme:"light",eyebrow:"DEFINICIÓN EJECUTIVA",title:"AI READINESS ES LA CAPACIDAD DE<br><span>CONVERTIR MODELOS EN RESULTADOS REPETIBLES.</span>",body:`
      <div class="formula">DATOS × WORKFLOW × ADOPCIÓN × CONTROL</div>
      <p>Si uno de los factores se aproxima a cero, el resultado también.</p>`,sources:[tt("NIST AI Risk Management Framework","https://www.nist.gov/itl/ai-risk-management-framework")],notes:"Framework propio, alineado con la lógica de gobernar, mapear, medir y gestionar de NIST."},{id:"readiness-stack",kind:"framework",theme:"dark",eyebrow:"EL AI READINESS STACK",title:"CINCO CAPAS.<br>UN SOLO CUELLO DE BOTELLA.",body:`
      <div class="stack">
        <div><b>05</b><span>GOBERNANZA</span></div>
        <div><b>04</b><span>PERSONAS</span></div>
        <div><b>03</b><span>PROCESOS</span></div>
        <div><b>02</b><span>DATOS</span></div>
        <div><b>01</b><span>TESIS DE NEGOCIO</span></div>
      </div>`,notes:"Leer de abajo hacia arriba. La tesis evita automatizar problemas irrelevantes."},{id:"five-dimensions",kind:"cards",theme:"light",eyebrow:"QUÉ EVALUAR",title:"LA ORGANIZACIÓN NO ES UN PROMEDIO.",body:`
      <div class="dimension-grid">
        <article><b>R</b><h3>REVENUE</h3><p>Problema, valor y métrica.</p></article>
        <article><b>D</b><h3>DATA</h3><p>Acceso, calidad y permisos.</p></article>
        <article><b>W</b><h3>WORKFLOW</h3><p>Decisión y proceso afectado.</p></article>
        <article><b>A</b><h3>ADOPTION</h3><p>Owner, incentivos y uso.</p></article>
        <article><b>G</b><h3>GOVERNANCE</h3><p>Riesgo, control y auditoría.</p></article>
      </div>`,notes:"Un score alto en herramientas no compensa datos inaccesibles o ausencia de proceso."},{id:"maturity-ladder",kind:"framework",theme:"light",eyebrow:"MADUREZ",title:"NO TODAS LAS EMPRESAS<br>DEBEN BUSCAR AUTONOMÍA.",body:`
      <div class="ladder">
        <article><b>1</b><h3>ASISTIR</h3><p>Humano decide.</p></article>
        <article><b>2</b><h3>ACELERAR</h3><p>IA propone.</p></article>
        <article><b>3</b><h3>AUTOMATIZAR</h3><p>IA ejecuta reglas.</p></article>
        <article><b>4</b><h3>ORQUESTAR</h3><p>IA coordina sistemas.</p></article>
        <article><b>5</b><h3>DELEGAR</h3><p>IA decide con límites.</p></article>
      </div>`,notes:"La ambición correcta depende del riesgo y la reversibilidad de la decisión."},{id:"readiness-instructions",kind:"activity",theme:"dark",duration:4,eyebrow:"ACTIVIDAD INDIVIDUAL",title:"AUDITA TU READINESS.<br>SIN AUTOENGAÑO.",body:`
      <ol class="steps">
        <li>Piensa en un caso de uso concreto.</li>
        <li>Califica cada dimensión del 1 al 5.</li>
        <li>No califiques la empresa: califica el caso.</li>
        <li>Anota el factor que podría matar el piloto.</li>
      </ol>`,notes:"Preparar el calculador de la siguiente slide."},{id:"readiness-calculator",kind:"interactive",theme:"light",eyebrow:"AI READINESS SCORE",title:"¿QUÉ TAN FINANCIABLE ES TU CASO?",body:`
      <form class="score-form" data-calculator="readiness">
        <label>Revenue thesis <input type="range" min="1" max="5" value="3" name="revenue"><output>3</output></label>
        <label>Data disponible <input type="range" min="1" max="5" value="3" name="data"><output>3</output></label>
        <label>Workflow definido <input type="range" min="1" max="5" value="3" name="workflow"><output>3</output></label>
        <label>Adopción y owner <input type="range" min="1" max="5" value="3" name="adoption"><output>3</output></label>
        <label>Gobernanza y control <input type="range" min="1" max="5" value="3" name="governance"><output>3</output></label>
        <div class="score-result"><strong data-score>60</strong><span data-verdict>LISTO PARA PILOTO CONTROLADO</span></div>
      </form>`,notes:"Pedir que compartan el factor más bajo, no el score total."},{id:"readiness-interpretation",kind:"cards",theme:"light",eyebrow:"INTERPRETACIÓN",title:"EL PROMEDIO ESCONDE<br>EL RIESGO DE COLAPSO.",body:`
      <div class="thresholds">
        <article><b>0–39</b><h3>NO FINANCIAR</h3><p>Primero corrige fundamentos.</p></article>
        <article><b>40–59</b><h3>EXPERIMENTO</h3><p>Scope estrecho y reversible.</p></article>
        <article><b>60–79</b><h3>PILOTO</h3><p>Owner y baseline definidos.</p></article>
        <article><b>80–100</b><h3>ESCALAR</h3><p>Con gates de riesgo.</p></article>
      </div>`,notes:"Aplicar una regla adicional: ninguna dimensión crítica menor a 3."},{id:"pilot-purgatory",kind:"statement",theme:"red",eyebrow:"EL PURGATORIO DEL PILOTO",title:"DEMASIADO PROMETEDOR<br>PARA MATARLO.<br>DEMASIADO DÉBIL<br>PARA ESCALARLO.",subtitle:"La ausencia de criterios de salida convierte experimentos en costos fijos.",notes:"Provocar reconocimiento. Preguntar cuántos pilotos llevan más de seis meses."},{id:"failure-patterns",kind:"cards",theme:"dark",eyebrow:"PATRONES DE FALLA",title:"LA TECNOLOGÍA RARA VEZ<br>ES EL PRIMER DOMINÓ.",body:`
      <div class="rule-grid">
        <div><b>01</b><p>Problema sin valor financiero.</p></div>
        <div><b>02</b><p>Data sin permisos.</p></div>
        <div><b>03</b><p>Output sin decisión.</p></div>
        <div><b>04</b><p>Proceso sin owner.</p></div>
        <div><b>05</b><p>Riesgo sin responsable.</p></div>
        <div><b>06</b><p>Piloto sin kill criteria.</p></div>
      </div>`,notes:"Pedir un ejemplo por mesa."},{id:"readiness-decision",kind:"split",theme:"light",eyebrow:"LA DECISIÓN CORRECTA",title:"NO ES SÍ O NO.<br>ES QUÉ DEBEMOS CONSTRUIR ANTES.",body:`
      <div class="decision-tree">
        <article><span>SI FALLA DATA</span><h3>INSTRUMENTA</h3></article>
        <article><span>SI FALLA WORKFLOW</span><h3>REDISEÑA</h3></article>
        <article><span>SI FALLA ADOPCIÓN</span><h3>REALINEA INCENTIVOS</h3></article>
        <article><span>SI FALLA CONTROL</span><h3>REDUCE AUTONOMÍA</h3></article>
      </div>`,notes:"Convertir diagnóstico en secuencia de inversión."},{id:"readiness-takeaway",kind:"takeaway",theme:"light",eyebrow:"KEY TAKEAWAY 01",title:"LA IA NO ESCALA<br>DONDE EL NEGOCIO<br>NO ESTÁ DISEÑADO PARA APRENDER.",subtitle:"Readiness no mide entusiasmo. Mide la capacidad de repetir, controlar y mejorar.",notes:"Cierre del bloque."},{id:"investment-section",kind:"section",theme:"dark",eyebrow:"BLOQUE 02 · 40 MIN",title:"DÓNDE INVERTIR<br><span>PRIMERO.</span>",subtitle:"Separar iniciativas que producen resultado de iniciativas que producen ruido.",notes:"Cambiar lenguaje de innovación por Capital Allocation."},{id:"use-case-cemetery",kind:"statement",theme:"light",eyebrow:"EL CEMENTERIO DE USE CASES",title:"UNA LISTA DE 50 IDEAS<br>NO ES UNA ESTRATEGIA.",subtitle:"Es una forma sofisticada de evitar elegir.",notes:"Preguntar quién tiene un backlog de IA y cuántos casos tienen P&L owner."},{id:"capital-allocation",kind:"definition",theme:"red",eyebrow:"CAMBIO DE MENTALIDAD",title:"EL PRESUPUESTO DE IA<br>ES <span>CAPITAL DE INVERSIÓN.</span>",body:`
      <div class="formula">RETORNO ESPERADO × CONFIANZA ÷ CAPITAL EN RIESGO</div>
      <p>Cada peso invertido compite contra otra mejora posible del negocio.</p>`,notes:"Introducir costo de oportunidad."},{id:"value-formula",kind:"framework",theme:"light",eyebrow:"EL AI VALUE SCORE",title:"PRIORIZA VALOR.<br>NO NOVEDAD.",body:`
      <div class="big-equation">
        <span>(IMPACTO × VELOCIDAD × CONFIANZA)</span>
        <hr>
        <span>ESFUERZO × RIESGO</span>
      </div>`,notes:"No vender falsa precisión. El score fuerza comparabilidad y conversación."},{id:"impact-feasibility",kind:"matrix",theme:"dark",eyebrow:"MAPA DE CAPITAL",title:"IMPACTO × VIABILIDAD.",body:`
      <div class="matrix-grid">
        <div class="q q1"><b>APUESTAS</b><span>Aprender antes de escalar</span></div>
        <div class="q q2"><b>ESCALAR</b><span>Financiar con gates</span></div>
        <div class="q q3"><b>MATAR</b><span>Costo de distracción</span></div>
        <div class="q q4"><b>QUICK WINS</b><span>Automatizar y liberar tiempo</span></div>
        <span class="axis-x">VIABILIDAD →</span><span class="axis-y">IMPACTO →</span>
      </div>`,notes:"Quick win no significa estratégico. Su valor puede ser financiar aprendizaje."},{id:"financial-lens",kind:"cards",theme:"light",eyebrow:"FILTRO DEL INVERSIONISTA",title:"CUATRO PREGUNTAS<br>ANTES DE SOLTAR CAPITAL.",body:`
      <div class="numbered-cards">
        <article><b>01</b><h3>UPSIDE</h3><p>¿Qué ingreso o costo puede mover?</p></article>
        <article><b>02</b><h3>PAYBACK</h3><p>¿Cuándo vuelve el cash?</p></article>
        <article><b>03</b><h3>DOWNSIDE</h3><p>¿Qué perdemos si falla?</p></article>
        <article><b>04</b><h3>OPTION VALUE</h3><p>¿Qué capacidad desbloquea?</p></article>
      </div>`,notes:"Conectar con runway y reversibilidad."},{id:"cost-stack",kind:"framework",theme:"light",eyebrow:"EL COSTO REAL",title:"LA LICENCIA ES SOLO<br>LA PUNTA DEL TCO.",body:`
      <div class="cost-stack">
        <div><b>TOOL</b><span>licencias y consumo</span></div>
        <div><b>INTEGRATION</b><span>APIs, data, seguridad</span></div>
        <div><b>CHANGE</b><span>proceso, training, adopción</span></div>
        <div><b>CONTROL</b><span>evals, revisión, auditoría</span></div>
        <div><b>FAILURE</b><span>errores, rework, reputación</span></div>
      </div>`,notes:"TCO = Total Cost of Ownership. Añadir costo de oportunidad del equipo."},{id:"payback",kind:"definition",theme:"dark",eyebrow:"PAYBACK PERIOD",title:"EL LTV TEÓRICO<br>NO PAGA LA NÓMINA.",body:`
      <div class="formula">INVERSIÓN INICIAL ÷ BENEFICIO MENSUAL INCREMENTAL</div>
      <p>Si el payback supera el runway o el ciclo presupuestal, el caso no está listo para escalar.</p>`,notes:"Usar ejemplo simple: 600k inversión / 100k beneficio = 6 meses."},{id:"risk-adjusted",kind:"cards",theme:"light",eyebrow:"RISK-ADJUSTED RETURN",title:"NO TODO IMPACTO<br>VALE EL MISMO RIESGO.",body:`
      <div class="risk-grid">
        <article><h3>REVERSIBLE</h3><p>Copy interno, resumen, ideación.</p><b>FAST TRACK</b></article>
        <article><h3>OBSERVABLE</h3><p>Recomendación con humano.</p><b>PILOTO</b></article>
        <article><h3>SENSIBLE</h3><p>Pricing, crédito, salud, empleo.</p><b>CONTROL</b></article>
        <article><h3>IRREVERSIBLE</h3><p>Acciones con daño difícil de reparar.</p><b>NO AUTONOMÍA</b></article>
      </div>`,notes:"A mayor daño potencial, mayor supervisión y evidencia requerida."},{id:"three-horizons",kind:"framework",theme:"red",eyebrow:"PORTAFOLIO 70 / 20 / 10",title:"EFICIENCIA FINANCIA<br>TRANSFORMACIÓN.",body:`
      <div class="horizons">
        <article><b>70%</b><h3>MEJORAR</h3><p>Procesos actuales.</p></article>
        <article><b>20%</b><h3>REDISEÑAR</h3><p>Workflows completos.</p></article>
        <article><b>10%</b><h3>EXPLORAR</h3><p>Nuevos modelos.</p></article>
      </div>`,notes:"Es una regla inicial, no dogma. Ajustar según madurez y runway."},{id:"use-case-examples",kind:"cards",theme:"light",eyebrow:"DE LO GENÉRICO A LO FINANCIABLE",title:"CAMBIA EL NOMBRE.<br>CAMBIA LA DECISIÓN.",body:`
      <div class="before-after">
        <article><span>NO</span><p>“Usar IA para contenidos.”</p><b>SIN BASELINE</b></article>
        <article><span>SÍ</span><p>“Reducir 35% el tiempo de adaptación de 120 assets mensuales sin elevar retrabajo.”</p><b>MEDIBLE</b></article>
        <article><span>NO</span><p>“Chatbot inteligente.”</p><b>SIN JOB</b></article>
        <article><span>SÍ</span><p>“Resolver consultas de estatus con 80% containment y CSAT estable.”</p><b>DECIDIBLE</b></article>
      </div>`,notes:"Los targets son ejemplos de diseño, no benchmarks universales."},{id:"prioritization-instructions",kind:"activity",theme:"dark",duration:10,eyebrow:"ACTIVIDAD GRUPAL",title:"COMITÉ DE INVERSIÓN:<br>¿QUÉ FINANCIAMOS?",body:`
      <ol class="steps">
        <li>Elijan un caso de uso real.</li>
        <li>Definan impacto, viabilidad, confianza, esfuerzo y riesgo.</li>
        <li>Calculen el AI Value Score.</li>
        <li>Decidan: escalar, pilotear, rediseñar o matar.</li>
      </ol>
      <p class="activity-output">OUTPUT: tesis de inversión en 30 palabras.</p>`,notes:"Formar grupos de 3–4. Insistir en un caso concreto y una métrica."},{id:"prioritization-calculator",kind:"interactive",theme:"light",eyebrow:"AI VALUE CALCULATOR",title:"PRESIONA LA IDEA<br>ANTES DE PRESIONAR BUY.",body:`
      <form class="score-form compact" data-calculator="value">
        <label>Impacto <input type="range" min="1" max="5" value="3" name="impact"><output>3</output></label>
        <label>Velocidad <input type="range" min="1" max="5" value="3" name="speed"><output>3</output></label>
        <label>Confianza <input type="range" min="1" max="5" value="3" name="confidence"><output>3</output></label>
        <label>Esfuerzo <input type="range" min="1" max="5" value="3" name="effort"><output>3</output></label>
        <label>Riesgo <input type="range" min="1" max="5" value="3" name="risk"><output>3</output></label>
        <div class="score-result"><strong data-score>3.0</strong><span data-verdict>REDISEÑAR ANTES DE FINANCIAR</span></div>
      </form>`,notes:"Fórmula normalizada. El valor pedagógico está en la discusión de inputs."},{id:"investment-debrief",kind:"share",theme:"red",duration:6,eyebrow:"COMPARTIR",title:"VENDE TU TESIS.<br>NO TU ENTUSIASMO.",subtitle:"60 segundos por equipo: problema, impacto, payback, riesgo y decisión.",notes:"Elegir dos equipos. El grupo actúa como IC y hace una pregunta adversarial."},{id:"kill-criteria",kind:"cards",theme:"light",eyebrow:"KILL CRITERIA",title:"UN BUEN EXPERIMENTO<br>SABE CÓMO MORIR.",body:`
      <div class="numbered-cards">
        <article><b>01</b><h3>PERFORMANCE</h3><p>No supera baseline.</p></article>
        <article><b>02</b><h3>ECONOMICS</h3><p>Payback inviable.</p></article>
        <article><b>03</b><h3>ADOPTION</h3><p>El workflow lo rechaza.</p></article>
        <article><b>04</b><h3>RISK</h3><p>El control cuesta más que el valor.</p></article>
      </div>`,notes:"Definir criterios antes del piloto para evitar sesgo de compromiso."},{id:"workflow-case",kind:"case",theme:"dark",eyebrow:"CASO · EL PATRÓN DE LOS HIGH PERFORMERS",title:"NO AÑADEN IA AL PROCESO.<br><span>REDISEÑAN EL PROCESO.</span>",body:`
      <div class="case-flow">
        <span>BRIEF</span><i>→</i><span>INSIGHTS</span><i>→</i><span>CREATIVE</span><i>→</i><span>QA</span><i>→</i><span>LEARNING</span>
      </div>
      <p>El valor aparece cuando feedback, decisiones y ejecución se conectan; no cuando cada área compra su propio copiloto.</p>`,sources:[tt("McKinsey — State of AI 2025","https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-in-2025.pdf")],notes:"McKinsey identifica rediseño de workflows como factor diferenciador en high performers."},{id:"investment-takeaway",kind:"takeaway",theme:"light",eyebrow:"KEY TAKEAWAY 02",title:"FINANCIA LA DECISIÓN<br>QUE CAMBIA.<br>NO LA DEMO QUE IMPRESIONA.",subtitle:"El mejor caso combina valor material, aprendizaje rápido y downside controlado.",notes:"Cierre de Capital Allocation."},{id:"vendor-section",kind:"section",theme:"red",eyebrow:"BLOQUE 03 · 30 MIN",title:"CÓMO NO<br>COMPRAR HUMO.",subtitle:"Evaluar herramientas y proveedores sin depender del equipo técnico.",notes:"El líder no necesita programar; necesita hacer preguntas que produzcan evidencia."},{id:"demo-theater",kind:"statement",theme:"dark",eyebrow:"DEMO THEATER",title:"LA DEMO ESTÁ DISEÑADA<br>PARA EL MEJOR DÍA.<br><span>TÚ COMPRAS TODOS LOS DÍAS.</span>",subtitle:"La pregunta no es “¿qué puede hacer?”. Es “¿qué tan consistentemente lo hace en nuestro contexto?”.",notes:"Diferenciar capability demo de reliability evidence."},{id:"prueba",kind:"framework",theme:"light",eyebrow:"EL FRAMEWORK P.R.U.E.B.A.",title:"SEIS FILTROS PARA<br>NO DEPENDER DE LA JERGA.",body:`
      <div class="acronym">
        <div><b>P</b><span>PROBLEM FIT</span></div>
        <div><b>R</b><span>RESULT EVIDENCE</span></div>
        <div><b>U</b><span>USABILITY</span></div>
        <div><b>E</b><span>ECONOMICS</span></div>
        <div><b>B</b><span>BOUNDARIES</span></div>
        <div><b>A</b><span>ARCHITECTURE</span></div>
      </div>`,notes:"Framework propietario para conversar con vendors."},{id:"six-vendor-criteria",kind:"cards",theme:"light",eyebrow:"DUE DILIGENCE",title:"LA RESPUESTA DEBE TRAER<br>EVIDENCIA, NO ADJETIVOS.",body:`
      <div class="rule-grid">
        <div><b>P</b><p>¿Qué job específico mejora?</p></div>
        <div><b>R</b><p>¿Contra qué baseline ganó?</p></div>
        <div><b>U</b><p>¿Quién cambia su workflow?</p></div>
        <div><b>E</b><p>¿Cuál es el TCO a 12 meses?</p></div>
        <div><b>B</b><p>¿Dónde falla y quién responde?</p></div>
        <div><b>A</b><p>¿Cómo entra y cómo salgo?</p></div>
      </div>`,notes:"Si el vendor no puede explicar límites, no conoce el sistema o no quiere vender la verdad."},{id:"tech-concepts",kind:"split",theme:"dark",eyebrow:"TRADUCTOR PARA LÍDERES",title:"NO TODO LO QUE HABLA<br>ES UN AGENTE.",body:`
      <div class="concept-grid">
        <article><h3>COPILOT</h3><p>Propone. El humano ejecuta.</p></article>
        <article><h3>RAG</h3><p>Responde usando conocimiento recuperado.</p></article>
        <article><h3>AUTOMATION</h3><p>Ejecuta reglas predefinidas.</p></article>
        <article><h3>AGENT</h3><p>Planea y usa herramientas dentro de límites.</p></article>
      </div>`,notes:"El nombre importa menos que la autonomía, permisos y reversibilidad."},{id:"evals",kind:"definition",theme:"light",eyebrow:"LA PALABRA QUE DEBES EXIGIR",title:"EVALS:<br><span>PRUEBAS REPETIBLES DEL COMPORTAMIENTO.</span>",body:`
      <div class="formula">DATA REAL + CRITERIO + MUESTRA + UMBRAL + MONITOREO</div>
      <p>Sin evals, “funciona bien” significa que alguien vio tres respuestas bonitas.</p>`,notes:"Pedir evidencia por segmento, idioma, edge cases y condiciones de fallo."},{id:"vendor-red-flags",kind:"cards",theme:"red",eyebrow:"RED FLAGS",title:"SI ESCUCHAS ESTO,<br>BAJA LA VALUACIÓN.",body:`
      <div class="red-flags">
        <p>“100% PRECISO”</p><p>“IMPLEMENTACIÓN INSTANTÁNEA”</p>
        <p>“NO NECESITA DATA”</p><p>“TOTALMENTE AUTÓNOMO”</p>
        <p>“ROI GARANTIZADO”</p><p>“MODELO PROPIETARIO”</p>
      </div>`,notes:"Cada claim debe convertirse en definición, benchmark, muestra y condición."},{id:"vendor-tco",kind:"framework",theme:"dark",eyebrow:"ECONOMICS",title:"EL PRECIO POR USUARIO<br>ES UNA DISTRACCIÓN.",body:`
      <div class="big-equation">
        <span>LICENCIA + CONSUMO + INTEGRACIÓN + CAMBIO + CONTROL + SALIDA</span>
        <hr>
        <span>VOLUMEN ÚTIL PRODUCIDO</span>
      </div>`,notes:"Calcular costo por outcome útil, no por asiento."},{id:"vendor-calculator",kind:"interactive",theme:"light",eyebrow:"VENDOR SCORECARD",title:"¿COMPRAR, PILOTEAR<br>O RECHAZAR?",body:`
      <form class="score-form compact" data-calculator="vendor">
        <label>Problem fit <input type="range" min="1" max="5" value="3" name="problem"><output>3</output></label>
        <label>Evidence <input type="range" min="1" max="5" value="3" name="evidence"><output>3</output></label>
        <label>Usability <input type="range" min="1" max="5" value="3" name="usability"><output>3</output></label>
        <label>Economics <input type="range" min="1" max="5" value="3" name="economics"><output>3</output></label>
        <label>Boundaries <input type="range" min="1" max="5" value="3" name="boundaries"><output>3</output></label>
        <label>Architecture <input type="range" min="1" max="5" value="3" name="architecture"><output>3</output></label>
        <div class="score-result"><strong data-score>60</strong><span data-verdict>PILOTO CONDICIONADO</span></div>
      </form>`,notes:"Evidence y boundaries tienen peso mayor. Un vendor que oculta fallas no debe pasar."},{id:"procurement-roleplay",kind:"activity",theme:"dark",duration:10,eyebrow:"ROLE PLAY",title:"VENDEDOR VS.<br>COMITÉ DE INVERSIÓN.",body:`
      <ol class="steps">
        <li>Una persona vende un “agente de marketing autónomo”.</li>
        <li>El comité solo puede usar preguntas P.R.U.E.B.A.</li>
        <li>El vendor debe admitir al menos dos límites.</li>
        <li>Decidan: comprar, pilotear o rechazar.</li>
      </ol>`,notes:"Entregar al vendor el permiso de improvisar. Evaluar calidad de preguntas del comité."},{id:"vendor-debrief",kind:"share",theme:"light",duration:5,eyebrow:"DEBRIEF",title:"¿QUÉ PREGUNTA<br>ROMPIÓ LA DEMO?",subtitle:"La mejor pregunta suele revelar datos, límites, economía o dependencia.",notes:"Capturar las tres preguntas más fuertes del grupo."},{id:"first-half-synthesis",kind:"takeaway",theme:"red",eyebrow:"PRIMERA MITAD",title:"READINESS DEFINE<br>QUÉ PUEDES HACER.<br>CAPITAL DEFINE QUÉ DEBES HACER.<br>DUE DILIGENCE DEFINE CON QUIÉN.",notes:"Recapitular antes del descanso."},{id:"break",kind:"break",theme:"dark",duration:20,title:"INTERMEDIO",subtitle:"20 MINUTOS · VOLVEMOS CON TU AUDIENCIA DEL FUTURO.",notes:"Iniciar timer. La cuenta permanece aunque se cambie de slide."},{id:"predictive-section",kind:"section",theme:"red",eyebrow:"BLOQUE 04 · 35 MIN",title:"TU AUDIENCIA<br>CAMBIÓ MIENTRAS<br>DORMÍAS.",subtitle:"Segmentación predictiva para líderes que deciden en tiempo real.",notes:"Reactivar energía con una decisión inmediata."},{id:"audience-changed",kind:"statement",theme:"dark",eyebrow:"EL PROBLEMA",title:"TU SEGMENTO DICE<br>QUIÉN ERA.<br><span>LA SEÑAL DICE QUÉ HARÁ.</span>",subtitle:"Edad, ciudad y NSE describen. Frecuencia, secuencia y contexto anticipan.",notes:"No declarar muerto lo demográfico; ubicarlo como contexto, no intención."},{id:"traits-vs-signals",kind:"split",theme:"light",eyebrow:"EL ESPEJO VS. EL RADAR",title:"ATRIBUTOS ESTÁTICOS.<br>SEÑALES DINÁMICAS.",body:`
      <div class="versus">
        <article><span>TRAITS</span><h3>QUIÉN ES</h3><p>Industria, edad, plan, ubicación.</p></article>
        <strong>+</strong>
        <article><span>SIGNALS</span><h3>QUÉ CAMBIÓ</h3><p>Búsqueda, recencia, secuencia, fricción.</p></article>
      </div>`,notes:"Predicción combina ambos. Señal sin contexto produce falsos positivos."},{id:"predictive-definition",kind:"definition",theme:"light",eyebrow:"DEFINICIÓN",title:"SEGMENTACIÓN PREDICTIVA<br>AGRUPA POR <span>PROBABILIDAD DE ACCIÓN.</span>",body:`
      <div class="formula">P(CONVERSIÓN | SEÑALES, CONTEXTO, TIEMPO)</div>
      <p>No adivina individuos. Ordena decisiones bajo incertidumbre.</p>`,notes:"Explicar probabilidad calibrada: un 0.7 debe cumplirse aproximadamente 7 de cada 10 veces en grupos equivalentes."},{id:"predictive-loop",kind:"framework",theme:"dark",eyebrow:"EL LOOP S⁵",title:"DE DATA A DECISIÓN<br>EN CINCO MOVIMIENTOS.",body:`
      <div class="journey-line five">
        <div><b>1</b><span>SIGNAL</span></div>
        <div><b>2</b><span>SCORE</span></div>
        <div><b>3</b><span>SEGMENT</span></div>
        <div><b>4</b><span>SERVE</span></div>
        <div><b>5</b><span>STUDY</span></div>
      </div>`,notes:"El quinto paso evita que el modelo se convierta en dogma."},{id:"propensity",kind:"cards",theme:"light",eyebrow:"CUATRO SCORES ÚTILES",title:"PREDICE LA DECISIÓN<br>QUE CAMBIA TU ACCIÓN.",body:`
      <div class="numbered-cards">
        <article><b>P₁</b><h3>BUY</h3><p>Propensión de compra.</p></article>
        <article><b>P₂</b><h3>CHURN</h3><p>Riesgo de abandono.</p></article>
        <article><b>P₃</b><h3>VALUE</h3><p>LTV esperado.</p></article>
        <article><b>P₄</b><h3>RESPONSE</h3><p>Lift por intervención.</p></article>
      </div>`,notes:"El mejor score no es el más preciso; es el que cambia una acción rentable."},{id:"next-best-action",kind:"framework",theme:"red",eyebrow:"NEXT-BEST-ACTION",title:"NO PREGUNTES QUÉ MENSAJE ENVIAR.<br>PREGUNTA <span>QUÉ ACCIÓN MERECE ESTE MOMENTO.</span>",body:`
      <div class="action-row">
        <span>EDUCAR</span><span>OFERTAR</span><span>ESPERAR</span><span>ASISTIR</span><span>NO CONTACTAR</span>
      </div>`,notes:"No contactar también es una acción optimizada."},{id:"retail-scenario",kind:"case",theme:"light",eyebrow:"CASO · RETAIL",title:"MISMO CARRITO.<br>TRES INTENCIONES.",body:`
      <div class="scenario-grid">
        <article><b>A</b><h3>ALTA INTENCIÓN</h3><p>Recencia + stock revisado + envío consultado.</p><span>REMOVER FRICCIÓN</span></article>
        <article><b>B</b><h3>COMPARACIÓN</h3><p>Varias categorías + visitas largas + sin checkout.</p><span>PRUEBA Y DIFERENCIACIÓN</span></article>
        <article><b>C</b><h3>BAJA CONFIANZA</h3><p>Devoluciones + reseñas negativas + soporte.</p><span>NO PRESIONAR</span></article>
      </div>`,notes:"La personalización útil cambia la intervención, no solo el copy."},{id:"predictive-activity",kind:"activity",theme:"dark",duration:12,eyebrow:"ACTIVIDAD GRUPAL",title:"DE SEGMENTO<br>A SISTEMA DE DECISIÓN.",body:`
      <ol class="steps">
        <li>Elijan una decisión: adquirir, retener o expandir.</li>
        <li>Definan tres señales predictivas.</li>
        <li>Definan una acción diferente por nivel de score.</li>
        <li>Definan qué resultado enseñará al sistema.</li>
      </ol>
      <p class="activity-output">OUTPUT: Signal → Score → Action → Learning.</p>`,notes:"Evitar variables sensibles o proxies problemáticos."},{id:"predictive-guardrails",kind:"cards",theme:"light",eyebrow:"GUARDRAILS",title:"PRECISIÓN SIN CAUSALIDAD<br>PUEDE DESTRUIR MARGEN.",body:`
      <div class="rule-grid">
        <div><b>01</b><p>Compara contra control.</p></div>
        <div><b>02</b><p>Mide lift incremental.</p></div>
        <div><b>03</b><p>Vigila drift.</p></div>
        <div><b>04</b><p>Audita sesgo.</p></div>
        <div><b>05</b><p>Limita frecuencia.</p></div>
        <div><b>06</b><p>Permite opt-out.</p></div>
      </div>`,notes:"Propensión alta no significa que el marketing causó la compra."},{id:"predictive-takeaway",kind:"takeaway",theme:"red",eyebrow:"KEY TAKEAWAY 03",title:"EL SEGMENTO DEL FUTURO<br>NO ES UNA PERSONA.<br>ES UNA PROBABILIDAD<br>QUE CAMBIA.",subtitle:"La ventaja está en actualizar la decisión más rápido que la competencia.",notes:"Cierre del bloque."},{id:"intelligence-section",kind:"section",theme:"dark",eyebrow:"BLOQUE 05 · 30 MIN",title:"LO QUE TU CONSUMIDOR<br>NO TE DICE.<br><span>PERO LA IA YA VE.</span>",subtitle:"Inteligencia de mercado accionable.",notes:"Diferenciar research episódico de sistema de señales."},{id:"consumer-unsaid",kind:"statement",theme:"light",eyebrow:"LA PARADOJA",title:"EL CONSUMIDOR NO LLENA TU ENCUESTA.<br><span>PERO DEJA RASTROS.</span>",subtitle:"Busca, compara, abandona, comenta, pregunta, devuelve, recomienda y cambia de lenguaje.",notes:"No romantizar: el rastro también tiene sesgo y ruido."},{id:"data-sources",kind:"cards",theme:"light",eyebrow:"EL NUEVO RESEARCH MIX",title:"ESCUCHA LO QUE DICE.<br>OBSERVA LO QUE HACE.",body:`
      <div class="dimension-grid">
        <article><b>01</b><h3>SEARCH</h3><p>Necesidad explícita.</p></article>
        <article><b>02</b><h3>SOCIAL</h3><p>Lenguaje y cultura.</p></article>
        <article><b>03</b><h3>CRM</h3><p>Relación y valor.</p></article>
        <article><b>04</b><h3>BEHAVIOR</h3><p>Fricción y secuencia.</p></article>
        <article><b>05</b><h3>SERVICE</h3><p>Problemas no resueltos.</p></article>
      </div>`,notes:"Triangular señales. Ninguna fuente representa el mercado completo."},{id:"signal-stack",kind:"framework",theme:"red",eyebrow:"EL SIGNAL STACK",title:"VOLUMEN NO ES INSIGHT.",body:`
      <div class="stack">
        <div><b>05</b><span>DECISIÓN</span></div>
        <div><b>04</b><span>IMPLICACIÓN</span></div>
        <div><b>03</b><span>PATRÓN</span></div>
        <div><b>02</b><span>SEÑAL</span></div>
        <div><b>01</b><span>DATA</span></div>
      </div>`,notes:"Un dashboard que no cambia ninguna decisión es almacenamiento decorativo."},{id:"anomaly-detection",kind:"definition",theme:"dark",eyebrow:"DETECTAR ANTES",title:"LA IA ES BUENA VIENDO<br>LO QUE ROMPE EL PATRÓN.",body:`
      <div class="formula">BASELINE → DESVIACIÓN → CONTEXTO → HIPÓTESIS → TEST</div>
      <p>Una anomalía no es una explicación. Es una invitación priorizada a investigar.</p>`,notes:"Evitar confundir correlación con causa."},{id:"jobs-to-be-done",kind:"split",theme:"light",eyebrow:"LLM + JTBD",title:"AGRUPA POR PROBLEMA.<br>NO SOLO POR SENTIMIENTO.",body:`
      <div class="before-after">
        <article><span>DÉBIL</span><p>“37% negativo.”</p><b>DESCRIBE</b></article>
        <article><span>FUERTE</span><p>“Quieren certeza de entrega antes de pagar más.”</p><b>ACTIVA</b></article>
        <article><span>DÉBIL</span><p>“Tema: servicio.”</p><b>GENÉRICO</b></article>
        <article><span>FUERTE</span><p>“Necesitan resolver sin repetir su historia.”</p><b>DISEÑABLE</b></article>
      </div>`,notes:"Los LLM ayudan a codificar lenguaje; la interpretación sigue requiriendo criterio y muestreo."},{id:"competitive-intelligence",kind:"cards",theme:"light",eyebrow:"COMPETITIVE INTELLIGENCE",title:"NO MONITORES COMPETIDORES.<br>MONITOREA MOVIMIENTOS.",body:`
      <div class="numbered-cards">
        <article><b>01</b><h3>MESSAGE</h3><p>Qué promesa están reforzando.</p></article>
        <article><b>02</b><h3>MEDIA</h3><p>Dónde crece su presión.</p></article>
        <article><b>03</b><h3>PRODUCT</h3><p>Qué fricción eliminan.</p></article>
        <article><b>04</b><h3>TALENT</h3><p>Qué capacidad están construyendo.</p></article>
      </div>`,notes:"Movimiento implica dirección y velocidad, no screenshot aislado."},{id:"command-center",kind:"framework",theme:"dark",eyebrow:"MARKET INTELLIGENCE ROOM",title:"CADA SEÑAL NECESITA<br>UNA RUTA DE DECISIÓN.",body:`
      <div class="case-flow">
        <span>DETECT</span><i>→</i><span>VERIFY</span><i>→</i><span>SIZE</span><i>→</i><span>DECIDE</span><i>→</i><span>LEARN</span>
      </div>
      <p>Owner · SLA · threshold · action · feedback.</p>`,notes:"Sin SLA y owner, real time significa real-time dashboard, delayed decision."},{id:"intelligence-case",kind:"case",theme:"red",eyebrow:"WAR STORY · DEMANDA EMERGENTE",title:"LA OPORTUNIDAD APARECIÓ<br>PRIMERO EN EL LENGUAJE.",body:`
      <div class="scenario-grid">
        <article><b>1</b><h3>SEÑAL</h3><p>Nuevas preguntas repetidas.</p></article>
        <article><b>2</b><h3>HIPÓTESIS</h3><p>La barrera cambió de precio a confianza.</p></article>
        <article><b>3</b><h3>ACCIÓN</h3><p>Nuevo proof, landing y script comercial.</p></article>
      </div>`,notes:"Contar un caso propio sin información confidencial. Enfatizar secuencia y validación."},{id:"signal-to-decision",kind:"activity",theme:"light",duration:12,eyebrow:"ACTIVIDAD GRUPAL",title:"CONVIERTE UNA SEÑAL<br>EN UNA DECISIÓN.",body:`
      <ol class="steps">
        <li>Elige una señal reciente de tu mercado.</li>
        <li>Escribe tres explicaciones alternativas.</li>
        <li>Define qué dato discrimina entre ellas.</li>
        <li>Diseña una acción reversible en siete días.</li>
      </ol>
      <p class="activity-output">OUTPUT: señal, hipótesis, evidencia y decisión.</p>`,notes:"Penalizar hipótesis únicas. Recompensar falsabilidad."},{id:"intelligence-takeaway",kind:"takeaway",theme:"dark",eyebrow:"KEY TAKEAWAY 04",title:"LA IA NO REEMPLAZA<br>LA INTUICIÓN.<br><span>LA OBLIGA A COMPETIR CONTRA EVIDENCIA.</span>",subtitle:"La inteligencia útil reduce el tiempo entre señal y decisión.",notes:"Cierre del bloque."},{id:"personalization-section",kind:"section",theme:"red",eyebrow:"BLOQUE 06 · 25 MIN",title:"PERSONALIZAR<br>SIN INVADIR.",subtitle:"Escalar relevancia sin perder confianza.",notes:"Marcar que legal compliance es piso, no techo de confianza."},{id:"creepy-line",kind:"statement",theme:"dark",eyebrow:"THE CREEPY LINE",title:"CUANDO LA MARCA SABE MÁS<br>DE LO QUE EL CLIENTE RECUERDA HABER DICHO,<br><span>LA RELEVANCIA SE VUELVE VIGILANCIA.</span>",notes:"Pedir ejemplos que se sintieron útiles vs. inquietantes."},{id:"value-exchange",kind:"definition",theme:"light",eyebrow:"LA ECUACIÓN DE CONFIANZA",title:"LA PERSONALIZACIÓN SE ACEPTA<br>CUANDO EL VALOR SUPERA LA SORPRESA.",body:`
      <div class="big-equation">
        <span>VALOR PERCIBIDO + CONTROL</span>
        <hr>
        <span>SENSIBILIDAD DEL DATO × SORPRESA</span>
      </div>`,notes:"Framework cualitativo. No pretende ser fórmula matemática."},{id:"trust-matrix",kind:"matrix",theme:"light",eyebrow:"MATRIZ DE CONFIANZA",title:"NO TODO LO POSIBLE<br>ES PERMISIBLE.",body:`
      <div class="matrix-grid trust">
        <div class="q q1"><b>PEDIR CONSENTIMIENTO</b><span>Alto valor · alta sensibilidad</span></div>
        <div class="q q2"><b>PERSONALIZAR</b><span>Alto valor · baja sensibilidad</span></div>
        <div class="q q3"><b>PROHIBIR</b><span>Bajo valor · alta sensibilidad</span></div>
        <div class="q q4"><b>SIMPLIFICAR</b><span>Bajo valor · baja sensibilidad</span></div>
        <span class="axis-x">VALOR →</span><span class="axis-y">SENSIBILIDAD →</span>
      </div>`,notes:"La sensibilidad depende del contexto y del posible daño."},{id:"personalization-maturity",kind:"framework",theme:"dark",eyebrow:"MADUREZ DE PERSONALIZACIÓN",title:"MÁS PRECISIÓN<br>EXIGE MÁS CONTROL.",body:`
      <div class="ladder four">
        <article><b>1</b><h3>CONTEXT</h3><p>Canal, hora, ubicación.</p></article>
        <article><b>2</b><h3>BEHAVIOR</h3><p>Acciones recientes.</p></article>
        <article><b>3</b><h3>PREDICTION</h3><p>Propensión y NBA.</p></article>
        <article><b>4</b><h3>GENERATIVE</h3><p>Contenido individual.</p></article>
      </div>`,notes:"No saltar a generative personalization sin frequency caps, QA y medición incremental."},{id:"privacy-bias",kind:"cards",theme:"red",eyebrow:"GOVERNANCE 2026",title:"CUATRO RIESGOS<br>QUE MARKETING YA POSEE.",body:`
      <div class="numbered-cards">
        <article><b>01</b><h3>PRIVACY</h3><p>Uso fuera de expectativa.</p></article>
        <article><b>02</b><h3>BIAS</h3><p>Exclusión por proxies.</p></article>
        <article><b>03</b><h3>TRANSPARENCY</h3><p>Contenido o interacción sintética.</p></article>
        <article><b>04</b><h3>SECURITY</h3><p>Data, prompts y proveedores.</p></article>
      </div>`,sources:[tt("NIST AI RMF","https://www.nist.gov/itl/ai-risk-management-framework"),tt("EU AI Act — implementación","https://artificialintelligenceact.eu/implementation-timeline/")],notes:"No dar asesoría legal. Señalar que desde agosto de 2026 entra en aplicación gran parte del AI Act de la UE; validar jurisdicción con Legal."},{id:"personalization-experiment",kind:"activity",theme:"light",duration:8,eyebrow:"EXPERIMENTO",title:"DISEÑA PERSONALIZACIÓN<br>QUE MEREZCA EXISTIR.",body:`
      <ol class="steps">
        <li>¿Qué valor adicional recibe el cliente?</li>
        <li>¿Qué dato mínimo necesitas?</li>
        <li>¿Cómo conserva control?</li>
        <li>¿Qué guardrail detiene la experiencia?</li>
        <li>¿Qué lift incremental justificaría escalar?</li>
      </ol>`,notes:"Compartir un ejemplo donde la mejor personalización sea reducir mensajes."},{id:"tool-section",kind:"section",theme:"dark",eyebrow:"BLOQUE 07 · 20 MIN",title:"EL ARSENAL<br>COMPLETO.",subtitle:"La herramienta correcta depende del job, el workflow y el riesgo.",body:`
      <div class="tool-categories">
        <span>STRATEGY</span><span>INTELLIGENCE</span><span>CREATIVE</span>
        <span>MEDIA</span><span>CRM</span><span>MEASUREMENT</span><span>AGENTS</span>
      </div>
      <button class="cta-button" data-action="toolbox">ABRIR ARSENAL 2026</button>`,sources:[tt("OpenAI for Marketing","https://openai.com/business/solutions/marketing/"),tt("Adobe Firefly Enterprise","https://business.adobe.com/products/firefly-business.html")],notes:"No leer logos. Enseñar el mapa por job y abrir el drawer para explorar categorías."},{id:"capstone",kind:"interactive",theme:"light",duration:22,eyebrow:"CAPSTONE · 90 DÍAS",title:"CONSTRUYE TU<br>AI MARKETING INVESTMENT MAP.",body:`
      <form class="capstone-form" data-persist="capstone">
        <label>1. Problema de negocio<textarea name="problem" placeholder="Qué decisión o workflow debe mejorar"></textarea></label>
        <label>2. Caso de uso prioritario<textarea name="usecase" placeholder="Usuario + job + cambio medible"></textarea></label>
        <label>3. Métrica y baseline<textarea name="metric" placeholder="Resultado, baseline y target"></textarea></label>
        <label>4. Riesgo principal<textarea name="risk" placeholder="Daño, reversibilidad y guardrail"></textarea></label>
        <label>5. Próximo experimento<textarea name="experiment" placeholder="Owner, 30 días y kill criteria"></textarea></label>
        <div class="capstone-actions">
          <button type="button" data-action="copy-capstone">COPIAR PLAN</button>
          <button type="button" data-action="reset-capstone">LIMPIAR</button>
        </div>
      </form>`,notes:"Trabajo individual 12 minutos, contraste en parejas 5, compartir 5. El plan debe caber en una página."},{id:"close",kind:"close",theme:"red",eyebrow:"CIERRE",title:"NO NECESITAS MÁS IA.<br><span>NECESITAS MEJORES DECISIONES SOBRE IA.</span>",body:`
      <div class="closing-grid">
        <p><b>01</b> READINESS antes de herramientas.</p>
        <p><b>02</b> Capital antes de entusiasmo.</p>
        <p><b>03</b> Evidence antes de demos.</p>
        <p><b>04</b> Señales antes de segmentos.</p>
        <p><b>05</b> Confianza antes de precisión.</p>
      </div>
      <div class="signature">ALEXIS SOUBRAN · CEO, MINIMALIST</div>`,sources:[tt("Stanford AI Index 2026","https://hai.stanford.edu/ai-index/2026-ai-index-report"),tt("NIST AI RMF","https://www.nist.gov/itl/ai-risk-management-framework"),tt("McKinsey State of AI 2025","https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-in-2025.pdf")],notes:"Volver a la pregunta inicial. Pedir un compromiso concreto para los próximos siete días."}],tn=[{category:"Estrategia y conocimiento",job:"Pensar, investigar, sintetizar y construir criterio",tools:[["ChatGPT Work","https://openai.com/business/solutions/marketing/"],["Claude","https://www.anthropic.com/claude"],["Gemini","https://gemini.google.com/"],["Perplexity","https://www.perplexity.ai/"],["NotebookLM","https://notebooklm.google.com/"]]},{category:"Market Intelligence",job:"Detectar demanda, conversación, competencia y señales emergentes",tools:[["Brandwatch","https://www.brandwatch.com/"],["Talkwalker","https://www.talkwalker.com/"],["Similarweb","https://www.similarweb.com/"],["Semrush","https://www.semrush.com/"],["Glimpse","https://meetglimpse.com/"]]},{category:"Creatividad y producción",job:"Multiplicar conceptos, assets, formatos y localizaciones",tools:[["Adobe Firefly","https://business.adobe.com/products/firefly-business.html"],["Midjourney","https://www.midjourney.com/"],["Runway","https://runwayml.com/"],["Canva Magic Studio","https://www.canva.com/magic-studio/"],["ElevenLabs","https://elevenlabs.io/"]]},{category:"Media y performance",job:"Predecir, pujar, asignar presupuesto y producir variaciones",tools:[["Google Ads AI","https://ads.google.com/home/ai-powered-ads/"],["Meta Advantage+","https://www.facebook.com/business/ads/meta-advantage-plus"],["TikTok Symphony","https://ads.tiktok.com/business/en-US/symphony"],["Albert.ai","https://albert.ai/"],["Optmyzr","https://www.optmyzr.com/"]]},{category:"CRM y personalización",job:"Orquestar next-best-action, lifecycle y experiencias relevantes",tools:[["Salesforce Agentforce","https://www.salesforce.com/agentforce/"],["HubSpot Breeze","https://www.hubspot.com/products/artificial-intelligence"],["BrazeAI","https://www.braze.com/product/brazeai"],["Klaviyo AI","https://www.klaviyo.com/features/ai"],["Adobe Journey Optimizer","https://business.adobe.com/products/journey-optimizer/adobe-journey-optimizer.html"]]},{category:"Experimentación y medición",job:"Validar causalidad, acelerar aprendizaje y gobernar performance",tools:[["Amplitude","https://amplitude.com/"],["Kameleoon","https://www.kameleoon.com/"],["Optimizely","https://www.optimizely.com/"],["Google BigQuery","https://cloud.google.com/bigquery"],["Segment","https://segment.com/"]]},{category:"Automatización y agentes",job:"Conectar sistemas y ejecutar procesos con supervisión",tools:[["Zapier","https://zapier.com/ai"],["Make","https://www.make.com/"],["n8n","https://n8n.io/"],["Microsoft Copilot Studio","https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio"],["Google Agentspace","https://cloud.google.com/products/agentspace"]]}];document.documentElement.classList.remove("no-js");document.documentElement.classList.add("js-ready");const di=new URL("./",window.location.href),en=o=>new URL(o.replace(/^\//,""),di).toString(),nn=document.querySelector(".slides"),ui=document.querySelector(".toolbox"),an=document.querySelector("#toolbox-content"),ie=document.querySelector(".toast"),zt=new Map;function sn(o=[]){return o.length?`
    <div class="slide-sources">
      ${o.map(t=>`<a href="${t.url}" target="_blank" rel="noreferrer">${t.label}</a>`).join("")}
    </div>`:""}function rn(o,t){return o?`
    <div class="timer ${t==="break"?"timer-large":""}" data-seconds="${o*60}">
      <div class="timer-face">
        <span data-timer-display>${String(o).padStart(2,"0")}:00</span>
        <small>MIN</small>
      </div>
      <div class="timer-controls">
        <button type="button" data-timer-action="start">START</button>
        <button type="button" data-timer-action="pause">PAUSE</button>
        <button type="button" data-timer-action="reset">RESET</button>
      </div>
    </div>`:""}function on(o=[]){return o.length?`<div class="meta-row">${o.map(t=>`<span>${t}</span>`).join("")}</div>`:""}function ln(o,t){const e=String(t+1).padStart(2,"0");return`
    <section
      id="${o.id}"
      class="deck-slide theme-${o.theme||"light"} kind-${o.kind||"standard"}"
      data-slide-id="${o.id}"
      data-background-color="${o.theme==="red"?"#e10600":o.theme==="dark"?"#080808":"#f5f3ee"}"
    >
      <div class="slide-frame">
        <div class="slide-topline">
          <span class="micro-brand">EDEM</span>
          <span class="micro-section">${o.eyebrow||""}</span>
          <span class="micro-number">${e}</span>
        </div>
        <div class="slide-content">
          ${o.eyebrow?`<div class="eyebrow">${o.eyebrow}</div>`:""}
          ${o.title?`<h1>${o.title}</h1>`:""}
          ${o.subtitle?`<p class="subtitle">${o.subtitle}</p>`:""}
          ${o.image?`<div class="profile-image-wrap"><div class="profile-orbit"></div><img class="profile-image" src="${en(o.image)}" alt="Alexis Soubran"></div>`:""}
          ${o.body||""}
          ${on(o.meta)}
          ${rn(o.duration,o.kind)}
        </div>
        ${sn(o.sources)}
        <div class="slide-footer">
          <span>IA PARA LÍDERES DE MARKETING</span>
          <span>ALEXIS SOUBRAN · MINIMALIST</span>
        </div>
      </div>
      <aside class="notes">${o.notes||""}</aside>
    </section>`}nn.innerHTML=Xi.map(ln).join("");an.innerHTML=tn.map((o,t)=>`
      <section class="tool-group">
        <div class="tool-index">${String(t+1).padStart(2,"0")}</div>
        <div>
          <h3>${o.category}</h3>
          <p>${o.job}</p>
          <div class="tool-links">
            ${o.tools.map(([e,i])=>`<a href="${i}" target="_blank" rel="noreferrer">${e}<span>↗</span></a>`).join("")}
          </div>
        </div>
      </section>`).join("");const kt=new lt({plugins:[Ji],hash:!0,history:!0,controls:!1,progress:!0,slideNumber:"c/t",width:1600,height:900,margin:0,minScale:.2,maxScale:2,center:!1,transition:"fade",backgroundTransition:"fade",pdfSeparateFragments:!1,showNotes:!1});await kt.initialize();function Rt(o){ie.textContent=o,ie.classList.add("visible"),window.clearTimeout(Rt.timeout),Rt.timeout=window.setTimeout(()=>ie.classList.remove("visible"),2200)}function cn(){document.body.classList.add("toolbox-open"),ui.setAttribute("aria-hidden","false")}function re(){document.body.classList.remove("toolbox-open"),ui.setAttribute("aria-hidden","true")}function dn(o){const t=Math.floor(o/60),e=o%60;return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function Je(o){const t=zt.get(o);o.querySelector("[data-timer-display]").textContent=dn(t.remaining),o.classList.toggle("timer-warning",t.remaining>0&&t.remaining<=60),o.classList.toggle("timer-done",t.remaining===0)}function un(o){return zt.has(o)||zt.set(o,{initial:Number(o.dataset.seconds),remaining:Number(o.dataset.seconds),interval:null}),zt.get(o)}function hn(o,t){const e=un(o);t==="start"&&!e.interval&&e.remaining>0&&(e.interval=window.setInterval(()=>{e.remaining=Math.max(0,e.remaining-1),Je(o),e.remaining===0&&(window.clearInterval(e.interval),e.interval=null,Rt("Tiempo terminado"))},1e3)),t==="pause"&&e.interval&&(window.clearInterval(e.interval),e.interval=null),t==="reset"&&(e.interval&&window.clearInterval(e.interval),e.interval=null,e.remaining=e.initial,Je(o))}function pn(o){return[...o.querySelectorAll('input[type="range"]')].reduce((t,e)=>(t[e.name]=Number(e.value),t),{})}function hi(o){const t=pn(o),e=o.querySelector("[data-score]"),i=o.querySelector("[data-verdict]"),n=o.dataset.calculator;if(n==="readiness"){const a=Math.round((t.revenue+t.data+t.workflow+t.adoption+t.governance)/25*100),s=Math.min(...Object.values(t));e.textContent=a,i.textContent=s<3?"CORRIGE EL CUELLO DE BOTELLA":a>=80?"LISTO PARA ESCALAR CON GATES":a>=60?"LISTO PARA PILOTO CONTROLADO":a>=40?"EXPERIMENTO ESTRECHO":"NO FINANCIAR TODAVÍA"}if(n==="value"){const a=t.impact*t.speed*t.confidence/Math.max(1,t.effort*t.risk),s=Math.round(a*10)/10;e.textContent=s.toFixed(1),i.textContent=s>=8?"ESCALAR CON GATES":s>=4?"PILOTEAR":s>=2?"REDISEÑAR ANTES DE FINANCIAR":"MATAR O REPLANTEAR"}if(n==="vendor"){const a=t.problem+t.evidence*1.5+t.usability+t.economics+t.boundaries*1.5+t.architecture,s=Math.round(a/35*100);e.textContent=s,i.textContent=t.evidence<3||t.boundaries<3?"RECHAZAR HASTA TENER EVIDENCIA":s>=80?"COMPRAR CON CONDICIONES":s>=60?"PILOTO CONDICIONADO":s>=40?"AMPLIAR DUE DILIGENCE":"RECHAZAR"}}function gn(o){const t=o.closest("[data-slide-id]");!t||!o.name||localStorage.setItem(`edem:${t.dataset.slideId}:${o.name}`,o.value)}function mn(){document.querySelectorAll("input[name], textarea[name], select[name]").forEach(o=>{const t=o.closest("[data-slide-id]"),e=localStorage.getItem(`edem:${t.dataset.slideId}:${o.name}`);e!==null&&(o.value=e)}),document.querySelectorAll(".score-form").forEach(o=>{o.querySelectorAll('input[type="range"]').forEach(t=>{t.nextElementSibling.textContent=t.value}),hi(o)})}mn();document.addEventListener("input",o=>{const t=o.target.closest("input, textarea, select");if(t&&(gn(t),t.type==="range")){t.nextElementSibling.textContent=t.value;const e=t.closest(".score-form");e&&hi(e)}});document.addEventListener("keydown",o=>{o.target.matches("input, textarea, select")&&o.stopPropagation(),o.key==="Escape"&&document.body.classList.contains("toolbox-open")&&(re(),o.stopPropagation())});document.addEventListener("click",async o=>{const t=o.target.closest("[data-timer-action]");if(t){hn(t.closest(".timer"),t.dataset.timerAction);return}const e=o.target.closest("[data-action]"),i=o.target.closest("[data-jump]");if(i){kt.slide(Number(i.dataset.jump));return}if(!e)return;const n=e.dataset.action;if(n==="overview"&&kt.toggleOverview(),n==="notes"&&kt.getPlugin("notes")?.open(),n==="toolbox"&&cn(),n==="close-toolbox"&&re(),n==="fullscreen"&&(document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()),n==="pdf"){const a=new URL(window.location.href);a.searchParams.set("print-pdf",""),a.hash="",window.open(a.toString(),"_blank","noopener")}if(n==="copy-capstone"){const s=[...document.querySelector(".capstone-form").querySelectorAll("textarea")].map(l=>`${l.closest("label").childNodes[0].textContent.trim()}
${l.value||"—"}`);await navigator.clipboard.writeText(`AI Marketing Investment Map — Alexis Soubran / EDEM

${s.join(`

`)}`),Rt("Plan copiado")}if(n==="reset-capstone"){const a=document.querySelector(".capstone-form");a.reset(),a.querySelectorAll("textarea").forEach(s=>{localStorage.removeItem(`edem:capstone:${s.name}`)}),Rt("Plan reiniciado")}});kt.on("slidechanged",o=>{const t=o.currentSlide?.querySelector(".eyebrow")?.textContent||"CURSO EJECUTIVO";document.querySelector(".course-label").textContent=t,re()});"serviceWorker"in navigator&&navigator.serviceWorker.register(new URL("sw.js",di).toString()).catch(()=>{});
