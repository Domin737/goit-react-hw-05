"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[862],{862:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e,c,a=r(439),u=r(791),o=r(87),i=r(390),s=r(168),f=r(867),p=f.ZP.div(e||(e=(0,s.Z)(["\n  padding: 20px;\n  background-color: #f0f0f0;\n\n  h1 {\n    margin-bottom: 20px;\n  }\n"]))),h=f.ZP.li(c||(c=(0,s.Z)(["\n  list-style: none;\n  margin-bottom: 10px;\n"]))),v=r(184),d=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),r=t[0],e=t[1];return(0,u.useEffect)((function(){(0,i.wr)().then((function(n){return e(n.results)}))}),[]),(0,v.jsxs)(p,{children:[(0,v.jsx)("h1",{children:"Trending Movies"}),(0,v.jsx)("ul",{children:r.map((function(n){return(0,v.jsx)(h,{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},390:function(n,t,r){r.d(t,{Hx:function(){return h},Y5:function(){return f},wr:function(){return i},xc:function(){return p},z1:function(){return s}});var e=r(861),c=r(757),a=r.n(c),u="1efe92e76ecf8940ef24fa2a53d5512a",o="https://api.themoviedb.org/3",i=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=862.855f3a91.chunk.js.map