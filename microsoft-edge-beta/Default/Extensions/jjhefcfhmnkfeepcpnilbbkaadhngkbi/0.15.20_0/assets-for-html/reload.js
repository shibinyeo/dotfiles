import"./modulepreload-polyfill.js";import{b as Dt}from"./browser-polyfill.js";/*! @license DOMPurify 2.3.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.4/LICENSE */function Nt(r){if(Array.isArray(r)){for(var a=0,o=Array(r.length);a<r.length;a++)o[a]=r[a];return o}else return Array.from(r)}var Lt=Object.hasOwnProperty,Ke=Object.setPrototypeOf,Mt=Object.isFrozen,wt=Object.getPrototypeOf,Ct=Object.getOwnPropertyDescriptor,T=Object.freeze,R=Object.seal,It=Object.create,nt=typeof Reflect!="undefined"&&Reflect,re=nt.apply,Re=nt.construct;re||(re=function(a,o,s){return a.apply(o,s)});T||(T=function(a){return a});R||(R=function(a){return a});Re||(Re=function(a,o){return new(Function.prototype.bind.apply(a,[null].concat(Nt(o))))});var xt=_(Array.prototype.forEach),Ze=_(Array.prototype.pop),B=_(Array.prototype.push),te=_(String.prototype.toLowerCase),Je=_(String.prototype.match),N=_(String.prototype.replace),kt=_(String.prototype.indexOf),Ft=_(String.prototype.trim),A=_(RegExp.prototype.test),Qe=Pt(TypeError);function _(r){return function(a){for(var o=arguments.length,s=Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];return re(r,a,s)}}function Pt(r){return function(){for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return Re(r,o)}}function l(r,a){Ke&&Ke(r,null);for(var o=a.length;o--;){var s=a[o];if(typeof s=="string"){var c=te(s);c!==s&&(Mt(a)||(a[o]=c),s=c)}r[s]=!0}return r}function L(r){var a=It(null),o=void 0;for(o in r)re(Lt,r,[o])&&(a[o]=r[o]);return a}function Q(r,a){for(;r!==null;){var o=Ct(r,a);if(o){if(o.get)return _(o.get);if(typeof o.value=="function")return _(o.value)}r=wt(r)}function s(c){return console.warn("fallback value for",c),null}return s}var et=T(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ge=T(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ye=T(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ut=T(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),be=T(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Ht=T(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tt=T(["#text"]),rt=T(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Se=T(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),at=T(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=T(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),zt=R(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Gt=R(/<%[\s\S]*|[\s\S]*%>/gm),Bt=R(/^data-[\-\w.\u00B7-\uFFFF]/),Wt=R(/^aria-[\-\w]+$/),$t=R(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),qt=R(/^(?:\w+script|data):/i),Yt=R(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};function g(r){if(Array.isArray(r)){for(var a=0,o=Array(r.length);a<r.length;a++)o[a]=r[a];return o}else return Array.from(r)}var Vt=function(){return typeof window=="undefined"?null:window},jt=function(a,o){if((typeof a=="undefined"?"undefined":W(a))!=="object"||typeof a.createPolicy!="function")return null;var s=null,c="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(c)&&(s=o.currentScript.getAttribute(c));var $="dompurify"+(s?"#"+s:"");try{return a.createPolicy($,{createHTML:function(q){return q}})}catch{return console.warn("TrustedTypes policy "+$+" could not be created."),null}};function it(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vt(),a=function(e){return it(e)};if(a.version="2.3.4",a.removed=[],!r||!r.document||r.document.nodeType!==9)return a.isSupported=!1,a;var o=r.document,s=r.document,c=r.DocumentFragment,$=r.HTMLTemplateElement,M=r.Node,q=r.Element,ae=r.NodeFilter,Oe=r.NamedNodeMap,ot=Oe===void 0?r.NamedNodeMap||r.MozNamedAttrMap:Oe,lt=r.HTMLFormElement,st=r.DOMParser,ut=r.trustedTypes,Y=q.prototype,ft=Q(Y,"cloneNode"),mt=Q(Y,"nextSibling"),ct=Q(Y,"childNodes"),ne=Q(Y,"parentNode");if(typeof $=="function"){var ie=s.createElement("template");ie.content&&ie.content.ownerDocument&&(s=ie.content.ownerDocument)}var O=jt(ut,o),De=O&&K?O.createHTML(""):"",V=s,oe=V.implementation,pt=V.createNodeIterator,dt=V.createDocumentFragment,vt=V.getElementsByTagName,ht=o.importNode,Ne={};try{Ne=L(s).documentMode?s.documentMode:{}}catch{}var E={};a.isSupported=typeof ne=="function"&&oe&&typeof oe.createHTMLDocument!="undefined"&&Ne!==9;var le=zt,se=Gt,Tt=Bt,At=Wt,_t=qt,Le=Yt,ue=$t,p=null,Me=l({},[].concat(g(et),g(ge),g(ye),g(be),g(tt))),m=null,we=l({},[].concat(g(rt),g(Se),g(at),g(ee))),f=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),j=null,fe=null,Ce=!0,me=!0,Ie=!1,w=!1,C=!1,ce=!1,pe=!1,I=!1,X=!1,K=!1,xe=!0,de=!0,H=!1,x={},k=null,ke=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Fe=null,Pe=l({},["audio","video","img","source","image","track"]),ve=null,Ue=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",Te="http://www.w3.org/2000/svg",D="http://www.w3.org/1999/xhtml",Z=D,Ae=!1,F=void 0,Et=["application/xhtml+xml","text/html"],gt="text/html",P=void 0,U=null,yt=s.createElement("form"),He=function(e){return e instanceof RegExp||e instanceof Function},_e=function(e){U&&U===e||((!e||(typeof e=="undefined"?"undefined":W(e))!=="object")&&(e={}),e=L(e),p="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS):Me,m="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR):we,ve="ADD_URI_SAFE_ATTR"in e?l(L(Ue),e.ADD_URI_SAFE_ATTR):Ue,Fe="ADD_DATA_URI_TAGS"in e?l(L(Pe),e.ADD_DATA_URI_TAGS):Pe,k="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS):ke,j="FORBID_TAGS"in e?l({},e.FORBID_TAGS):{},fe="FORBID_ATTR"in e?l({},e.FORBID_ATTR):{},x="USE_PROFILES"in e?e.USE_PROFILES:!1,Ce=e.ALLOW_ARIA_ATTR!==!1,me=e.ALLOW_DATA_ATTR!==!1,Ie=e.ALLOW_UNKNOWN_PROTOCOLS||!1,w=e.SAFE_FOR_TEMPLATES||!1,C=e.WHOLE_DOCUMENT||!1,I=e.RETURN_DOM||!1,X=e.RETURN_DOM_FRAGMENT||!1,K=e.RETURN_TRUSTED_TYPE||!1,pe=e.FORCE_BODY||!1,xe=e.SANITIZE_DOM!==!1,de=e.KEEP_CONTENT!==!1,H=e.IN_PLACE||!1,ue=e.ALLOWED_URI_REGEXP||ue,Z=e.NAMESPACE||D,e.CUSTOM_ELEMENT_HANDLING&&He(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&He(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F=Et.indexOf(e.PARSER_MEDIA_TYPE)===-1?F=gt:F=e.PARSER_MEDIA_TYPE,P=F==="application/xhtml+xml"?function(t){return t}:te,w&&(me=!1),X&&(I=!0),x&&(p=l({},[].concat(g(tt))),m=[],x.html===!0&&(l(p,et),l(m,rt)),x.svg===!0&&(l(p,ge),l(m,Se),l(m,ee)),x.svgFilters===!0&&(l(p,ye),l(m,Se),l(m,ee)),x.mathMl===!0&&(l(p,be),l(m,at),l(m,ee))),e.ADD_TAGS&&(p===Me&&(p=L(p)),l(p,e.ADD_TAGS)),e.ADD_ATTR&&(m===we&&(m=L(m)),l(m,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&l(ve,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(k===ke&&(k=L(k)),l(k,e.FORBID_CONTENTS)),de&&(p["#text"]=!0),C&&l(p,["html","head","body"]),p.table&&(l(p,["tbody"]),delete j.tbody),T&&T(e),U=e)},ze=l({},["mi","mo","mn","ms","mtext"]),Ge=l({},["foreignobject","desc","title","annotation-xml"]),J=l({},ge);l(J,ye),l(J,Ut);var Ee=l({},be);l(Ee,Ht);var bt=function(e){var t=ne(e);(!t||!t.tagName)&&(t={namespaceURI:D,tagName:"template"});var n=te(e.tagName),u=te(t.tagName);if(e.namespaceURI===Te)return t.namespaceURI===D?n==="svg":t.namespaceURI===he?n==="svg"&&(u==="annotation-xml"||ze[u]):Boolean(J[n]);if(e.namespaceURI===he)return t.namespaceURI===D?n==="math":t.namespaceURI===Te?n==="math"&&Ge[u]:Boolean(Ee[n]);if(e.namespaceURI===D){if(t.namespaceURI===Te&&!Ge[u]||t.namespaceURI===he&&!ze[u])return!1;var d=l({},["title","style","font","a","script"]);return!Ee[n]&&(d[n]||!J[n])}return!1},y=function(e){B(a.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=De}catch{e.remove()}}},Be=function(e,t){try{B(a.removed,{attribute:t.getAttributeNode(e),from:t})}catch{B(a.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!m[e])if(I||X)try{y(t)}catch{}else try{t.setAttribute(e,"")}catch{}},We=function(e){var t=void 0,n=void 0;if(pe)e="<remove></remove>"+e;else{var u=Je(e,/^[\r\n\t ]+/);n=u&&u[0]}F==="application/xhtml+xml"&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var d=O?O.createHTML(e):e;if(Z===D)try{t=new st().parseFromString(d,F)}catch{}if(!t||!t.documentElement){t=oe.createDocument(Z,"template",null);try{t.documentElement.innerHTML=Ae?"":d}catch{}}var v=t.body||t.documentElement;return e&&n&&v.insertBefore(s.createTextNode(n),v.childNodes[0]||null),Z===D?vt.call(t,C?"html":"body")[0]:C?t.documentElement:v},$e=function(e){return pt.call(e.ownerDocument||e,e,ae.SHOW_ELEMENT|ae.SHOW_COMMENT|ae.SHOW_TEXT,null,!1)},St=function(e){return e instanceof lt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof ot)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function")},z=function(e){return(typeof M=="undefined"?"undefined":W(M))==="object"?e instanceof M:e&&(typeof e=="undefined"?"undefined":W(e))==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},b=function(e,t,n){!E[e]||xt(E[e],function(u){u.call(a,t,n,U)})},qe=function(e){var t=void 0;if(b("beforeSanitizeElements",e,null),St(e)||Je(e.nodeName,/[\u0080-\uFFFF]/))return y(e),!0;var n=P(e.nodeName);if(b("uponSanitizeElement",e,{tagName:n,allowedTags:p}),!z(e.firstElementChild)&&(!z(e.content)||!z(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent)||n==="select"&&A(/<template/i,e.innerHTML))return y(e),!0;if(!p[n]||j[n]){if(de&&!k[n]){var u=ne(e)||e.parentNode,d=ct(e)||e.childNodes;if(d&&u)for(var v=d.length,h=v-1;h>=0;--h)u.insertBefore(ft(d[h],!0),mt(e))}return!j[n]&&Ve(n)&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n))?!1:(y(e),!0)}return e instanceof q&&!bt(e)||(n==="noscript"||n==="noembed")&&A(/<\/no(script|embed)/i,e.innerHTML)?(y(e),!0):(w&&e.nodeType===3&&(t=e.textContent,t=N(t,le," "),t=N(t,se," "),e.textContent!==t&&(B(a.removed,{element:e.cloneNode()}),e.textContent=t)),b("afterSanitizeElements",e,null),!1)},Ye=function(e,t,n){if(xe&&(t==="id"||t==="name")&&(n in s||n in yt))return!1;if(!(me&&!fe[t]&&A(Tt,t))){if(!(Ce&&A(At,t))){if(!m[t]||fe[t]){if(!(Ve(e)&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&A(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n))))return!1}else if(!ve[t]){if(!A(ue,N(n,Le,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&kt(n,"data:")===0&&Fe[e])){if(!(Ie&&!A(_t,N(n,Le,"")))){if(n)return!1}}}}}}return!0},Ve=function(e){return e.indexOf("-")>0},je=function(e){var t=void 0,n=void 0,u=void 0,d=void 0;b("beforeSanitizeAttributes",e,null);var v=e.attributes;if(!!v){var h={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m};for(d=v.length;d--;){t=v[d];var S=t,G=S.name,Xe=S.namespaceURI;if(n=Ft(t.value),u=P(G),h.attrName=u,h.attrValue=n,h.keepAttr=!0,h.forceKeepAttr=void 0,b("uponSanitizeAttribute",e,h),n=h.attrValue,!h.forceKeepAttr&&(Be(G,e),!!h.keepAttr)){if(A(/\/>/i,n)){Be(G,e);continue}w&&(n=N(n,le," "),n=N(n,se," "));var Ot=P(e.nodeName);if(!!Ye(Ot,u,n))try{Xe?e.setAttributeNS(Xe,G,n):e.setAttribute(G,n),Ze(a.removed)}catch{}}}b("afterSanitizeAttributes",e,null)}},Rt=function i(e){var t=void 0,n=$e(e);for(b("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)b("uponSanitizeShadowNode",t,null),!qe(t)&&(t.content instanceof c&&i(t.content),je(t));b("afterSanitizeShadowDOM",e,null)};return a.sanitize=function(i,e){var t=void 0,n=void 0,u=void 0,d=void 0,v=void 0;if(Ae=!i,Ae&&(i="<!-->"),typeof i!="string"&&!z(i)){if(typeof i.toString!="function")throw Qe("toString is not a function");if(i=i.toString(),typeof i!="string")throw Qe("dirty is not a string, aborting")}if(!a.isSupported){if(W(r.toStaticHTML)==="object"||typeof r.toStaticHTML=="function"){if(typeof i=="string")return r.toStaticHTML(i);if(z(i))return r.toStaticHTML(i.outerHTML)}return i}if(ce||_e(e),a.removed=[],typeof i=="string"&&(H=!1),!H)if(i instanceof M)t=We("<!---->"),n=t.ownerDocument.importNode(i,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!I&&!w&&!C&&i.indexOf("<")===-1)return O&&K?O.createHTML(i):i;if(t=We(i),!t)return I?null:De}t&&pe&&y(t.firstChild);for(var h=$e(H?i:t);u=h.nextNode();)u.nodeType===3&&u===d||qe(u)||(u.content instanceof c&&Rt(u.content),je(u),d=u);if(d=null,H)return i;if(I){if(X)for(v=dt.call(t.ownerDocument);t.firstChild;)v.appendChild(t.firstChild);else v=t;return m.shadowroot&&(v=ht.call(o,v,!0)),v}var S=C?t.outerHTML:t.innerHTML;return w&&(S=N(S,le," "),S=N(S,se," ")),O&&K?O.createHTML(S):S},a.setConfig=function(i){_e(i),ce=!0},a.clearConfig=function(){U=null,ce=!1},a.isValidAttribute=function(i,e,t){U||_e({});var n=P(i),u=P(e);return Ye(n,u,t)},a.addHook=function(i,e){typeof e=="function"&&(E[i]=E[i]||[],B(E[i],e))},a.removeHook=function(i){E[i]&&Ze(E[i])},a.removeHooks=function(i){E[i]&&(E[i]=[])},a.removeAllHooks=function(){E={}},a}var Xt=it(),Kt=(r,a=[])=>{const o=document.createElement("div");return o.innerHTML=Xt.sanitize(r,{ADD_TAGS:a}),o.firstChild};function Zt(){const a=new URLSearchParams(window.location.search).get("reason");document.body.classList.add(`reason--${a}`),a==="update"&&document.body.prepend(Kt("<p>The extension has been updated.</p>")),document.querySelector("button").addEventListener("click",()=>{Dt.tabs.reload(),window.close()})}Zt();