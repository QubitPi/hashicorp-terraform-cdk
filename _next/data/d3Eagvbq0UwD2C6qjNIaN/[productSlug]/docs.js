(()=>{var e={};e.id=5732,e.ids=[5732,2888],e.modules={12617:e=>{e.exports={card:"callout-card_card__J1Gst",heading:"callout-card_heading__Jp1mS g-offset-scroll-margin-top hds-typography-display-300",body:"callout-card_body__dWT7J hds-typography-body-200",ctas:"callout-card_ctas__C0CYT",iconCardLinks:"callout-card_iconCardLinks__WNnCq",fixedColumnsMode:"callout-card_fixedColumnsMode__bqv49",columns2:"callout-card_columns2__RTk4v",columns3:"callout-card_columns3__cUaGW"}},53913:e=>{e.exports={root:"autosized-heading-block_root__4yPdg g-offset-scroll-margin-top",h2:"autosized-heading-block_h2__xjxpZ",h3:"autosized-heading-block_h3__9MWlq"}},48774:e=>{e.exports={root:"card-grid-block_root__yDdm_",description:"card-grid-block_description__Xzxr8",cardsGridListCardLink:"card-grid-block_cardsGridListCardLink__dWIIF"}},33029:e=>{e.exports={root:"section-heading-block_root__RSPyk"}},71007:e=>{e.exports={iconCardGridLink:"hero_iconCardGridLink__w8FJ_"}},29629:e=>{e.exports={root:"icon-card-link-grid_root__blrCJ"}},43219:e=>{e.exports={root:"marketing-content_root__DE3hU"}},51714:e=>{e.exports={mdxSlotWrapper:"product-root-docs-path-landing_mdxSlotWrapper__sQEt2",waypointMDXWrapper:"product-root-docs-path-landing_waypointMDXWrapper__oYhN5"}},51886:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>d,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>p,reportWebVitals:()=>m,routeModule:()=>_,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>g});var s=r(87093),a=r(35244),o=r(1323),n=r(4684),l=r(43900),c=r(45857),u=e([l,c]);[l,c]=u.then?(await u)():u;let d=(0,o.l)(c,"default"),p=(0,o.l)(c,"getStaticProps"),h=(0,o.l)(c,"getStaticPaths"),x=(0,o.l)(c,"getServerSideProps"),f=(0,o.l)(c,"config"),m=(0,o.l)(c,"reportWebVitals"),g=(0,o.l)(c,"unstable_getStaticProps"),v=(0,o.l)(c,"unstable_getStaticPaths"),y=(0,o.l)(c,"unstable_getStaticParams"),w=(0,o.l)(c,"unstable_getServerProps"),j=(0,o.l)(c,"unstable_getServerSideProps"),_=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/[productSlug]/docs",pathname:"/[productSlug]/docs",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:c});i()}catch(e){i(e)}})},8852:(e,t,r)=>{"use strict";r.d(t,{k:()=>a});var i=r(20997),s=r(16689);let a=(0,s.forwardRef)(({color:e="currentColor",title:t,...r},a)=>{let o=(0,s.useMemo)(()=>t?"title-"+Math.random().toString(36).substr(2,9):void 0,[t]);return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!t,ref:a,"aria-labelledby":o,...r,children:[t?(0,i.jsx)("title",{id:o,children:t}):null,(0,i.jsxs)("g",{fill:e,children:[(0,i.jsx)("path",{d:"M8 7a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 7zM8 4a1 1 0 000 2h.007a1 1 0 000-2H8z"}),(0,i.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z",clipRule:"evenodd"})]})]})})},96206:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(57147),s=r(71017);async function a(e,t){return await Promise.all(e.slice(0).map(async e=>await o(e,t)))}async function o(e,t){if(e.remoteFile)return e;if("string"==typeof e.path){let r=s.join(e.path,"index.mdx"),a=`${e.path}.mdx`,o=i.existsSync(s.join(process.cwd(),t,r)),n=i.existsSync(s.join(process.cwd(),t,a));if(!o&&!n)throw Error(`Could not find file to match path "${e.path}". Neither "${a}" or "${r}" could be found.`);if(o&&n)throw Error(`Ambiguous path "${e.path}". Both "${a}" and "${r}" exist. Please delete one of these files.`);let l=s.join(t,o?r:a);return{...e,filePath:l}}if(e.routes){let r=await a(e.routes,t);return{...e,routes:r}}return e}let n=a},71932:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i=function(e){return function e(t,r=0){if(0===t.length)throw Error(`Found empty array of navNodes at depth ${r}. There must be more than one route.`);let i=t.map(t=>{if(void 0!==t.path){if(!t.title)throw Error(`Missing nav-data title. Please add a non-empty title to the node with the path "${t.path}".`);return{...t,__stack:t.path.split("/")}}if(t.routes){let i=function(t,r){let[i,s]=e(t.routes,r+1),a=!!i&&i.split("/");return{...t,__stack:a,routes:s}}(t,r);if(!t.title){let e=i.__stack.join("/");throw Error(`Missing nav-data title on NavBranch. Please add a title to the node with the inferred path "${e}".`)}return i}if(void 0!==t.href){if(""==t.href)throw Error(`Empty href value on NavDirectLink. href values must be non-empty strings. Node: ${JSON.stringify(t)}.`);if(!t.title)throw Error(`Missing nav-data title on NavDirectLink. Please add a title to the node with href "${t.href}".`);return t}if(!(t.divider||t.heading))throw Error(`Unrecognized nav-data node. Please ensure all nav-data nodes are either NavLeaf, NavBranch, NavDirectLink, NavHeading, or NavDivider types. Invalid node: ${JSON.stringify(t)}.`);return t}),s=i.reduce((e,t)=>t.__stack?e.concat([t.__stack]):e,[]),a=s.map(e=>e.join("/")),o=a.filter((e,t,r)=>r.indexOf(e)!==t);if(o.length>0)throw Error(`Duplicate routes found for "${o[0]}". Please resolve duplicates.`);let n=s.map(e=>{if(e.length===r)return e.join("/");if(e.length===r+1)return e.slice(0,e.length-1).join("/");throw Error(`Invalid path depth. At depth ${r}, found path "${e.join("/")}". Please move this path to the correct depth of ${e.length-1}.`)}).filter((e,t,r)=>r.indexOf(e)===t);if(n.length>1)throw Error(`Found mismatched paths at depth ${r}, with paths: ${JSON.stringify(a)}. Implies mismatched parent directories: ${JSON.stringify(n)}.`);return[n[0],i]}(e)[1]}},1673:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var i=r(57147),s=r(71017);async function a(e){let t=await i.promises.readdir(e,{withFileTypes:!0});return(await Promise.all(t.map(t=>{let r=s.resolve(e,t.name);return t.isDirectory()?a(r):r}))).flat()}let o=async function(e,t){let r=function e(t){return t.reduce((t,r)=>"routes"in r?t.concat(e(r.routes)):t.concat(r),[])}(e);return(await a(s.join(process.cwd(),t))).filter(e=>".mdx"==s.extname(e)).map(e=>{let r=s.join(process.cwd(),t);return s.relative(r,e).replace(/\.mdx$/,"").replace(/[\\/]?index$/,"")}).filter(e=>{if(""===e)return!1;let t=e.split(s.sep).join(s.posix.sep);return 0==r.filter(({path:e})=>e==t).length})}},58384:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return n},default:function(){return l}});let i=r(50167),s=i._(r(16689)),a=i._(r(74830));function o(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){delete t.webpack,delete t.modules;let r=t.loading;return()=>s.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function l(e,t){let r=a.default,i={loading:e=>{let{error:t,isLoading:r,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e});let s=(i={...i,...t}).loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?r({...i,loader:()=>null!=s?s().then(o):Promise.resolve(o(()=>null))}):(delete i.webpack,delete i.modules,n(r,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(20997),s=r(59003),a=r.n(s),o=r(55013),n=r(87836),l=r(4931),c=r(81725),u=r(5330),d=r(84187),p=r(6407),h=r(12617),x=r.n(h);let f=function({heading:e,headingSlug:t,body:r,ctas:s,iconCardLinks:h,fixedColumns:f}){let m=a()(x().fixedColumnsMode,x()[`columns${f}`]);return null!=s&&null!=h&&(0,u.GN)({color:u.PQ.critical,title:"Error in CalloutCard",description:"Both `ctas` and `iconCardLinks` were passed to CalloutCard. Only provide one."}),(0,i.jsxs)(c.Z,{className:x().card,elevation:"base",children:[i.jsx("h2",{id:t,className:x().heading,children:e}),i.jsx("p",{className:x().body,children:r}),s&&s.length?i.jsx("div",{className:a()(x().ctas,f&&m),children:s.map((e,t)=>0==t?i.jsx(l.Z,{href:e.url,text:e.text},t):i.jsx(p.Z,{href:e.url,text:e.text,icon:i.jsx(o.k,{}),iconPosition:"trailing"},t))}):null,h&&h.length?i.jsx("ul",{className:a()(x().iconCardLinks,f&&m),children:h.map(({icon:e,text:t,url:r})=>i.jsx("li",{children:i.jsx(d.Z,{icon:n.e[e],text:t,url:r})},r))}):null]})}},59216:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var i=r(20997),s=r(93258),a=r(40290);let o=function({productSlug:e,className:t,size:r="extra-large"}){return i.jsx(s.Z,{size:r,brandColor:"hcp"==e?"neutral-dark":e,className:t,children:i.jsx(a.Z,{productSlug:e})})}},16787:(e,t,r)=>{"use strict";r.d(t,{X:()=>c});var i=r(20997),s=r(59003),a=r.n(s),o=r(31633),n=r(53913),l=r.n(n);let c=({className:e,id:t,level:r,text:s})=>{let n=a()(l().root,l()[`h${r}`],e);return i.jsx(o.Z,{className:n,id:t,level:r,size:{2:400,3:300}[r],weight:"bold",children:s})}},95471:(e,t,r)=>{"use strict";r.d(t,{x:()=>a});var i=r(20997),s=r(7400);let a=({body:e,ctas:t,heading:r,headingSlug:a})=>i.jsx(s.Z,{body:e,ctas:t,heading:r,headingSlug:a})},93534:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{f:()=>h});var s=r(20997),a=r(52445),o=r(47352),n=r(12851),l=r(39174),c=r(3813),u=r(48774),d=r.n(u),p=e([n,c]);[n,c]=p.then?(await p)():p;let h=({cards:e,description:t,title:r,headingId:i,headingLevel:u})=>(0,s.jsxs)("div",{className:d().root,children:[!!r&&s.jsx(c.XL,{level:u,id:i,text:r}),!!t&&s.jsx(l.Z,{className:d().description,size:300,weight:"regular",children:t}),s.jsx(n.Z,{children:e.map(({description:e,title:t,url:r})=>(0,s.jsxs)(o.Z,{ariaLabel:t,className:d().cardsGridListCardLink,href:r,children:[s.jsx(a.ll,{text:t}),s.jsx(a.SZ,{text:e})]},r))})]});i()}catch(e){i(e)}})},47805:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{w:()=>l});var s=r(20997),a=r(87836),o=r(76925),n=e([o]);o=(n.then?(await n)():n)[0];let l=({cards:e,productSlug:t})=>s.jsx(o.Z,{cards:e.map(({iconName:e,text:t,url:r})=>({icon:a.e[e],text:t,url:r})),productSlug:t});i()}catch(e){i(e)}})},3813:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{Of:()=>l.O,XL:()=>s.X,fy:()=>o.f,iu:()=>c.i,wq:()=>n.w,xO:()=>a.x});var s=r(16787),a=r(95471),o=r(93534),n=r(47805),l=r(25658),c=r(40173),u=e([o,n]);[o,n]=u.then?(await u)():u,i()}catch(e){i(e)}})},25658:(e,t,r)=>{"use strict";r.d(t,{O:()=>o});var i=r(20997),s=r(70276),a=r(4355);let o=({mdxSource:e})=>i.jsx(s.MDXRemote,{...e,components:{a:a.nu,p:a.im}})},40173:(e,t,r)=>{"use strict";r.d(t,{i:()=>n});var i=r(20997),s=r(16787),a=r(33029),o=r.n(a);let n=({level:e,id:t,text:r})=>i.jsx(s.X,{className:o().root,id:t,level:e,text:r})},23451:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{Z:()=>o});var s=r(3813),a=e([s]);s=(a.then?(await a)():a)[0];let o=Object.assign(()=>null,{AutosizedHeadingBlock:s.XL,CalloutCardBlock:s.xO,CardGridBlock:s.fy,IconCardGridBlock:s.wq,ParagraphBlock:s.Of,SectionHeadingBlock:s.iu});i()}catch(e){i(e)}})},68568:(e,t,r)=>{"use strict";r.d(t,{Jr:()=>s,vD:()=>o});var i=r(98124);function s(e){let{id:t,slug:r,name:s,short_name:o,description:n,icon:l,theme:c,ordered:u,level:d,category:p,tutorials:h,next_collection:x}=e;return{id:t,slug:r,name:s,shortName:o,description:n,icon:l,theme:c,ordered:u,level:d,category:p||void 0,tutorials:h.map(a),nextCollection:x?(0,i.je)(x):void 0}}function a(e){let{id:t,name:r,short_name:s,slug:a,description:n,read_time:l,edition:c,products_used:u,default_collection:d}=e.tutorial,p=u.map(o),h=(0,i.Oz)(e.tutorial),x=(0,i.Lf)(e.tutorial),f=e.tutorial.variants?.length>0?(0,i.yf)(e.tutorial.variants[0]):void 0;return{id:t,name:r,shortName:s||r,slug:a,description:n,readTime:l,edition:c,productsUsed:p,video:h,handsOnLab:x,defaultContext:(0,i.je)(d),variant:f}}function o(e){let{product:t,tutorial_id:r,is_primary:i,is_beta:s,min_version:a,max_version:o}=e,{id:n,slug:l,name:c,docs_url:u,description:d}=t;return{product:{id:n,slug:l,name:c,docsUrl:u,description:d},tutorial:r,isPrimary:i,isBeta:s,minVersion:a||void 0,maxVersion:o||void 0}}},80514:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{r:()=>u});var s=r(71017),a=r.n(s),o=r(93346),n=r(30806),l=r(26123),c=e([o,l]);async function u(e){let t=await d(e.id),r=Object.assign({},e);return delete r.featured_collections,{...r,featured_collections:t}}async function d(e){let t=(0,o._q)(e),r=a().join(l.YE,`${t}/collections`),i=await (0,n.U2)(r);if(i.ok)return(await i.json()).result;throw await (0,n.KC)(i)}[o,l]=c.then?(await c)():c,i()}catch(e){i(e)}})},98124:(e,t,r)=>{"use strict";r.d(t,{Lf:()=>n,Oz:()=>o,je:()=>a,ri:()=>s,yf:()=>l});var i=r(68568);function s(e){let{id:t,slug:r,name:s,short_name:c,description:u,content:d,default_collection_id:p,featured_collections:h,read_time:x,edition:f,products_used:m,variants:g}=e,v=m.map(i.vD),y=o(e),w=n(e);return{id:t,slug:r,name:s,shortName:c||s,description:u,content:d,collectionCtx:function(e,t){let r;let s=e.find(({id:e})=>e===t);return r="tutorials"in e[0]?e.map(i.Jr):e.map(a),{default:a(s),featuredIn:r}}(h,p),productsUsed:v,readTime:x,video:y,handsOnLab:w,edition:f,variant:g?.length>0?l(g[0]):void 0}}function a(e){let{id:t,name:r,slug:i,short_name:s,level:a,theme:o}=e;return{id:t,name:r,slug:i,shortName:s,level:a,theme:o}}function o({video_id:e,video_host:t,video_inline:r}){let i;return e&&(i={id:e,videoHost:t,videoInline:r}),i}function n({hands_on_lab_id:e,hands_on_lab_provider:t}){let r;return e&&(r={id:e,provider:t}),r}function l(e){let{options:t,...r}=e;return{...r,options:t.map(({display_order:e,...t})=>({displayOrder:e,...t}))}}},26123:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{BL:()=>h,YE:()=>x,ck:()=>d,mm:()=>p});var s=r(71017),a=r.n(s),o=r(30806),n=r(93346),l=r(98124),c=r(80514),u=e([n,c]);[n,c]=u.then?(await u)():u;let x="/tutorials";async function d(e){let t=(0,n._q)(e),r=a().join(x,t),i=await (0,o.U2)(r);if(i.ok){let e=await i.json(),t=await (0,c.r)(e.result);return(0,l.ri)(t)}if(404===i.status)return console.error("Learn Api Client: 404 — Tutorial not found"),null;throw await (0,o.KC)(i)}async function p(e,t){let r=(0,n.iy)(e,t),i=a().join(x,r),s=await (0,o.U2)(i);if(s.ok)return(await s.json()).result.map(l.ri);throw await (0,o.KC)(s)}async function h(e){let t=[],r=e?.limit?.toString(),i=await (0,n.Qd)({baseUrl:x,recurse:!r,limit:r,fullContent:e?.fullContent});return e?.slugsOnly?i.map(({slug:e,default_collection:t})=>({slug:e,collection_slug:t.slug})):i.map(l.ri)}i()}catch(e){i(e)}})},70271:(e,t,r)=>{"use strict";r.d(t,{Q:()=>o});var i=r(71017),s=r.n(i),a=r(30806);async function o({baseUrl:e,recurse:t=!0,limit:r="100",fullContent:i=!1,after:s,fetchedTutorials:a}){void 0===a&&(a=[]);let l=await n(e,r,s,i);if(l.ok){let s=await l.json(),n=[...a,...s.result];return!t||s.result.length<Number("100")?n:o({baseUrl:e,recurse:!0,limit:r,after:s.result[s.result.length-1].id,fetchedTutorials:n,fullContent:i})}}async function n(e,t,r,i){let o=new URLSearchParams({limit:t});r&&o.append("after",r),i&&o.append("full","1");let n=`?${o.toString()}`,l=s().join(e,n),c=await (0,a.U2)(l);if(c.ok)return c;throw await (0,a.KC)(c)}},93346:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{Qd:()=>a.Q,_q:()=>l,iy:()=>c});var s=r(9926),a=r(70271),o=e([s]);function n(e){return s.z.string().uuid().safeParse(e).success}function l(e){let t=e;return n(t)||(t=e.replace("/","|")),t}function c(e,t){let r=new URLSearchParams,i=e.toString();return e.length>0&&(n(e[0])?r.append("ids",i):r.append("slugs",i)),t&&r.append("full","1"),`?${r.toString()}`}s=(o.then?(await o)():o)[0],i()}catch(e){i(e)}})},45857:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>c,getStaticPaths:()=>l,getStaticProps:()=>s.b});var s=r(15177),a=r(10748),o=r(93898),n=e([s,a]);[s,a]=n.then?(await n)():n;let l=async()=>({paths:o.KD.map(e=>({params:{productSlug:e}})),fallback:!1}),c=a.Z;i()}catch(e){i(e)}})},65020:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{Z:()=>h});var s=r(20997),a=r(88561),o=r(20542),n=r(98634),l=r(12559),c=r(39049),u=r(71007),d=r.n(u),p=e([o]);o=(p.then?(await p)():p)[0];let h=({pageHeading:e,pageSubtitle:t,iconCardGridItems:r,versions:i})=>{let u=(0,a.j2)();return(0,s.jsxs)("header",{children:[s.jsx(n.Z,{versionSelectorSlot:i?s.jsx(c.Z,{options:i}):null,headingSlot:s.jsx(l.Z,{pageHeading:e,pageSubtitle:t})}),"terraform"!==u.slug?s.jsx("div",{className:d().iconCardGridLink,children:s.jsx(o.tf,{iconCardGridItems:r})}):null]})};i()}catch(e){i(e)}})},4460:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=r(20997),s=r(87836),a=r(88561),o=r(84187),n=r(29629),l=r.n(n);let c=({iconCardGridItems:e})=>{let t=(0,a.j2)(),r=e||t.rootDocsPaths;return i.jsx("ul",{className:l().root,children:r.map(({iconName:e,path:r,name:a})=>t.currentRootDocsPath.path===r?null:i.jsx("li",{children:i.jsx(o.Z,{icon:s.e[e],productSlug:t.slug,text:a,url:`/${t.slug}/${r}`})},r))})}},20542:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{Mj:()=>s.Z,tf:()=>a.Z,ui:()=>o.ZP});var s=r(65020),a=r(4460),o=r(3972),n=e([s,o]);[s,o]=n.then?(await n)():n,i()}catch(e){i(e)}})},3972:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{II:()=>x,ZP:()=>f,ff:()=>h});var s=r(20997),a=r(16689),o=r(73673),n=r.n(o),l=r(88561),c=r(23451),u=r(43219),d=r.n(u),p=e([c]);c=(p.then?(await p)():p)[0];let h="Getting Started",x=n()(h),f=({blocks:e})=>{let t=(0,l.j2)();return s.jsx("div",{className:d().root,children:e.map((e,r)=>"paragraph"===e.type?(0,a.createElement)(c.Z.ParagraphBlock,{...e,key:r}):"section-heading"===e.type?s.jsx(c.Z.SectionHeadingBlock,{id:e.headingId,level:e.headingLevel,text:e.title},r):"icon-card-grid"===e.type?s.jsx(c.Z.IconCardGridBlock,{cards:e.cards,productSlug:t.slug},r):"card-grid"===e.type?s.jsx(c.Z.CardGridBlock,{cards:e.cards,description:e.description,headingLevel:e.headingLevel,headingId:e.headingId,title:e.title},r):"getting-started-card"===e.type?s.jsx(c.Z.CalloutCardBlock,{body:e.description,ctas:[e.callToAction],heading:h,headingSlug:x},r):void 0)})};i()}catch(e){i(e)}})},10748:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{Z:()=>m});var s=r(20997),a=r(59003),o=r.n(a),n=r(79975),l=r(91844),c=r(41204),u=r(20542),d=r(43814),p=r.n(d),h=r(51714),x=r.n(h),f=e([n,u]);[n,u]=f.then?(await f)():f;let m=({mdxSource:e,pageContent:t,pageHeading:r,product:i,versions:a,layoutProps:d,outlineItems:h})=>{let f;let{pageSubtitle:m,marketingContentBlocks:g}=t;if(e){let t=(0,l.Z)(i.slug),r=o()(x()[`${i.slug}MDXWrapper`],x().mdxSlotWrapper,p().mdxContent);f=s.jsx("div",{className:r,children:s.jsx(c.Z,{mdxRemoteProps:{...e,components:{...t}}})})}return s.jsx(n.Z,{...d,outlineItems:h,children:(0,s.jsxs)("div",{className:a?x().docsLandingWithVersions:null,children:[s.jsx(u.Mj,{pageHeading:r,pageSubtitle:m,iconCardGridItems:t.iconCardGridItems,versions:a}),s.jsx(u.ui,{blocks:g}),f]})})};i()}catch(e){i(e)}})},15177:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{b:()=>g});var s=r(57147),a=r.n(s),o=r(71017),n=r.n(o),l=r(73673),c=r.n(l),u=r(64662),d=r(87927),p=r(8465),h=r(3972),x=r(27062),f=e([p,h]);[p,h]=f.then?(await f)():f;let m=({marketingContentBlocks:e,pageTitle:t})=>{let r;let i=[],s=e.map(e=>{let t;let s={...e};if("section-heading"===e.type){let i=c()(e.title,{lower:!0});r=t={level:2,title:e.title,id:i,slug:i}}else if("card-grid"===e.type){let i;i=r?r.level+1:2;let s=c()(e.title,{lower:!0});t={level:i,title:e.title,id:s,slug:s}}else if("getting-started-card"===e.type){let e=h.II;t={level:2,title:h.ff,id:e,slug:e}}return t&&(i.push(t),s.headingLevel=t.level,s.headingId=t.id),s}),a=c()(t,{lower:!0});return{sidecarHeadings:[{level:1,id:a,slug:a,title:t},...i],marketingContentBlocksWithHeadingLevels:s}},g=async e=>{let t="docs",r=e.params.productSlug,i=(0,u.i)(r),s=i.rootDocsPaths.find(e=>e.path===t),{includeMDXSource:o=!1,name:l,productSlugForLoader:c=i.slug,shortName:h}=s,f=h||l,g=n().join(process.cwd(),`src/content/${i.slug}/docs-landing.json`),v=JSON.parse(a().readFileSync(g,"utf8")),{getStaticProps:y}=(0,p.O)({product:i,productSlugForLoader:c,basePath:t,baseName:f}),w=await y({...e,params:{page:[]}});if(!("props"in w))return w;let j=o?w.props.outlineItems.slice(1):[],{sidecarHeadings:_,marketingContentBlocksWithHeadingLevels:q}=m({marketingContentBlocks:v.marketingContentBlocks,pageTitle:`${i.name} ${f}`}),b=await (0,x.P)(q),k=_[0],S={id:k.id,title:k.title},P=[...(0,d.Z)(_),...j],C={...w.props,mdxSource:o?w.props.mdxSource:null,layoutProps:{...w.props.layoutProps,githubFileUrl:null},pageContent:{...v,marketingContentBlocks:b},pageHeading:S,outlineItems:P,product:{...w.props.product,currentRootDocsPath:s}};return{...w,props:C}};i()}catch(e){i(e)}})},27062:(e,t,r)=>{"use strict";r.d(t,{P:()=>s});var i=r(57112);async function s(e){return await Promise.all(e.map(async e=>"paragraph"===e.type?{type:e.type,mdxSource:await (0,i.serialize)(e.text)}:e))}},74830:(e,t,r)=>{"use strict";e.exports=r(87093).vendored.contexts.Loadable},5152:(e,t,r)=>{e.exports=r(58384)},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},76791:e=>{"use strict";e.exports=require("@mdx-js/util")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},51356:e=>{"use strict";e.exports=require("bail")},41421:e=>{"use strict";e.exports=require("ccount")},59003:e=>{"use strict";e.exports=require("classnames")},57499:e=>{"use strict";e.exports=require("collapse-white-space")},71239:e=>{"use strict";e.exports=require("events")},10950:e=>{"use strict";e.exports=require("extend")},79316:e=>{"use strict";e.exports=require("fathom-client")},98076:e=>{"use strict";e.exports=require("gray-matter")},48010:e=>{"use strict";e.exports=require("http-status-codes")},76675:e=>{"use strict";e.exports=require("is-alphabetical")},61455:e=>{"use strict";e.exports=require("is-alphanumeric")},93715:e=>{"use strict";e.exports=require("is-buffer")},69893:e=>{"use strict";e.exports=require("is-decimal")},20298:e=>{"use strict";e.exports=require("is-whitespace-character")},80791:e=>{"use strict";e.exports=require("is-word-character")},56734:e=>{"use strict";e.exports=require("js-cookie")},54689:e=>{"use strict";e.exports=require("longest-streak")},41197:e=>{"use strict";e.exports=require("markdown-escapes")},73584:e=>{"use strict";e.exports=require("markdown-table")},53625:e=>{"use strict";e.exports=require("mdast-util-compact")},52591:e=>{"use strict";e.exports=require("moize")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},70276:e=>{"use strict";e.exports=require("next-mdx-remote")},57112:e=>{"use strict";e.exports=require("next-mdx-remote/serialize")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},74809:e=>{"use strict";e.exports=require("node-fetch")},82174:e=>{"use strict";e.exports=require("parse-entities")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3515:e=>{"use strict";e.exports=require("remark-mdx")},13729:e=>{"use strict";e.exports=require("repeat-string")},10912:e=>{"use strict";e.exports=require("semver")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},67545:e=>{"use strict";e.exports=require("state-toggle")},42214:e=>{"use strict";e.exports=require("stringify-entities")},25325:e=>{"use strict";e.exports=require("to-vfile")},32385:e=>{"use strict";e.exports=require("trim")},41358:e=>{"use strict";e.exports=require("trim-trailing-lines")},40969:e=>{"use strict";e.exports=require("trough")},96784:e=>{"use strict";e.exports=require("unherit")},68603:e=>{"use strict";e.exports=require("unist-util-flatmap")},41925:e=>{"use strict";e.exports=require("unist-util-map")},75295:e=>{"use strict";e.exports=require("unist-util-remove-position")},48858:e=>{"use strict";e.exports=require("use-query-params")},33084:e=>{"use strict";e.exports=require("vfile")},3465:e=>{"use strict";e.exports=require("vfile-location")},5170:e=>{"use strict";e.exports=require("xtend")},66197:e=>{"use strict";e.exports=import("framer-motion")},46269:e=>{"use strict";e.exports=import("react-instantsearch-hooks-web")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[7163,5605,6859,8706,1525,9873,7751,3394,7820,3900,4572,6517,1274,4355,9795,7245,6450,8465],()=>r(51886));module.exports=i})();