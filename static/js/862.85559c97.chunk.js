"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[862],{862:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,c,u=e(439),o=e(791),a=e(87),i=e(390),s=e(168),f=e(867),p=f.ZP.div(r||(r=(0,s.Z)(["\n  padding: 20px;\n  background-color: #f0f0f0;\n\n  h1 {\n    margin-bottom: 20px;\n  }\n"]))),h=f.ZP.li(c||(c=(0,s.Z)(["\n  list-style: none;\n  margin-bottom: 10px;\n\n  a {\n    text-decoration: none;\n    color: #007bff;\n    font-size: 1.1rem;\n    transition: color 0.3s;\n\n    &:hover {\n      color: #0056b3;\n    }\n  }\n"]))),v=e(184),l=function(){var n=(0,o.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1];return(0,o.useEffect)((function(){(0,i.wr)().then((function(n){return r(n.results)}))}),[]),(0,v.jsxs)(p,{children:[(0,v.jsx)("h1",{children:"Trending Movies"}),(0,v.jsx)("ul",{children:e.map((function(n){return(0,v.jsx)(h,{children:(0,v.jsx)(a.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},390:function(n,t,e){e.d(t,{Hx:function(){return h},Y5:function(){return f},wr:function(){return i},xc:function(){return p},z1:function(){return s}});var r=e(861),c=e(757),u=e.n(c),o="1efe92e76ecf8940ef24fa2a53d5512a",a="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,e){function r(n,t,e,r,c,u,o){try{var a=n[u](o),i=a.value}catch(s){return void e(s)}a.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var o=n.apply(t,e);function a(n){r(o,c,u,a,i,"next",n)}function i(n){r(o,c,u,a,i,"throw",n)}a(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=862.85559c97.chunk.js.map