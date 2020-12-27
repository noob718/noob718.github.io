(function(e){function n(n){for(var o,a,c=n[0],u=n[1],s=n[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},a={app:0},r={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d9069933"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={about:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"c17f9ae7"}[e]+".css",r=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),t(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"06c4":function(e,n,t){"use strict";t("f370")},"11d8":function(e,n,t){"use strict";t("d3db")},4360:function(e,n,t){"use strict";t("ac1f"),t("5319");var o=t("5502"),a=t("bc3a"),r=t.n(a),i=t("eacc"),c=t("a18c");n["a"]=Object(o["a"])({debug:!0,state:{errorLogin:null,auth_token:null,user_id:null,user:null,question_text:null,question_number:null,examSessionId:null,isAuthenticated:!1,isLoading:!1,error:null},mutations:{SET_AUTH_TOKEN:function(e){this.state.auth_token=e,localStorage.token=e},authUser:function(e,n){e.token=n.token,e.user_id=n.user_id,e.auth_token=n.token,e.isAuthenticated=n.auth},updateExamSessionId:function(e,n){e.examSessionId=n}},actions:{getAuthToken:function(){return this.state.auth_token},updateAuthToken:function(e,n){var t=e.commit;console.log("attempting to update token with "+n),t("SET_AUTH_TOKEN",n)},setExamToCompleted:function(e,n){var t=e.commit;e.dispatch;i["a"].post("api/exam/complete_exam/",{session_id:n},{headers:{Authorization:"Token ".concat(localStorage.token)}}).then((function(e){console.log(e),console.log("session id store =>",n),t("updateExamSessionId",{examSessionId:n}),c["a"].push({name:"score"})}))},signup:function(e,n){var t=e.commit,o=e.dispatch;i["a"].post("api/account/register",{username:n.username,email:n.email,password:n.password,first_name:n.first_name,last_name:n.last_name}).then((function(e){console.log(e),t("authUser",{token:e.data.auth_token,user_id:e.data.id}),o("storeUser",n)})).catch((function(e){return console.log(e)}))},login:function(e,n){var t=this,o=e.commit;console.log("login pressed"),console.log("username = "+n.username),console.log("password = "+n.password),this.state.errorLogin=!1,this.state.isLoading=!0,i["a"].post("/auth/token/login",{username:n.username,password:n.password}).then((function(e){console.log(e),t.auth_token=e.data.auth_token,localStorage.token=t.auth_token,localStorage.userId=e.data.id,localStorage.userName=e.data.first_name,o("authUser",{token:e.data.auth_token,user_id:e.data.id,auth:!0}),t.isLoading=!1,c["a"].replace({name:"UserHomePage"})})).catch((function(e){t.state.isLoading=!1,t.state.errorLogin=!0,console.log("in error loop"),console.log(e)}))},loginToBillingError:function(e,n){var t=this,o=e.commit;console.log("login to billing pressed"),console.log("username = "+n.username),console.log("password = "+n.password),i["a"].post("/auth/token/login",{username:n.username,password:n.password}).then((function(e){t.isLoading=!0,console.log(e),t.auth_token=e.data.auth_token,localStorage.token=t.auth_token,localStorage.userId=e.data.id,localStorage.userName=e.data.first_name,o("authUser",{token:e.data.auth_token,user_id:e.data.id,auth:!0}),t.isLoading=!1,c["a"].replace({name:"InitialBillingError"})})).catch((function(e){console.log("in error loop"),console.log(e)}))},checkForPreviousExam:function(){i["a"].get("api/exam/continue-check/",{headers:{Authorization:"Token "+localStorage.token},params:{user_id:localStorage.userId}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},storeUser:function(e,n){e.commit;this.state.auth_token&&r.a.post("api/account/test/",n,{headers:{Authorization:"Token ".concat(localStorage.token)}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},methods:{fetchUser:function(){this.state.auth_token&&r.a.post("api/account/user/",{headers:{Authorization:"Token ".concat(localStorage.token)}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},modules:{}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23");function a(e,n){var t=Object(o["y"])("router-view");return Object(o["r"])(),Object(o["e"])(t)}t("eff2");const r={};r.render=a;var i=r,c=t("9483");Object(c["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var u=t("a18c"),s=t("4360"),l=t("bc3a"),d=t.n(l);d.a.defaults.baseURL="https://first-responder-front-end.herokuapp.com",d.a.interceptors.request.use((function(e){return console.log("request",e),e})),Object(o["d"])(i).use(s["a"]).use(u["a"]).mount("#app")},a18c:function(e,n,t){"use strict";t("d3b7");var o=t("954b"),a=t("7a23");function r(e,n,t,o,r,i){var c=Object(a["y"])("app-nav"),u=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["e"])("div",null,[Object(a["i"])(c),Object(a["i"])(u,null,{default:Object(a["J"])((function(e){var n=e.Component;return[Object(a["i"])(a["b"],{name:"slide",mode:"out-in"},{default:Object(a["J"])((function(){return[(Object(a["r"])(),Object(a["e"])(Object(a["z"])(n)))]})),_:2},1024)]})),_:1})])}var i=t("f19b"),c=t.n(i),u=Object(a["M"])("data-v-0dbbfd17");Object(a["u"])("data-v-0dbbfd17");var s={class:"nav"},l=Object(a["i"])("div",{class:"nav__hamburger-line"},null,-1),d=Object(a["i"])("div",{class:"nav__hamburger-line2"},null,-1),f=Object(a["i"])("div",{class:"nav__hamburger-line3"},null,-1),p=Object(a["i"])("div",{class:"nav__logo"},[Object(a["i"])("img",{src:c.a,alt:"logo-image",class:"nav__logo-img"})],-1),h={class:"nav__list"},m=Object(a["h"])("Home"),b=Object(a["h"])("Courses"),g=Object(a["h"])("Games"),v=Object(a["h"])("Pricing"),_=Object(a["h"])("AboutUs"),k=Object(a["h"])("Login"),O=Object(a["i"])("div",{class:"margin"},null,-1);Object(a["s"])();var j=u((function(e,n,t,o,r,i){var c=this,j=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["e"])("div",null,[Object(a["i"])("nav",s,[Object(a["i"])("div",{onClick:n[1]||(n[1]=function(e){return r.Active=!r.Active}),class:[{"nav__hamburger-active":r.Active},"nav__hamburger"]},[l,d,f],2),p,Object(a["i"])("div",{class:[{"nav__box-active":r.Active},"nav__box"]},[Object(a["i"])("ul",h,[Object(a["i"])("li",{class:"nav__item",onClick:n[2]||(n[2]=function(e){r.Active=!r.Active,c.$store.state.errorLogin=!1})},[Object(a["i"])(j,{to:"/",class:"nav__link"},{default:u((function(){return[m]})),_:1})]),Object(a["i"])("li",{class:"nav__item",onClick:n[3]||(n[3]=function(e){r.Active=!r.Active,c.$store.state.errorLogin=!1})},[Object(a["i"])(j,{to:"/courses",class:"nav__link"},{default:u((function(){return[b]})),_:1})]),Object(a["i"])("li",{class:"nav__item",onClick:n[4]||(n[4]=function(e){r.Active=!r.Active,c.$store.state.errorLogin=!1})},[Object(a["i"])(j,{to:"/scenario-games",class:"nav__link"},{default:u((function(){return[g]})),_:1})]),Object(a["i"])("li",{class:"nav__item",onClick:n[5]||(n[5]=function(e){r.Active=!r.Active,c.$store.state.errorLogin=!1})},[Object(a["i"])(j,{to:"/pricing",class:"nav__link"},{default:u((function(){return[v]})),_:1})]),Object(a["i"])("li",{class:"nav__item",onClick:n[6]||(n[6]=function(e){r.Active=!r.Active,c.$store.state.errorLogin=!1})},[Object(a["i"])(j,{to:"/about-us",class:"nav__link"},{default:u((function(){return[_]})),_:1})])]),Object(a["i"])("div",{class:"nav__login",onClick:n[7]||(n[7]=function(e){return r.Active=!r.Active})},[Object(a["i"])(j,{to:"/login",class:"nav__btn-link"},{default:u((function(){return[k]})),_:1})]),O],2)])])})),w={data:function(){return{Active:!1}}};t("11d8");w.render=j,w.__scopeId="data-v-0dbbfd17";var A=w,y={components:{appNav:A}};t("06c4");y.render=r;var S=y,x=(t("4360"),[{path:"/",name:"Home",component:S,children:[{path:"/",component:function(){return t.e("about").then(t.bind(null,"0418"))}},{path:"/courses",component:function(){return t.e("about").then(t.bind(null,"61e5"))}},{path:"/pricing",component:function(){return t.e("about").then(t.bind(null,"8aff"))}},{path:"/scenario-games",component:function(){return t.e("about").then(t.bind(null,"46b9"))}},{path:"/about-us",component:function(){return t.e("about").then(t.bind(null,"2089"))}},{path:"/login",component:function(){return t.e("about").then(t.bind(null,"578a"))}},{path:"/registration",component:function(){return t.e("about").then(t.bind(null,"2f20"))}},{path:"/forgot",component:function(){return t.e("about").then(t.bind(null,"4b97"))}},{path:"/reset-password",component:function(){return t.e("about").then(t.bind(null,"dc8e"))}},{path:"/reset-email-sent",component:function(){return t.e("about").then(t.bind(null,"970b"))}},{path:"/confirm-reset",component:function(){return t.e("about").then(t.bind(null,"aa7c"))}}]},{path:"/user-page",name:"UserPage",component:function(){return t.e("about").then(t.bind(null,"2cbc"))},children:[{path:"/user-page",name:"UserHomePage",component:function(){return t.e("about").then(t.bind(null,"37fe"))}},{path:"/progress",name:"UserHome",component:function(){return t.e("about").then(t.bind(null,"73c7"))}},{path:"/exam-options",component:function(){return t.e("about").then(t.bind(null,"a4ba"))}},{path:"/confirm",name:"Confirm",component:function(){return t.e("about").then(t.bind(null,"3db0"))}},{path:"/confirm-timed",name:"ConfirmTimed",component:function(){return t.e("about").then(t.bind(null,"bab8"))}},{path:"/confirm-ecg",name:"ConfirmEcg",component:function(){return t.e("about").then(t.bind(null,"2237"))}},{path:"/confirm-challenge",name:"ConfirmChallenge",component:function(){return t.e("about").then(t.bind(null,"c830"))}},{path:"/continue-exam",name:"ContinueExam",component:function(){return t.e("about").then(t.bind(null,"51cc"))}},{path:"/first-time-error",name:"InitialBillingError",component:function(){return t.e("about").then(t.bind(null,"61cc"))}},{path:"/feedback",name:"Form",component:function(){return t.e("about").then(t.bind(null,"40b0"))}}]},{path:"/remac-exam",name:"RemacExam",component:function(){return t.e("about").then(t.bind(null,"edae"))},children:[{path:"/remac-exam",name:"RemacExamHone",component:function(){return t.e("about").then(t.bind(null,"4a9c"))}},{path:"/score",name:"score",component:function(){return t.e("about").then(t.bind(null,"fcd1"))}},{path:"/review",name:"Review",component:function(){return t.e("about").then(t.bind(null,"3c53"))}}]},{path:"/sample-scenario",name:"Sample",component:function(){return t.e("about").then(t.bind(null,"fe67"))}}]),E=Object(o["a"])({history:Object(o["b"])(""),routes:x});n["a"]=E},d1ea:function(e,n,t){},d3db:function(e,n,t){},eacc:function(e,n,t){"use strict";var o=t("bc3a"),a=t.n(o),r=(t("4360"),a.a.create({baseURL:"https://first-responder-front-end.herokuapp.com"}));n["a"]=r},eff2:function(e,n,t){"use strict";t("d1ea")},f19b:function(e,n,t){e.exports=t.p+"img/logo-final.ce6b5667.png"},f370:function(e,n,t){}});
//# sourceMappingURL=app.4a860a29.js.map