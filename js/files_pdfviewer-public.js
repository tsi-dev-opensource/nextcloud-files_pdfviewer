(()=>{var e={9097:(e,t,r)=>{"use strict";t.c0=function(e){return new n.default(e)};var n=s(r(9457)),i=s(r(432));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){Object.keys(e).filter((e=>!t||t(e))).map(e.removeItem.bind(e))}},432:(e,t)=>{"use strict";function r(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class n{constructor(e,t,i){r(this,"scope",void 0),r(this,"wrapped",void 0),this.scope="".concat(i?n.GLOBAL_SCOPE_PERSISTENT:n.GLOBAL_SCOPE_VOLATILE,"_").concat(btoa(e),"_"),this.wrapped=t}scopeKey(e){return"".concat(this.scope).concat(e)}setItem(e,t){this.wrapped.setItem(this.scopeKey(e),t)}getItem(e){return this.wrapped.getItem(this.scopeKey(e))}removeItem(e){this.wrapped.removeItem(this.scopeKey(e))}clear(){Object.keys(this.wrapped).filter((e=>e.startsWith(this.scope))).map(this.wrapped.removeItem.bind(this.wrapped))}}t.default=n,r(n,"GLOBAL_SCOPE_VOLATILE","nextcloud_vol"),r(n,"GLOBAL_SCOPE_PERSISTENT","nextcloud_per")},9457:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(432))&&n.__esModule?n:{default:n};function s(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=class{constructor(e){s(this,"appId",void 0),s(this,"persisted",!1),s(this,"clearedOnLogout",!1),this.appId=e}persist(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.persisted=e,this}clearOnLogout(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.clearedOnLogout=e,this}build(){return new i.default(this.appId,this.persisted?window.localStorage:window.sessionStorage,!this.clearedOnLogout)}}},5950:(e,t,r)=>{const n=r(2322),{MAX_LENGTH:i,MAX_SAFE_INTEGER:s}=r(6692),{safeRe:o,t:a}=r(5208),c=r(9901),{compareIdentifiers:l}=r(3229);class E{constructor(e,t){if(t=c(t),e instanceof E){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>i)throw new TypeError(`version is longer than ${i} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?o[a.LOOSE]:o[a.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<s)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof E)){if("string"==typeof e&&e===this.version)return 0;e=new E(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof E||(e=new E(e,this.options)),l(this.major,e.major)||l(this.minor,e.minor)||l(this.patch,e.patch)}comparePre(e){if(e instanceof E||(e=new E(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return l(r,i)}while(++t)}compareBuild(e){e instanceof E||(e=new E(e,this.options));let t=0;do{const r=this.build[t],i=e.build[t];if(n("build compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return l(r,i)}while(++t)}inc(e,t,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(r)?1:0;if(!t&&!1===r)throw new Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let n=this.prerelease.length;for(;--n>=0;)"number"==typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);if(-1===n){if(t===this.prerelease.join(".")&&!1===r)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let n=[t,e];!1===r&&(n=[t]),0===l(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=E},8064:(e,t,r)=>{const n=r(5950);e.exports=(e,t)=>new n(e,t).major},8690:(e,t,r)=>{const n=r(5950);e.exports=(e,t,r=!1)=>{if(e instanceof n)return e;try{return new n(e,t)}catch(e){if(!r)return null;throw e}}},8711:(e,t,r)=>{const n=r(8690);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},6692:e=>{const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},2322:(e,t,r)=>{var n=r(5606);const i="object"==typeof n&&n.env&&n.env.NODE_DEBUG&&/\bsemver\b/i.test(n.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=i},3229:e=>{const t=/^[0-9]+$/,r=(e,r)=>{const n=t.test(e),i=t.test(r);return n&&i&&(e=+e,r=+r),e===r?0:n&&!i?-1:i&&!n?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},9901:e=>{const t=Object.freeze({loose:!0}),r=Object.freeze({});e.exports=e=>e?"object"!=typeof e?t:e:r},5208:(e,t,r)=>{const{MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:i,MAX_LENGTH:s}=r(6692),o=r(2322),a=(t=e.exports={}).re=[],c=t.safeRe=[],l=t.src=[],E=t.t={};let u=0;const h="[a-zA-Z0-9-]",p=[["\\s",1],["\\d",s],[h,i]],d=(e,t,r)=>{const n=(e=>{for(const[t,r]of p)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),i=u++;o(e,i,t),E[e]=i,l[i]=t,a[i]=new RegExp(t,r?"g":void 0),c[i]=new RegExp(n,r?"g":void 0)};d("NUMERICIDENTIFIER","0|[1-9]\\d*"),d("NUMERICIDENTIFIERLOOSE","\\d+"),d("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${h}*`),d("MAINVERSION",`(${l[E.NUMERICIDENTIFIER]})\\.(${l[E.NUMERICIDENTIFIER]})\\.(${l[E.NUMERICIDENTIFIER]})`),d("MAINVERSIONLOOSE",`(${l[E.NUMERICIDENTIFIERLOOSE]})\\.(${l[E.NUMERICIDENTIFIERLOOSE]})\\.(${l[E.NUMERICIDENTIFIERLOOSE]})`),d("PRERELEASEIDENTIFIER",`(?:${l[E.NUMERICIDENTIFIER]}|${l[E.NONNUMERICIDENTIFIER]})`),d("PRERELEASEIDENTIFIERLOOSE",`(?:${l[E.NUMERICIDENTIFIERLOOSE]}|${l[E.NONNUMERICIDENTIFIER]})`),d("PRERELEASE",`(?:-(${l[E.PRERELEASEIDENTIFIER]}(?:\\.${l[E.PRERELEASEIDENTIFIER]})*))`),d("PRERELEASELOOSE",`(?:-?(${l[E.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[E.PRERELEASEIDENTIFIERLOOSE]})*))`),d("BUILDIDENTIFIER",`${h}+`),d("BUILD",`(?:\\+(${l[E.BUILDIDENTIFIER]}(?:\\.${l[E.BUILDIDENTIFIER]})*))`),d("FULLPLAIN",`v?${l[E.MAINVERSION]}${l[E.PRERELEASE]}?${l[E.BUILD]}?`),d("FULL",`^${l[E.FULLPLAIN]}$`),d("LOOSEPLAIN",`[v=\\s]*${l[E.MAINVERSIONLOOSE]}${l[E.PRERELEASELOOSE]}?${l[E.BUILD]}?`),d("LOOSE",`^${l[E.LOOSEPLAIN]}$`),d("GTLT","((?:<|>)?=?)"),d("XRANGEIDENTIFIERLOOSE",`${l[E.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),d("XRANGEIDENTIFIER",`${l[E.NUMERICIDENTIFIER]}|x|X|\\*`),d("XRANGEPLAIN",`[v=\\s]*(${l[E.XRANGEIDENTIFIER]})(?:\\.(${l[E.XRANGEIDENTIFIER]})(?:\\.(${l[E.XRANGEIDENTIFIER]})(?:${l[E.PRERELEASE]})?${l[E.BUILD]}?)?)?`),d("XRANGEPLAINLOOSE",`[v=\\s]*(${l[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[E.XRANGEIDENTIFIERLOOSE]})(?:${l[E.PRERELEASELOOSE]})?${l[E.BUILD]}?)?)?`),d("XRANGE",`^${l[E.GTLT]}\\s*${l[E.XRANGEPLAIN]}$`),d("XRANGELOOSE",`^${l[E.GTLT]}\\s*${l[E.XRANGEPLAINLOOSE]}$`),d("COERCEPLAIN",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`),d("COERCE",`${l[E.COERCEPLAIN]}(?:$|[^\\d])`),d("COERCEFULL",l[E.COERCEPLAIN]+`(?:${l[E.PRERELEASE]})?`+`(?:${l[E.BUILD]})?(?:$|[^\\d])`),d("COERCERTL",l[E.COERCE],!0),d("COERCERTLFULL",l[E.COERCEFULL],!0),d("LONETILDE","(?:~>?)"),d("TILDETRIM",`(\\s*)${l[E.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",d("TILDE",`^${l[E.LONETILDE]}${l[E.XRANGEPLAIN]}$`),d("TILDELOOSE",`^${l[E.LONETILDE]}${l[E.XRANGEPLAINLOOSE]}$`),d("LONECARET","(?:\\^)"),d("CARETTRIM",`(\\s*)${l[E.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",d("CARET",`^${l[E.LONECARET]}${l[E.XRANGEPLAIN]}$`),d("CARETLOOSE",`^${l[E.LONECARET]}${l[E.XRANGEPLAINLOOSE]}$`),d("COMPARATORLOOSE",`^${l[E.GTLT]}\\s*(${l[E.LOOSEPLAIN]})$|^$`),d("COMPARATOR",`^${l[E.GTLT]}\\s*(${l[E.FULLPLAIN]})$|^$`),d("COMPARATORTRIM",`(\\s*)${l[E.GTLT]}\\s*(${l[E.LOOSEPLAIN]}|${l[E.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",d("HYPHENRANGE",`^\\s*(${l[E.XRANGEPLAIN]})\\s+-\\s+(${l[E.XRANGEPLAIN]})\\s*$`),d("HYPHENRANGELOOSE",`^\\s*(${l[E.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[E.XRANGEPLAINLOOSE]})\\s*$`),d("STAR","(<|>)?=?\\s*\\*"),d("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),d("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},5606:e=>{var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],l=!1,E=-1;function u(){l&&a&&(l=!1,a.length?c=a.concat(c):E=-1,c.length&&h())}function h(){if(!l){var e=o(u);l=!0;for(var t=c.length;t;){for(a=c,c=[];++E<t;)a&&a[E].run();E=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||o(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}(()=>{"use strict";const e=(e,t,r)=>{const n=Object.assign({escape:!0},r||{});return"/"!==e.charAt(0)&&(e="/"+e),i=(i=t||{})||{},e.replace(/{([^{}]*)}/g,(function(e,t){const r=i[t];return n.escape?encodeURIComponent("string"==typeof r||"number"==typeof r?r.toString():e):"string"==typeof r||"number"==typeof r?r.toString():e}));var i},t=(t,r,i)=>{var s,o,a;const c=Object.assign({noRewrite:!1},i||{}),l=null!=(s=null==i?void 0:i.baseURL)?s:n();return!0!==(null==(a=null==(o=null==window?void 0:window.OC)?void 0:o.config)?void 0:a.modRewriteWorking)||c.noRewrite?l+"/index.php"+e(t,r,i):l+e(t,r,i)};function n(){let e=window._oc_webroot;if(typeof e>"u"){e=location.pathname;const t=e.indexOf("/index.php/");if(-1!==t)e=e.slice(0,t);else{const t=e.indexOf("/",1);e=e.slice(0,t>0?t:void 0)}}return e}var i=r(8711),s=r(8064);class o{bus;constructor(e){"function"==typeof e.getVersion&&i(e.getVersion())?s(e.getVersion())!==s(this.getVersion())&&console.warn("Proxying an event bus of version "+e.getVersion()+" with "+this.getVersion()):console.warn("Proxying an event bus with an unknown or invalid version"),this.bus=e}getVersion(){return"3.3.1"}subscribe(e,t){this.bus.subscribe(e,t)}unsubscribe(e,t){this.bus.unsubscribe(e,t)}emit(e,t){this.bus.emit(e,t)}}class a{handlers=new Map;getVersion(){return"3.3.1"}subscribe(e,t){this.handlers.set(e,(this.handlers.get(e)||[]).concat(t))}unsubscribe(e,t){this.handlers.set(e,(this.handlers.get(e)||[]).filter((e=>e!==t)))}emit(e,t){(this.handlers.get(e)||[]).forEach((e=>{try{e(t)}catch(e){console.error("could not invoke event listener",e)}}))}}let c=null;function l(){return null!==c?c:"undefined"==typeof window?new Proxy({},{get:()=>()=>console.error("Window not available, EventBus can not be established!")}):(window.OC?._eventBus&&void 0===window._nc_event_bus&&(console.warn("found old event bus instance at OC._eventBus. Update your version!"),window._nc_event_bus=window.OC._eventBus),c=void 0!==window?._nc_event_bus?new o(window._nc_event_bus):window._nc_event_bus=new a,c)}var E=r(9097);let u;const h=[];var p,d;p="csrf-token-update",d=e=>{u=e.token,h.forEach((e=>{try{e(u)}catch(e){console.error("Error updating CSRF token observer",e)}}))},l().subscribe(p,d);(0,E.c0)("public").persist().build();let f;const I=(e,t)=>e?e.getAttribute(t):null;var m=(e=>(e[e.Debug=0]="Debug",e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error",e[e.Fatal=4]="Fatal",e))(m||{}),L=Object.defineProperty,v=(e,t,r)=>(((e,t,r)=>{t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);class R{constructor(e){v(this,"context"),this.context=e||{}}formatMessage(e,t,r){let n="["+m[t].toUpperCase()+"] ";return r&&r.app&&(n+=r.app+": "),"string"==typeof e?n+e:(n+="Unexpected ".concat(e.name),e.message&&(n+=' "'.concat(e.message,'"')),t===m.Debug&&e.stack&&(n+="\n\nStack trace:\n".concat(e.stack)),n)}log(e,t,r){var n,i;if(!("number"==typeof(null==(n=this.context)?void 0:n.level)&&e<(null==(i=this.context)?void 0:i.level)))switch("object"==typeof t&&void 0===(null==r?void 0:r.error)&&(r.error=t),e){case m.Debug:console.debug(this.formatMessage(t,m.Debug,r),r);break;case m.Info:console.info(this.formatMessage(t,m.Info,r),r);break;case m.Warn:console.warn(this.formatMessage(t,m.Warn,r),r);break;case m.Error:console.error(this.formatMessage(t,m.Error,r),r);break;case m.Fatal:default:console.error(this.formatMessage(t,m.Fatal,r),r)}}debug(e,t){this.log(m.Debug,e,Object.assign({},this.context,t))}info(e,t){this.log(m.Info,e,Object.assign({},this.context,t))}warn(e,t){this.log(m.Warn,e,Object.assign({},this.context,t))}error(e,t){this.log(m.Error,e,Object.assign({},this.context,t))}fatal(e,t){this.log(m.Fatal,e,Object.assign({},this.context,t))}}function O(e){return new R(e)}var g=Object.defineProperty,N=(e,t,r)=>(((e,t,r)=>{t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);class b{constructor(e){N(this,"context"),N(this,"factory"),this.context={},this.factory=e}setApp(e){return this.context.app=e,this}setLogLevel(e){return this.context.level=e,this}setUid(e){return this.context.uid=e,this}detectUser(){const e=function(){if(void 0!==f)return f;const e=document?.getElementsByTagName("head")[0];if(!e)return null;const t=I(e,"data-user");return null===t?(f=null,f):(f={uid:t,displayName:I(e,"data-user-displayname"),isAdmin:!!window._oc_isadmin},f)}();return null!==e&&(this.context.uid=e.uid),this}detectLogLevel(){const e=this,t=()=>{var r,n;"complete"===document.readyState||"interactive"===document.readyState?(e.context.level=null!=(n=null==(r=window._oc_config)?void 0:r.loglevel)?n:m.Warn,window._oc_debug&&(e.context.level=m.Debug),document.removeEventListener("readystatechange",t)):document.addEventListener("readystatechange",t)};return t(),this}build(){return void 0===this.context.level&&this.detectLogLevel(),this.factory(this.context)}}function w(){return new b(O)}const A=w().setApp("Files_PDFViewer").detectUser().build(),T=document.getElementById("hideDownload"),$=()=>!T||T&&"true"!==T.value,y=document.getElementById("isPublic"),S=()=>!(!y||"1"!==y.value),P=document.getElementById("mimetype"),_=()=>P&&"application/pdf"===P.value,D=()=>!$()&&void 0!==OCA.RichDocuments;window.addEventListener("DOMContentLoaded",(function(){if(A.debug("Initializing for public page",{isPublicPage:S(),canDownload:$(),isSecureViewerAvailable:D()}),!S()||_())if(S()&&_()&&!D()){const e=location.hash.split("page=")[1]||0,r=document.getElementById("files-public-content"),n=document.getElementById("sharingToken"),i=document.querySelector("body > footer")||document.querySelector("#app-content > footer"),s=document.querySelector("#content"),o=n.value,a=t("/s/{token}/download",{token:o}),c=t("/apps/files_pdfviewer/?file={downloadUrl}&canDownload={canDownload}#page={page}",{canDownload:$()?1:0,downloadUrl:a,page:e});if(r){if(r.innerHTML="",OCA.Viewer)OCA.Viewer.setRootElement("#files-public-content"),OCA.Viewer.open({path:"/"});else{A.error("Viewer not available, PDF viewer directly injected");const e=document.createElement("iframe");e.style.height="100%",e.style.width="100%",e.style.position="absolute",r.appendChild(e),e.src=c}i.style.display="none",s.style.minHeight="calc(100% - var(--header-height))",s.style.marginLeft="0",s.style.marginRight="0",s.style.width="100%",s.style.borderRadius="unset"}else A.error("Unable to inject the PDF Viewer")}else A.error("But this does not appear to be a public page");else A.debug("But this is not a single pdf share")}))})()})();
//# sourceMappingURL=files_pdfviewer-public.js.map?v=453444f9a9f057b04901