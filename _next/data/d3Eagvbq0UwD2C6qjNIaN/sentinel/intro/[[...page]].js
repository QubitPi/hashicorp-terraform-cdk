(()=>{var e={};e.id=5641,e.ids=[5641,2888],e.modules={93566:e=>{e.exports={root:"docs-plain-page-heading_root__HzRuX g-offset-scroll-margin-top"}},75633:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>d,reportWebVitals:()=>m,routeModule:()=>b,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>g});var i=r(87093),a=r(35244),o=r(1323),n=r(4684),u=r(43900),l=r(12863),c=e([u,l]);[u,l]=c.then?(await c)():c;let p=(0,o.l)(l,"default"),d=(0,o.l)(l,"getStaticProps"),h=(0,o.l)(l,"getStaticPaths"),x=(0,o.l)(l,"getServerSideProps"),f=(0,o.l)(l,"config"),m=(0,o.l)(l,"reportWebVitals"),g=(0,o.l)(l,"unstable_getStaticProps"),v=(0,o.l)(l,"unstable_getStaticPaths"),q=(0,o.l)(l,"unstable_getStaticParams"),y=(0,o.l)(l,"unstable_getServerProps"),w=(0,o.l)(l,"unstable_getServerSideProps"),b=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/sentinel/intro/[[...page]]",pathname:"/sentinel/intro/[[...page]]",bundlePath:"",filename:""},components:{App:u.default,Document:n.default},userland:l});s()}catch(e){s(e)}})},8852:(e,t,r)=>{"use strict";r.d(t,{k:()=>a});var s=r(20997),i=r(16689);let a=(0,i.forwardRef)(({color:e="currentColor",title:t,...r},a)=>{let o=(0,i.useMemo)(()=>t?"title-"+Math.random().toString(36).substr(2,9):void 0,[t]);return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!t,ref:a,"aria-labelledby":o,...r,children:[t?(0,s.jsx)("title",{id:o,children:t}):null,(0,s.jsxs)("g",{fill:e,children:[(0,s.jsx)("path",{d:"M8 7a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 7zM8 4a1 1 0 000 2h.007a1 1 0 000-2H8z"}),(0,s.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z",clipRule:"evenodd"})]})]})})},96206:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(57147),i=r(71017);async function a(e,t){return await Promise.all(e.slice(0).map(async e=>await o(e,t)))}async function o(e,t){if(e.remoteFile)return e;if("string"==typeof e.path){let r=i.join(e.path,"index.mdx"),a=`${e.path}.mdx`,o=s.existsSync(i.join(process.cwd(),t,r)),n=s.existsSync(i.join(process.cwd(),t,a));if(!o&&!n)throw Error(`Could not find file to match path "${e.path}". Neither "${a}" or "${r}" could be found.`);if(o&&n)throw Error(`Ambiguous path "${e.path}". Both "${a}" and "${r}" exist. Please delete one of these files.`);let u=i.join(t,o?r:a);return{...e,filePath:u}}if(e.routes){let r=await a(e.routes,t);return{...e,routes:r}}return e}let n=a},71932:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=function(e){return function e(t,r=0){if(0===t.length)throw Error(`Found empty array of navNodes at depth ${r}. There must be more than one route.`);let s=t.map(t=>{if(void 0!==t.path){if(!t.title)throw Error(`Missing nav-data title. Please add a non-empty title to the node with the path "${t.path}".`);return{...t,__stack:t.path.split("/")}}if(t.routes){let s=function(t,r){let[s,i]=e(t.routes,r+1),a=!!s&&s.split("/");return{...t,__stack:a,routes:i}}(t,r);if(!t.title){let e=s.__stack.join("/");throw Error(`Missing nav-data title on NavBranch. Please add a title to the node with the inferred path "${e}".`)}return s}if(void 0!==t.href){if(""==t.href)throw Error(`Empty href value on NavDirectLink. href values must be non-empty strings. Node: ${JSON.stringify(t)}.`);if(!t.title)throw Error(`Missing nav-data title on NavDirectLink. Please add a title to the node with href "${t.href}".`);return t}if(!(t.divider||t.heading))throw Error(`Unrecognized nav-data node. Please ensure all nav-data nodes are either NavLeaf, NavBranch, NavDirectLink, NavHeading, or NavDivider types. Invalid node: ${JSON.stringify(t)}.`);return t}),i=s.reduce((e,t)=>t.__stack?e.concat([t.__stack]):e,[]),a=i.map(e=>e.join("/")),o=a.filter((e,t,r)=>r.indexOf(e)!==t);if(o.length>0)throw Error(`Duplicate routes found for "${o[0]}". Please resolve duplicates.`);let n=i.map(e=>{if(e.length===r)return e.join("/");if(e.length===r+1)return e.slice(0,e.length-1).join("/");throw Error(`Invalid path depth. At depth ${r}, found path "${e.join("/")}". Please move this path to the correct depth of ${e.length-1}.`)}).filter((e,t,r)=>r.indexOf(e)===t);if(n.length>1)throw Error(`Found mismatched paths at depth ${r}, with paths: ${JSON.stringify(a)}. Implies mismatched parent directories: ${JSON.stringify(n)}.`);return[n[0],s]}(e)[1]}},1673:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(57147),i=r(71017);async function a(e){let t=await s.promises.readdir(e,{withFileTypes:!0});return(await Promise.all(t.map(t=>{let r=i.resolve(e,t.name);return t.isDirectory()?a(r):r}))).flat()}let o=async function(e,t){let r=function e(t){return t.reduce((t,r)=>"routes"in r?t.concat(e(r.routes)):t.concat(r),[])}(e);return(await a(i.join(process.cwd(),t))).filter(e=>".mdx"==i.extname(e)).map(e=>{let r=i.join(process.cwd(),t);return i.relative(r,e).replace(/\.mdx$/,"").replace(/[\\/]?index$/,"")}).filter(e=>{if(""===e)return!1;let t=e.split(i.sep).join(i.posix.sep);return 0==r.filter(({path:e})=>e==t).length})}},58384:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return n},default:function(){return u}});let s=r(50167),i=s._(r(16689)),a=s._(r(74830));function o(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){delete t.webpack,delete t.modules;let r=t.loading;return()=>i.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function u(e,t){let r=a.default,s={loading:e=>{let{error:t,isLoading:r,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e});let i=(s={...s,...t}).loader;return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?r({...s,loader:()=>null!=i?i().then(o):Promise.resolve(o(()=>null))}):(delete s.webpack,delete s.modules,n(r,s))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(20997),i=r(40968),a=r.n(i);let o=function({isVersioned:e}){return e?s.jsx(a(),{children:s.jsx("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null}},61039:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(82097);let i=process.env.PLAYGROUND_API_URL,a=()=>e=>{(0,s.Vn)(e,"code",e=>{let t,r;if("sentinel"===e.lang){if(!e.meta||!e.meta.includes("playground"))return;t={policy:e.value}}"json"===e.lang&&e.meta&&e.meta.includes("sentinel")&&(t=JSON.parse(e.value)),i&&(r=`api={"${i}"}`),t&&(e.type="jsx",e.value=`<SentinelEmbedded exampleData={${JSON.stringify(t)}} ${r} />`)})}},25549:(e,t,r)=>{"use strict";function s(e){return e.filter(e=>{let t=!1;return"string"==typeof e?t=""==e:"object"==typeof e&&(t=0==e.params.page.length||""==e.params.page[0]),!t})}r.d(t,{b:()=>s})},12863:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>l,getStaticPaths:()=>n,getStaticProps:()=>u});var i=r(98238),a=r(61439),o=e([i,a]);[i,a]=o.then?(await o)():o;let{getStaticPaths:n,getStaticProps:u}=(0,a.w)("sentinel","intro"),l=i.Z;s()}catch(e){s(e)}})},61806:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(20997),i=r(31633),a=r(93566),o=r.n(a);let n=function({id:e,title:t}){return s.jsx(i.Z,{className:o().root,id:e,level:1,size:600,weight:"bold",children:t})}},98238:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>w});var i=r(20997),a=r(11163),o=r(88561),n=r(59003),u=r.n(n),l=r(99320),c=r(79975),p=r(41204),d=r(31187),h=r(98634),x=r(91844),f=r(43814),m=r.n(f),g=r(12559),v=r(61806),q=r(39049),y=e([c]);c=(y.then?(await y)():y)[0];let w=({metadata:e,mdxSource:t,versions:r,projectName:s,layoutProps:n,outlineItems:f,pageHeading:y})=>{var w;let b;let{asPath:P}=(0,a.useRouter)(),j=(0,o.j2)(),{compiledSource:S,scope:_}=t,k=(0,x.Z)(j.slug),N=y?.id&&y?.title,$=(w=e.layout,w?.name==="docs-root-landing");return $?b=i.jsx(g.Z,{pageHeading:y,pageSubtitle:e?.layout?.subtitle}):N&&(b=i.jsx(v.Z,{id:y.id,title:y.title})),(0,i.jsxs)(c.Z,{...n,outlineItems:f,versions:r,children:[N?i.jsx(h.Z,{className:u()(m().docsPageHeading,{[m().hasLandingHero]:$}),versionSelectorSlot:r&&r.length>0?i.jsx(q.Z,{options:r,projectName:s}):null,headingSlot:b}):null,i.jsx(d.Z,{isVersioned:!!(0,l.B)(P)}),i.jsx(p.Z,{mdxRemoteProps:{compiledSource:S,scope:_,components:{...k,wrapper:e=>i.jsx("div",{className:m().mdxContent,...e})}}})]})};s()}catch(e){s(e)}})},14937:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{i:()=>n});var i=r(89047),a=r(90237),o=e([i]);i=(o.then?(await o)():o)[0];let u=(0,a.y)(fetch,{retries:3,delay:1e3});async function n(){return await u("https://releases.hashicorp.com/vagrant-vmware-utility/index.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>(0,i.S9)(Object.keys(e.versions)))}s()}catch(e){s(e)}})},61439:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{w:()=>c});var i=r(8465),a=r(64662),o=r(25549),n=r(61039),u=r(14937),l=e([i,u]);function c(e,t,r){let s=(0,a.i)(e),l=s.rootDocsPaths.find(e=>e.path==t),c={baseName:l.shortName||l.name,basePath:l.path,navDataPrefix:l.navDataPrefix,product:s,productSlugForLoader:l.productSlugForLoader,basePathForLoader:l.basePathForLoader,mainBranch:l.mainBranch,additionalRemarkPlugins:"sentinel"==s.slug&&"docs"==l.path?[n.Z]:[],getScope:"vagrant"==s.slug&&"docs"==l.path?async()=>({VMWARE_UTILITY_VERSION:await (0,u.i)()}):void 0,options:r};return{getStaticPaths:async e=>{let{getStaticPaths:t}=(0,i.O)(c),{paths:r,...s}=await t(e);return{paths:"docs"==l.path?(0,o.b)(r):r,...s}},getStaticProps:async e=>{let{getStaticProps:t}=(0,i.O)(c);return await t(e)}}}[i,u]=l.then?(await l)():l,s()}catch(e){s(e)}})},74830:(e,t,r)=>{"use strict";e.exports=r(87093).vendored.contexts.Loadable},5152:(e,t,r)=>{e.exports=r(58384)},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},76791:e=>{"use strict";e.exports=require("@mdx-js/util")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},51356:e=>{"use strict";e.exports=require("bail")},41421:e=>{"use strict";e.exports=require("ccount")},59003:e=>{"use strict";e.exports=require("classnames")},57499:e=>{"use strict";e.exports=require("collapse-white-space")},71239:e=>{"use strict";e.exports=require("events")},10950:e=>{"use strict";e.exports=require("extend")},79316:e=>{"use strict";e.exports=require("fathom-client")},98076:e=>{"use strict";e.exports=require("gray-matter")},48010:e=>{"use strict";e.exports=require("http-status-codes")},76675:e=>{"use strict";e.exports=require("is-alphabetical")},61455:e=>{"use strict";e.exports=require("is-alphanumeric")},93715:e=>{"use strict";e.exports=require("is-buffer")},69893:e=>{"use strict";e.exports=require("is-decimal")},20298:e=>{"use strict";e.exports=require("is-whitespace-character")},80791:e=>{"use strict";e.exports=require("is-word-character")},56734:e=>{"use strict";e.exports=require("js-cookie")},54689:e=>{"use strict";e.exports=require("longest-streak")},41197:e=>{"use strict";e.exports=require("markdown-escapes")},73584:e=>{"use strict";e.exports=require("markdown-table")},53625:e=>{"use strict";e.exports=require("mdast-util-compact")},52591:e=>{"use strict";e.exports=require("moize")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},70276:e=>{"use strict";e.exports=require("next-mdx-remote")},57112:e=>{"use strict";e.exports=require("next-mdx-remote/serialize")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},74809:e=>{"use strict";e.exports=require("node-fetch")},82174:e=>{"use strict";e.exports=require("parse-entities")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3515:e=>{"use strict";e.exports=require("remark-mdx")},13729:e=>{"use strict";e.exports=require("repeat-string")},10912:e=>{"use strict";e.exports=require("semver")},56563:e=>{"use strict";e.exports=require("semver/functions/parse")},95370:e=>{"use strict";e.exports=require("semver/functions/prerelease")},97326:e=>{"use strict";e.exports=require("semver/functions/rsort")},61865:e=>{"use strict";e.exports=require("semver/functions/valid")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},67545:e=>{"use strict";e.exports=require("state-toggle")},42214:e=>{"use strict";e.exports=require("stringify-entities")},25325:e=>{"use strict";e.exports=require("to-vfile")},32385:e=>{"use strict";e.exports=require("trim")},41358:e=>{"use strict";e.exports=require("trim-trailing-lines")},40969:e=>{"use strict";e.exports=require("trough")},96784:e=>{"use strict";e.exports=require("unherit")},68603:e=>{"use strict";e.exports=require("unist-util-flatmap")},41925:e=>{"use strict";e.exports=require("unist-util-map")},75295:e=>{"use strict";e.exports=require("unist-util-remove-position")},48858:e=>{"use strict";e.exports=require("use-query-params")},33084:e=>{"use strict";e.exports=require("vfile")},3465:e=>{"use strict";e.exports=require("vfile-location")},5170:e=>{"use strict";e.exports=require("xtend")},66197:e=>{"use strict";e.exports=import("framer-motion")},46269:e=>{"use strict";e.exports=import("react-instantsearch-hooks-web")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7163,5605,6859,8706,1525,9873,7751,3394,7820,3900,4572,6517,1274,5828,4355,5028,9795,7245,6450,8465],()=>r(75633));module.exports=s})();