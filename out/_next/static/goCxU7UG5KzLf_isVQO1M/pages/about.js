(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Juyh:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),u=n.n(r),a=n("O40h"),s=n("0iUn"),o=n("sLSF"),i=n("MI3g"),c=n("a7VT"),l=n("Tit0"),f=(n("YFqc"),n("5Yp1")),d=n("zgjP"),p=n.n(d),h=n("q1tI"),w=n.n(h),m=n("Y0NT"),v=function(e){function t(){return Object(s.default)(this,t),Object(i.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.statusCode;return n?w.a.createElement(m.default,{statusCode:n}):w.a.createElement(f.a,{title:"About"},w.a.createElement("p",null,t.name),w.a.createElement("p",null,"A Javascript programmer"),w.a.createElement("img",{src:t.avatar_url,alt:"Lamar",height:"200px"}))}}],[{key:"getInitialProps",value:function(){var e=Object(a.default)(u.a.mark(function e(){var t,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://api.github.com/users/DonCream");case 2:return t=e.sent,n=t.status>200&&t.status,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",{user:r,statusCode:n});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(h.Component);t.default=v},"W/7i":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var u=new XMLHttpRequest;for(var a in u.open(t.method||"get",e,!0),t.headers)u.setRequestHeader(a,t.headers[a]);function s(){var e,t=[],n=[],r={};return u.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(u,a,s){t.push(a=a.toLowerCase()),n.push([a,s]),r[a]=(e=r[a])?e+","+s:s}),{ok:2==(u.status/100|0),status:u.status,statusText:u.statusText,url:u.responseURL,clone:s,text:function(){return Promise.resolve(u.responseText)},json:function(){return Promise.resolve(u.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([u.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}u.withCredentials="include"==t.credentials,u.onload=function(){n(s())},u.onerror=r,u.send(t.body||null)})}},Y0NT:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),u=n.n(r),a=n("5Yp1");t.default=function(e){var t=e.statusCode;return u.a.createElement(a.a,{title:"Error!!!"},t?"Could not load your user data: Status Code ".concat(t):"Couldnt get that page, sorry!")}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){var e=n("Juyh");return{page:e.default||e}}])},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("W/7i").default||n("W/7i"))}},[["rB5V",1,0]]]);