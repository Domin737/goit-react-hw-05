"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[862],{862:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e,c,o=r(439),u=r(791),a=r(87),i=r(41),s=r(168),f=r(867),p=f.ZP.div(e||(e=(0,s.Z)(["\n  padding: 20px;\n  background-color: #f0f0f0;\n\n  h1 {\n    margin-bottom: 20px;\n  }\n"]))),h=f.ZP.li(c||(c=(0,s.Z)(["\n  list-style: none;\n  margin-bottom: 10px;\n\n  a {\n    text-decoration: none;\n    color: #007bff;\n    font-size: 1.1rem;\n    transition: color 0.3s;\n\n    &:hover {\n      color: #0056b3;\n    }\n  }\n"]))),v=r(184),d=function(){var n=(0,u.useState)([]),t=(0,o.Z)(n,2),r=t[0],e=t[1];return(0,u.useEffect)((function(){(0,i.wr)().then((function(n){return e(n.results)}))}),[]),(0,v.jsxs)(p,{children:[(0,v.jsx)("h1",{children:"Trending Movies"}),(0,v.jsx)("ul",{children:r.map((function(n){return(0,v.jsx)(h,{children:(0,v.jsx)(a.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},41:function(n,t,r){function e(n,t,r,e,c,o,u){try{var a=n[o](u),i=a.value}catch(s){return void r(s)}a.done?t(i):Promise.resolve(i).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,o){var u=n.apply(t,r);function a(n){e(u,c,o,a,i,"next",n)}function i(n){e(u,c,o,a,i,"throw",n)}a(void 0)}))}}r.d(t,{xc:function(){return h},Y5:function(){return p},Hx:function(){return v},wr:function(){return s},z1:function(){return f}});var o=r(757),u=r.n(o),a="1efe92e76ecf8940ef24fa2a53d5512a",i="https://api.themoviedb.org/3",s=function(){var n=c(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/trending/movie/day?api_key=").concat(a));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(a,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(a));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(a));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(a));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=862.e9585cdd.chunk.js.map