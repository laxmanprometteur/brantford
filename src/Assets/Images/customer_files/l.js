/**
 * crisp-client
 * @version v2.8.5 b2be41e
 * @author Crisp IM SAS
 * @date 8/24/2022
 */
(function(){try{var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};i.prototype.init=function(){var i,n,s=this,e="init";try{this.n&&!0!==this.s&&(this.s=!0,(i=document.createElement("div")).id="crisp-loader",document.getElementsByTagName("body")[0].appendChild(i),n=function(){return"none"===window.getComputedStyle(i).getPropertyValue("display")},function t(){s.f=setTimeout(function(){s.f=null,s.y-=s.v,void 0!==window[s.w]&&"function"==typeof window[s.w].__init&&!0===n()?(s.x.info(s.ns+"."+e,"Dependencies loaded"),i.parentNode.removeChild(i),window[s.w].__init({dollar_crisp:window[s.w],project_name:s.on,url_go:s.fn,url_image:s._n,url_game:s.fs,url_relay_client:s.ms,url_relay_stream:s.ws,url_website:s.$s,url_assets:s._e,rtc_ice:s.io,client_environment:s.do,client_revision:s._a,website_domain:s._f,website_id:s.n,token_id:s.tp,cookie_expire:s.gn,cookie_domain:s.ip,page_url:s.np,page_domain:s.sp,browser_useragent:s.ep,browser_timezone:s.rp,browser_capabilities:s.op,browser_locales:s.cp,ready_trigger:s.hp,runtime_configuration:s.ap,reset_handler:function(){s.reset()}})):0<s.y?t():s.x.error(s.ns+"."+e,"Could not load dependencies")},s.v)}())}catch(t){}},i.prototype.reset=function(){try{null!==this.f&&clearTimeout(this.f),this.Us(),this.init()}catch(t){}},i.prototype.up=function(){try{this.dp("dns-prefetch",this.ms),this.dp("preconnect",this._e),this.fp(),this.pp()}catch(t){}},i.prototype.dp=function(t,i){try{var n=document.createElement("link");n.setAttribute("href",i),n.setAttribute("rel",t),n.setAttribute("crossorigin",""),this.lp(n),document.getElementsByTagName("head")[0].appendChild(n)}catch(t){}},i.prototype.fp=function(){try{var t=document.createElement("script");t.src=[this._e+"/",this._p+"/","client.js?"+this._a].join(""),t.type="text/javascript",t.async=1,this.lp(t),document.getElementsByTagName("head")[0].appendChild(t)}catch(t){}},i.prototype.pp=function(){try{var t=this.mp(),i=document.createElement("link");i.href=[this._e+"/",this.Ip+"/","client_"+t+".css?"+this._a].join(""),i.type="text/css",i.rel="stylesheet",this.lp(i),document.getElementsByTagName("head")[0].appendChild(i)}catch(t){}},i.prototype.Us=function(){this.yp(),this.vp(),this.wp()},i.prototype.yp=function(){this.s=!1,this.f=null,this.y=this.Cp,this._f=document.domain,this.np=document.location.href,this.sp=document.location.hostname,this.ep=window.navigator.userAgent,this.rp=(new Date).getTimezoneOffset(),this.cp=this.Rp(),"string"==typeof CRISP_WEBSITE_ID&&CRISP_WEBSITE_ID?this.n=CRISP_WEBSITE_ID:this.n=this.Sp(),"string"==typeof CRISP_TOKEN_ID&&CRISP_TOKEN_ID?this.tp=CRISP_TOKEN_ID:"number"==typeof CRISP_TOKEN_ID&&CRISP_TOKEN_ID?this.tp=CRISP_TOKEN_ID.toString():this.tp=null,"number"==typeof CRISP_COOKIE_EXPIRE&&0<CRISP_COOKIE_EXPIRE?this.gn=CRISP_COOKIE_EXPIRE:this.gn=null,"string"==typeof CRISP_COOKIE_DOMAIN&&CRISP_COOKIE_DOMAIN?this.ip=CRISP_COOKIE_DOMAIN:this.ip=null,"function"==typeof CRISP_READY_TRIGGER?this.hp=CRISP_READY_TRIGGER:this.hp={},"object"===("undefined"==typeof CRISP_RUNTIME_CONFIG?"undefined":t(CRISP_RUNTIME_CONFIG))?this.ap=CRISP_RUNTIME_CONFIG:this.ap={},"object"===("undefined"==typeof CRISP_INCLUDE_ATTRS?"undefined":t(CRISP_INCLUDE_ATTRS))?this.Ep=CRISP_INCLUDE_ATTRS:this.Ep={}},i.prototype.vp=function(){try{this.op=[],"function"==typeof window.MutationObserver&&"function"==typeof JSON.stringify&&this.op.push("browsing"),("function"==typeof window.RTCPeerConnection&&"object"===t(navigator.mediaDevices)&&"https:"===document.location.protocol&&(window.innerWidth||0)>=this.gp&&(window.innerHeight||0)>=this.bp||!0===this.Pp)&&this.op.push("call")}catch(t){}},i.prototype.wp=function(){var t;try{this.ap.locale&&(-1!==(t=this.cp.indexOf(this.ap.locale))&&this.cp.splice(t,1),this.cp.unshift(this.ap.locale))}catch(t){}},i.prototype.lp=function(t){try{for(var i in this.Ep)this.Ep.hasOwnProperty(i)&&t.setAttribute(i,this.Ep[i])}catch(t){}},i.prototype.Sp=function(){var t=null;try{for(var i=document.querySelectorAll("script[src]"),n=0;n<i.length;n++){var s=this.Tp.exec(i[n].src);if(s&&"string"==typeof s[1]){t=s[1];break}}}catch(t){}finally{return t}},i.prototype.mp=function(){var t="default";try{var i=(navigator.userAgent||"").toLowerCase(),n=(navigator.appVersion||"").toLowerCase(),s=!1;if(!0!==s&&(-1===i.indexOf("opera mini/")&&-1===i.indexOf("msie")&&-1===n.indexOf("trident/")||(s=!0)),!0!==s)for(var e=0;e<this.Op.length;e++){var r=this.Op[e],o=i.match(r.pattern);if(o&&o[1]&&parseInt(o[1],10)<=r.version){s=!0;break}}!0===s&&(t="legacy")}catch(t){}finally{return t}},i.prototype.Dp=function(){var t=!0;try{!(window.innerWidth&&window.innerWidth<this.Np)&&!0===navigator.cookieEnabled&&!0!==this.Kp(this.sp)&&!0!==this.kp(this.ep)&&window.WebSocket||(t=!1)}catch(t){}finally{return t}},i.prototype.Kp=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i=!1;try{if(t)for(var n=0;n<this.Ap.domains.length;n++){var s=this.Ap.domains[n],e="."+s;if(t===s||t.slice(-1*e.length)===e){i=!0;break}}}catch(t){}finally{return i}},i.prototype.kp=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i=!1;try{if(t)for(var n=0;n<this.Ap.agents.length;n++)if(-1!==t.indexOf(this.Ap.agents[n])){i=!0;break}}catch(t){}finally{return i}},i.prototype.Rp=function(){var t=[];try{for(var i=navigator.languages&&0<navigator.languages.length?navigator.languages:[navigator.language||navigator.userLanguage],n=0;n<i.length;n++)i[n]&&t.push(i[n])}catch(t){}finally{return t}},new i}catch(t){}function i(){var t,i=this;try{this.ns="CrispLoader",this.x={warn:function(){},error:function(){},info:function(){},log:function(){},debug:function(){}},this.Pp=!1,this.on="crisp-client",this.jp="client.crisp.chat",this.Gp="client.relay.crisp.chat",this.Up="stream.relay.crisp.chat",this._a="b2be41e",this.do="production",this.xp="https:",this.$s="https://crisp.chat",this.fn="https://go.crisp.chat",this._n="https://image.crisp.chat",this.fs="https://game.crisp.chat",this.ms=this.xp+"//"+this.Gp,this.ws=this.xp+"//"+this.Up,this._e=this.xp+"//"+this.jp,this.io=[{urls:["stun:stun.media.crisp.chat:3478?transport=udp","stun:stun.media.crisp.chat:3478?transport=tcp","stun:stun.media.crisp.chat:3479?transport=udp","stun:stun.media.crisp.chat:3479?transport=tcp"]},{urls:["turn:turn.media.crisp.chat:3478?transport=udp","turn:turn.media.crisp.chat:3478?transport=tcp","turn:turn.media.crisp.chat:3479?transport=udp","turn:turn.media.crisp.chat:3479?transport=tcp","turns:turn.media.crisp.chat:443?transport=tcp"],username:"client_9F9kh",credential:"DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"}],this.Ap={domains:[],agents:["Trident","Googlebot","Bingbot","Slurp","DuckDuckBot","Baiduspider","YandexBot","GTmetrix","Lighthouse","Acunetix"]},this._p="static/javascripts",this.Ip="static/stylesheets",this.w="$__CRISP_INSTANCE",this.Bp="$__CRISP_INCLUDED",this.v=100,this.Cp=3e4,this.Lp=1e3,this.Np=280,this.gp=320,this.bp=420,this.Op=[{pattern:/edg(?:e)?\/([0-9\.]+)/,version:79},{pattern:/chrom(?:e|ium)\/([0-9\.]+)/,version:53},{pattern:/firefox\/([0-9\.]+)/,version:49},{pattern:/version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,version:10},{pattern:/android ([0-9\.]+)/,version:5}],this.Tp=/(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i,this.Us(),!0===window[this.Bp]||void 0!==window[this.w]&&"function"==typeof window[this.w].__init||!0!==this.Dp()||(window[this.Bp]=!0,"interactive"===document.readyState||"complete"===document.readyState?this.init():(t=document.onreadystatechange||function(){},window.addEventListener("DOMContentLoaded",function(){i.init()}),document.onreadystatechange=function(){"function"==typeof t&&t(),"interactive"!==document.readyState&&"complete"!==document.readyState||setTimeout(function(){i.init()},i.Lp)}),this.up())}catch(t){}}})();