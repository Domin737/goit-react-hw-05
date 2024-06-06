"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[313],{313:function(n,r,e){e.r(r),e.d(r,{default:function(){return z}});var t,a,u,c,o,i,s,p=e(861),f=e(439),d=e(757),x=e.n(d),l=e(791),h=e(168),v=e(867),m=v.ZP.div(t||(t=(0,h.Z)(["\n  padding: 20px;\n"]))),Z=v.ZP.form(a||(a=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),b=v.ZP.input(u||(u=(0,h.Z)(["\n  width: 300px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-right: 10px;\n  font-size: 16px;\n"]))),g=v.ZP.button(c||(c=(0,h.Z)(["\n  padding: 10px 20px;\n  background-color: #1e90ff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  &:hover {\n    background-color: #1c86ee;\n  }\n"]))),w=v.ZP.ul(o||(o=(0,h.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),k=v.ZP.li(i||(i=(0,h.Z)(["\n  margin-bottom: 10px;\n"]))),y=v.ZP.a(s||(s=(0,h.Z)(["\n  text-decoration: none;\n  color: #1e90ff;\n  font-size: 18px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),j=e(87),P=e(390),S=e(184),z=function(){var n=(0,l.useState)(""),r=(0,f.Z)(n,2),e=r[0],t=r[1],a=(0,l.useState)([]),u=(0,f.Z)(a,2),c=u[0],o=u[1],i=function(){var n=(0,p.Z)(x().mark((function n(r){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),""!==e.trim()){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,P.z1)(e);case 5:t=n.sent,o(t);case 7:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}();return(0,S.jsxs)(m,{children:[(0,S.jsx)("h2",{children:"Search Movies"}),(0,S.jsxs)(Z,{onSubmit:i,children:[(0,S.jsx)(b,{type:"text",value:e,onChange:function(n){t(n.target.value)},placeholder:"Search for movies..."}),(0,S.jsx)(g,{type:"submit",children:"Search"})]}),(0,S.jsx)(w,{children:c.map((function(n){return(0,S.jsx)(k,{children:(0,S.jsx)(y,{as:j.rU,to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},390:function(n,r,e){e.d(r,{Hx:function(){return f},Y5:function(){return s},wr:function(){return o},xc:function(){return p},z1:function(){return i}});var t=e(861),a=e(757),u=e.n(a),c=e(759).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"1efe92e76ecf8940ef24fa2a53d5512a"}}),o=function(){var n=(0,t.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:r}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=313.1ec191bb.chunk.js.map