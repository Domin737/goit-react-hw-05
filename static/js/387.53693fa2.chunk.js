"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,r,t){t.r(r),t.d(r,{default:function(){return x}});var e,a,c,i=t(439),u=t(791),o=t(689),s=t(390),p=t(168),f=t(867),d=f.ZP.div(e||(e=(0,p.Z)(["\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n"]))),h=f.ZP.div(a||(a=(0,p.Z)(["\n  border-bottom: 1px solid #ddd;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n\n  h3 {\n    margin: 0;\n    font-size: 1.2rem;\n    color: #333;\n  }\n\n  p {\n    margin: 5px 0 0;\n    color: #666;\n  }\n\n  img {\n    width: 50px;\n    height: 75px;\n    object-fit: cover;\n    margin-right: 15px;\n    border-radius: 5px;\n  }\n"]))),l=f.ZP.p(c||(c=(0,p.Z)(["\n  font-size: 1.1rem;\n  color: #666;\n"]))),m=t(184),x=function(){var n=(0,o.UO)().movieId,r=(0,u.useState)([]),t=(0,i.Z)(r,2),e=t[0],a=t[1];return(0,u.useEffect)((function(){(0,s.xc)(n).then((function(n){return a(n)}))}),[n]),(0,m.jsxs)(d,{children:[(0,m.jsx)("h2",{children:"Cast"}),e.length>0?e.map((function(n){return(0,m.jsxs)(h,{children:[(0,m.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w200".concat(n.profile_path):"https://via.placeholder.com/50x75",alt:n.name}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:n.name}),(0,m.jsxs)("p",{children:["as ",n.character]})]})]},n.cast_id)})):(0,m.jsx)(l,{children:"No cast information available for this movie."})]})}},390:function(n,r,t){t.d(r,{Hx:function(){return f},Y5:function(){return s},wr:function(){return u},xc:function(){return p},z1:function(){return o}});var e=t(861),a=t(757),c=t.n(a),i=t(759).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"1efe92e76ecf8940ef24fa2a53d5512a"}}),u=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/trending/movie/day");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/search/movie",{params:{query:r}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.53693fa2.chunk.js.map