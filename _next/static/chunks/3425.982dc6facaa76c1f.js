(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3425],{3425:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var t=r(85893),i=r(14945),s=r(96750),l=r(93967),a=r.n(l),c=r(74512),o=r.n(c),d=function(e){let{product:n,inline:r,children:i,className:l}=e,{name:c,slug:d,themeClass:p}=(0,s.ZP)(n);return(0,t.jsxs)(r?"span":"div",{className:a()(o().root,p,l,{[o().themed]:p,[o().inline]:r}),children:[(0,t.jsx)("span",{className:o().tag,children:"Enterprise"}),!r&&(0,t.jsx)("p",{className:o().text,children:i||(0,t.jsxs)(t.Fragment,{children:["This feature requires"," ",(0,t.jsx)("a",{href:"https://www.hashicorp.com/products/".concat(d),target:"_blank",rel:"noopener noreferrer",children:(0,t.jsxs)("strong",{children:[c," Enterprise"]})}),"."]})})]})},p=r(49423);function h(e){let{keys:n,topLevel:r=!0}=e,s=r?function(e){let n=e.filter(e=>f(e.name)),r=e.filter(e=>!f(e.name));return n.concat([{name:"spec",children:r}])}(n):n;return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(i.O,{heading:"HCL",group:"hcl",children:u(n,!0)}),(0,t.jsx)(i.O,{heading:"Kubernetes YAML",group:"yaml",children:u(s,!1)})]})}function u(e,n){return e?(0,t.jsx)("ul",{children:e.map(e=>(function(e,n){if(!e.name||n&&!1===e.hcl||!n&&!1===e.yaml)return null;let r=n?e.name:function(e){if(e.toUpperCase()===e)return e.toLowerCase();let n=e.split("").findIndex(e=>e===e.toLowerCase());n>1&&n--;let r="";for(let t=0;t<n;t++)r+=e[t].toLowerCase();return r+e.split("").slice(n).join("")}(e.name),i="";e.description&&("string"==typeof e.description?i=e.description:!n&&e.description.yaml?i=e.description.yaml:e.description.hcl&&(i=e.description.hcl));let s=i&&function(e){let n=e;for(;n.indexOf("`")>0;){if(0>=(n=n.replace("`","<code>")).indexOf("`"))throw Error("'".concat(e," does not have matching '`' characters"));n=n.replace("`","</code>")}return n.replace(/\[(.*?)]\((.*?)\)/g,'<a href="$2">$1</a>')}(" - "+i),l=e.type&&(0,t.jsx)("code",{children:"(".concat(e.type,")")}),a=e.enterprise&&(0,t.jsx)(_,{inline:!0}),c=r.toLowerCase();return(0,t.jsxs)(p.l2,{children:[(0,t.jsx)("a",{id:c,className:"__target-lic","aria-hidden":""}),(0,t.jsxs)("p",{children:[(0,t.jsx)("a",{href:"#"+c,"aria-label":c+" permalink",className:"__permalink-lic",children:(0,t.jsx)("code",{children:r})})," ",l,a,(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:s}})]}),u(e.children,n)]},c)})(e,n))}):null}function f(e){return"metadata"===e.toLowerCase()||"kind"===e.toLowerCase()||"apiversion"===e.toLowerCase()}function _(e){return(0,t.jsx)(d,{product:"consul",...e})}},74512:function(e){e.exports={root:"style_root__dWPl_",inline:"style_inline__FVfWe",themed:"style_themed__GZmI_",text:"style_text__O2Ov_ g-type-body",tag:"style_tag__TNsZl g-type-tag-label"}}}]);