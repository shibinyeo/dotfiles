(()=>{var e={275:(e,r,s)=>{"use strict";var t=s(11);window.addEventListener("message",(function(e){window.self==window.top&&e.data.fromContent&&"recheck-license"==e.data.type&&t.rpc.call("validateLicense",e.data.key).then((function(e){window.postMessage({fromAddon:!0,licenseStatus:e.status,licenseEmail:e.email},"*")})).catch((function(e){console.error("err",e),window.location.href="/install-coapp"}))}))},11:(e,r,s)=>{"use strict";var t=s(1),n=t.browser;t.rpc=s(0);var g=n.runtime.connect({name:"weh:"+n.runtime.id+":"+t.uiName});t.rpc.setPost(g.postMessage.bind(g)),g.onMessage.addListener((function(e){t.rpc.receive(e,g.postMessage.bind(g))})),e.exports=t},0:e=>{"use strict";var r=function(){function e(e,r){for(var s=0;s<r.length;s++){var t=r[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,s,t){return s&&e(r.prototype,s),t&&e(r,t),r}}();function s(e){if(Array.isArray(e)){for(var r=0,s=Array(e.length);r<e.length;r++)s[r]=e[r];return s}return Array.from(e)}function t(e){return Array.isArray(e)?e:Array.from(e)}var n=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.replyId=0,this.replies={},this.listeners={},this.hook=this.nullHook,this.debugLevel=0,this.useTarget=!1,this.logger=console,this.posts={}}return r(e,[{key:"setPost",value:function(e,r){"string"==typeof e?this.posts[e]=r:this.post=e}},{key:"setUseTarget",value:function(e){this.useTarget=e}},{key:"setDebugLevel",value:function(e){this.debugLevel=e}},{key:"setHook",value:function(e){var r=this,s=Date.now();this.hook=e?function(t){t.timestamp="undefined"!=typeof window&&void 0!==window.performance?window.performance.now():Date.now()-s;try{e(t)}catch(e){r.logger.warn("Hoor error",e)}}:this.nullHook}},{key:"nullHook",value:function(){}},{key:"call",value:function(){var e,r,n,g,i=this,a=Array.prototype.slice.call(arguments);if("function"==typeof a[0]&&(e=a.shift()),i.useTarget){var o=t(a);r=o[0],n=o[1],g=o.slice(2)}else{var m=t(a);n=m[0],g=m.slice(1)}var A=new Promise((function(t,a){var o=++i.replyId;i.debugLevel>=2&&i.logger.info("rpc #"+o,"call =>",n,g),i.hook({type:"call",callee:r,rid:o,method:n,args:g}),i.replies[o]={resolve:t,reject:a,peer:r};var m=e||i.useTarget&&i.posts[r]||i.post;i.useTarget?m(r,{type:"weh#rpc",_request:o,_method:n,_args:[].concat(s(g))}):m({type:"weh#rpc",_request:o,_method:n,_args:[].concat(s(g))})}));return A}},{key:"receive",value:function(e,r,s){var t=this;if(e._request)Promise.resolve().then((function(){var r=t.listeners[e._method];if("function"==typeof r)return t.debugLevel>=2&&t.logger.info("rpc #"+e._request,"serve <= ",e._method,e._args),t.hook({type:"call",caller:s,rid:e._request,method:e._method,args:e._args}),Promise.resolve(r.apply(null,e._args)).then((function(r){return t.hook({type:"reply",caller:s,rid:e._request,result:r}),r})).catch((function(r){throw t.hook({type:"reply",caller:s,rid:e._request,error:r.message}),r}));throw new Error("Method "+e._method+" is not a function")})).then((function(s){t.debugLevel>=2&&t.logger.info("rpc #"+e._request,"serve => ",s),r({type:"weh#rpc",_reply:e._request,_result:s})})).catch((function(s){t.debugLevel>=1&&t.logger.info("rpc #"+e._request,"serve => !",s.message),r({type:"weh#rpc",_reply:e._request,_error:s.message})}));else if(e._reply){var n=t.replies[e._reply];delete t.replies[e._reply],n?e._error?(t.debugLevel>=1&&t.logger.info("rpc #"+e._reply,"call <= !",e._error),t.hook({type:"reply",callee:n.peer,rid:e._reply,error:e._error}),n.reject(new Error(e._error))):(t.debugLevel>=2&&t.logger.info("rpc #"+e._reply,"call <= ",e._result),t.hook({type:"reply",callee:n.peer,rid:e._reply,result:e._result}),n.resolve(e._result)):t.logger.error("Missing reply handler")}}},{key:"listen",value:function(e){Object.assign(this.listeners,e)}}]),e}();e.exports=new n},1:(e,r,s)=>{"use strict";var t;r.browser=s(4),t="undefined"==typeof browser&&"undefined"!=typeof chrome&&chrome.runtime?/\bOPR\//.test(navigator.userAgent)?"opera":"chrome":/\bEdge\//.test(navigator.userAgent)?"edge":"firefox",r.browserType=t,r.isBrowser=function(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];for(var n=0;n<s.length;n++)if(s[n]==r.browserType)return!0;return!1},r.error=function(e){console.groupCollapsed(e.message),e.stack&&console.error(e.stack),console.groupEnd()}},4:function(e,r){var s,t,n;t=[e],void 0===(n="function"==typeof(s=function(e){"use strict";if("undefined"==typeof browser){const r=()=>{const e={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},export:{minArgs:0,maxArgs:0},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},getSubTree:{minArgs:1,maxArgs:1},import:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},setIcon:{minArgs:1,maxArgs:1}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{update:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},downloads:{download:{minArgs:1,maxArgs:1},cancel:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:0,maxArgs:0},setIcon:{minArgs:1,maxArgs:1},show:{minArgs:0,maxArgs:0}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{create:{minArgs:1,maxArgs:1},captureVisibleTab:{minArgs:0,maxArgs:2},detectLanguage:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},query:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(e).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class r extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const s=e=>e&&"object"==typeof e&&"function"==typeof e.then,t=e=>(...r)=>{chrome.runtime.lastError?e.reject(chrome.runtime.lastError):1===r.length?e.resolve(r[0]):e.resolve(r)},n=(e,r)=>{const s=e=>1==e?"argument":"arguments";return function(n,...g){if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${s(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${s(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise(((r,s)=>{n[e](...g,t({resolve:r,reject:s}))}))}},g=(e,r,s)=>new Proxy(r,{apply:(r,t,n)=>s.call(t,e,...n)});let i=Function.call.bind(Object.prototype.hasOwnProperty);const a=(e,r={},s={})=>{let t=Object.create(null),o={has:(e,r)=>r in e||r in t,get(e,o,m){if(o in t)return t[o];if(!(o in e))return;let A=e[o];if("function"==typeof A)if("function"==typeof r[o])A=g(e,e[o],r[o]);else if(i(s,o)){let r=n(o,s[o]);A=g(e,e[o],r)}else A=A.bind(e);else{if("object"!=typeof A||null===A||!i(r,o)&&!i(s,o))return Object.defineProperty(t,o,{configurable:!0,enumerable:!0,get:()=>e[o],set(r){e[o]=r}}),A;A=a(A,r[o],s[o])}return t[o]=A,A},set:(e,r,s,n)=>(r in t?t[r]=s:e[r]=s,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(t,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(t,r)};return new Proxy(e,o)},o={runtime:{onMessage:(m=new r((e=>"function"!=typeof e?e:function(r,t,n){let g=e(r,t);if(s(g))return g.then(n,(e=>{console.error(e),n(e)})),!0;void 0!==g&&n(g)})),{addListener(e,r,...s){e.addListener(m.get(r),...s)},hasListener:(e,r)=>e.hasListener(m.get(r)),removeListener(e,r){e.removeListener(m.get(r))}})}};var m;return a(chrome,o,e)};e.exports=r()}else e.exports=browser})?s.apply(r,t):s)||(e.exports=n)}},r={};function s(t){var n=r[t];if(void 0!==n)return n.exports;var g=r[t]={exports:{}};return e[t].call(g.exports,g,g.exports,s),g.exports}(()=>{"use strict";s(275)})()})();