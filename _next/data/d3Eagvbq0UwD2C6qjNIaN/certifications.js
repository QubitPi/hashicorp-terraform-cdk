(()=>{var e={};e.id=2327,e.ids=[2327,2888],e.modules={4960:e=>{e.exports={heroBackground:"landing-hero_heroBackground__mErGz",heroImage:"landing-hero_heroImage__Gl_05"}},44542:e=>{e.exports={splitSection:"certification-program-summary-card_splitSection__2b3Ed",heading:"certification-program-summary-card_heading__zQPpa hds-typography-display-500",description:"certification-program-summary-card_description__W6F2R hds-typography-body-300",buttonGroup:"certification-program-summary-card_buttonGroup__U2MG0",examCards:"certification-program-summary-card_examCards__chmcO"}},92642:e=>{e.exports={root:"exam-badge-and-title_root__w5_1W",text:"exam-badge-and-title_text__3tEB7",eyebrow:"exam-badge-and-title_eyebrow__8HhNc hds-typography-body-100",title:"exam-badge-and-title_title__S9d0B hds-typography-display-300"}},10097:e=>{e.exports={cardBase:"exam-card_cardBase__hiwdi",examCard:"exam-card_examCard__ZGCJy exam-card_cardBase__hiwdi",contents:"exam-card_contents__NaSyk",comingSoonCard:"exam-card_comingSoonCard__q7qOS exam-card_cardBase__hiwdi"}},6362:e=>{e.exports={root:"landing_root__wuU1t",programsSection:"landing_programsSection__1XUR9",faqSignupSection:"landing_faqSignupSection__XF67m",faqHeading:"landing_faqHeading__Hcst0 hds-typography-display-400",signupForm:"landing_signupForm__Z__gd"}},84566:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>g,default:()=>l,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>h,routeModule:()=>j,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>_});var i=t(87093),a=t(35244),o=t(1323),c=t(4684),n=t(43900),u=t(19011),d=e([n,u]);[n,u]=d.then?(await d)():d;let l=(0,o.l)(u,"default"),p=(0,o.l)(u,"getStaticProps"),m=(0,o.l)(u,"getStaticPaths"),x=(0,o.l)(u,"getServerSideProps"),g=(0,o.l)(u,"config"),h=(0,o.l)(u,"reportWebVitals"),_=(0,o.l)(u,"unstable_getStaticProps"),y=(0,o.l)(u,"unstable_getStaticPaths"),f=(0,o.l)(u,"unstable_getStaticParams"),S=(0,o.l)(u,"unstable_getServerProps"),q=(0,o.l)(u,"unstable_getServerSideProps"),j=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/certifications",pathname:"/certifications",bundlePath:"",filename:""},components:{App:n.default,Document:c.default},userland:u});s()}catch(e){s(e)}})},20707:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var s=t(20997),i=t(25675),a=t.n(i),o=t(81744),c=t.n(o),n=t(4960),u=t.n(n),d=t(35178);let l=function({heading:e,description:r,isHvd:t=!1,className:i}){return s.jsx(d.V,{backgroundClassName:u().heroBackground,className:i,startSlot:s.jsx(d.l,{className:i,heading:e,description:r??"",foreground:"light"}),endSlot:t?null:s.jsx("div",{className:u().heroImage,children:s.jsx(a(),{alt:"",src:c(),width:447,height:515})})})}},23537:(e,r,t)=>{"use strict";function s(e){return JSON.parse(JSON.stringify(e))}t.d(r,{c:()=>s})},19011:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>c,getStaticProps:()=>a.b});var i=t(37263),a=t(83785),o=e([i,a]);[i,a]=o.then?(await o)():o;let c=i.Z;s()}catch(e){s(e)}})},72610:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{D:()=>c});var i=t(9926),a=e([i]);let o=(i=(a.then?(await a)():a)[0]).z.enum(["infrastructure-automation","networking-automation","security-automation"]),c=i.z.object({hero:i.z.object({heading:i.z.string(),description:i.z.string()}),faqHeading:i.z.string(),programSummaryOrder:i.z.array(o)});s()}catch(e){s(e)}})},20573:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{r:()=>l});var i=t(20997),a=t(4931),o=t(19506),c=t(78966),n=t(44542),u=t.n(n),d=e([o,c]);function l({slug:e,heading:r,description:t,exams:s}){return(0,i.jsxs)(o.KN,{theme:e,children:[i.jsx(o.wu,{className:u().splitSection,startContent:i.jsx("h3",{className:u().heading,dangerouslySetInnerHTML:{__html:r}}),endContent:(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:u().description,children:t}),i.jsx(o.Sz,{className:u().buttonGroup,children:i.jsx(a.Z,{text:"Overview",href:`/certifications/${e}`})})]})}),i.jsx("div",{className:u().examCards,children:s.map(({title:e,prepareUrl:r,registerUrl:t,examCode:s,examTier:a,productSlug:o})=>{let n=e+(s?` (${s})`:"");return r?i.jsx(c.Sl,{title:n,url:r,examTier:a,productSlug:o,showComingSoon:"string"!=typeof t},n):i.jsx(c.YE,{title:n,examTier:a,productSlug:o},n)})})]})}[o,c]=d.then?(await d)():d,s()}catch(e){s(e)}})},39728:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{L:()=>u});var i=t(20997),a=t(19506),o=t(92642),c=t.n(o),n=e([a]);function u({title:e,eyebrow:r,productSlug:t,examTier:s}){return(0,i.jsxs)("div",{className:c().root,children:[i.jsx(a.hj,{productSlug:t,examTier:s}),(0,i.jsxs)("div",{className:c().text,children:[i.jsx("div",{className:c().eyebrow,children:r}),i.jsx("div",{className:c().title,children:e})]})]})}a=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},21943:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{S:()=>h,Y:()=>g});var i=t(20997),a=t(19506),o=t(78966),c=t(47352),n=t(10097),u=t.n(n),d=t(81725),l=t(51500),p=e([a,o]);function m({children:e}){return i.jsx("div",{className:u().contents,children:e})}function x(){return i.jsx(l.Z,{text:"Coming Soon",color:"highlight",type:"outlined"})}function g({title:e,productSlug:r,examTier:t}){return i.jsx(d.Z,{className:u().comingSoonCard,children:(0,i.jsxs)(m,{children:[i.jsx(o.LG,{title:e,eyebrow:"HashiCorp Certified:",productSlug:r,examTier:t}),i.jsx(x,{})]})})}function h({title:e,productSlug:r,url:t,showComingSoon:s,examTier:n}){return i.jsx(c.Z,{className:u().examCard,href:t,ariaLabel:e,children:(0,i.jsxs)(m,{children:[i.jsx(o.LG,{title:e,eyebrow:"HashiCorp Certified:",productSlug:r,examTier:n}),(0,i.jsxs)(a.Sz,{children:[s?i.jsx(x,{}):null,i.jsx(a.Ct,{text:"Prepare for the exam"})]})]})})}[a,o]=p.then?(await p)():p,s()}catch(e){s(e)}})},78966:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{LG:()=>a.L,Sl:()=>o.S,YE:()=>o.Y,r4:()=>i.r});var i=t(20573),a=t(39728),o=t(21943),c=e([i,a,o]);[i,a,o]=c.then?(await c)():c,s()}catch(e){s(e)}})},37263:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>m});var i=t(20997),a=t(8157),o=t(62166),c=t(19506),n=t(78966),u=t(6362),d=t.n(u),l=t(20707),p=e([a,o,c,n]);[a,o,c,n]=p.then?(await p)():p;let m=function({pageContent:e,programSummaries:r,faqItems:t}){let{hero:s}=e;return i.jsx(a.Z,{mobileMenuSlot:i.jsx(o.Z,{}),children:(0,i.jsxs)("div",{className:d().root,children:[i.jsx(l.Z,{heading:s.heading,description:s.description}),i.jsx("div",{className:d().programsSection,children:r.map(e=>{let{slug:r,heading:t,description:s,exams:a}=e;return i.jsx(c.u0,{children:i.jsx(n.r4,{slug:r,heading:t,description:s,exams:a})},r)})}),i.jsx("div",{className:d().faqSignupSection,children:(0,i.jsxs)(c.u0,{children:[i.jsx("h2",{className:d().faqHeading,children:e.faqHeading}),i.jsx(c.bx,{items:t}),i.jsx("div",{className:d().signupForm,children:i.jsx(c.yv,{})})]})})]})})};s()}catch(e){s(e)}})},83785:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{b:()=>l});var i=t(71017),a=t.n(i),o=t(34808),c=t(23574),n=t(72610),u=t(52763),d=e([c,n]);[c,n]=d.then?(await d)():d;let p="src/content/certifications";async function l(){let e=(0,o.a)(a().join(p,"landing.json")),r=n.D.parse(JSON.parse(e)),t=(0,c.o9)(),s=(0,u.z)(t,r.programSummaryOrder),i=(0,o.a)(a().join(p,"landing-faq.mdx")),d=await (0,c.m1)(i);return{props:{pageContent:r,programSummaries:s,faqItems:d,metadata:{title:"Certifications",localOgImage:"certifications.jpg"}}}}s()}catch(e){s(e)}})},52763:(e,r,t)=>{"use strict";t.d(r,{z:()=>i});var s=t(23537);function i(e,r){return r.map(r=>{let t=e.find(e=>e.slug===r);if(!t)throw Error(`formatProgramSummaries: could not find Certification program with slug "${r}". Please ensure all slugs in "" reference existing Certification programs in "src/content/certifications/programs".`);return{slug:t.slug,heading:t.pageContent.summary.heading,description:t.pageContent.summary.description,exams:t.pageContent.exams.map(e=>(0,s.c)({title:e.title,examCode:e.examCode,examTier:e.examTier,productSlug:e.productSlug,prepareUrl:e.links?.prepare,registerUrl:e.links?.register}))}})}},81744:e=>{e.exports="/_next/static/images/certification-hero-image-5c0a533b1772ec492d2da1aa4d769295.svg"},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},59003:e=>{"use strict";e.exports=require("classnames")},68103:e=>{"use strict";e.exports=require("clsx")},71239:e=>{"use strict";e.exports=require("events")},79316:e=>{"use strict";e.exports=require("fathom-client")},56734:e=>{"use strict";e.exports=require("js-cookie")},87645:e=>{"use strict";e.exports=require("mdast-util-to-string")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},70276:e=>{"use strict";e.exports=require("next-mdx-remote")},57112:e=>{"use strict";e.exports=require("next-mdx-remote/serialize")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},91283:e=>{"use strict";e.exports=require("remark")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},43057:e=>{"use strict";e.exports=require("unist-util-visit-children")},48858:e=>{"use strict";e.exports=require("use-query-params")},66197:e=>{"use strict";e.exports=import("framer-motion")},45641:e=>{"use strict";e.exports=import("react-hook-form")},46269:e=>{"use strict";e.exports=import("react-instantsearch-hooks-web")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[7163,5605,6859,8706,1525,9873,7751,4105,3900,4572,4355,1362],()=>t(84566));module.exports=s})();