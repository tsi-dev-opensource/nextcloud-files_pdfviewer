(()=>{var e={9097:(e,t,r)=>{"use strict";t.c0=function(e){return new i.default(e)};var i=s(r(9457)),n=s(r(432));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){Object.keys(e).filter((e=>!t||t(e))).map(e.removeItem.bind(e))}},432:(e,t)=>{"use strict";function r(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class i{constructor(e,t,n){r(this,"scope",void 0),r(this,"wrapped",void 0),this.scope="".concat(n?i.GLOBAL_SCOPE_PERSISTENT:i.GLOBAL_SCOPE_VOLATILE,"_").concat(btoa(e),"_"),this.wrapped=t}scopeKey(e){return"".concat(this.scope).concat(e)}setItem(e,t){this.wrapped.setItem(this.scopeKey(e),t)}getItem(e){return this.wrapped.getItem(this.scopeKey(e))}removeItem(e){this.wrapped.removeItem(this.scopeKey(e))}clear(){Object.keys(this.wrapped).filter((e=>e.startsWith(this.scope))).map(this.wrapped.removeItem.bind(this.wrapped))}}t.default=i,r(i,"GLOBAL_SCOPE_VOLATILE","nextcloud_vol"),r(i,"GLOBAL_SCOPE_PERSISTENT","nextcloud_per")},9457:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=r(432))&&i.__esModule?i:{default:i};function s(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=class{constructor(e){s(this,"appId",void 0),s(this,"persisted",!1),s(this,"clearedOnLogout",!1),this.appId=e}persist(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.persisted=e,this}clearOnLogout(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.clearedOnLogout=e,this}build(){return new n.default(this.appId,this.persisted?window.localStorage:window.sessionStorage,!this.clearedOnLogout)}}},5950:(e,t,r)=>{const i=r(2322),{MAX_LENGTH:n,MAX_SAFE_INTEGER:s}=r(6692),{safeRe:o,t:a}=r(5208),c=r(9901),{compareIdentifiers:l}=r(3229);class E{constructor(e,t){if(t=c(t),e instanceof E){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>n)throw new TypeError(`version is longer than ${n} characters`);i("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?o[a.LOOSE]:o[a.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<s)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(i("SemVer.compare",this.version,this.options,e),!(e instanceof E)){if("string"==typeof e&&e===this.version)return 0;e=new E(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof E||(e=new E(e,this.options)),l(this.major,e.major)||l(this.minor,e.minor)||l(this.patch,e.patch)}comparePre(e){if(e instanceof E||(e=new E(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],n=e.prerelease[t];if(i("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n)return l(r,n)}while(++t)}compareBuild(e){e instanceof E||(e=new E(e,this.options));let t=0;do{const r=this.build[t],n=e.build[t];if(i("build compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n)return l(r,n)}while(++t)}inc(e,t,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(r)?1:0;if(!t&&!1===r)throw new Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let i=this.prerelease.length;for(;--i>=0;)"number"==typeof this.prerelease[i]&&(this.prerelease[i]++,i=-2);if(-1===i){if(t===this.prerelease.join(".")&&!1===r)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let i=[t,e];!1===r&&(i=[t]),0===l(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=E},8064:(e,t,r)=>{const i=r(5950);e.exports=(e,t)=>new i(e,t).major},8690:(e,t,r)=>{const i=r(5950);e.exports=(e,t,r=!1)=>{if(e instanceof i)return e;try{return new i(e,t)}catch(e){if(!r)return null;throw e}}},8711:(e,t,r)=>{const i=r(8690);e.exports=(e,t)=>{const r=i(e,t);return r?r.version:null}},6692:e=>{const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},2322:(e,t,r)=>{var i=r(5606);const n="object"==typeof i&&i.env&&i.env.NODE_DEBUG&&/\bsemver\b/i.test(i.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=n},3229:e=>{const t=/^[0-9]+$/,r=(e,r)=>{const i=t.test(e),n=t.test(r);return i&&n&&(e=+e,r=+r),e===r?0:i&&!n?-1:n&&!i?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},9901:e=>{const t=Object.freeze({loose:!0}),r=Object.freeze({});e.exports=e=>e?"object"!=typeof e?t:e:r},5208:(e,t,r)=>{const{MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:s}=r(6692),o=r(2322),a=(t=e.exports={}).re=[],c=t.safeRe=[],l=t.src=[],E=t.t={};let u=0;const p="[a-zA-Z0-9-]",h=[["\\s",1],["\\d",s],[p,n]],d=(e,t,r)=>{const i=(e=>{for(const[t,r]of h)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),n=u++;o(e,n,t),E[e]=n,l[n]=t,a[n]=new RegExp(t,r?"g":void 0),c[n]=new RegExp(i,r?"g":void 0)};d("NUMERICIDENTIFIER","0|[1-9]\\d*"),d("NUMERICIDENTIFIERLOOSE","\\d+"),d("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),d("MAINVERSION",`(${l[E.NUMERICIDENTIFIER]})\\.(${l[E.NUMERICIDENTIFIER]})\\.(${l[E.NUMERICIDENTIFIER]})`),d("MAINVERSIONLOOSE",`(${l[E.NUMERICIDENTIFIERLOOSE]})\\.(${l[E.NUMERICIDENTIFIERLOOSE]})\\.(${l[E.NUMERICIDENTIFIERLOOSE]})`),d("PRERELEASEIDENTIFIER",`(?:${l[E.NUMERICIDENTIFIER]}|${l[E.NONNUMERICIDENTIFIER]})`),d("PRERELEASEIDENTIFIERLOOSE",`(?:${l[E.NUMERICIDENTIFIERLOOSE]}|${l[E.NONNUMERICIDENTIFIER]})`),d("PRERELEASE",`(?:-(${l[E.PRERELEASEIDENTIFIER]}(?:\\.${l[E.PRERELEASEIDENTIFIER]})*))`),d("PRERELEASELOOSE",`(?:-?(${l[E.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[E.PRERELEASEIDENTIFIERLOOSE]})*))`),d("BUILDIDENTIFIER",`${p}+`),d("BUILD",`(?:\\+(${l[E.BUILDIDENTIFIER]}(?:\\.${l[E.BUILDIDENTIFIER]})*))`),d("FULLPLAIN",`v?${l[E.MAINVERSION]}${l[E.PRERELEASE]}?${l[E.BUILD]}?`),d("FULL",`^${l[E.FULLPLAIN]}$`),d("LOOSEPLAIN",`[v=\\s]*${l[E.MAINVERSIONLOOSE]}${l[E.PRERELEASELOOSE]}?${l[E.BUILD]}?`),d("LOOSE",`^${l[E.LOOSEPLAIN]}$`),d("GTLT","((?:<|>)?=?)"),d("XRANGEIDENTIFIERLOOSE",`${l[E.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),d("XRANGEIDENTIFIER",`${l[E.NUMERICIDENTIFIER]}|x|X|\\*`),d("XRANGEPLAIN",`[v=\\s]*(${l[E.XRANGEIDENTIFIER]})(?:\\.(${l[E.XRANGEIDENTIFIER]})(?:\\.(${l[E.XRANGEIDENTIFIER]})(?:${l[E.PRERELEASE]})?${l[E.BUILD]}?)?)?`),d("XRANGEPLAINLOOSE",`[v=\\s]*(${l[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[E.XRANGEIDENTIFIERLOOSE]})(?:${l[E.PRERELEASELOOSE]})?${l[E.BUILD]}?)?)?`),d("XRANGE",`^${l[E.GTLT]}\\s*${l[E.XRANGEPLAIN]}$`),d("XRANGELOOSE",`^${l[E.GTLT]}\\s*${l[E.XRANGEPLAINLOOSE]}$`),d("COERCEPLAIN",`(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`),d("COERCE",`${l[E.COERCEPLAIN]}(?:$|[^\\d])`),d("COERCEFULL",l[E.COERCEPLAIN]+`(?:${l[E.PRERELEASE]})?`+`(?:${l[E.BUILD]})?(?:$|[^\\d])`),d("COERCERTL",l[E.COERCE],!0),d("COERCERTLFULL",l[E.COERCEFULL],!0),d("LONETILDE","(?:~>?)"),d("TILDETRIM",`(\\s*)${l[E.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",d("TILDE",`^${l[E.LONETILDE]}${l[E.XRANGEPLAIN]}$`),d("TILDELOOSE",`^${l[E.LONETILDE]}${l[E.XRANGEPLAINLOOSE]}$`),d("LONECARET","(?:\\^)"),d("CARETTRIM",`(\\s*)${l[E.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",d("CARET",`^${l[E.LONECARET]}${l[E.XRANGEPLAIN]}$`),d("CARETLOOSE",`^${l[E.LONECARET]}${l[E.XRANGEPLAINLOOSE]}$`),d("COMPARATORLOOSE",`^${l[E.GTLT]}\\s*(${l[E.LOOSEPLAIN]})$|^$`),d("COMPARATOR",`^${l[E.GTLT]}\\s*(${l[E.FULLPLAIN]})$|^$`),d("COMPARATORTRIM",`(\\s*)${l[E.GTLT]}\\s*(${l[E.LOOSEPLAIN]}|${l[E.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",d("HYPHENRANGE",`^\\s*(${l[E.XRANGEPLAIN]})\\s+-\\s+(${l[E.XRANGEPLAIN]})\\s*$`),d("HYPHENRANGELOOSE",`^\\s*(${l[E.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[E.XRANGEPLAINLOOSE]})\\s*$`),d("STAR","(<|>)?=?\\s*\\*"),d("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),d("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},5606:e=>{var t,r,i=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:n}catch(e){t=n}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],l=!1,E=-1;function u(){l&&a&&(l=!1,a.length?c=a.concat(c):E=-1,c.length&&p())}function p(){if(!l){var e=o(u);l=!0;for(var t=c.length;t;){for(a=c,c=[];++E<t;)a&&a[E].run();E=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||o(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}(()=>{"use strict";var e=r(8711),t=r(8064);class i{bus;constructor(r){"function"==typeof r.getVersion&&e(r.getVersion())?t(r.getVersion())!==t(this.getVersion())&&console.warn("Proxying an event bus of version "+r.getVersion()+" with "+this.getVersion()):console.warn("Proxying an event bus with an unknown or invalid version"),this.bus=r}getVersion(){return"3.3.1"}subscribe(e,t){this.bus.subscribe(e,t)}unsubscribe(e,t){this.bus.unsubscribe(e,t)}emit(e,t){this.bus.emit(e,t)}}class n{handlers=new Map;getVersion(){return"3.3.1"}subscribe(e,t){this.handlers.set(e,(this.handlers.get(e)||[]).concat(t))}unsubscribe(e,t){this.handlers.set(e,(this.handlers.get(e)||[]).filter((e=>e!==t)))}emit(e,t){(this.handlers.get(e)||[]).forEach((e=>{try{e(t)}catch(e){console.error("could not invoke event listener",e)}}))}}let s=null;function o(){return null!==s?s:"undefined"==typeof window?new Proxy({},{get:()=>()=>console.error("Window not available, EventBus can not be established!")}):(window.OC?._eventBus&&void 0===window._nc_event_bus&&(console.warn("found old event bus instance at OC._eventBus. Update your version!"),window._nc_event_bus=window.OC._eventBus),s=void 0!==window?._nc_event_bus?new i(window._nc_event_bus):window._nc_event_bus=new n,s)}var a=r(9097);let c;const l=[];var E,u;E="csrf-token-update",u=e=>{c=e.token,l.forEach((e=>{try{e(c)}catch(e){console.error("Error updating CSRF token observer",e)}}))},o().subscribe(E,u);(0,a.c0)("public").persist().build();let p;const h=(e,t)=>e?e.getAttribute(t):null;var d=(e=>(e[e.Debug=0]="Debug",e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error",e[e.Fatal=4]="Fatal",e))(d||{}),I=Object.defineProperty,f=(e,t,r)=>(((e,t,r)=>{t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);class L{constructor(e){f(this,"context"),this.context=e||{}}formatMessage(e,t,r){let i="["+d[t].toUpperCase()+"] ";return r&&r.app&&(i+=r.app+": "),"string"==typeof e?i+e:(i+="Unexpected ".concat(e.name),e.message&&(i+=' "'.concat(e.message,'"')),t===d.Debug&&e.stack&&(i+="\n\nStack trace:\n".concat(e.stack)),i)}log(e,t,r){var i,n;if(!("number"==typeof(null==(i=this.context)?void 0:i.level)&&e<(null==(n=this.context)?void 0:n.level)))switch("object"==typeof t&&void 0===(null==r?void 0:r.error)&&(r.error=t),e){case d.Debug:console.debug(this.formatMessage(t,d.Debug,r),r);break;case d.Info:console.info(this.formatMessage(t,d.Info,r),r);break;case d.Warn:console.warn(this.formatMessage(t,d.Warn,r),r);break;case d.Error:console.error(this.formatMessage(t,d.Error,r),r);break;case d.Fatal:default:console.error(this.formatMessage(t,d.Fatal,r),r)}}debug(e,t){this.log(d.Debug,e,Object.assign({},this.context,t))}info(e,t){this.log(d.Info,e,Object.assign({},this.context,t))}warn(e,t){this.log(d.Warn,e,Object.assign({},this.context,t))}error(e,t){this.log(d.Error,e,Object.assign({},this.context,t))}fatal(e,t){this.log(d.Fatal,e,Object.assign({},this.context,t))}}function m(e){return new L(e)}var O=Object.defineProperty,R=(e,t,r)=>(((e,t,r)=>{t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);class v{constructor(e){R(this,"context"),R(this,"factory"),this.context={},this.factory=e}setApp(e){return this.context.app=e,this}setLogLevel(e){return this.context.level=e,this}setUid(e){return this.context.uid=e,this}detectUser(){const e=function(){if(void 0!==p)return p;const e=document?.getElementsByTagName("head")[0];if(!e)return null;const t=h(e,"data-user");return null===t?(p=null,p):(p={uid:t,displayName:h(e,"data-user-displayname"),isAdmin:!!window._oc_isadmin},p)}();return null!==e&&(this.context.uid=e.uid),this}detectLogLevel(){const e=this,t=()=>{var r,i;"complete"===document.readyState||"interactive"===document.readyState?(e.context.level=null!=(i=null==(r=window._oc_config)?void 0:r.loglevel)?i:d.Warn,window._oc_debug&&(e.context.level=d.Debug),document.removeEventListener("readystatechange",t)):document.addEventListener("readystatechange",t)};return t(),this}build(){return void 0===this.context.level&&this.detectLogLevel(),this.factory(this.context)}}function N(){return new v(m)}const w=N().setApp("Files_PDFViewer").detectUser().build();window.location===window.parent.location&&(window.location.href="/");const b=window.location.search,A=new URLSearchParams(b).get("hideDownload");document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementsByTagName("head")[0];if(PDFViewerApplicationOptions.set("disablePreferences",!0),PDFViewerApplicationOptions.set("externalLinkTarget",2),PDFViewerApplicationOptions.set("isEvalSupported",!1),PDFViewerApplicationOptions.set("workerSrc",e.getAttribute("data-workersrc")),PDFViewerApplicationOptions.set("cMapUrl",e.getAttribute("data-cmapurl")),PDFViewerApplicationOptions.set("sandboxBundleSrc",e.getAttribute("data-sandbox")),PDFViewerApplicationOptions.set("enablePermissions",!0),PDFViewerApplicationOptions.set("imageResourcesPath","./js/pdfjs/web/images/"),PDFViewerApplicationOptions.set("enableScripting",!0===e.getAttribute("data-enableScripting")),"1"===A){const e=window.document.querySelector(".pdfViewer");e&&e.classList.add("disabledTextSelection"),PDFViewerApplication&&(PDFViewerApplication.download=function(){},delete PDFViewerApplication.supportsPrinting,PDFViewerApplication.supportsPrinting=!1,PDFViewerApplication.beforePrint=function(){}),w.info("Download, print and user interaction disabled")}else w.info("Download and print available");w.debug("Initialized files_pdfviewer",PDFViewerApplicationOptions.getAll())}),!0)})()})();
//# sourceMappingURL=files_pdfviewer-workersrc.js.map?v=44ad0af05578cd51555e