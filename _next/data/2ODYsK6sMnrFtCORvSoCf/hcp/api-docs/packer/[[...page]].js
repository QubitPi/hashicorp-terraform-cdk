"use strict";(()=>{var e={};e.id=7151,e.ids=[7151,2888],e.modules={52112:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{config:()=>d,default:()=>n,getServerSideProps:()=>h,getStaticPaths:()=>l,getStaticProps:()=>x,reportWebVitals:()=>q,routeModule:()=>y,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>g});var s=t(87093),i=t(35244),a=t(1323),p=t(4684),c=t(43900),u=t(28449),m=e([c,u]);[c,u]=m.then?(await m)():m;let n=(0,a.l)(u,"default"),x=(0,a.l)(u,"getStaticProps"),l=(0,a.l)(u,"getStaticPaths"),h=(0,a.l)(u,"getServerSideProps"),d=(0,a.l)(u,"config"),q=(0,a.l)(u,"reportWebVitals"),g=(0,a.l)(u,"unstable_getStaticProps"),f=(0,a.l)(u,"unstable_getStaticPaths"),k=(0,a.l)(u,"unstable_getStaticParams"),S=(0,a.l)(u,"unstable_getServerProps"),b=(0,a.l)(u,"unstable_getServerSideProps"),y=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/hcp/api-docs/packer/[[...page]]",pathname:"/hcp/api-docs/packer/[[...page]]",bundlePath:"",filename:""},components:{App:c.default,Document:p.default},userland:u});o()}catch(e){o(e)}})},28449:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{default:()=>m,getStaticPaths:()=>a.F,getStaticProps:()=>u});var s=t(34181),i=t(85116),a=t(86598),p=e([i,a]);[i,a]=p.then?(await p)():p;let c={basePath:"/hcp/api-docs/packer",productSlug:"hcp",serviceProductSlug:"packer",githubSourceDirectory:{owner:"hashicorp",repo:"hcp-specs",path:"specs/cloud-packer-service",ref:"main"},statusIndicatorConfig:{pageUrl:"https://status.hashicorp.com",endpointUrl:"https://status.hashicorp.com/api/v2/components/0mbkqnrzg33w.json"},navResourceItems:[{title:"Tutorial Library",href:"/tutorials/library?product=packer&edition=hcp"},{title:"Community",href:"https://discuss.hashicorp.com/"},{title:"Support",href:"https://www.hashicorp.com/customer-success"}],massageSchemaForClient:e=>{let r=e.info.title.replace("HashiCorp Cloud Platform","HCP"),t={...e.info,title:r};return{...e,info:t}}},u=async({params:e})=>{let r=await (0,s.Y)(c.githubSourceDirectory);return await (0,a.b)({...c,context:{params:e},versionData:r})},m=i.Z;o()}catch(e){o(e)}})},94970:e=>{e.exports=require("@happykit/flags/client")},67922:e=>{e.exports=require("@happykit/flags/context")},95780:e=>{e.exports=require("@mapbox/rehype-prism")},16142:e=>{e.exports=require("@octokit/core")},48827:e=>{e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{e.exports=require("@reach/dialog")},9677:e=>{e.exports=require("@reach/portal")},80395:e=>{e.exports=require("@reach/tooltip")},78896:e=>{e.exports=require("@react-aria/ssr")},76278:e=>{e.exports=require("@react-aria/utils")},18910:e=>{e.exports=require("@tanstack/react-query")},46310:e=>{e.exports=require("@tanstack/react-query-devtools")},33666:e=>{e.exports=require("@vercel/fetch")},38970:e=>{e.exports=require("algoliasearch")},59003:e=>{e.exports=require("classnames")},71239:e=>{e.exports=require("events")},10950:e=>{e.exports=require("extend")},79316:e=>{e.exports=require("fathom-client")},22493:e=>{e.exports=require("hast-util-to-string")},48010:e=>{e.exports=require("http-status-codes")},93715:e=>{e.exports=require("is-buffer")},56734:e=>{e.exports=require("js-cookie")},52591:e=>{e.exports=require("moize")},23231:e=>{e.exports=require("ms")},41649:e=>{e.exports=require("next-auth/react")},70276:e=>{e.exports=require("next-mdx-remote")},57112:e=>{e.exports=require("next-mdx-remote/serialize")},74091:e=>{e.exports=require("next-query-params")},51162:e=>{e.exports=require("next-themes")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},45235:e=>{e.exports=require("oas-normalize")},39369:e=>{e.exports=require("process")},79103:e=>{e.exports=require("query-string")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},65184:e=>{e.exports=require("react-error-boundary")},48922:e=>{e.exports=require("react-hot-toast")},19785:e=>{e.exports=require("react-intersection-observer")},20997:e=>{e.exports=require("react/jsx-runtime")},62555:e=>{e.exports=require("refractor")},64545:e=>{e.exports=require("rehype-stringify")},50934:e=>{e.exports=require("shellwords")},73673:e=>{e.exports=require("slugify")},84269:e=>{e.exports=require("url")},48858:e=>{e.exports=require("use-query-params")},87586:e=>{e.exports=import("decode-named-character-reference")},66197:e=>{e.exports=import("framer-motion")},90684:e=>{e.exports=import("mdast-util-mdx")},19282:e=>{e.exports=import("mdast-util-phrasing")},23985:e=>{e.exports=import("micromark-core-commonmark")},95723:e=>{e.exports=import("micromark-extension-mdxjs")},84678:e=>{e.exports=import("micromark-factory-space")},60718:e=>{e.exports=import("micromark-util-character")},43471:e=>{e.exports=import("micromark-util-chunked")},36243:e=>{e.exports=import("micromark-util-combine-extensions")},62687:e=>{e.exports=import("micromark-util-decode-numeric-character-reference")},22732:e=>{e.exports=import("micromark-util-decode-string")},96997:e=>{e.exports=import("micromark-util-normalize-identifier")},45566:e=>{e.exports=import("micromark-util-resolve-all")},94980:e=>{e.exports=import("micromark-util-subtokenize")},64675:e=>{e.exports=import("react-instantsearch")},23135:e=>{e.exports=import("react-markdown")},89521:e=>{e.exports=import("rehype-katex")},66809:e=>{e.exports=import("remark-gfm")},19832:e=>{e.exports=import("remark-math")},2509:e=>{e.exports=import("remark-rehype")},9926:e=>{e.exports=import("zod")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[7163,5605,6859,8432,1525,6403,145,3900,1441,6517,4355,5116,8226],()=>t(52112));module.exports=o})();