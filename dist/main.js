(()=>{"use strict";var e={151:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(645),n=i.n(a)()((function(e){return e[1]}));n.push([e.id,':root{color-scheme:light dark;--base-color: #1b264b;--border: rgba(0,0,0,0.1);--accent-color1: #0b8bd5;--accent-color2: #5b9a63;--accent-color3: #a21622;--stripe-bg: rgba(0,0,0,0.05);--link-color: var(--accent-color1);--link-hover-color: #51b9f6;--base-background-color: #f6f7f8;--base-margin: 30px;--border-radius: 10px;--box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);--font-weight-thicc: 900;--font-weight-bold: 700;--font-weight-normal: 500;--font-weight-light: 400;--font-size-greeting: 750%;--font-size-huge: 400%;--font-size-big: 200%;--font-size-medium: 150%;--font-size-emphasize: 125%;--font-size-normal: 1em;--font-size-small: 80%;--font-family-serif: "Teko", sans-serif;--font-family-sans: "Work Sans", sans-serif;--font-family-condensed: var(--font-family-sans);--font-family-header: var(--font-family-serif)}:root[data-theme=dark]{--base-color: #d3d3d3;--border: rgba(255,255,255,0.1);--accent-color1: #1C516F;--accent-color2: #52905a;--accent-color3: #77262d;--stripe-bg: rgba(255,255,255,0.05);--link-color: var(--accent-color1);--link-hover-color: #50a3d3;--base-background-color: #2c2e35}aside{color:#f6f7f8}aside .open-menu{width:80%;margin-top:var(--base-margin);display:flex;flex-direction:column;justify-content:center;align-items:center;display:none;font-size:30px;border-right:5px solid #f6f7f8;position:absolute;top:0}aside .me{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}aside .me h2{font-size:var(--font-size-medium);padding-bottom:0;border-bottom:0}aside .me .portrait{width:200px;height:200px;object-fit:cover;border-radius:50%;margin-bottom:var(--base-margin);box-shadow:var(--box-shadow)}aside ul.summary,aside ul.navigation{margin:0 0 var(--base-margin) var(--base-margin)}aside ul li{white-space:nowrap;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;margin-bottom:10px}aside ul li i{vertical-align:middle;font-size:var(--font-size-medium);margin-right:10px}aside ul.summary a{color:#f6f7f8}aside ul.summary a i{width:25px}aside ul.summary a:hover{text-decoration:underline}aside ul.navigation{padding-left:var(--base-margin);border-left:5px solid rgba(255,255,255,.2);position:relative;z-index:0}aside ul.navigation .nav-item{cursor:pointer;height:30px;margin:0}aside ul.navigation .nav-item:hover{text-decoration:underline}aside ul.navigation .nav-item:last-child::after{content:"";pointer-events:none;transition:all 50ms ease-out;background:#f6f7f8;display:block;position:absolute;top:0;left:-5px;height:16.6666666667%;width:5px}aside ul.navigation .nav-item:nth-child(1).is-active~.nav-item:last-child::after{top:0%}aside ul.navigation .nav-item:nth-child(2).is-active~.nav-item:last-child::after{top:16.6666666667%}aside ul.navigation .nav-item:nth-child(3).is-active~.nav-item:last-child::after{top:33.3333333333%}aside ul.navigation .nav-item:nth-child(4).is-active~.nav-item:last-child::after{top:50%}aside ul.navigation .nav-item:nth-child(5).is-active~.nav-item:last-child::after{top:66.6666666667%}aside ul.navigation .nav-item:last-child.is-active:after{top:83.3333333333% !important}aside ul.paginator{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;position:absolute;left:0;bottom:var(--base-margin);width:100%}aside ul.paginator li{cursor:pointer;margin:0;margin-top:10px}aside ul.paginator li i{margin:0}aside ul.paginator #next-page,aside ul.paginator #previous-page{font-size:30px;transition:all 250ms ease-out}aside ul.paginator #next-page.disabled,aside ul.paginator #previous-page.disabled{visibility:hidden;pointer-events:none;opacity:0}@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}aside ul.paginator .bounce{animation-duration:1s;animation-fill-mode:both;animation-timing-function:ease;animation-iteration-count:infinite;animation-name:bounce}header-page{display:flex;flex-direction:column;justify-content:center;align-items:center}header-page header{width:100%}header-page header h1{font-size:var(--font-size-greeting)}header-page header p{font-weight:var(--font-weight-bold);font-size:var(--font-size-emphasize)}header-page header .contact{display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:var(--accent-color2);border-radius:var(--border-radius);padding:10px 30px;margin-bottom:var(--base-margin);color:#f6f7f8;font-size:var(--font-size-medium);font-weight:var(--font-weight-thicc);max-width:225px;width:100%;height:100%;transition:all 250ms ease-out}header-page header .contact i{margin-left:15px}header-page header .contact:hover{background-color:#88b98f}skills-page .tools ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;justify-content:space-around;align-items:inherit;flex-wrap:wrap}skills-page .tools ul li{margin:0 10px;display:flex;flex-direction:column;justify-content:flex-start;align-items:inherit;flex:0 0 33%;width:50%}skills-page .tools ul li:last-child{margin-bottom:10px}skills-page .tools ul li .tool{flex:1 0 auto;white-space:nowrap;margin-bottom:10px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}skills-page .tools ul li .tool i{text-align:center;width:20px;margin-right:15px;font-size:150%}skills-page .tools ul li .skill-level{flex:1 0 100%;padding:0 3px;margin-bottom:var(--base-margin);display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}skills-page .tools ul li .skill-level .pip{width:30px;height:30px;z-index:1;position:relative;border:3px solid var(--accent-color2);border-radius:50%}skills-page .tools ul li .skill-level .pip.filled{background-color:var(--accent-color2)}skills-page .tools ul li .skill-level .pip.filled.half{background:linear-gradient(90deg, var(--accent-color2) 50%, transparent 50%)}resume-page ul.experience-timeline{margin:30px 0;display:flex;flex-direction:row;justify-content:space-around;align-items:center;position:relative}resume-page ul.experience-timeline .timeline-event{flex:1 0 25%;max-width:20%;font-size:var(--font-size-normal);font-weight:var(--font-weight-bold);border:3px solid var(--border);border-radius:var(--border-radius);cursor:pointer;display:flex;flex-direction:row;justify-content:center;align-items:center;user-select:none;height:25px;transition:all 250ms ease-out}resume-page ul.experience-timeline .timeline-event:hover{color:var(--base-color);border-color:var(--base-color)}resume-page ul.experience-timeline .timeline-event:first-child{padding-right:0}resume-page ul.experience-timeline .timeline-event:last-child{padding-left:0}resume-page ul.experience-timeline .timeline-event:nth-child(1).is-active~.timeline-event:last-child:after{left:0%}resume-page ul.experience-timeline .timeline-event:nth-child(2).is-active~.timeline-event:last-child:after{left:25%}resume-page ul.experience-timeline .timeline-event:nth-child(3).is-active~.timeline-event:last-child:after{left:50%}resume-page ul.experience-timeline .timeline-event.is-active{color:#f6f7f8;border-color:transparent;background-color:var(--accent-color2)}resume-page ul.experience-timeline .timeline-event:last-child.is-active:after{left:75% !important}resume-page #experience-list{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;overflow:hidden;scroll-behavior:smooth;width:90%;margin:auto}resume-page #experience-list .experience{padding-left:2px;margin-bottom:50px;min-width:100%}resume-page #experience-list .experience .date-location{text-transform:uppercase;color:var(--accent-color2);font-weight:var(--font-weight-bold)}.modal{position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;opacity:1;z-index:10;background:rgba(0,0,0,.4);transition:all 250ms ease-out;display:flex;flex-direction:row;justify-content:center;align-items:center}.modal-container{overflow:auto;max-width:700px;background:var(--base-background-color);border-radius:var(--border-radius);padding:var(--base-margin)}.modal.hidden{visibility:hidden;opacity:0}.modal-close{position:absolute;top:var(--base-margin);right:var(--base-margin);border-radius:var(--border-radius);cursor:pointer;font-size:var(--font-size-medium);z-index:12;background:var(--base-background-color);display:flex;flex-direction:row;justify-content:center;align-items:center;width:50px;height:50px}.modal-header h1{font-size:var(--font-size-big)}.modal-slideshow{position:relative;margin-bottom:20px;padding:0px 10px;border-radius:var(--border-radius)}.modal-slideshow .previous,.modal-slideshow .next{font-size:300%;opacity:.5;position:absolute;margin:auto;z-index:11;height:98%;cursor:pointer;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;transition:all 250ms ease-out;background:transparent;color:var(--base-color)}.modal-slideshow .previous i,.modal-slideshow .next i{filter:drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.4))}.modal-slideshow .previous.disabled,.modal-slideshow .next.disabled{visibility:hidden}.modal-slideshow .previous:hover,.modal-slideshow .next:hover{opacity:1}.modal-slideshow .previous{left:0;padding-left:var(--base-margin)}.modal-slideshow .next{right:0;padding-right:var(--base-margin)}.modal-slideshow .slides{position:relative;margin:0 auto;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;overflow:hidden;scroll-behavior:smooth}.modal-slideshow .slides .slide{flex:0 0 auto;width:100%;padding:10px 10px 10px 0;display:flex;flex-direction:row;justify-content:center;align-items:center}.modal-slideshow .slides .slide.image img{width:auto;max-width:100%;max-height:500px;box-shadow:var(--box-shadow);border-radius:var(--border-radius)}.modal-content{font-size:var(--font-size-small);line-height:1.25em;text-align:justify;margin-bottom:var(--base-margin)}.modal-footer{font-size:var(--font-size-small);width:100%;text-align:right;font-style:italic}.portfolio{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-direction:row;flex-wrap:wrap}.portfolio-item{flex:1 1 100%;margin-bottom:var(--base-margin);background:var(--stripe-bg);border-radius:var(--border-radius);display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.portfolio-item-container{display:flex;flex-direction:row;justify-content:center;align-items:center;flex:1 0 auto;width:100%}.portfolio-item-image{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:250px;background-color:var(--border);border-radius:var(--border-radius) 0 0 var(--border-radius);padding:var(--base-margin)}.portfolio-item-image img{height:auto;width:auto;max-height:250px;max-width:300px;object-fit:contain;border-radius:var(--border-radius);box-shadow:var(--box-shadow)}.portfolio-item-description{flex:0 1 50%;font-size:var(--font-size-normal);font-weight:var(--font-weight-bold);margin:var(--base-margin);line-height:1.25em}.portfolio-item-description p{margin:10px 0;font-weight:var(--font-weight-normal)}.portfolio-item-description li{font-size:var(--font-size-small);font-weight:var(--font-weight-normal)}.portfolio-item:nth-child(even) .portfolio-item-container{flex-direction:row-reverse}.portfolio-item:nth-child(even) .portfolio-item-container .portfolio-item-image{border-radius:0 var(--border-radius) var(--border-radius) 0}html,body{margin:0;padding:0}body{background-color:var(--base-background-color);color:var(--base-color);font-family:var(--font-family-sans);font-size:var(--font-size-base);line-height:1.5em;-webkit-tap-highlight-color:transparent;scroll-behavior:smooth}body.scroll-lock{position:fixed;overflow-y:scroll;width:100%}h1,h2,h3,h4,h5,h6{margin:0;margin-bottom:var(--base-margin)}h1{margin:0;margin-bottom:var(--base-margin);font-family:var(--font-family-header);font-size:var(--font-size-huge);line-height:1em}h2{font-family:var(--font-family-serif);font-size:var(--font-size-huge);line-height:1em}h3,h4{margin:0;line-height:1em}h3{color:var(--accent-color1);font-family:var(--font-family-header);font-size:var(--font-size-medium)}[data-theme=dark] h3{color:var(--base-color)}h4{margin-bottom:var(--base-margin);font-family:var(--font-family-condensed)}p{margin:0;margin-bottom:var(--base-margin)}a{color:var(--accent-color1);text-decoration:none}a:hover{color:var(--hover-color)}ul.no-style{padding:0;margin:0;list-style:none}main{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;height:100%}main article{flex:1 1 auto;position:relative;width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}main article .page{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;width:100%;width:-moz-available;width:-webkit-fill-available;width:fill-available;padding:0 var(--base-margin)}main article .page header,main article .page section{max-width:750px}main article .page:first-child{padding-bottom:50px}main article .page:not(:first-child){padding:50px 0;min-height:auto}main article .page:nth-child(even){background-color:var(--stripe-bg)}main article .page .panel .float-right{width:200px;height:200px;object-fit:cover;float:right;margin:10px 0 10px 50px;border-radius:50%;box-shadow:var(--box-shadow)}main aside{background-color:var(--accent-color1);width:275px;min-width:275px;flex:0 1 275px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;position:sticky;top:0;left:0;height:100vh;box-shadow:var(--box-shadow);z-index:1}main .theme-switch{cursor:pointer;position:fixed;bottom:0;right:0;padding:10px 15px;background-color:var(--accent-color1);z-index:2}main.modal-open{transition:all 250ms ease-out;opacity:.2;filter:blur(4px)}.uk{width:35px;height:35px;vertical-align:middle}@media(max-width: 1024px){main article{max-width:100%;width:100%}main article section{padding:0 var(--base-margin)}main article .experience-timeline{display:none}main article #experience-list{display:block;overflow:hidden}}@media(max-width: 767px),(max-height: 767px){main .theme-switch{display:none}main article{padding-left:50px}main article header h1{font-size:var(--font-size-huge)}main article header p{font-size:var(--font-size-normal)}main article skills-page .tools ul li{flex:0 0 75%}main article .page .panel .image-container{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}main article .page .panel .image-container .float-right{float:none;margin-left:0;margin-bottom:50px}main aside{width:50px;min-width:50px;z-index:2;flex:0 1 50px;padding-right:0;position:fixed;top:0;left:0;height:100%;transition:all 250ms ease-out;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}main aside .open-menu{width:auto;margin-left:8px;display:flex;flex-direction:column;justify-content:center;align-items:center;right:10px;transition:all 250ms ease-out}main aside.is-open{width:80%}main aside.is-open .open-menu{width:100%;align-items:flex-end}main aside.is-open .open-menu i{transform:rotate(180deg)}main aside.is-open ul.summary{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}main aside .me{width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;margin-top:70px;margin-left:8px;overflow:hidden;white-space:nowrap}main aside .me h2{margin-bottom:0}main aside .me .portrait{margin-right:17px;margin-bottom:10px;width:35px;height:35px;min-width:35px;min-height:35px}main aside .summary{width:100%;margin-left:7px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;overflow:hidden}main aside .summary a{text-decoration:underline}main aside .summary a i{width:35px;z-index:2;margin-right:20px;font-size:35px}main aside .navigation{display:none}main aside .paginator{display:none}}@media(max-width: 767px)and (orientation: landscape),(max-height: 767px)and (orientation: landscape){main aside.is-open{width:40%}main aside .paginator{display:none}}@media(max-width: 767px),(max-height: 767px){.modal-container{width:80%;height:90%}.modal-close{top:30px;right:30px}.modal-header{width:90%}.modal-footer{width:auto;text-align:left}}@media(max-width: 767px),(max-height: 767px){.portfolio-item{flex:1 1 100%;max-width:100%}.portfolio-item-container{flex-direction:column !important}.portfolio-item-image img{max-width:200px}}',""]);const o=n},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(n[l]=!0)}for(var r=0;r<e.length;r++){var s=[].concat(e[r]);a&&n[s[0]]||(i&&(s[2]?s[2]="".concat(i," and ").concat(s[2]):s[2]=i),t.push(s))}},t}},379:(e,t,i)=>{var a,n=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),o=[];function l(e){for(var t=-1,i=0;i<o.length;i++)if(o[i].identifier===e){t=i;break}return t}function r(e,t){for(var i={},a=[],n=0;n<e.length;n++){var r=e[n],s=t.base?r[0]+t.base:r[0],d=i[s]||0,c="".concat(s," ").concat(d);i[s]=d+1;var m=l(c),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==m?(o[m].references++,o[m].updater(p)):o.push({identifier:c,updater:u(p,t),references:1}),a.push(c)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=i.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var l=n(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var d,c=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,i,a){var n=i?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=c(t,n);else{var o=document.createTextNode(n),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(o,l[t]):e.appendChild(o)}}function p(e,t,i){var a=i.css,n=i.media,o=i.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,g=0;function u(e,t){var i,a,n;if(t.singleton){var o=g++;i=f||(f=s(t)),a=m.bind(null,i,o,!1),n=m.bind(null,i,o,!0)}else i=s(t),a=p.bind(null,i,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var i=r(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<i.length;a++){var n=l(i[a]);o[n].references--}for(var s=r(e,t),d=0;d<i.length;d++){var c=l(i[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}i=s}}}}},t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={id:a,exports:{}};return e[a](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=[{skill:"Angular (2+)",icon:"fab fa-angular",level:4.5},{skill:"TypeScript",icon:"fab fa-microsoft",level:4},{skill:"JavaScript (ES5+)",icon:"fab fa-js-square",level:4},{skill:"NodeJS",icon:"fab fa-node-js",level:2.5},{skill:"Responsive Design",icon:"fa fa-mobile-alt",level:4.5},{skill:"SASS / CSS3",icon:"fab fa-css3",level:4.5},{skill:"HTML5",icon:"fab fa-html5",level:3.5},{skill:"NPM / Grunt / Gulp",icon:"fab fa-npm",level:3.5},{skill:"Git / GitHub",icon:"fab fa-github",level:4},{skill:"Amazon (AWS)",icon:"fab fa-aws",level:2}];let t=!1,a=0,n=0,o=document.getElementsByClassName("slides")[0].children.length;function l(){document.getElementById("modal").classList.add("hidden"),document.body.classList.remove("scroll-lock"),document.getElementsByTagName("main")[0].classList.remove("modal-open"),document.documentElement.scrollTop=a,t=!1,setTimeout((()=>{document.getElementById("slides").scrollLeft=0,n=0}),250)}function r(){0===n?(document.getElementById("previous-slide").classList.add("disabled"),document.getElementById("next-slide").classList.remove("disabled")):n===o-1?(document.getElementById("previous-slide").classList.remove("disabled"),document.getElementById("next-slide").classList.add("disabled")):(document.getElementById("previous-slide").classList.remove("disabled"),document.getElementById("next-slide").classList.remove("disabled"))}document.addEventListener("click",(e=>{!document.getElementById("modal-container").contains(e.target)&&t&&l()})),document.getElementById("previous-slide").addEventListener("click",(e=>{!function(){let e=Math.ceil(document.getElementById("slides").scrollWidth/o);n>=1&&n<o&&(n--,document.getElementsByClassName("slides")[0].scrollTo({left:e*n}),r())}()})),document.getElementById("next-slide").addEventListener("click",(e=>{!function(){let e=Math.ceil(document.getElementById("slides").scrollWidth/o);n>=0&&n<o-1&&(n++,document.getElementsByClassName("slides")[0].scrollTo({left:e*n}),r())}()})),document.getElementById("close-modal").addEventListener("click",(e=>{l()}));const s=[{project:"TwinSpires Responsive",images:["img/twinspires/responsive/program-light.png","img/twinspires/responsive/landing-light.png","img/twinspires/responsive/calendar-light.png"],date:"2018",company:"TwinSpires.com",caption:"Responsive implementation of TwinSpires.com",bullets:["Added support for dynamically sized content viewports","Supporting all mobile platforms including iOS, iPadOS, and Android","Created mobile-specific elements including navigation, modals, and lists","Full parity in mobile vs. desktop functionality"],description:"This project was a great opportunity to exercise most of my strengths with front end development. I really enjoyed working with the feature focused-team and coming together to complete a major project. Mobile-focused projects more prevalent not just at TwinSpires but in the industry as a whole."},{project:"TwinSpires Video",images:["img/twinspires/video/video-desktop-light.png","img/twinspires/video/video-mobile-light.png"],date:"2018 - 2020",company:"TwinSpires.com",caption:"Live and Replayable Video of Racing",bullets:["Integrated front-end libraries from multiple video providers to create a seamless experience","Created site-wide video components that support a wide variety of views and formats","Dynamic controls for viewing and interacting with video content","Support for desktop and mobile video experiences"],description:"This vital feature required a intensve focus to properly to deliver for customers. I mastered the complexity around video display in desktop and mobile focused applications. Successful delivery of this project is a great personal achievement for myself and for TwinSpires.com"}];var d=new DOMParser;class c extends HTMLElement{constructor(){super()}async connectedCallback(){let e=await fetch("components/header.html");d.parseFromString(await e.text(),"text/html").querySelectorAll("header").forEach((e=>{this.appendChild(e)}))}}class m extends HTMLElement{constructor(){super()}async connectedCallback(){let e=await fetch("components/profile.html");d.parseFromString(await e.text(),"text/html").querySelectorAll("section").forEach((e=>{this.appendChild(e)}))}}class p extends HTMLElement{constructor(){super()}async connectedCallback(){let e=await fetch("components/education.html");d.parseFromString(await e.text(),"text/html").querySelectorAll("section").forEach((e=>{this.appendChild(e)}))}}class f extends HTMLElement{constructor(){super()}async connectedCallback(){let t=await fetch("components/skills.html");d.parseFromString(await t.text(),"text/html").querySelectorAll("section").forEach((e=>{this.appendChild(e)})),function(){let t=document.querySelector("div.tools ul");t&&(t.innerHTML="",e.forEach((e=>{let i=t.appendChild(document.createElement("li")),a=document.createElement("div");a.className="tool";let n=document.createElement("i");n.className=e.icon,a.appendChild(n),a.appendChild(document.createTextNode(e.skill));let o=document.createElement("div");o.className="skill-level",Array.apply(null,Array(5)).forEach(((t,i)=>{let a=document.createElement("div");a.className="pip",i<e.level&&a.classList.add("filled"),i===Math.floor(e.level)&&e.level%1&&a.classList.add("half"),o.appendChild(a)})),i.appendChild(a),i.appendChild(o)})))}()}}class g extends HTMLElement{constructor(){super()}async connectedCallback(){let e=await fetch("components/resume.html");d.parseFromString(await e.text(),"text/html").querySelectorAll("section").forEach((e=>{this.appendChild(e)})),[...document.getElementsByClassName("timeline-event")].forEach((e=>{e.addEventListener("click",(e=>{!function(e){[...document.getElementsByClassName("timeline-event")].forEach((e=>{e.classList.remove("is-active")})),document.getElementById(e.id).classList.add("is-active");let t=document.getElementsByClassName("experience")[0].scrollWidth,i=+e.id.substring(e.id.indexOf("-")+1,e.id.length);document.getElementById("experience-list").scrollTo({left:t*i-t})}(e.currentTarget)}))}))}}class u extends HTMLElement{constructor(){super()}async connectedCallback(){let e=await fetch("components/landing.html");d.parseFromString(await e.text(),"text/html").querySelectorAll("article").forEach((e=>{this.appendChild(e)}))}}class h extends HTMLElement{constructor(){super()}async connectedCallback(){let e=await fetch("components/portfolio.html");d.parseFromString(await e.text(),"text/html").querySelectorAll("section").forEach((e=>{this.appendChild(e)})),function(){let e=document.querySelector("#portfolio");e&&(e.innerHTML="",s.forEach(((i,n)=>{let l=document.createElement("div");l.className="portfolio-item";let d=document.createElement("div");d.className="portfolio-item-container";let c=document.createElement("div");c.className="portfolio-item-image";let m=document.createElement("img");m.setAttribute("src",i.images[0]),c.appendChild(m);let p=document.createElement("div");p.className="portfolio-item-description",p.innerHTML=i.project+" | "+i.date;let f=document.createElement("ul");i.bullets&&i.bullets.forEach((e=>{let t=document.createElement("li");t.innerHTML=e,f.appendChild(t)})),p.appendChild(f),d.appendChild(c),d.appendChild(p),l.appendChild(d),d.addEventListener("click",(()=>{!function(e){let i=s[e];(function(e=[]){let t=document.querySelector("#slides");t.innerHTML="",e.forEach((e=>{let i=document.createElement("div");i.className="slide image";let a=document.createElement("img");a.setAttribute("src",e),i.appendChild(a),t.appendChild(i)}))})(i.images),document.querySelector("div.modal-header h1").innerHTML=i.project,document.querySelector("div.modal-content p").innerHTML=i.description,document.querySelector("div.modal-footer").innerHTML=i.date,o=document.getElementsByClassName("slides")[0].children.length,r(),document.getElementById("modal").classList.remove("hidden"),a=document.documentElement.scrollTop,document.body.style.top=-a+"px",document.body.classList.add("scroll-lock"),document.getElementsByTagName("main")[0].classList.add("modal-open"),setTimeout((()=>t=!0),500)}(n)})),e.appendChild(l)})))}()}}let v="header-page";function x(e){v=e}function b(){[...document.getElementsByClassName("nav-item")].forEach((e=>{e.classList.remove("is-active")}))}window.addEventListener("scroll",(()=>{var e=window.scrollY,t=100;return b(),e>=document.getElementsByTagName("resume-page")[0].offsetTop-t?(document.getElementById("resume-page-nav").classList.add("is-active"),void x("resume-page")):e>=document.getElementsByTagName("portfolio-page")[0].offsetTop-t?(document.getElementById("portfolio-page-nav").classList.add("is-active"),void x("portfolio-page")):e>=document.getElementsByTagName("skills-page")[0].offsetTop-t?(document.getElementById("skills-page-nav").classList.add("is-active"),void x("skills-page")):e>=document.getElementsByTagName("education-page")[0].offsetTop-t?(document.getElementById("education-page-nav").classList.add("is-active"),void x("education-page")):e>=document.getElementsByTagName("profile-page")[0].offsetTop-t?(document.getElementById("profile-page-nav").classList.add("is-active"),void x("profile-page")):e>=document.getElementsByTagName("header-page")[0].offsetTop-t?(document.getElementById("header-page-nav").classList.add("is-active"),void x("header-page")):void 0})),window.scroll(),b();var y="light";function w(e){switch(e){case"dark":document.documentElement.setAttribute("data-theme",e),y=e,document.getElementById("theme-toggle").classList.remove("fa-moon"),document.getElementById("theme-toggle").classList.add("fa-sun");break;default:document.documentElement.setAttribute("data-theme","light"),y="light",document.getElementById("theme-toggle").classList.remove("fa-sun"),document.getElementById("theme-toggle").classList.add("fa-moon")}}document.getElementById("theme-control").addEventListener("click",(e=>{w("light"===y?"dark":"light")}));var E=i(379),k=i.n(E),z=i(151);k()(z.Z,{insert:"head",singleton:!1}),z.Z.locals,window.customElements.define("header-page",c),window.customElements.define("profile-page",m),window.customElements.define("education-page",p),window.customElements.define("skills-page",f),window.customElements.define("resume-page",g),window.customElements.define("landing-page",u),window.customElements.define("portfolio-page",h),Array.from(document.getElementsByClassName("nav-item")).forEach((e=>{e.addEventListener("click",(e=>{return t=e.currentTarget,i=t.id.substring(0,t.id.lastIndexOf("-")),void document.getElementsByTagName(i)[0].scrollIntoView({behavior:"smooth"});var t,i}))})),"not all"!==window.matchMedia("(prefers-color-scheme: dark)").media?w("dark"):w("light"),window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{e.matches?w("dark"):w("light")})),document.getElementById("menu-toggle").addEventListener("click",(()=>{document.getElementsByTagName("aside")[0].classList.contains("is-open")?document.getElementsByTagName("aside")[0].classList.remove("is-open"):document.getElementsByTagName("aside")[0].classList.add("is-open")}))})()})();