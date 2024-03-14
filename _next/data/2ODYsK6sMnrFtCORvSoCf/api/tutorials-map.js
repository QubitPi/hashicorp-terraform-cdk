"use strict";(()=>{var t={};t.id=3611,t.ids=[3611],t.modules={33666:t=>{t.exports=require("@vercel/fetch")},48010:t=>{t.exports=require("http-status-codes")},20145:t=>{t.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9926:t=>{t.exports=import("zod")},71017:t=>{t.exports=require("path")},56249:(t,e)=>{Object.defineProperty(e,"l",{enumerable:!0,get:function(){return function t(e,r){return r in e?e[r]:"then"in e&&"function"==typeof e.then?e.then(e=>t(e,r)):"function"==typeof e&&"default"===r?e:void 0}}})},48363:(t,e,r)=>{r.a(t,async(t,n)=>{try{r.r(e),r.d(e,{config:()=>l,default:()=>c,routeModule:()=>d});var a=r(71802),o=r(47153),i=r(56249),u=r(49003),s=t([u]);u=(s.then?(await s)():s)[0];let c=(0,i.l)(u,"default"),l=(0,i.l)(u,"config"),d=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/tutorials-map",pathname:"/api/tutorials-map",bundlePath:"",filename:""},userland:u});n()}catch(t){n(t)}})},97946:(t,e,r)=>{r.a(t,async(t,e)=>{try{r(71017);var n=r(29515);r(60982);var a=r(34888),o=t([n,a]);[n,a]=o.then?(await o)():o,e()}catch(t){e(t)}})},58922:(t,e,r)=>{function n(t){let{id:e,slug:r,name:n,short_name:o,description:i,icon:s,theme:c,ordered:l,level:d,category:f,tutorials:p,next_collection:m}=t;return{id:e,slug:r,name:n,shortName:o,description:i,icon:s,theme:c,ordered:l,level:d,category:f||void 0,tutorials:p.map(a),nextCollection:m?u(m):void 0}}function a(t){let{id:e,name:r,short_name:n,slug:a,description:i,read_time:d,edition:f,products_used:p,default_collection:m}=t.tutorial,h=p.map(o),g=s(t.tutorial),v=c(t.tutorial),y=t.tutorial.variants?.length>0?l(t.tutorial.variants[0]):void 0;return{id:e,name:r,shortName:n||r,slug:a,description:i,readTime:d,edition:f,productsUsed:h,video:g,handsOnLab:v,defaultContext:u(m),variant:y}}function o(t){let{product:e,tutorial_id:r,is_primary:n,is_beta:a,min_version:o,max_version:i}=t,{id:u,slug:s,name:c,docs_url:l,description:d}=e;return{product:{id:u,slug:s,name:c,docsUrl:l,description:d},tutorial:r,isPrimary:n,isBeta:a,minVersion:o||void 0,maxVersion:i||void 0}}function i(t){let{id:e,slug:r,name:a,short_name:i,description:d,content:f,default_collection_id:p,featured_collections:m,read_time:h,edition:g,products_used:v,variants:y}=t,w=v.map(o),P=s(t),b=c(t);return{id:e,slug:r,name:a,shortName:i||a,description:d,content:f,collectionCtx:function(t,e){let r;let a=t.find(({id:t})=>t===e);return r="tutorials"in t[0]?t.map(n):t.map(u),{default:u(a),featuredIn:r}}(m,p),productsUsed:w,readTime:h,video:P,handsOnLab:b,edition:g,variant:y?.length>0?l(y[0]):void 0}}function u(t){let{id:e,name:r,slug:n,short_name:a,level:o,theme:i}=t;return{id:e,name:r,slug:n,shortName:a,level:o,theme:i}}function s({video_id:t,video_host:e,video_inline:r}){let n;return t&&(n={id:t,videoHost:e,videoInline:r}),n}function c({hands_on_lab_id:t,hands_on_lab_provider:e}){let r;return t&&(r={id:t,provider:e}),r}function l(t){let{options:e,...r}=t;return{...r,options:e.map(({display_order:t,...e})=>({displayOrder:t,...e}))}}r.d(e,{Lf:()=>c,je:()=>u,ri:()=>i,yf:()=>l,Oz:()=>s})},34888:(t,e,r)=>{r.a(t,async(t,n)=>{try{r.d(e,{BL:()=>s}),r(71017),r(60982);var a=r(29515),o=r(58922),i=r(97946),u=t([a,i]);async function s(t){let e=[],r=t?.limit?.toString(),n=await (0,a.Qd)({baseUrl:"/tutorials",recurse:!r,limit:r,fullContent:t?.fullContent});return t?.slugsOnly?n.map(({slug:t,default_collection:e})=>({slug:t,collection_slug:e.slug})):n.map(o.ri)}[a,i]=u.then?(await u)():u,n()}catch(t){n(t)}})},3586:(t,e,r)=>{r.d(e,{Q:()=>i});var n=r(71017),a=r.n(n),o=r(60982);async function i({baseUrl:t,recurse:e=!0,limit:r="100",fullContent:n=!1,after:a,fetchedTutorials:o}){void 0===o&&(o=[]);let s=await u(t,r,a,n);if(s.ok){let a=await s.json(),u=[...o,...a.result];return!e||a.result.length<Number("100")?u:i({baseUrl:t,recurse:!0,limit:r,after:a.result[a.result.length-1].id,fetchedTutorials:u,fullContent:n})}}async function u(t,e,r,n){let i=new URLSearchParams({limit:e});r&&i.append("after",r),n&&i.append("full","1");let u=`?${i.toString()}`,s=a().join(t,u),c=await (0,o.U2)(s);if(c.ok)return c;throw await (0,o.KC)(c)}},29515:(t,e,r)=>{r.a(t,async(t,n)=>{try{r.d(e,{Qd:()=>o.Q});var a=r(9926),o=r(3586),i=t([a]);a=(i.then?(await i)():i)[0],n()}catch(t){n(t)}})},60982:(t,e,r)=>{r.d(e,{KC:()=>o,U2:()=>a});let n=r(33666)();function a(t,e){let r={method:"GET"};return e&&(r.headers={Authorization:`Bearer ${e}`}),n(`https://2mz7e9hai3.us-east-1.awsapprunner.com${t}`,r)}async function o(t){let e;try{e=await t.json()}catch(t){}return Error(`${t.status} ${t.statusText}${e?.error?` - ${e.error}`:""}`)}},49003:(t,e,r)=>{r.a(t,async(t,n)=>{try{r.r(e),r.d(e,{default:()=>s,generateTutorialMap:()=>c});var a=r(48010),o=r(273),i=r(34888),u=t([i]);async function s(t,e){try{let t=await c();Object.keys(t).length>0?(e.setHeader("cache-control","s-maxage=216000"),e.status(a.StatusCodes.OK).json(t)):e.status(a.StatusCodes.BAD_REQUEST).json({message:"Failed to generate tutorial map"})}catch(t){e.status(a.StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Server error: unable to generate tutorial map"})}}async function c(){let t=(await (0,i.BL)({fullContent:!1,slugsOnly:!0})).map(t=>{let e=t.slug,r=(0,o.Jc)(t.slug,t.collection_slug);return[e,r]});return Object.fromEntries(t)}i=(u.then?(await u)():u)[0],n()}catch(t){n(t)}})},273:(t,e,r)=>{var n,a,o,i,u,s,c,l,d,f;r.d(e,{Jc:()=>h}),function(t){t.boundary="boundary",t.consul="consul",t.nomad="nomad",t.packer="packer",t.terraform="terraform",t.vagrant="vagrant",t.vault="vault",t.waypoint="waypoint"}(n||(n={})),function(t){t["well-architected-framework"]="well-architected-framework",t.onboarding="onboarding"}(a||(a={})),function(t){t.openSource="open_source",t.enterprise="enterprise",t.hcp="hcp",t.tfcFree="tfc:free",t.tfcStandard="tfc:standard",t.tfcPlus="tfc:plus"}(o||(o={})),function(t){t.cloud="cloud",t.hashicorp="hashicorp"}(i||(i={})),function(t){t.get_started="Get Started",t.fundamentals="Fundamentals",t.use_cases="Use Cases",t.certification="Certification Prep",t.production="Production",t.integrations="Integrations",t.kubernetes="Kubernetes",t.operations="Operations"}(u||(u={})),function(t){t.youtube="youtube",t.wistia="wistia"}(s||(s={})),function(t){t.katacoda="katacoda",t.instruqt="instruqt"}(c||(c={})),function(t){t.docker="docker",t.github="github",t["microsoft-azure"]="microsoft-azure",t.oci="oci",t["google-cloud"]="google-cloud",t["terraform-cloud"]="terraform-cloud",t.aws="aws"}(l||(l={})),function(t){t.visited="visited",t.in_progress="in_progress",t.complete="complete"}(d||(d={})),function(t){t.Zero="0",t.TwentyFive="25",t.Fifty="50",t.SeventyFive="75",t.Ninety="90",t.OneHundred="100"}(f||(f={}));let p={sentinel:"Sentinel",hcp:"HashiCorp Cloud Platform",terraform:"Terraform",packer:"Packer",consul:"Consul",vault:"Vault",boundary:"Boundary",nomad:"Nomad",waypoint:"Waypoint",vagrant:"Vagrant"},m=Object.keys(p);function h(t,e){var r;let[n,o]=e.split("/"),i=t.split("/")[1];if("well-architected-framework"===n||"onboarding"===n)return`/${e}/${i}`;let u="cloud"==(r=n)?"hcp":Object.keys(p).includes(r)||Object.values(a).includes(r)?r:void console.warn(`Error: unrecognized incoming Tutorials slug "${r}" in normalizeSlugForDevDot.`);return`/${u}/tutorials/${o}/${i}`}m.filter(t=>"sentinel"!==t),m.map(t=>({name:p[t],slug:t}))},47153:(t,e)=>{var r;Object.defineProperty(e,"x",{enumerable:!0,get:function(){return r}}),function(t){t.PAGES="PAGES",t.PAGES_API="PAGES_API",t.APP_PAGE="APP_PAGE",t.APP_ROUTE="APP_ROUTE"}(r||(r={}))},71802:(t,e,r)=>{t.exports=r(20145)}};var e=require("../../webpack-api-runtime.js");e.C(t);var r=e(e.s=48363);module.exports=r})();