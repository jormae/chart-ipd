(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{2302:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-chart",function(){return t(7450)}])},7450:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var r=t(8520),c=t.n(r),a=t(5893),o=t(7294),s=t(9072),i=t(500),l=t(5499),u=t(9837),h=t(5084),d=t(4373),f=t(9742),g=t(1359),x=t(6388),Z=t.n(x),p=t(244),j=t(9417),m=t(3978),v=t(9807),w=t(7272),N=t(6777),P=t(918),y=t(3025),_=t(381),b=t.n(_),k=t(6501);function E(e,n,t,r,c,a,o){try{var s=e[a](o),i=s.value}catch(l){return void t(l)}s.done?n(i):Promise.resolve(i).then(r,c)}function S(e){return function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function o(e){E(a,r,c,o,s,"next",e)}function s(e){E(a,r,c,o,s,"throw",e)}o(void 0)}))}}var T=function(){b().locale("th");b()().add(543,"year").format("L");var e=localStorage.getItem("staffName"),n=(0,o.useState)({blogs:[]}),t=n[0],r=n[1],s=S(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.Z.baseURL+"/chart/all-chart",e.prev=1,e.next=4,Z().get(n);case 4:t=e.sent.data,r({blogs:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));(0,o.useEffect)((function(){s()}),[r]);S(c().mark((function n(t,r){var a,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(t),console.log(r);try{a={staffName:e,insertedAt:r},o=y.Z.baseURL+"/chart/summary-chart/".concat(t,"/").concat(r),Z().put(o,a).then((function(e){console.log(e.data),"success"==e.data.status?(k.ZP.success(e.data.message),s()):k.ZP.error(e.data.errors[0].msg)})).catch((function(e){e.response?console.log(e):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}catch(c){console.log(c)}case 3:case"end":return n.stop()}}),n)})));return(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(k.x7,{}),(0,a.jsx)(f.Z,{title:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e0a\u0e32\u0e23\u0e4c\u0e15",titleTypographyProps:{variant:"h6"}}),(0,a.jsx)(d.Z,{sx:{margin:0}}),(0,a.jsx)(g.Z,{children:(0,a.jsx)(N.Z,{component:P.Z,children:(0,a.jsxs)(p.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,a.jsx)(m.Z,{children:(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(w.Z,{align:"center",children:"AN"}),(0,a.jsx)(w.Z,{align:"center",children:"\u0e0a\u0e37\u0e48\u0e2d-\u0e2a\u0e01\u0e38\u0e25"}),(0,a.jsx)(w.Z,{align:"center",children:"\u0e2b\u0e2d\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22"}),(0,a.jsx)(w.Z,{align:"center",children:"\u0e2a\u0e16\u0e32\u0e19\u0e30"}),(0,a.jsx)(w.Z,{align:"center",children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22"}),(0,a.jsx)(w.Z,{align:"center",children:"\u0e2a\u0e32\u0e40\u0e2b\u0e15\u0e38\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22"}),(0,a.jsx)(w.Z,{align:"center",children:"\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e23\u0e35\u0e40\u0e1f\u0e2d\u0e23\u0e4c"}),(0,a.jsx)(w.Z,{align:"center",children:"\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32"}),(0,a.jsx)(w.Z,{align:"center",children:"Action"})]})}),(0,a.jsx)(v.Z,{children:t.blogs.map((function(e){return(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(w.Z,{component:"th",scope:"row",children:e.an}),(0,a.jsx)(w.Z,{align:"left",children:e.ptName}),(0,a.jsx)(w.Z,{align:"left",children:e.wardName}),(0,a.jsx)(w.Z,{align:"left",children:e.dischargeStatusName}),(0,a.jsx)(w.Z,{align:"center",children:e.dischargeDate}),(0,a.jsx)(w.Z,{align:"left",children:e.dischargeTypeName}),(0,a.jsx)(w.Z,{align:"left",children:e.referHospitalName}),(0,a.jsx)(w.Z,{align:"left",children:e.pttypeName}),(0,a.jsx)(w.Z,{align:"center",children:(0,a.jsx)(h.Z,{variant:"outlined",href:"/all-chart/".concat(e.an),children:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14"})})]},e.an)}))})]})})})]})};function A(e,n,t,r,c,a,o){try{var s=e[a](o),i=s.value}catch(l){return void t(l)}s.done?n(i):Promise.resolve(i).then(r,c)}var I=function(){var e,n=(e=c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem("token"),t=y.Z.baseURL+"/auth/token",fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}}).then((function(e){return e.json()})).then((function(e){console.log(e),"success"!==e.status&&(localStorage.removeItem("token"),localStorage.removeItem("staffName"),window.location="/pages/login",console.log(e))})).catch((function(e){console.error("Error:",e)}));case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function o(e){A(a,r,c,o,s,"next",e)}function s(e){A(a,r,c,o,s,"throw",e)}o(void 0)}))});return(0,o.useEffect)((function(){n()}),[]),(0,a.jsx)(i.Z,{children:(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsx)(l.Z,{})}),(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsx)(T,{})})]})})}}},function(e){e.O(0,[885,395,524,714,669,763,715,774,888,179],(function(){return n=2302,e(e.s=n);var n}));var n=e.O();_N_E=n}]);