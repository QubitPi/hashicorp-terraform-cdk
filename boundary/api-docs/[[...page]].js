"use strict";(()=>{var e={};e.id=2648,e.ids=[2648,2888],e.modules={3783:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{config:()=>q,default:()=>x,getServerSideProps:()=>d,getStaticPaths:()=>m,getStaticProps:()=>l,reportWebVitals:()=>g,routeModule:()=>S,unstable_getServerProps:()=>k,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>h});var s=t(87093),a=t(35244),i=t(1323),p=t(4684),u=t(43900),c=t(86250),n=e([u,c]);[u,c]=n.then?(await n)():n;let x=(0,i.l)(c,"default"),l=(0,i.l)(c,"getStaticProps"),m=(0,i.l)(c,"getStaticPaths"),d=(0,i.l)(c,"getServerSideProps"),q=(0,i.l)(c,"config"),g=(0,i.l)(c,"reportWebVitals"),h=(0,i.l)(c,"unstable_getStaticProps"),b=(0,i.l)(c,"unstable_getStaticPaths"),f=(0,i.l)(c,"unstable_getStaticParams"),k=(0,i.l)(c,"unstable_getServerProps"),y=(0,i.l)(c,"unstable_getServerSideProps"),S=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/boundary/api-docs/[[...page]]",pathname:"/boundary/api-docs/[[...page]]",bundlePath:"",filename:""},components:{App:u.default,Document:p.default},userland:c});o()}catch(e){o(e)}})},86250:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{default:()=>l,getStaticPaths:()=>n,getStaticProps:()=>x});var s=t(37796),a=t(74212),i=t(84743),p=e([a,i]);[a,i]=p.then?(await p)():p;let c="boundary";function u(){let e=(0,s.isDeployPreview)(c)?"../../internal/gen/controller.swagger.json":{owner:"hashicorp",repo:"boundary",path:"internal/gen/controller.swagger.json",ref:"stable-website"};return[{versionId:"latest",sourceFile:e}]}let n=async()=>{let e=await u();return await (0,i.X)({productSlug:c,versionData:e})},x=async({params:e})=>{let r=await u();return await (0,i.q)({productSlug:c,baseUrl:"/boundary/api-docs",pathParts:e.page,versionData:r})},l=a.Z;o()}catch(e){o(e)}})},47625:e=>{e.exports=require("@apidevtools/json-schema-ref-parser")},94970:e=>{e.exports=require("@happykit/flags/client")},67922:e=>{e.exports=require("@happykit/flags/context")},95780:e=>{e.exports=require("@mapbox/rehype-prism")},16142:e=>{e.exports=require("@octokit/core")},48827:e=>{e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{e.exports=require("@reach/dialog")},9677:e=>{e.exports=require("@reach/portal")},80395:e=>{e.exports=require("@reach/tooltip")},78896:e=>{e.exports=require("@react-aria/ssr")},76278:e=>{e.exports=require("@react-aria/utils")},18910:e=>{e.exports=require("@tanstack/react-query")},46310:e=>{e.exports=require("@tanstack/react-query-devtools")},33666:e=>{e.exports=require("@vercel/fetch")},38970:e=>{e.exports=require("algoliasearch")},86110:e=>{e.exports=require("change-case")},59003:e=>{e.exports=require("classnames")},71239:e=>{e.exports=require("events")},10950:e=>{e.exports=require("extend")},79316:e=>{e.exports=require("fathom-client")},22493:e=>{e.exports=require("hast-util-to-string")},93715:e=>{e.exports=require("is-buffer")},56734:e=>{e.exports=require("js-cookie")},52591:e=>{e.exports=require("moize")},23231:e=>{e.exports=require("ms")},41649:e=>{e.exports=require("next-auth/react")},70276:e=>{e.exports=require("next-mdx-remote")},74091:e=>{e.exports=require("next-query-params")},51162:e=>{e.exports=require("next-themes")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},39369:e=>{e.exports=require("process")},79103:e=>{e.exports=require("query-string")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},65184:e=>{e.exports=require("react-error-boundary")},48922:e=>{e.exports=require("react-hot-toast")},19785:e=>{e.exports=require("react-intersection-observer")},20997:e=>{e.exports=require("react/jsx-runtime")},62555:e=>{e.exports=require("refractor")},64545:e=>{e.exports=require("rehype-stringify")},50934:e=>{e.exports=require("shellwords")},73673:e=>{e.exports=require("slugify")},84269:e=>{e.exports=require("url")},48858:e=>{e.exports=require("use-query-params")},87586:e=>{e.exports=import("decode-named-character-reference")},66197:e=>{e.exports=import("framer-motion")},90684:e=>{e.exports=import("mdast-util-mdx")},19282:e=>{e.exports=import("mdast-util-phrasing")},23985:e=>{e.exports=import("micromark-core-commonmark")},95723:e=>{e.exports=import("micromark-extension-mdxjs")},84678:e=>{e.exports=import("micromark-factory-space")},60718:e=>{e.exports=import("micromark-util-character")},43471:e=>{e.exports=import("micromark-util-chunked")},36243:e=>{e.exports=import("micromark-util-combine-extensions")},62687:e=>{e.exports=import("micromark-util-decode-numeric-character-reference")},22732:e=>{e.exports=import("micromark-util-decode-string")},96997:e=>{e.exports=import("micromark-util-normalize-identifier")},45566:e=>{e.exports=import("micromark-util-resolve-all")},94980:e=>{e.exports=import("micromark-util-subtokenize")},46269:e=>{e.exports=import("react-instantsearch-hooks-web")},23135:e=>{e.exports=import("react-markdown")},89521:e=>{e.exports=import("rehype-katex")},66809:e=>{e.exports=import("remark-gfm")},19832:e=>{e.exports=import("remark-math")},2509:e=>{e.exports=import("remark-rehype")},9926:e=>{e.exports=import("zod")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[7163,5605,6859,8706,1525,9873,7751,3394,8446,3900,4572,6517,1274,4355,9698],()=>t(3783));module.exports=o})();