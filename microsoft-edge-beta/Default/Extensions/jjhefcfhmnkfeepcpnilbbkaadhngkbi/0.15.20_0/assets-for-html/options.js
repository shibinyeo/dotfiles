var B=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);import"./modulepreload-polyfill.js";import"chrome://global/skin/in-content/common.css";var X=B((ee,E)=>{const R=typeof chrome=="object"&&chrome&&typeof chrome.extension=="object",W=typeof window=="object"?window:void 0;typeof location=="object"&&location.protocol.startsWith("http");function C(){var i,e;return R&&(location.pathname==="/_generated_background_page.html"||((e=(i=chrome.extension)===null||i===void 0?void 0:i.getBackgroundPage)===null||e===void 0?void 0:e.call(i))===W)}function F(i,e,t,n){var f,c=!1,p=0;function d(){f&&clearTimeout(f)}typeof e!="boolean"&&(n=t,t=e,e=void 0);function o(){for(var s=arguments.length,u=new Array(s),a=0;a<s;a++)u[a]=arguments[a];var h=this,m=Date.now()-p;c||(n&&!f&&v(),d(),n===void 0&&m>i?v():e!==!0&&(f=setTimeout(n?w:v,n===void 0?i-m:i)));function v(){p=Date.now(),t.apply(h,u)}function w(){f=void 0}}return o.cancel=function(){d(),c=!0},o}class O{constructor(e={}){this.registeredTypes=e}get(e){return this.registeredTypes[e]!==void 0?this.registeredTypes[e]:this.registeredTypes.default}register(e,t){this.registeredTypes[e]===void 0&&(this.registeredTypes[e]=t)}registerDefault(e){this.register("default",e)}}class L extends O{constructor(e){super(e),this.registerDefault(t=>t.getAttribute("name")||"")}}class J extends O{constructor(e){super(e),this.registerDefault(t=>t.value),this.register("checkbox",t=>t.getAttribute("value")!==null?t.checked?t.getAttribute("value"):null:t.checked),this.register("select",t=>function(n){var f,c,p,d=n.options,o=n.selectedIndex,s=n.type==="select-one",u=s?null:[],a=s?o+1:d.length;for(p=o<0?a:s?o:0;p<a;p++)if(((c=d[p]).selected||p===o)&&!c.disabled&&!(c.parentNode.disabled&&c.parentNode.tagName.toLowerCase()==="optgroup")){if(f=c.value,s)return f;u.push(f)}return u}(t))}}class z extends O{constructor(e){super(e),this.registerDefault(()=>!0),this.register("radio",t=>t.checked)}}function q(i){let e=i.match(/[^[\]]+/g),t;return i.length>1&&i.indexOf("[]")===i.length-2&&(t=e.pop(),e.push([t])),e}var k=typeof Element!="undefined"?Element.prototype:{},j=k.matches||k.matchesSelector||k.webkitMatchesSelector||k.mozMatchesSelector||k.msMatchesSelector||k.oMatchesSelector,P=function(i,e){if(!i||i.nodeType!==1)return!1;if(j)return j.call(i,e);for(var t=i.parentNode.querySelectorAll(e),n=0;n<t.length;n++)if(t[n]==i)return!0;return!1};function T(i){let e,t=i.tagName,n=t;return t.toLowerCase()==="input"&&(e=i.getAttribute("type"),n=e||"text"),n.toLowerCase()}function N(i,e){return Array.prototype.filter.call(i.querySelectorAll("input,select,textarea"),t=>{if(t.tagName.toLowerCase()==="input"&&(t.type==="submit"||t.type==="reset"))return!1;let n=T(t),f=e.keyExtractors.get(n)(t),c=(e.include||[]).indexOf(f)!==-1,p=(e.exclude||[]).indexOf(f)!==-1,d=!1,o=!1;if(e.ignoredTypes)for(let s of e.ignoredTypes)P(t,s)&&(d=!0);return o=!c&&(!!e.include||p||d),!o})}function D(i,e,t){if(!e)return i;var n=e.shift();return i[n]||(i[n]=Array.isArray(n)?[]:{}),e.length===0&&(Array.isArray(i[n])?t!==null&&i[n].push(t):i[n]=t),e.length>0&&D(i[n],e,t),i}function K(i,e={}){let t={};return e.keySplitter=e.keySplitter||q,e.keyExtractors=new L(e.keyExtractors||{}),e.inputReaders=new J(e.inputReaders||{}),e.keyAssignmentValidators=new z(e.keyAssignmentValidators||{}),Array.prototype.forEach.call(N(i,e),n=>{let f=T(n),c=e.keyExtractors.get(f)(n),p=e.inputReaders.get(f)(n);if(e.keyAssignmentValidators.get(f)(n,c,p)){let d=e.keySplitter(c);t=D(t,d,p)}}),t}class Z extends O{constructor(e){super(e),this.registerDefault((t,n)=>{t.value=n}),this.register("checkbox",(t,n)=>{n===null?t.indeterminate=!0:t.checked=Array.isArray(n)?n.indexOf(t.value)!==-1:n}),this.register("radio",function(t,n){n!==void 0&&(t.checked=t.value===n.toString())}),this.register("select",H)}}function H(i,e){for(var t,n,f=i.options,c=function(d){var o=[];return d!==null&&(Array.isArray(d)?o.push.apply(o,d):o.push(d)),o}(e),p=f.length;p--;)n=f[p],c.indexOf(n.value)>-1&&(n.setAttribute("selected",!0),t=!0);t||(i.selectedIndex=-1)}function G(i,e){return i+"["+e+"]"}function I(i,e,t={}){let n={},f=t.keyJoiner||G;for(let c in i){if(!i.hasOwnProperty(c))continue;let p=i[c],d={};e&&(c=f(e,c)),Array.isArray(p)?(d[c+"[]"]=p,d[c]=p):typeof p=="object"?d=I(p,c,t):d[c]=p,Object.assign(n,d)}return n}function Q(i,e,t={}){let n=I(e,null,t);t.keyExtractors=new L(t.keyExtractors||{}),t.inputWriters=new Z(t.inputWriters||{}),Array.prototype.forEach.call(N(i,t),f=>{let c=T(f),p=t.keyExtractors.get(c)(f);t.inputWriters.get(c)(f,n[p])})}var M=(function(i){var e=function(){var t=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",c={};function p(o,s){if(!c[o]){c[o]={};for(var u=0;u<o.length;u++)c[o][o.charAt(u)]=u}return c[o][s]}var d={compressToBase64:function(o){if(o==null)return"";var s=d._compress(o,6,function(u){return n.charAt(u)});switch(s.length%4){default:case 0:return s;case 1:return s+"===";case 2:return s+"==";case 3:return s+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:d._decompress(o.length,32,function(s){return p(n,o.charAt(s))})},compressToUTF16:function(o){return o==null?"":d._compress(o,15,function(s){return t(s+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:d._decompress(o.length,16384,function(s){return o.charCodeAt(s)-32})},compressToUint8Array:function(o){for(var s=d.compress(o),u=new Uint8Array(2*s.length),a=0,h=s.length;a<h;a++){var m=s.charCodeAt(a);u[2*a]=m>>>8,u[2*a+1]=m%256}return u},decompressFromUint8Array:function(o){if(o==null)return d.decompress(o);for(var s=new Array(o.length/2),u=0,a=s.length;u<a;u++)s[u]=256*o[2*u]+o[2*u+1];var h=[];return s.forEach(function(m){h.push(t(m))}),d.decompress(h.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":d._compress(o,6,function(s){return f.charAt(s)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),d._decompress(o.length,32,function(s){return p(f,o.charAt(s))}))},compress:function(o){return d._compress(o,16,function(s){return t(s)})},_compress:function(o,s,u){if(o==null)return"";var a,h,m,v={},w={},g="",x="",y="",S=2,b=3,_=2,A=[],l=0,r=0;for(m=0;m<o.length;m+=1)if(g=o.charAt(m),Object.prototype.hasOwnProperty.call(v,g)||(v[g]=b++,w[g]=!0),x=y+g,Object.prototype.hasOwnProperty.call(v,x))y=x;else{if(Object.prototype.hasOwnProperty.call(w,y)){if(y.charCodeAt(0)<256){for(a=0;a<_;a++)l<<=1,r==s-1?(r=0,A.push(u(l)),l=0):r++;for(h=y.charCodeAt(0),a=0;a<8;a++)l=l<<1|1&h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h>>=1}else{for(h=1,a=0;a<_;a++)l=l<<1|h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h=0;for(h=y.charCodeAt(0),a=0;a<16;a++)l=l<<1|1&h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h>>=1}--S==0&&(S=Math.pow(2,_),_++),delete w[y]}else for(h=v[y],a=0;a<_;a++)l=l<<1|1&h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h>>=1;--S==0&&(S=Math.pow(2,_),_++),v[x]=b++,y=String(g)}if(y!==""){if(Object.prototype.hasOwnProperty.call(w,y)){if(y.charCodeAt(0)<256){for(a=0;a<_;a++)l<<=1,r==s-1?(r=0,A.push(u(l)),l=0):r++;for(h=y.charCodeAt(0),a=0;a<8;a++)l=l<<1|1&h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h>>=1}else{for(h=1,a=0;a<_;a++)l=l<<1|h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h=0;for(h=y.charCodeAt(0),a=0;a<16;a++)l=l<<1|1&h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h>>=1}--S==0&&(S=Math.pow(2,_),_++),delete w[y]}else for(h=v[y],a=0;a<_;a++)l=l<<1|1&h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h>>=1;--S==0&&(S=Math.pow(2,_),_++)}for(h=2,a=0;a<_;a++)l=l<<1|1&h,r==s-1?(r=0,A.push(u(l)),l=0):r++,h>>=1;for(;;){if(l<<=1,r==s-1){A.push(u(l));break}r++}return A.join("")},decompress:function(o){return o==null?"":o==""?null:d._decompress(o.length,32768,function(s){return o.charCodeAt(s)})},_decompress:function(o,s,u){var a,h,m,v,w,g,x,y=[],S=4,b=4,_=3,A="",l=[],r={val:u(0),position:s,index:1};for(a=0;a<3;a+=1)y[a]=a;for(m=0,w=Math.pow(2,2),g=1;g!=w;)v=r.val&r.position,r.position>>=1,r.position==0&&(r.position=s,r.val=u(r.index++)),m|=(v>0?1:0)*g,g<<=1;switch(m){case 0:for(m=0,w=Math.pow(2,8),g=1;g!=w;)v=r.val&r.position,r.position>>=1,r.position==0&&(r.position=s,r.val=u(r.index++)),m|=(v>0?1:0)*g,g<<=1;x=t(m);break;case 1:for(m=0,w=Math.pow(2,16),g=1;g!=w;)v=r.val&r.position,r.position>>=1,r.position==0&&(r.position=s,r.val=u(r.index++)),m|=(v>0?1:0)*g,g<<=1;x=t(m);break;case 2:return""}for(y[3]=x,h=x,l.push(x);;){if(r.index>o)return"";for(m=0,w=Math.pow(2,_),g=1;g!=w;)v=r.val&r.position,r.position>>=1,r.position==0&&(r.position=s,r.val=u(r.index++)),m|=(v>0?1:0)*g,g<<=1;switch(x=m){case 0:for(m=0,w=Math.pow(2,8),g=1;g!=w;)v=r.val&r.position,r.position>>=1,r.position==0&&(r.position=s,r.val=u(r.index++)),m|=(v>0?1:0)*g,g<<=1;y[b++]=t(m),x=b-1,S--;break;case 1:for(m=0,w=Math.pow(2,16),g=1;g!=w;)v=r.val&r.position,r.position>>=1,r.position==0&&(r.position=s,r.val=u(r.index++)),m|=(v>0?1:0)*g,g<<=1;y[b++]=t(m),x=b-1,S--;break;case 2:return l.join("")}if(S==0&&(S=Math.pow(2,_),_++),y[x])A=y[x];else{if(x!==b)return null;A=h+h.charAt(0)}l.push(A),y[b++]=h+A.charAt(0),h=A,--S==0&&(S=Math.pow(2,_),_++)}}};return d}();i!=null&&(i.exports=e)}(E={exports:{}},E.exports),E.exports),E;class U{constructor({defaults:e={},storageName:t="options",migrations:n=[],logging:f=!0}={}){Object.defineProperty(this,"storageName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_form",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_migrations",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.storageName=t,this.defaults=e,this._handleFormInput=(c=300,p=this._handleFormInput.bind(this),d===void 0?F(c,p,!1):F(c,d,p!==!1));var c,p,d;this._handleStorageChangeOnForm=this._handleStorageChangeOnForm.bind(this),f||(this._log=()=>{}),this._migrations=this._runMigrations(n)}async getAll(){return await this._migrations,this._getAll()}async setAll(e){return await this._migrations,this._setAll(e)}async set(e){return this.setAll({...await this.getAll(),...e})}async syncForm(e){this._form=e instanceof HTMLFormElement?e:document.querySelector(e),this._form.addEventListener("input",this._handleFormInput),this._form.addEventListener("submit",this._handleFormSubmit),chrome.storage.onChanged.addListener(this._handleStorageChangeOnForm),this._updateForm(this._form,await this.getAll())}async stopSyncForm(){this._form&&(this._form.removeEventListener("input",this._handleFormInput),this._form.removeEventListener("submit",this._handleFormSubmit),chrome.storage.onChanged.removeListener(this._handleStorageChangeOnForm),delete this._form)}_log(e,...t){console[e](...t)}async _getAll(){return new Promise((e,t)=>{chrome.storage.sync.get(this.storageName,n=>{chrome.runtime.lastError?t(chrome.runtime.lastError):e(this._decode(n[this.storageName]))})})}async _setAll(e){return this._log("log","Saving options",e),new Promise((t,n)=>{chrome.storage.sync.set({[this.storageName]:this._encode(e)},()=>{chrome.runtime.lastError?n(chrome.runtime.lastError):t()})})}_encode(e){const t={...e};for(const[n,f]of Object.entries(t))this.defaults[n]===f&&delete t[n];return this._log("log","Without the default values",t),M.compressToEncodedURIComponent(JSON.stringify(t))}_decode(e){let t=e;return typeof e=="string"&&(t=JSON.parse(M.decompressFromEncodedURIComponent(e))),{...this.defaults,...t}}async _runMigrations(e){if(e.length===0||!C()||!await async function(){return new Promise(f=>{var c;const p=d=>{d!=="development"?(chrome.runtime.onInstalled.addListener(()=>f(!0)),setTimeout(f,500,!1)):f(!0)};!((c=chrome.management)===null||c===void 0)&&c.getSelf?chrome.management.getSelf(({installType:d})=>p(d)):p("unknown")})}())return;const t=await this._getAll(),n=JSON.stringify(t);this._log("log","Found these stored options",{...t}),this._log("info","Will run",e.length,e.length===1?"migration":" migrations"),e.forEach(f=>f(t,this.defaults)),n!==JSON.stringify(t)&&await this._setAll(t)}async _handleFormInput({target:e}){const t=e;t.name&&(await this.set(this._parseForm(t.form)),t.form.dispatchEvent(new CustomEvent("options-sync:form-synced",{bubbles:!0})))}_handleFormSubmit(e){e.preventDefault()}_updateForm(e,t){const n=this._parseForm(e);for(const[c,p]of Object.entries(t))n[c]===p&&delete t[c];const f=Object.keys(t);f.length>0&&Q(e,t,{include:f})}_parseForm(e){const t=[];for(const n of e.querySelectorAll("[name]"))n.validity.valid&&!n.disabled&&t.push(n.name.replace(/\[.*]/,""));return K(e,{include:t})}_handleStorageChangeOnForm(e,t){t!=="sync"||!e[this.storageName]||document.hasFocus()&&this._form.contains(document.activeElement)||this._updateForm(this._form,this._decode(e[this.storageName].newValue))}}Object.defineProperty(U,"migrations",{enumerable:!0,configurable:!0,writable:!0,value:{removeUnused(i,e){for(const t of Object.keys(i))t in e||delete i[t]}}});window.optionsStorage=new U({defaults:{}})});export default X();