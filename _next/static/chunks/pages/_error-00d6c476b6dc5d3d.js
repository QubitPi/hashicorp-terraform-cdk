(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4820],{37281:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return t(42018)}])},62166:function(e,n,t){"use strict";var s=t(85893),i=t(58866),r=t(96581),o=t(82259),u=t(78789),d=t.n(u);n.Z=function(){return(0,s.jsxs)(r.Z,{className:d().mobileMenuContainer,children:[(0,s.jsx)(r.v,{}),(0,s.jsxs)("ul",{className:d().mobileMenuNavList,children:[(0,s.jsx)(o.Rd,{item:{heading:"Main Menu"}}),(0,i.A)().map((e,n)=>(0,s.jsx)(o.Rd,{item:e},n))]})]})}},42018:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return v},default:function(){return _}});var s=t(85893),i=t(55227),r=t(62166),o=t(67294),u=t(11163),d=t(29663);let l=RegExp("\\/(?<version>v\\d+([.]|_)\\d+([.]|_)(\\d+|x))"),a=RegExp("\\/(?<version>v[0-9]{6}-\\d+)");var c=function(e){var n;let{statusCode:t}=e,{asPath:i}=(0,u.useRouter)(),[r,c]=(0,o.useState)(!1);(0,o.useEffect)(()=>{c(!0)},[]);let v=l.exec(i)||a.exec(i),_=null==v?void 0:null===(n=v.groups)||void 0===n?void 0:n.version,f=i.replace(l,""),x=i.substring(0,i.indexOf(_)),m=404==t;switch(_&&m?"dev-dot-versioned-404":m?"dev-dot-standard-404":"dev-dot-fallback"){case"dev-dot-versioned-404":return(0,s.jsx)(d.ll,{pathBeforeVersion:x,pathWithoutVersion:f,version:_},String(r));case"dev-dot-standard-404":return(0,s.jsx)(d.B_,{});case"dev-dot-fallback":return(0,s.jsx)(d.uJ,{statusCode:t})}},v=!0,_=function(e){let{statusCode:n}=e;return(0,s.jsx)(e=>(0,s.jsx)(i.Z,{...e,mobileMenuSlot:(0,s.jsx)(r.Z,{})}),{children:(0,s.jsx)(c,{statusCode:n})})}},78789:function(e){e.exports={mobileMenuContainer:"mobile-menu-levels-generic_mobileMenuContainer__yvFk4",mobileMenuNavList:"mobile-menu-levels-generic_mobileMenuNavList__ZySxX"}}},function(e){e.O(0,[3262,62,9774,2888,179],function(){return e(e.s=37281)}),_N_E=e.O()}]);