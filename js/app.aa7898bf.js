(function(e){function t(t){for(var n,u,o=t[0],s=t[1],i=t[2],f=0,d=[];f<o.length;f++)u=o[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var o=r[u];0!==a[o]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},u={app:0},a={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-af55e7fe":"2929db00","chunk-172b8b9e":"ed76b2dd","chunk-175e6a03":"6fa1e4f1","chunk-2f9bb104":"741567dd","chunk-6b1946c8":"4a79adde","chunk-cecda810":"b74abd52","chunk-dcf02684":"d930da4c","chunk-04102ca7":"762abffe"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-af55e7fe":1,"chunk-172b8b9e":1,"chunk-175e6a03":1,"chunk-2f9bb104":1,"chunk-6b1946c8":1,"chunk-cecda810":1,"chunk-dcf02684":1,"chunk-04102ca7":1};u[e]?t.push(u[e]):0!==u[e]&&r[e]&&t.push(u[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-af55e7fe":"775412d2","chunk-172b8b9e":"d45923b2","chunk-175e6a03":"601398f8","chunk-2f9bb104":"050cf360","chunk-6b1946c8":"22038b5a","chunk-cecda810":"94042ab9","chunk-dcf02684":"1429aeef","chunk-04102ca7":"8fc50172"}[e]+".css",a=s.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===n||f===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],f=i.getAttribute("data-href");if(f===n||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete u[e],l.parentNode.removeChild(l),r(c)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){u[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=o(e);var d=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",d.name="ChunkLoadError",d.type=n,d.request=u,r[1](d)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/renewable-vue/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=f;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Users")],1)},a=[],c=(r("d3b7"),function(){return r.e("chunk-af55e7fe").then(r.bind(null,"3518"))}),o={components:{Users:c}},s=o,i=r("2877"),f=Object(i["a"])(s,u,a,!1,null,null,null),d=f.exports,l=r("2f62"),p=function(){return{usersList:[],formTitles:[],searchQuery:"",userName:"",userAddedRemoved:""}},h=(r("96cf"),r("1da1")),m=r("bc3a"),b=r.n(m),v=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=v,w={getUsers:function(e){return Object(h["a"])(regeneratorRuntime.mark((function t(){var r,n,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n="https://renewable.exchange/test/users.json",t.prev=2,t.next=5,g(n);case 5:u=t.sent,r("GET_USERS",u),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](2),new Error("".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()},removeUser:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,n("REMOVE_USER",t);case 3:case"end":return r.stop()}}),r)})))()},addUser:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,n("ADD_USER",t);case 3:case"end":return r.stop()}}),r)})))()},sortBy:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,n("SORT_BY",t);case 3:case"end":return r.stop()}}),r)})))()},searchFilter:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,n("SEARCH_FILTER",t);case 3:case"end":return r.stop()}}),r)})))()},userName:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,n("USER_NOTIFICATION",t);case 3:case"end":return r.stop()}}),r)})))()}},k=(r("99af"),r("4de4"),r("fb6a"),r("b0c0"),r("ac1f"),r("1276"),{GET_USERS:function(e,t){e.usersList=t,e.formTitles=t.slice(0,1)},REMOVE_USER:function(e,t){e.usersList=e.usersList.filter((function(e){return e.name!==t.name}))},ADD_USER:function(e,t){e.usersList=e.usersList.concat(t)},SORT_BY:function(e,t){e.usersList=e.usersList.sort((function(e,r){return t.order?e[t.sort].toLowerCase().split(" ")<r[t.sort].toLowerCase().split(" ")?-1:1:e[t.sort].toLowerCase().split(" ")>r[t.sort].toLowerCase().split(" ")?-1:1}))},SEARCH_FILTER:function(e,t){e.searchQuery=t},USER_NOTIFICATION:function(e,t){e.userName=t.name,e.userAddedRemoved=t.notification,setTimeout((function(){e.userName="",e.userAddedRemoved=""}),3e3)}}),R={namespaced:!0,state:p,actions:w,mutations:k};n["a"].use(l["a"]);var y=new l["a"].Store({modules:{users:R}});r("c2b1");n["a"].config.productionTip=!1,new n["a"]({store:y,render:function(e){return e(d)}}).$mount("#app")},c2b1:function(e,t,r){}});
//# sourceMappingURL=app.aa7898bf.js.map