"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{375:function(n,r,e){e.r(r),e.d(r,{default:function(){return Y}});var t,o,c,i,a,s,u,p,d,f,h,x=e(439),l=e(791),v=e(689),m=e(41),b=e(168),g=e(867),w=e(87),j=g.ZP.div(t||(t=(0,b.Z)(["\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n"]))),k=g.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n"]))),Z=g.ZP.img(c||(c=(0,b.Z)(["\n  width: 300px;\n  border-radius: 10px;\n  margin-right: 20px;\n"]))),y=(0,g.ZP)(w.rU)(i||(i=(0,b.Z)(["\n  display: inline-block;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),P=g.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),_=g.ZP.h1(s||(s=(0,b.Z)(["\n  font-size: 2rem;\n  margin-bottom: 10px;\n"]))),U=g.ZP.div(u||(u=(0,b.Z)(["\n  margin-bottom: 20px;\n"]))),z=g.ZP.p(p||(p=(0,b.Z)(["\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),C=g.ZP.div(d||(d=(0,b.Z)(["\n  margin-bottom: 10px;\n\n  h3 {\n    margin-bottom: 5px;\n  }\n"]))),G=g.ZP.div(f||(f=(0,b.Z)(["\n  margin-bottom: 10px;\n\n  h3 {\n    margin-bottom: 5px;\n  }\n"]))),O=(0,g.ZP)(w.rU)(h||(h=(0,b.Z)(["\n  display: inline-block;\n  margin-right: 10px;\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),S=e(184),Y=function(){var n=(0,v.UO)().movieId,r=(0,l.useState)(null),e=(0,x.Z)(r,2),t=e[0],o=e[1];return(0,l.useEffect)((function(){(0,m.Y5)(n).then(o)}),[n]),t?(0,S.jsxs)(j,{children:[(0,S.jsx)(y,{to:"/movies",children:"Go back"}),(0,S.jsxs)(k,{children:[(0,S.jsx)(Z,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,S.jsxs)(P,{children:[(0,S.jsx)(_,{children:t.title}),(0,S.jsxs)(U,{children:[(0,S.jsxs)(z,{children:["User Score: ",10*t.vote_average,"%"]}),(0,S.jsxs)(C,{children:[(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)("p",{children:t.overview})]}),(0,S.jsxs)(G,{children:[(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)("p",{children:t.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)(O,{to:"cast",children:"Cast"}),(0,S.jsx)(O,{to:"reviews",children:"Reviews"})]})]})]}),(0,S.jsx)(v.j3,{})]}):(0,S.jsx)("div",{children:"Loading..."})}},41:function(n,r,e){function t(n,r,e,t,o,c,i){try{var a=n[c](i),s=a.value}catch(u){return void e(u)}a.done?r(s):Promise.resolve(s).then(t,o)}function o(n){return function(){var r=this,e=arguments;return new Promise((function(o,c){var i=n.apply(r,e);function a(n){t(i,o,c,a,s,"next",n)}function s(n){t(i,o,c,a,s,"throw",n)}a(void 0)}))}}e.d(r,{xc:function(){return f},Y5:function(){return d},Hx:function(){return h},wr:function(){return u},z1:function(){return p}});var c=e(757),i=e.n(c),a="1efe92e76ecf8940ef24fa2a53d5512a",s="https://api.themoviedb.org/3",u=function(){var n=o(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/trending/movie/day?api_key=").concat(a));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=o(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(a,"&query=").concat(r));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=o(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(r,"?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=o(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=o(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=375.7c59199e.chunk.js.map