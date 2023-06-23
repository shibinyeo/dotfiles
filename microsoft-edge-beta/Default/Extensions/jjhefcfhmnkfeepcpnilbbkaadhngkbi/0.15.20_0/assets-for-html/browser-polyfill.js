var B=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},M={exports:{}};(function(R,W){(function(b,h){h(R)})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:B,function(b){if(typeof browser=="undefined"||Object.getPrototypeOf(browser)!==Object.prototype){const h="The message port closed before a response was received.",N="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",$=l=>{const w={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(w).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class C extends WeakMap{constructor(r,n=void 0){super(n),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const O=e=>e&&typeof e=="object"&&typeof e.then=="function",E=(e,r)=>(...n)=>{l.runtime.lastError?e.reject(new Error(l.runtime.lastError.message)):r.singleCallbackArg||n.length<=1&&r.singleCallbackArg!==!1?e.resolve(n[0]):e.resolve(n)},u=e=>e==1?"argument":"arguments",_=(e,r)=>function(g,...t){if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${u(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${u(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise((a,i)=>{if(r.fallbackToNoCallback)try{g[e](...t,E({resolve:a,reject:i},r))}catch(s){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,s),g[e](...t),r.fallbackToNoCallback=!1,r.noCallback=!0,a()}else r.noCallback?(g[e](...t),a()):g[e](...t,E({resolve:a,reject:i},r))})},v=(e,r,n)=>new Proxy(r,{apply(g,t,a){return n.call(t,e,...a)}});let d=Function.call.bind(Object.prototype.hasOwnProperty);const f=(e,r={},n={})=>{let g=Object.create(null),t={has(i,s){return s in e||s in g},get(i,s,A){if(s in g)return g[s];if(!(s in e))return;let m=e[s];if(typeof m=="function")if(typeof r[s]=="function")m=v(e,e[s],r[s]);else if(d(n,s)){let c=_(s,n[s]);m=v(e,e[s],c)}else m=m.bind(e);else if(typeof m=="object"&&m!==null&&(d(r,s)||d(n,s)))m=f(m,r[s],n[s]);else if(d(n,"*"))m=f(m,r[s],n["*"]);else return Object.defineProperty(g,s,{configurable:!0,enumerable:!0,get(){return e[s]},set(c){e[s]=c}}),m;return g[s]=m,m},set(i,s,A,m){return s in g?g[s]=A:e[s]=A,!0},defineProperty(i,s,A){return Reflect.defineProperty(g,s,A)},deleteProperty(i,s){return Reflect.deleteProperty(g,s)}},a=Object.create(e);return new Proxy(a,t)},p=e=>({addListener(r,n,...g){r.addListener(e.get(n),...g)},hasListener(r,n){return r.hasListener(e.get(n))},removeListener(r,n){r.removeListener(e.get(n))}}),j=new C(e=>typeof e!="function"?e:function(n){const g=f(n,{},{getContent:{minArgs:0,maxArgs:0}});e(g)});let T=!1;const P=new C(e=>typeof e!="function"?e:function(n,g,t){let a=!1,i,s=new Promise(x=>{i=function(o){T||(console.warn(N,new Error().stack),T=!0),a=!0,x(o)}}),A;try{A=e(n,g,i)}catch(x){A=Promise.reject(x)}const m=A!==!0&&O(A);if(A!==!0&&!m&&!a)return!1;const c=x=>{x.then(o=>{t(o)},o=>{let k;o&&(o instanceof Error||typeof o.message=="string")?k=o.message:k="An unexpected error occurred",t({__mozWebExtensionPolyfillReject__:!0,message:k})}).catch(o=>{console.error("Failed to send onMessage rejected reply",o)})};return c(m?A:s),!0}),F=({reject:e,resolve:r},n)=>{l.runtime.lastError?l.runtime.lastError.message===h?r():e(new Error(l.runtime.lastError.message)):n&&n.__mozWebExtensionPolyfillReject__?e(new Error(n.message)):r(n)},S=(e,r,n,...g)=>{if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${u(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${u(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise((t,a)=>{const i=F.bind(null,{resolve:t,reject:a});g.push(i),n.sendMessage(...g)})},L={devtools:{network:{onRequestFinished:p(j)}},runtime:{onMessage:p(P),onMessageExternal:p(P),sendMessage:S.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:S.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},y={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return w.privacy={network:{"*":y},services:{"*":y},websites:{"*":y}},f(l,L,w)};if(typeof chrome!="object"||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");b.exports=$(chrome)}else b.exports=browser})})(M);var D=M.exports;export{D as b,B as c};