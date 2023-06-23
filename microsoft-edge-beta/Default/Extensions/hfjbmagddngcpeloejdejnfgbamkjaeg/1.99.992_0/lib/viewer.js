/*!
 * Viewer.js v1.11.0
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-10-17T06:53:32.276Z
 */
(function(t,i){"function"==typeof define&&true?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).Viewer=i()})(this,function(){"use strict";function t(t,i){var e,s=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),i&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,e)),s}function i(i){var e,s;for(e=1;e<arguments.length;e++)s=null!=arguments[e]?arguments[e]:{},e%2?t(Object(s),!0).forEach(function(t){h(i,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(s,t))});return i}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function s(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function n(t,i){var e,s;for(e=0;e<i.length;e++)(s=i[e]).enumerable=s.enumerable||false,s.configurable=true,"value"in s&&(s.writable=true),Object.defineProperty(t,s.key,s)}function h(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:true,configurable:true,writable:true}):t[i]=e,t}function r(t){return"string"==typeof t}function o(t){return"number"==typeof t&&!Q(t)}function a(t){return void 0===t}function u(t){return"object"===e(t)&&null!==t}function l(t){var i,e;if(!u(t))return false;try{return e=(i=t.constructor).prototype,i&&e&&_.call(e,"isPrototypeOf")}catch(t){return false}}function c(t){return"function"==typeof t}function f(t,i){var e,s;if(t&&c(i))if(Array.isArray(t)||o(t.length))for(e=t.length,s=0;s<e&&false!==i.call(t,t[s],s,t);s+=1);else u(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)});return t}function d(t,i){var e=t.style;f(i,function(t,i){it.test(i)&&o(t)&&(t+="px"),e[i]=t})}function v(t,i){return!(!t||!i)&&(t.classList?t.classList.contains(i):t.className.indexOf(i)>-1)}function m(t,i){if(t&&i)if(o(t.length))f(t,function(t){m(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className=e+" "+i):t.className=i}}function w(t,i){t&&i&&(o(t.length)?f(t,function(t){w(t,i)}):t.classList?t.classList.remove(i):t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function b(t,i,e){i&&(o(t.length)?f(t,function(t){b(t,i,e)}):e?m(t,i):w(t,i))}function p(t){return t.replace(et,"$1-$2").toLowerCase()}function g(t,i){return u(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-"+p(i))}function y(t,i,e){u(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-"+p(i),e)}function k(t,i,e){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=e;i.trim().split(G).forEach(function(i){if(!st){var h=t.listeners;h&&h[i]&&h[i][e]&&(n=h[i][e],delete h[i][e],0===Object.keys(h[i]).length&&delete h[i],0===Object.keys(h).length&&delete t.listeners)}t.removeEventListener(i,n,s)})}function x(t,i,e){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=e;i.trim().split(G).forEach(function(i){if(s.once&&!st){var h=t.listeners,r=void 0===h?{}:h;n=function(){delete r[i][e],t.removeEventListener(i,n,s);for(var h=arguments.length,o=new Array(h),a=0;a<h;a++)o[a]=arguments[a];e.apply(t,o)},r[i]||(r[i]={}),r[i][e]&&t.removeEventListener(i,r[i][e],s),r[i][e]=n,t.listeners=r}t.addEventListener(i,n,s)})}function T(t,e,s,n){var h;return c(Event)&&c(CustomEvent)?h=new CustomEvent(e,i({bubbles:true,cancelable:true,detail:s},n)):(h=document.createEvent("CustomEvent")).initCustomEvent(e,true,true,s),t.dispatchEvent(h)}function z(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}function O(t){var i,e=t.rotate,s=t.scaleX,n=t.scaleY,h=t.translateX,r=t.translateY,a=[];return o(h)&&0!==h&&a.push("translateX("+h+"px)"),o(r)&&0!==r&&a.push("translateY("+r+"px)"),o(e)&&0!==e&&a.push("rotate("+e+"deg)"),o(s)&&1!==s&&a.push("scaleX("+s+")"),o(n)&&1!==n&&a.push("scaleY("+n+")"),{WebkitTransform:i=a.length?a.join(" "):"none",msTransform:i,transform:i}}function M(t){return r(t)?decodeURIComponent(t.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}function j(t,i,e){var s,n=document.createElement("img");return t.naturalWidth&&!nt?(e(t.naturalWidth,t.naturalHeight),n):(s=document.body||document.documentElement,n.onload=function(){e(n.width,n.height),nt||s.removeChild(n)},f(i.inheritedAttributes,function(i){var e=t.getAttribute(i);null!==e&&n.setAttribute(i,e)}),n.src=t.src,nt||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(n)),n)}function I(t){switch(t){case 2:return V;case 3:return $;case 4:return U;default:return""}}function X(t){var e=i({},t),s=[];return f(t,function(t,i){delete e[i],f(e,function(i){var e=Math.abs(t.startX-i.startX),n=Math.abs(t.startY-i.startY),h=Math.abs(t.endX-i.endX),r=Math.abs(t.endY-i.endY),o=Math.sqrt(e*e+n*n),a=Math.sqrt(h*h+r*r);s.push((a-o)/o)})}),s.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),s[0]}function E(t,e){var s=t.pageX,n=t.pageY,h={endX:s,endY:n};return e?h:i({timeStamp:Date.now(),startX:s,startY:n},h)}function Y(t){var i=0,e=0,s=0;return f(t,function(t){i+=t.startX,e+=t.startY,s+=1}),{pageX:i/=s,pageY:e/=s}}var N,A,S,R,C,D={backdrop:true,button:true,navbar:true,title:true,toolbar:true,className:"",container:"body",filter:null,fullscreen:true,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:false,interval:5e3,keyboard:true,focus:true,loading:true,loop:true,minWidth:200,minHeight:100,movable:true,rotatable:true,scalable:true,zoomable:true,zoomOnTouch:true,zoomOnWheel:true,slideOnTouch:true,toggleOnDblclick:true,tooltip:true,transition:true,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},L="undefined"!=typeof window&&void 0!==window.document,P=L?window:{},F=!(!L||!P.document.documentElement)&&"ontouchstart"in P.document.documentElement,W=!!L&&"PointerEvent"in P,U="viewer-hide-md-down",$="viewer-hide-sm-down",V="viewer-hide-xs-down",Z="viewer-in",q="viewer-transition",H=W?"pointerdown":F?"touchstart":"mousedown",B=W?"pointermove":F?"touchmove":"mousemove",K=W?"pointerup pointercancel":F?"touchend touchcancel":"mouseup",G=/\s\s*/,J=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"],Q=Number.isNaN||P.isNaN,_={}.hasOwnProperty,tt=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];return u(t)&&e.length>0&&e.forEach(function(i){u(i)&&Object.keys(i).forEach(function(e){t[e]=i[e]})}),t},it=/^(?:width|height|left|top|marginLeft|marginTop)$/,et=/([a-z\d])([A-Z])/g,st=(C=false,L&&(A=false,S=function(){},R=Object.defineProperty({},"once",{get:function(){return C=true,A},set:function(t){A=t}}),P.addEventListener("test",S,R),P.removeEventListener("test",S,R)),C),nt=P.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(P.navigator.userAgent),ht={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,i=t.body||t.documentElement;this.body=i,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=i.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(i).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t,i=this.options,e=this.parent;i.inline&&(this.parentData=t={width:Math.max(e.offsetWidth,i.minWidth),height:Math.max(e.offsetHeight,i.minHeight)}),!this.fulled&&t||(t=this.containerData),this.viewerData=tt({},t)},renderViewer:function(){this.options.inline&&!this.fulled&&d(this.viewer,this.viewerData)},initList:function(){var t=this,i=this.element,e=this.options,s=this.list,n=[];s.innerHTML="",f(this.images,function(i,h){var r,o,a=i.src,u=i.alt||M(a),l=t.getImageURL(i);(a||l)&&(r=document.createElement("li"),o=document.createElement("img"),f(e.inheritedAttributes,function(t){var e=i.getAttribute(t);null!==e&&o.setAttribute(t,e)}),e.navbar&&(o.src=a||l),o.alt=u,o.setAttribute("data-original-url",l||a),r.setAttribute("data-index",h),r.setAttribute("data-viewer-action","view"),r.setAttribute("role","button"),e.keyboard&&r.setAttribute("tabindex",0),r.appendChild(o),s.appendChild(r),n.push(r))}),this.items=n,f(n,function(i){var s,n,h=i.firstElementChild;y(h,"filled",true),e.loading&&m(i,"viewer-loading"),x(h,"load",s=function(s){k(h,"error",n),e.loading&&w(i,"viewer-loading"),t.loadImage(s)},{once:true}),x(h,"error",n=function(){k(h,"load",s),e.loading&&w(i,"viewer-loading")},{once:true})}),e.transition&&x(i,"viewed",function(){m(s,q)},{once:true})},renderList:function(){var t,i,e,s=this.index,n=this.items[s];n&&(t=parseInt(window.getComputedStyle(n.nextElementSibling||n).marginLeft,10),d(this.list,tt({width:(e=(i=n.offsetWidth)+t)*this.length-t},O({translateX:(this.viewerData.width-i)/2-e*s}))))},resetList:function(){var t=this.list;t.innerHTML="",w(t,q),d(t,O({translateX:0}))},initImage:function(t){var i,e=this,s=this.options,n=this.image,h=this.viewerData,r=this.footer.offsetHeight,a=h.width,u=Math.max(h.height-r,r),l=this.imageData||{};this.imageInitializing={abort:function(){i.onload=null}},i=j(n,s,function(i,n){var h,r,c,f,d=i/n,v=Math.max(0,Math.min(1,s.initialCoverage)),m=a,w=u;e.imageInitializing=false,u*d>a?w=a/d:m=u*d,v=o(v)?v:.9,f=tt({},c={left:h=(a-(m=Math.min(m*v,i)))/2,top:r=(u-(w=Math.min(w*v,n)))/2,x:h,y:r,width:m,height:w,oldRatio:1,ratio:m/i,aspectRatio:d,naturalWidth:i,naturalHeight:n}),s.rotatable&&(c.rotate=l.rotate||0,f.rotate=0),s.scalable&&(c.scaleX=l.scaleX||1,c.scaleY=l.scaleY||1,f.scaleX=1,f.scaleY=1),e.imageData=c,e.initialImageData=f,t&&t()})},renderImage:function(t){var i,e=this,s=this.image,n=this.imageData;d(s,tt({width:n.width,height:n.height,marginLeft:n.x,marginTop:n.y},O(n))),t&&((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&v(s,q)?(i=function(){e.imageRendering=false,t()},this.imageRendering={abort:function(){k(s,"transitionend",i)}},x(s,"transitionend",i,{once:true})):t())},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},rt={bind:function(){var t=this.options,i=this.viewer,e=this.canvas,s=this.element.ownerDocument;x(i,"click",this.onClick=this.click.bind(this)),x(i,"dragstart",this.onDragStart=this.dragstart.bind(this)),x(e,H,this.onPointerDown=this.pointerdown.bind(this)),x(s,B,this.onPointerMove=this.pointermove.bind(this)),x(s,K,this.onPointerUp=this.pointerup.bind(this)),x(s,"keydown",this.onKeyDown=this.keydown.bind(this)),x(window,"resize",this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&x(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:false,capture:true}),t.toggleOnDblclick&&x(e,"dblclick",this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,i=this.viewer,e=this.canvas,s=this.element.ownerDocument;k(i,"click",this.onClick),k(i,"dragstart",this.onDragStart),k(e,H,this.onPointerDown),k(s,B,this.onPointerMove),k(s,K,this.onPointerUp),k(s,"keydown",this.onKeyDown),k(window,"resize",this.onResize),t.zoomable&&t.zoomOnWheel&&k(i,"wheel",this.onWheel,{passive:false,capture:true}),t.toggleOnDblclick&&k(e,"dblclick",this.onDblclick)}},ot={click:function(t){var i=this.options,e=this.imageData,s=t.target,n=g(s,"viewerAction");switch(n||"img"!==s.localName||"li"!==s.parentElement.localName||(n=g(s=s.parentElement,"viewerAction")),F&&t.isTrusted&&s===this.canvas&&clearTimeout(this.clickCanvasTimeout),n){case"mix":this.played?this.stop():i.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(g(s,"index"));break;case"zoom-in":this.zoom(.1,true);break;case"zoom-out":this.zoom(-.1,true);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(i.loop);break;case"play":this.play(i.fullscreen);break;case"next":this.next(i.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-e.scaleX||-1);break;case"flip-vertical":this.scaleY(-e.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(F&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t.isTrusted?t:t.detail&&t.detail.originalEvent))},load:function(){var t,i,e,s,n,h=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=false),t=this.element,i=this.options,s=this.index,n=this.viewerData,w(e=this.image,"viewer-invisible"),i.loading&&w(this.canvas,"viewer-loading"),e.style.cssText="height:0;margin-left:"+n.width/2+"px;margin-top:"+n.height/2+"px;max-width:none!important;position:relative;width:0;",this.initImage(function(){b(e,"viewer-move",i.movable),b(e,q,i.transition),h.renderImage(function(){h.viewed=true,h.viewing=false,c(i.viewed)&&x(t,"viewed",i.viewed,{once:true}),T(t,"viewed",{originalImage:h.images[s],index:s,image:e},{cancelable:false})})})},loadImage:function(t){var i=t.target,e=i.parentNode,s=e.offsetWidth||30,n=e.offsetHeight||50,h=!!g(i,"filled");j(i,this.options,function(t,e){var r=t/e,o=s,a=n;n*r>s?h?o=n*r:a=s/r:h?a=s/r:o=n*r,d(i,tt({width:o,height:a},O({translateX:(s-o)/2,translateY:(n-a)/2})))})},keydown:function(t){var i,e=this.options;if(e.keyboard&&(13===(i=t.keyCode||t.which||t.charCode)&&this.viewer.contains(t.target)&&this.click(t),this.fulled))switch(i){case 27:this.played?this.stop():e.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(e.loop);break;case 38:t.preventDefault(),this.zoom(e.zoomRatio,true);break;case 39:this.played&&this.playing?this.playing.next():this.next(e.loop);break;case 40:t.preventDefault(),this.zoom(-e.zoomRatio,true);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle())}},dragstart:function(t){"img"===t.target.localName&&t.preventDefault()},pointerdown:function(t){var i,e=this.options,s=this.pointers,n=t.buttons,h=t.button;!this.viewed||this.showing||this.viewing||this.hiding||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(o(n)&&1!==n||o(h)&&0!==h||t.ctrlKey)||(t.preventDefault(),t.changedTouches?f(t.changedTouches,function(t){s[t.identifier]=E(t)}):s[t.pointerId||0]=E(t),i=!!e.movable&&"move",e.zoomOnTouch&&e.zoomable&&Object.keys(s).length>1?i="zoom":e.slideOnTouch&&("touch"===t.pointerType||"touchstart"===t.type)&&this.isSwitchable()&&(i="switch"),!e.transition||"move"!==i&&"zoom"!==i||w(this.image,q),this.action=i)},pointermove:function(t){var i=this.pointers;this.viewed&&this.action&&(t.preventDefault(),t.changedTouches?f(t.changedTouches,function(t){tt(i[t.identifier]||{},E(t,true))}):tt(i[t.pointerId||0]||{},E(t,true)),this.change(t))},pointerup:function(t){var i,e=this,s=this.options,n=this.action,h=this.pointers;t.changedTouches?f(t.changedTouches,function(t){i=h[t.identifier],delete h[t.identifier]}):(i=h[t.pointerId||0],delete h[t.pointerId||0]),n&&(t.preventDefault(),!s.transition||"move"!==n&&"zoom"!==n||m(this.image,q),this.action=false,F&&"zoom"!==n&&i&&Date.now()-i.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),s.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=false,this.doubleClickImageTimeout=setTimeout(function(){T(e.image,"dblclick",{originalEvent:t})},50)):(this.imageClicked=true,this.doubleClickImageTimeout=setTimeout(function(){e.imageClicked=false},500)):(this.imageClicked=false,s.backdrop&&"static"!==s.backdrop&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){T(e.canvas,"click",{originalEvent:t})},50)))))},resize:function(){var t=this;if(this.isShown&&!this.hiding&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();f(this.player.getElementsByTagName("img"),function(i){x(i,"load",t.loadImage.bind(t),{once:true}),T(i,"load")})}},wheel:function(t){var i,e,s=this;this.viewed&&(t.preventDefault(),this.wheeling||(this.wheeling=true,setTimeout(function(){s.wheeling=false},50),i=Number(this.options.zoomRatio)||.1,e=1,t.deltaY?e=t.deltaY>0?1:-1:t.wheelDelta?e=-t.wheelDelta/120:t.detail&&(e=t.detail>0?1:-1),this.zoom(-e*i,true,null,t)))}},at={show:function(){var t,i,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=this.element,n=this.options;return n.inline||this.showing||this.isShown||this.showing?this:this.ready?(c(n.show)&&x(s,"show",n.show,{once:true}),false!==T(s,"show")&&this.ready?(this.hiding&&this.transitioning.abort(),this.showing=true,this.open(),w(t=this.viewer,"viewer-hide"),t.setAttribute("role","dialog"),t.setAttribute("aria-labelledby",this.title.id),t.setAttribute("aria-modal",true),t.removeAttribute("aria-hidden"),n.transition&&!e?(i=this.shown.bind(this),this.transitioning={abort:function(){k(t,"transitionend",i),w(t,Z)}},m(t,q),t.initialOffsetWidth=t.offsetWidth,x(t,"transitionend",i,{once:true}),m(t,Z)):(m(t,Z),this.shown()),this):this):(this.build(),this.ready&&this.show(e),this)},hide:function(){var t,i,e,s,n,h=this,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=this.element,a=this.options;return a.inline||this.hiding||!(this.isShown||this.showing)||(c(a.hide)&&x(o,"hide",a.hide,{once:true}),false===T(o,"hide")||(this.showing&&this.transitioning.abort(),this.hiding=true,this.played?this.stop():this.viewing&&this.viewing.abort(),t=this.viewer,i=this.image,e=function(){w(t,Z),h.hidden()},a.transition&&!r?(s=function i(e){e&&e.target===t&&(k(t,"transitionend",i),h.hidden())},n=function(){v(t,q)?(x(t,"transitionend",s),w(t,Z)):e()},this.transitioning={abort:function(){h.viewed&&v(i,q)?k(i,"transitionend",n):v(t,q)&&k(t,"transitionend",s)}},this.viewed&&v(i,q)?(x(i,"transitionend",n,{once:true}),this.zoomTo(0,false,null,null,true)):n()):e())),this},view:function(){var t,i,e,s,n,h,r,o,a,u,l,d,v,b=this,p=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex;return p=Number(p)||0,this.hiding||this.played||p<0||p>=this.length||this.viewed&&p===this.index?this:this.isShown?(this.viewing&&this.viewing.abort(),t=this.element,i=this.options,e=this.title,s=this.canvas,r=g(h=(n=this.items[p]).querySelector("img"),"originalUrl"),o=h.getAttribute("alt"),a=document.createElement("img"),f(i.inheritedAttributes,function(t){var i=h.getAttribute(t);null!==i&&a.setAttribute(t,i)}),a.src=r,a.alt=o,c(i.view)&&x(t,"view",i.view,{once:true}),false===T(t,"view",{originalImage:this.images[p],index:p,image:a})||!this.isShown||this.hiding||this.played||((u=this.items[this.index])&&(w(u,"viewer-active"),u.removeAttribute("aria-selected")),m(n,"viewer-active"),n.setAttribute("aria-selected",true),i.focus&&n.focus(),this.image=a,this.viewed=false,this.index=p,this.imageData={},m(a,"viewer-invisible"),i.loading&&m(s,"viewer-loading"),s.innerHTML="",s.appendChild(a),this.renderList(),e.innerHTML="",l=function(){var t=b.imageData,s=Array.isArray(i.title)?i.title[1]:i.title;e.textContent=c(s)?s.call(b,a,t):o+" ("+t.naturalWidth+" \xd7 "+t.naturalHeight+")"},x(t,"viewed",l,{once:true}),this.viewing={abort:function(){k(t,"viewed",l),a.complete?b.imageRendering?b.imageRendering.abort():b.imageInitializing&&b.imageInitializing.abort():(a.src="",k(a,"load",d),b.timeout&&clearTimeout(b.timeout))}},a.complete?this.load():(x(a,"load",d=function(){k(a,"error",v),b.load()},{once:true}),x(a,"error",v=function(){k(a,"load",d),b.timeout&&(clearTimeout(b.timeout),b.timeout=false),w(a,"viewer-invisible"),i.loading&&w(b.canvas,"viewer-loading")},{once:true}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){w(a,"viewer-invisible"),b.timeout=false},1e3))),this):(this.index=p,this.show())},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.index-1;return i<0&&(i=t?this.length-1:0),this.view(i),this},next:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.length-1,e=this.index+1;return e>i&&(e=t?0:i),this.view(e),this},move:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;return this.moveTo(a(t)?t:e.x+Number(t),a(i)?i:e.y+Number(i)),this},moveTo:function(t){var i,e,s,n=this,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.element,u=this.options,l=this.imageData;if(t=Number(t),h=Number(h),this.viewed&&!this.played&&u.movable&&(i=l.x,e=l.y,s=false,o(t)?s=true:t=i,o(h)?s=true:h=e,s)){if(c(u.move)&&x(a,"move",u.move,{once:true}),false===T(a,"move",{x:t,y:h,oldX:i,oldY:e,originalEvent:r}))return this;l.x=t,l.y=h,l.left=t,l.top=h,this.moving=true,this.renderImage(function(){n.moving=false,c(u.moved)&&x(a,"moved",u.moved,{once:true}),T(a,"moved",{x:t,y:h,oldX:i,oldY:e,originalEvent:r},{cancelable:false})})}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var i,e=this,s=this.element,n=this.options,h=this.imageData;if(o(t=Number(t))&&this.viewed&&!this.played&&n.rotatable){if(i=h.rotate,c(n.rotate)&&x(s,"rotate",n.rotate,{once:true}),false===T(s,"rotate",{degree:t,oldDegree:i}))return this;h.rotate=t,this.rotating=true,this.renderImage(function(){e.rotating=false,c(n.rotated)&&x(s,"rotated",n.rotated,{once:true}),T(s,"rotated",{degree:t,oldDegree:i},{cancelable:false})})}return this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var i,e,s,n=this,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=this.element,a=this.options,u=this.imageData;if(t=Number(t),h=Number(h),this.viewed&&!this.played&&a.scalable&&(i=u.scaleX,e=u.scaleY,s=false,o(t)?s=true:t=i,o(h)?s=true:h=e,s)){if(c(a.scale)&&x(r,"scale",a.scale,{once:true}),false===T(r,"scale",{scaleX:t,scaleY:h,oldScaleX:i,oldScaleY:e}))return this;u.scaleX=t,u.scaleY=h,this.scaling=true,this.renderImage(function(){n.scaling=false,c(a.scaled)&&x(r,"scaled",a.scaled,{once:true}),T(r,"scaled",{scaleX:t,scaleY:h,oldScaleX:i,oldScaleY:e},{cancelable:false})})}return this},zoom:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=this.imageData;return t=Number(t),this.zoomTo(n.width*(t=t<0?1/(1-t):1+t)/n.naturalWidth,i,e,s),this},zoomTo:function(t){var i,e,s,n,h,r,a,u,f,d=this,v=arguments.length>1&&void 0!==arguments[1]&&arguments[1],m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,w=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,b=arguments.length>4&&void 0!==arguments[4]&&arguments[4],p=this.element,g=this.options,y=this.pointers,k=this.imageData,O=k.x,M=k.y,j=k.width,I=k.height,X=k.naturalWidth,E=k.naturalHeight;if(o(t=Math.max(0,t))&&this.viewed&&!this.played&&(b||g.zoomable)){if(b||(i=Math.max(.01,g.minZoomRatio),e=Math.min(100,g.maxZoomRatio),t=Math.min(Math.max(t,i),e)),w)switch(w.type){case"wheel":g.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);break;case"pointermove":case"touchmove":case"mousemove":t>.99&&t<1.01&&(t=1)}if(h=(s=X*t)-j,r=(n=E*t)-I,a=k.ratio,c(g.zoom)&&x(p,"zoom",g.zoom,{once:true}),false===T(p,"zoom",{ratio:t,oldRatio:a,originalEvent:w}))return this;this.zooming=true,w?(u=z(this.viewer),f=y&&Object.keys(y).length>0?Y(y):{pageX:w.pageX,pageY:w.pageY},k.x-=h*((f.pageX-u.left-O)/j),k.y-=r*((f.pageY-u.top-M)/I)):l(m)&&o(m.x)&&o(m.y)?(k.x-=h*((m.x-O)/j),k.y-=r*((m.y-M)/I)):(k.x-=h/2,k.y-=r/2),k.left=k.x,k.top=k.y,k.width=s,k.height=n,k.oldRatio=a,k.ratio=t,this.renderImage(function(){d.zooming=false,c(g.zoomed)&&x(p,"zoomed",g.zoomed,{once:true}),T(p,"zoomed",{ratio:t,oldRatio:a,originalEvent:w},{cancelable:false})}),v&&this.tooltip()}return this},play:function(){var t,i,e,s,n,h,r,a,u,l=this,d=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!this.isShown||this.played||(t=this.element,c((i=this.options).play)&&x(t,"play",i.play,{once:true}),false===T(t,"play")||(e=this.player,s=this.loadImage.bind(this),n=[],h=0,r=0,this.played=true,this.onLoadWhenPlay=s,d&&this.requestFullscreen(d),m(e,"viewer-show"),f(this.items,function(t,o){var a=t.querySelector("img"),u=document.createElement("img");u.src=g(a,"originalUrl"),u.alt=a.getAttribute("alt"),u.referrerPolicy=a.referrerPolicy,h+=1,m(u,"viewer-fade"),b(u,q,i.transition),v(t,"viewer-active")&&(m(u,Z),r=o),n.push(u),x(u,"load",s,{once:true}),e.appendChild(u)}),o(i.interval)&&i.interval>0&&(a=function t(){clearTimeout(l.playing.timeout),w(n[r],Z),m(n[r=(r-=1)>=0?r:h-1],Z),l.playing.timeout=setTimeout(t,i.interval)},u=function t(){clearTimeout(l.playing.timeout),w(n[r],Z),m(n[r=(r+=1)<h?r:0],Z),l.playing.timeout=setTimeout(t,i.interval)},h>1&&(this.playing={prev:a,next:u,timeout:setTimeout(u,i.interval)})))),this},stop:function(){var t,i,e,s=this;return this.played?(t=this.element,c((i=this.options).stop)&&x(t,"stop",i.stop,{once:true}),false===T(t,"stop")||(e=this.player,clearTimeout(this.playing.timeout),this.playing=false,this.played=false,f(e.getElementsByTagName("img"),function(t){k(t,"load",s.onLoadWhenPlay)}),w(e,"viewer-show"),e.innerHTML="",this.exitFullscreen()),this):this},full:function(){var t=this,i=this.options,e=this.viewer,s=this.image,n=this.list;return!this.isShown||this.played||this.fulled||!i.inline||(this.fulled=true,this.open(),m(this.button,"viewer-fullscreen-exit"),i.transition&&(w(n,q),this.viewed&&w(s,q)),m(e,"viewer-fixed"),e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",this.title.id),e.setAttribute("aria-modal",true),e.removeAttribute("style"),d(e,{zIndex:i.zIndex}),i.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=tt({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){m(s,q),m(n,q)},0)})})),this},exit:function(){var t=this,i=this.options,e=this.viewer,s=this.image,n=this.list;return this.isShown&&!this.played&&this.fulled&&i.inline?(this.fulled=false,this.close(),w(this.button,"viewer-fullscreen-exit"),i.transition&&(w(n,q),this.viewed&&w(s,q)),i.focus&&this.clearEnforceFocus(),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),w(e,"viewer-fixed"),d(e,{zIndex:i.zIndexInline}),this.viewerData=tt({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){m(s,q),m(n,q)},0)})}),this):this},tooltip:function(){var t=this,i=this.options,e=this.tooltipBox;return this.viewed&&!this.played&&i.tooltip?(e.textContent=Math.round(100*this.imageData.ratio)+"%",this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&T(e,"transitionend"),m(e,"viewer-show"),m(e,"viewer-fade"),m(e,q),e.removeAttribute("aria-hidden"),e.initialOffsetWidth=e.offsetWidth,m(e,Z)):(m(e,"viewer-show"),e.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){i.transition?(x(e,"transitionend",function(){w(e,"viewer-show"),w(e,"viewer-fade"),w(e,q),e.setAttribute("aria-hidden",true),t.fading=false},{once:true}),w(e,Z),t.fading=true):(w(e,"viewer-show"),e.setAttribute("aria-hidden",true)),t.tooltipping=false},1e3),this):this},toggle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.zoomTo(1===this.imageData.ratio?this.imageData.oldRatio:1,true,null,t),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=tt({},this.initialImageData),this.renderImage()),this},update:function(){var t,i,e,s,n=this,h=this.element,r=this.options,o=this.isImg;return o&&!h.parentNode?this.destroy():(t=[],f(o?[h]:h.querySelectorAll("img"),function(i){c(r.filter)?r.filter.call(n,i)&&t.push(i):n.getImageURL(i)&&t.push(i)}),t.length?(this.images=t,this.length=t.length,this.ready?(i=[],f(this.items,function(e,s){var n=e.querySelector("img"),h=t[s];h&&n&&h.src===n.src&&h.alt===n.alt||i.push(s)}),d(this.list,{width:"auto"}),this.initList(),this.isShown&&(this.length?this.viewed&&((e=i.indexOf(this.index))>=0?(this.viewed=false,this.view(Math.max(Math.min(this.index-e,this.length-1),0))):(m(s=this.items[this.index],"viewer-active"),s.setAttribute("aria-selected",true))):(this.image=null,this.viewed=false,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""))):this.build(),this):this)},destroy:function(){var t=this.element,i=this.options;return t.viewer?(this.destroyed=true,this.ready?(this.played&&this.stop(),i.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=false,this.viewer.parentNode.removeChild(this.viewer)):i.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),i.inline||k(t,"click",this.onStart),t.viewer=void 0,this):this}},ut={getImageURL:function(t){var i=this.options.url;return r(i)?t.getAttribute(i):c(i)?i.call(this,t):""},enforceFocus:function(){var t=this;this.clearEnforceFocus(),x(document,"focusin",this.onFocusin=function(i){var e=t.viewer,s=i.target;if(s!==document&&s!==e&&!e.contains(s)){for(;s;){if(null!==s.getAttribute("tabindex")||"true"===s.getAttribute("aria-modal"))return;s=s.parentElement}e.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(k(document,"focusin",this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;m(t,"viewer-open"),this.scrollbarWidth>0&&(t.style.paddingRight=this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0)+"px")},close:function(){var t=this.body;w(t,"viewer-open"),this.scrollbarWidth>0&&(t.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var t=this.element,i=this.options,e=this.viewer;this.fulled=true,this.isShown=true,this.render(),this.bind(),this.showing=false,i.focus&&(e.focus(),this.enforceFocus()),c(i.shown)&&x(t,"shown",i.shown,{once:true}),false!==T(t,"shown")&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,i=this.options,e=this.viewer;i.fucus&&this.clearEnforceFocus(),this.fulled=false,this.viewed=false,this.isShown=false,this.close(),this.unbind(),m(e,"viewer-hide"),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),e.setAttribute("aria-hidden",true),this.resetList(),this.resetImage(),this.hiding=false,this.destroyed||(c(i.hidden)&&x(t,"hidden",i.hidden,{once:true}),T(t,"hidden",null,{cancelable:false}))},requestFullscreen:function(t){var i,e=this.element.ownerDocument;this.fulled&&!(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)&&((i=e.documentElement).requestFullscreen?l(t)?i.requestFullscreen(t):i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.mozRequestFullScreen?i.mozRequestFullScreen():i.msRequestFullscreen&&i.msRequestFullscreen())},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var i,e,s,n=this.options,h=this.pointers,r=h[Object.keys(h)[0]];if(r){switch(i=r.endX-r.startX,e=r.endY-r.startY,this.action){case"move":this.move(i,e,t);break;case"zoom":this.zoom(X(h),false,null,t);break;case"switch":this.action="switched",(s=Math.abs(i))>1&&s>Math.abs(e)&&(this.pointers={},i>1?this.prev(n.loop):i<-1&&this.next(n.loop))}f(h,function(t){t.startX=t.endX,t.startY=t.endY})}},isSwitchable:function(){var t=this.imageData,i=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=i.width&&t.height<=i.height}},lt=P.Viewer,ct=(N=-1,function(){return N+=1}),ft=(function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,t),!i||1!==i.nodeType)throw new Error("The first argument is required and must be an element.");this.element=i,this.options=tt({},D,l(e)&&e),this.action=false,this.fading=false,this.fulled=false,this.hiding=false,this.imageClicked=false,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=false,this.isShown=false,this.length=0,this.moving=false,this.played=false,this.playing=false,this.pointers={},this.ready=false,this.rotating=false,this.scaling=false,this.showing=false,this.timeout=false,this.tooltipping=false,this.viewed=false,this.viewing=false,this.wheeling=false,this.zooming=false,this.id=ct(),this.init()}var i,e,h;return i=t,e=[{key:"init",value:function(){var t,i,e,s,n=this,h=this.element,r=this.options;h.viewer||(h.viewer=this,r.focus&&!r.keyboard&&(r.focus=false),i=[],f((t="img"===h.localName)?[h]:h.querySelectorAll("img"),function(t){c(r.filter)?r.filter.call(n,t)&&i.push(t):n.getImageURL(t)&&i.push(t)}),this.isImg=t,this.length=i.length,this.images=i,this.initBody(),a(document.createElement("viewer").style.transition)&&(r.transition=false),r.inline?(e=0,s=function(){var t;(e+=1)===n.length&&(n.initializing=false,n.delaying={abort:function(){clearTimeout(t)}},t=setTimeout(function(){n.delaying=false,n.build()},0))},this.initializing={abort:function(){f(i,function(t){t.complete||(k(t,"load",s),k(t,"error",s))})}},f(i,function(t){var i,e;t.complete?s():(x(t,"load",i=function(){k(t,"error",e),s()},{once:true}),x(t,"error",e=function(){k(t,"load",i),s()},{once:true}))})):x(h,"click",this.onStart=function(t){var i=t.target;"img"!==i.localName||c(r.filter)&&!r.filter.call(n,i)||n.view(n.images.indexOf(i))}))}},{key:"build",value:function(){var t,i,e,s,n,h,u,v,w,g,k,z,O,M,j,X,E;this.ready||(i=this.options,e=(t=this.element).parentNode,(s=document.createElement("div")).innerHTML='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',h=(n=s.querySelector(".viewer-container")).querySelector(".viewer-title"),u=n.querySelector(".viewer-toolbar"),v=n.querySelector(".viewer-navbar"),w=n.querySelector(".viewer-button"),g=n.querySelector(".viewer-canvas"),this.parent=e,this.viewer=n,this.title=h,this.toolbar=u,this.navbar=v,this.button=w,this.canvas=g,this.footer=n.querySelector(".viewer-footer"),this.tooltipBox=n.querySelector(".viewer-tooltip"),this.player=n.querySelector(".viewer-player"),this.list=n.querySelector(".viewer-list"),n.id="viewer"+this.id,h.id="viewerTitle"+this.id,m(h,i.title?I(Array.isArray(i.title)?i.title[0]:i.title):"viewer-hide"),m(v,i.navbar?I(i.navbar):"viewer-hide"),b(w,"viewer-hide",!i.button),i.keyboard&&w.setAttribute("tabindex",0),i.backdrop&&(m(n,"viewer-backdrop"),i.inline||"static"===i.backdrop||y(g,"viewerAction","hide")),r(i.className)&&i.className&&i.className.split(G).forEach(function(t){m(n,t)}),i.toolbar?(k=document.createElement("ul"),z=l(i.toolbar),O=J.slice(0,3),M=J.slice(7,9),j=J.slice(9),z||m(u,I(i.toolbar)),f(z?i.toolbar:J,function(t,e){var s,n,h,r=z&&l(t),u=z?p(e):t,f=r&&!a(t.show)?t.show:t;!f||!i.zoomable&&-1!==O.indexOf(u)||!i.rotatable&&-1!==M.indexOf(u)||!i.scalable&&-1!==j.indexOf(u)||(s=r&&!a(t.size)?t.size:t,n=r&&!a(t.click)?t.click:t,h=document.createElement("li"),i.keyboard&&h.setAttribute("tabindex",0),h.setAttribute("role","button"),m(h,"viewer-"+u),c(n)||y(h,"viewerAction",u),o(f)&&m(h,I(f)),-1!==["small","large"].indexOf(s)?m(h,"viewer-"+s):"play"===u&&m(h,"viewer-large"),c(n)&&x(h,"click",n),k.appendChild(h))}),u.appendChild(k)):m(u,"viewer-hide"),i.rotatable||(m(X=u.querySelectorAll('li[class*="rotate"]'),"viewer-invisible"),f(X,function(t){u.appendChild(t)})),i.inline?(m(w,"viewer-fullscreen"),d(n,{zIndex:i.zIndexInline}),"static"===window.getComputedStyle(e).position&&d(e,{position:"relative"}),e.insertBefore(n,t.nextSibling)):(m(w,"viewer-close"),m(n,"viewer-fixed"),m(n,"viewer-fade"),m(n,"viewer-hide"),d(n,{zIndex:i.zIndex}),r(E=i.container)&&(E=t.ownerDocument.querySelector(E)),E||(E=this.body),E.appendChild(n)),i.inline&&(this.render(),this.bind(),this.isShown=true),this.ready=true,c(i.ready)&&x(t,"ready",i.ready,{once:true}),false!==T(t,"ready")?this.ready&&i.inline&&this.view(this.index):this.ready=false)}}],h=[{key:"noConflict",value:function(){return window.Viewer=lt,t}},{key:"setDefaults",value:function(t){tt(D,l(t)&&t)}}],e&&n(i.prototype,e),h&&n(i,h),Object.defineProperty(i,"prototype",{writable:false}),t})();return tt(ft.prototype,ht,rt,ot,at,ut),ft});