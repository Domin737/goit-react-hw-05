"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(n,r,e){e.r(r),e.d(r,{default:function(){return l}});var t,a,u,c=e(439),o=e(791),i=e(689),s=e(390),p=e(168),f=e(867),d=f.ZP.div(t||(t=(0,p.Z)(["\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n"]))),h=f.ZP.div(a||(a=(0,p.Z)(["\n  border-bottom: 1px solid #ddd;\n  padding: 10px 0;\n\n  h3 {\n    margin: 0;\n    font-size: 1.2rem;\n    color: #333;\n  }\n\n  p {\n    margin: 5px 0 0;\n    color: #666;\n  }\n"]))),v=f.ZP.p(u||(u=(0,p.Z)(["\n  font-size: 1.1rem;\n  color: #666;\n"]))),x=e(184),l=function(){var n=(0,i.UO)().movieId,r=(0,o.useState)([]),e=(0,c.Z)(r,2),t=e[0],a=e[1];return(0,o.useEffect)((function(){(0,s.Hx)(n).then((function(n){return a(n)}))}),[n]),(0,x.jsxs)(d,{children:[(0,x.jsx)("h2",{children:"Reviews"}),t.length>0?t.map((function(n){return(0,x.jsxs)(h,{children:[(0,x.jsx)("h3",{children:n.author}),(0,x.jsx)("p",{children:n.content})]},n.id)})):(0,x.jsx)(v,{children:"No reviews available for this movie."})]})}},390:function(n,r,e){e.d(r,{Hx:function(){return f},Y5:function(){return s},wr:function(){return o},xc:function(){return p},z1:function(){return i}});var t=e(861),a=e(757),u=e.n(a),c=e(759).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"1efe92e76ecf8940ef24fa2a53d5512a"}}),o=function(){var n=(0,t.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:r}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.b51ded79.chunk.js.map