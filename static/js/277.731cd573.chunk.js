"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{618:function(n,r,t){t.d(r,{I1:function(){return v},Jh:function(){return h},V0:function(){return p},XT:function(){return s},Yp:function(){return f}});var e=t(861),a=t(757),c=t.n(a),u=t(44),o="api_key=3ad61d03a4fee35a02b0181321c49002",i=u.ZP.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var n=(0,e.Z)(c().mark((function n(){var r,t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("".concat("/trending/movie/day?").concat(o));case 2:return r=n.sent,t=r.data,e=t.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"?").concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/search/movie?query=".concat(r,"&").concat(o));case 2:return t=n.sent,e=t.data,a=e.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"/credits?").concat(o));case 2:return t=n.sent,e=t.data,a=e.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(r,"/reviews?").concat(o,"&page=1"));case 2:return t=n.sent,e=t.data,a=e.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},277:function(n,r,t){t.r(r),t.d(r,{default:function(){return v}});var e=t(413),a=t(861),c=t(885),u=t(757),o=t.n(u),i=t(689),s=t(791),f=t(618),p=t(184);function v(){var n=(0,s.useState)({item:[],loading:!1,error:null}),r=(0,c.Z)(n,2),t=r[0],u=r[1],v=(0,i.UO)().id;(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u((0,e.Z)((0,e.Z)({},t),{},{loading:!0})),n.prev=1,n.next=4,(0,f.Jh)(v);case 4:r=n.sent,console.log(r),u((function(n){return(0,e.Z)((0,e.Z)({},n),{},{item:r})})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),u((0,e.Z)((0,e.Z)({},t),{},{error:n.t0}));case 12:return n.prev=12,u((function(n){return(0,e.Z)((0,e.Z)({},n),{},{loading:!1})})),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[v]);var h=t.item;return console.log(h),(0,p.jsx)(p.Fragment,{children:h&&h.length>0?(0,p.jsx)("ul",{children:h.map((function(n){var r=n.id,t=n.author,e=n.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:t}),(0,p.jsx)("p",{children:e})]},r)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=277.731cd573.chunk.js.map