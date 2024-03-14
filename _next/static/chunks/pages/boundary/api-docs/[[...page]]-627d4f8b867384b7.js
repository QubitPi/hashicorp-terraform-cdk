(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2648],{65696:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/boundary/api-docs/[[...page]]",function(){return n(30069)}])},8852:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});var i=n(85893),r=n(67294);let a=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",title:a,...s}=e,l=(0,r.useMemo)(()=>a?"title-"+Math.random().toString(36).substr(2,9):void 0,[a]);return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!a,ref:t,"aria-labelledby":l,...s,children:[a?(0,i.jsx)("title",{id:l,children:a}):null,(0,i.jsxs)("g",{fill:n,children:[(0,i.jsx)("path",{d:"M8 7a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 7zM8 4a1 1 0 000 2h.007a1 1 0 000-2H8z"}),(0,i.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z",clipRule:"evenodd"})]})]})})},41204:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var i=n(85893),r=n(94184),a=n.n(r),s=n(28093),l=n(67294),o=function(e){let t=l.Children.count(e),n=l.Children.toArray(e);if(1!==t||1!==n.length)throw Error("In ImageConfig, found ".concat(t," total children and ").concat(n.length," valid children. Please ensure that ImageConfig has exactly one child element, and ensure it is a valid image element."));let i=n[0];if(!(0,l.isValidElement)(i))throw Error("In ImageConfig, found child that does not seem to be a valid React element. Please ensure that ImageConfig contains a valid image element.");let r=i.props.mdxType||i.type;if("img"===r)return i;if("p"===r)return function(e){let t=l.Children.toArray(e.props.children);t.length>1&&console.warn("Warning: <ImageConfig /> was passed multiple children. We'll filter these children to find the image element being configured. All other children will be ignored. Please ensure that ImageConfig contains only a single image element.");let n=t.filter(e=>!!(0,l.isValidElement)(e)&&"img"==(e.props.mdxType||e.type));if(0==n.length||!(0,l.isValidElement)(n[0]))throw Error("In ImageConfig, could not find a valid image element. Please ensure that ImageConfig contains a valid image element. Child element details: ".concat(JSON.stringify(e,null,2)));return n[0]}(i);throw Error('In ImageConfig, found child with unexpected type: "'.concat(r,'". Please ensure that ImageConfig contains a single <img /> element. Child element details: ').concat(JSON.stringify(i,null,2)))},c=n(17195),d=n(62537),h=n.n(d),p=n(4355),u=n(3055),g=n.n(u);let m={a:p.nu,blockquote:p.N2,h1:p.NM,h2:p.e2,h3:p.Uw,h4:p.RC,h5:p.xh,h6:p.Je,inlineCode:p.yf,li:p.l2,ol:p.P8,p:p.im,pre:p.cb,table:p.pf,ul:p.u$,CodeBlockConfig:p.No,CodeTabs:p.kw,Highlight:p.FZ,ImageConfig:function(e){let{children:t,caption:n,hideBorder:r=!1,width:a,height:s,inline:l}=e,{src:d,alt:p,title:u}=o(t).props;if("string"!=typeof d||""==d)throw Error("Images in MDX must have an source defined. Use the format ![some alt text](path/to/img.jpg). Image details: ".concat(JSON.stringify({src:d,alt:p,title:u})," "));return n?(0,i.jsxs)("figure",{className:h().figure,children:[(0,i.jsx)(c.Z,{src:d,alt:p,title:u,noMargin:!0,noBorder:r,width:a,height:s,inline:l}),(0,i.jsx)("figcaption",{className:h().caption,children:n})]}):(0,i.jsx)(c.Z,{src:d,alt:p,title:u,noBorder:r,width:a,height:s,inline:l})},Note:p.z9,Tab:p.mn,Tabs:p.Nk,Tip:p.au,TryHcpCallout:p.BO,Warning:p.am};var _=e=>{let t,{className:n,children:r,mdxRemoteProps:l}=e;return t=r||(0,i.jsx)(s.R,{...l,components:{...m,...null==l?void 0:l.components}}),(0,i.jsx)("div",{className:a()(g().root,n),children:t})}},17195:function(e,t,n){"use strict";var i=n(85893),r=n(25675),a=n.n(r),s=n(94184),l=n.n(s),o=n(7900),c=n.n(o);t.Z=function(e){let{src:t,alt:n,title:r,noMargin:s,noBorder:o,height:d,width:h,inline:p=!1}=e;"string"!=typeof n&&console.warn('Warning: Found MDX image with undefined alternate text. Even if an image is decorative, it\'s important for alt to be set to an empty string. Please define alt text the syntax "![Some alt text.](/some-image.jpg)". Image details: '.concat(JSON.stringify({src:t,alt:n,title:r})));let u=function(e,t){let n={};return e&&(n.width="".concat(e,"px")),t&&(n.height="".concat(t,"px")),n}(h,d),g=h&&d?{width:h,height:d}:null;g||(g=function(e){if(!e.startsWith("https://content.hashicorp.com"))return null;let t=new URL(e).searchParams,n=t.get("width"),i=t.get("height");return n&&i?{width:parseInt(n),height:parseInt(i)}:null}(t));let m=function(e){let t;let n=new URL(e,"https://developer.hashicorp.com"),i=new RegExp(/#(dark|light)-theme-only/);return i.test(n.hash)?t=n.hash.match(i)[1]:n.hash&&console.warn("[Image]: A hash (#) was detected in src url but it does not match the theme pattern: #{dark|light}-theme-only"),t}(t);return(0,i.jsx)("span",{className:l()(c().root,{[c().noMargin]:s,[c().noBorder]:o,[c().inline]:p}),"data-show-on-theme":m||null,children:g?(0,i.jsx)(a(),{src:t,alt:n,title:r,width:g.width,height:g.height,style:u}):(0,i.jsx)("img",{src:t,alt:n,title:r,style:u})})}},31187:function(e,t,n){"use strict";var i=n(85893),r=n(9008),a=n.n(r);t.Z=function(e){let{isVersioned:t}=e;return t?(0,i.jsx)(a(),{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null}},5012:function(e,t,n){"use strict";var i=n(85893),r=n(94184),a=n.n(r),s=n(39174),l=n(60127),o=n.n(l);t.Z=e=>{let t,{className:n,type:r="neutral",description:l,icon:c,title:d}=e,h=a()(o().root,o()[r],n);return d&&(t=(0,i.jsx)(s.Z,{asElement:"p",className:o().title,size:200,weight:"semibold",children:d})),(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("div",{className:o().icon,children:c}),(0,i.jsxs)("div",{className:o().contentContainer,children:[t,(0,i.jsx)(s.Z,{asElement:"p",className:o().description,size:200,weight:"regular",children:l})]})]})}},53165:function(e,t,n){"use strict";var i=n(85893),r=n(95878),a=n(16641),s=n.n(a);t.Z=function(e){let{options:t,label:n}=e;if(!t||0===t.length)return null;let a=t.find(e=>e.isSelected);return(0,i.jsx)("nav",{children:(0,i.jsxs)(r.ZP,{"aria-label":a.ariaLabel,className:s().root,text:a.label,color:"secondary",listPosition:"right",children:[(0,i.jsx)(r.lF,{children:n}),t.filter(e=>!e.isSelected).map(e=>(0,i.jsx)(r.VD,{href:e.href,rel:e.isLatest?void 0:"nofollow",children:e.label},e.href))]})})}},30069:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return z},default:function(){return U}});var i=n(85893),r=n(1151),a=n(53165),s=n(31187),l=n(64713),o=n(37614),c=n(61436),d=n.n(c),h=n(4355),p=n(51500),u=function e(t){let{name:n,data:r,isFirstItem:a,isLastItem:s,arrayDepth:l=0}=t;if("array"===r.type&&r.items)return(0,i.jsx)(e,{name:n,data:r.items,arrayDepth:l+1,isFirstItem:a,isLastItem:s});let c="object"===r.type&&!!r.properties,u=l>0?(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];for(let i=0;i<e;i++)n.push(t);return n})(l,"[]").join(""):"",g="".concat(r.type).concat(u),m=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.yf,{className:d().name,size:100,children:n})," ",(0,i.jsx)("code",{className:"".concat(d().typeString," g-type-code"),children:g})," ",r.required&&(0,i.jsx)(p.Z,{text:"Required",color:"highlight"}),r["x-beta-feature"]?(0,i.jsx)(p.Z,{text:"Beta",color:"neutral"}):null,r.title&&(0,i.jsx)("div",{className:d().descriptiveText,dangerouslySetInnerHTML:{__html:r.title}})]}),_=(0,i.jsx)(i.Fragment,{children:r.description&&(0,i.jsx)("div",{className:d().descriptiveText,dangerouslySetInnerHTML:{__html:r.description}})});return c?(0,i.jsx)("div",{className:d().root,children:(0,i.jsx)(o.Z,{title:m,description:_,children:(0,i.jsxs)("div",{className:d().nestedProperties,children:[(0,i.jsx)("hr",{className:d().divider}),Object.keys(r.properties).map((t,n)=>(0,i.jsx)(e,{name:t,data:r.properties[t],isFirstItem:0===n,isLastItem:n===Object.keys(r.properties).length-1},t))]})})}):(0,i.jsxs)("div",{className:d().root,children:[m,_]})},g=function(e){let{data:t}=e;return t&&t.schema&&t.schema.properties?(0,i.jsx)("div",{children:Object.keys(t.schema.properties).map((e,n)=>(0,i.jsx)(u,{name:e,data:t.schema.properties[e],isFirstItem:0===n,isLastItem:n===Object.keys(t.schema.properties).length-1},e))}):(0,i.jsx)("div",{children:"No content."})},m=function(){return(m=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function _(e){return e.toLowerCase()}var x=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],f=/[^A-Z0-9]+/gi;function v(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce(function(e,t){return e.replace(t,n)},e)}function j(e){var t;return(t=e.toLowerCase()).charAt(0).toUpperCase()+t.substr(1)}var y=function(e){if(!e.schema||!e.schema.properties)return[];let t=e.schema.properties;return Object.keys(t).reduce((e,n)=>{let i=Object.assign({},t[n]);return i.name=n,i.readOnly||e.push(i),e},[])},w=n(94184),b=n.n(w),N=n(44370),C=n.n(N),I=n(81725),Z=n(39174);function S(e){let{title:t,params:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:C().columnSectionHeading,children:t}),n.map((e,t)=>(0,i.jsx)(u,{name:e.name,data:e,isFirstItem:0===t,isLastItem:t===n.length-1},e.name))]})}var P=function(e){var t,n;let{data:r,path:a,type:s,renderOperationIntro:c}=e,{operationId:d,parameters:u=[],responses:w={},summary:N}=r,P=w["200"],k=(t=d.split("_").pop(),void 0===n&&(n={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,i=t.stripRegexp,r=t.transform,a=t.delimiter,s=v(v(e,void 0===n?x:n,"$1\x00$2"),void 0===i?f:i,"\x00"),l=0,o=s.length;"\x00"===s.charAt(l);)l++;for(;"\x00"===s.charAt(o-1);)o--;return s.slice(l,o).split("\x00").map(void 0===r?_:r).join(void 0===a?" ":a)}(t,m({delimiter:" ",transform:j},n))),E=u.filter(e=>"path"===e.in),L=u.filter(e=>"query"===e.in),T=u.filter(e=>"body"===e.in)[0],H=T?y(T):[];return(0,i.jsx)("div",{className:b()(C().root),children:(0,i.jsxs)(o.Z,{title:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Z.Z,{className:C().title,asElement:"span",weight:"semibold",children:k}),r["x-beta-feature"]?(0,i.jsx)(p.Z,{className:C().titleBadge,text:"Beta",color:"neutral"}):null]}),description:(0,i.jsx)("span",{className:C().meta,children:(0,i.jsxs)("span",{className:C().endpoint,onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(h.yf,{className:C().endpointInlineCode,children:s.toUpperCase()}),(0,i.jsx)(h.yf,{className:b()(C().endpointInlineCode,C().path),children:a})]})}),children:[(0,i.jsx)("hr",{className:C().divider}),(0,i.jsxs)("div",{children:[c?c({data:r}):null,(0,i.jsx)("div",{className:C().summary,dangerouslySetInnerHTML:{__html:null!=N?N:""}}),(0,i.jsxs)(l.Z,{showAnchorLine:!1,children:[(0,i.jsxs)(l.O,{heading:"Request",children:[(0,i.jsx)("span",{className:C().spacer}),(0,i.jsxs)(I.Z,{elevation:"base",children:[E.length>0?(0,i.jsx)(S,{title:"Path Parameters",params:E}):null,L.length>0?(0,i.jsx)(S,{title:"Query Parameters",params:L}):null,H.length>0?(0,i.jsx)(S,{title:"Body Parameters",params:H}):null]})]}),(0,i.jsxs)(l.O,{heading:"Response",children:[(0,i.jsx)("span",{className:C().spacer}),(0,i.jsx)(I.Z,{elevation:"base",children:P?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:C().columnSectionHeading,children:"Successful Response"}),(0,i.jsx)(g,{data:P})]}):(0,i.jsx)("p",{children:"No response has been defined."})})]})]})]})]})})},k=n(98634),E=n(8852),L=n(74245),T=n(5012),H=n(39522),O=n.n(H);function A(e){let t,{isVersionedUrl:n,currentVersion:r,latestStableVersion:a}=e;return n&&a.versionId!==r.versionId?(t="preview"===r.releaseStage?"You are viewing documentation for the preview version ".concat(r.versionId,"."):"You are viewing documentation for version ".concat(r.versionId,"."),(0,i.jsx)(R,{message:t,latestLinkUrl:"/hcp/api-docs/packer",latestLinkText:"View latest version"})):null}function R(e){let{message:t,latestLinkUrl:n,latestLinkText:r}=e;return(0,i.jsx)(T.Z,{className:O().root,description:(0,i.jsxs)(i.Fragment,{children:[t," ",(0,i.jsx)(L.Z,{className:O().versionAlertLink,href:n,textSize:200,textWeight:"medium",children:r}),"."]}),icon:(0,i.jsx)(E.k,{}),type:"highlight"})}var M=n(10290),B=n.n(M);function F(e){let{text:t,badgeText:n,elem:r}=e;return(0,i.jsxs)(r,{className:B().root,children:[t,n?(0,i.jsx)("span",{className:B().badgeContainer,children:(0,i.jsx)(p.Z,{text:n,type:"outlined"})}):null]})}n(41204),n(2296);var W=n(79558),D=n.n(W),z=!0,U=function(e){var t;let{alertSlot:n,pageHeading:l,layoutProps:o,serviceData:c,massagePathFn:d=e=>e,renderOperationIntro:h,isVersionedUrl:p,versionAlert:u,versionSwitcherData:g}=e,m=(null==c?void 0:c.name)?"p":"h1",_=(null==g?void 0:null===(t=g.options)||void 0===t?void 0:t.length)>1;return(0,i.jsxs)(r.Z,{breadcrumbLinks:o.breadcrumbLinks,sidebarNavDataLevels:o.sidebarNavDataLevels,alertBannerSlot:(0,i.jsx)(A,{...u}),children:[(0,i.jsx)(s.Z,{isVersioned:p}),n||null,(0,i.jsx)(k.Z,{headingSlot:(0,i.jsx)(F,{elem:m,text:l.text,badgeText:l.badgeText}),versionSelectorSlot:_?(0,i.jsx)(a.Z,{label:g.label,options:g.options}):null}),c?(0,i.jsxs)("div",{className:D().serviceData,children:[c.name?(0,i.jsx)("h1",{className:D().serviceHeading,children:c.name}):null,c.operations.map(e=>(0,i.jsx)(P,{type:e.__type,data:e,path:d(e.__path),renderOperationIntro:h},e.__type+e.__path))]}):(0,i.jsx)("p",{className:D().sidebarPrompt,children:"Select a service from the sidebar."})]})}},98634:function(e,t,n){"use strict";var i=n(85893),r=n(94184),a=n.n(r),s=n(17103),l=n.n(s);t.Z=function(e){let{className:t,versionSelectorSlot:n,headingSlot:r}=e;return(0,i.jsxs)("div",{className:a()(l().root,t),children:[n?(0,i.jsx)("div",{className:l().versionSwitcherWrapper,children:n}):null,(0,i.jsx)("div",{className:l().pageHeadingWrapper,children:r})]})}},3055:function(e){e.exports={root:"dev-dot-content_root__UJDct hds-typography-body-300"}},62537:function(e){e.exports={figure:"image-config_figure__ryaEI",caption:"image-config_caption__kRe62 hds-typography-body-200"}},7900:function(e){e.exports={root:"image_root__Kkwm7",noMargin:"image_noMargin__4ittr",noBorder:"image_noBorder__e_8et",inline:"image_inline__EKAR7"}},44370:function(e){e.exports={root:"style_root__HaTGj",meta:"style_meta__1Pcia",title:"style_title__wEZfO",titleBadge:"style_titleBadge__e7i4f",endpoint:"style_endpoint__7WuPd",endpointInlineCode:"style_endpointInlineCode__scxW2",path:"style_path__QDFqJ",divider:"style_divider__3wwjs",spacer:"style_spacer__CbSuT",columnSectionHeading:"style_columnSectionHeading__Bfxqw hds-typography-display-200",summary:"style_summary__eP6im hds-typography-body-200"}},61436:function(e){e.exports={root:"style_root__aDpqF",divider:"style_divider__dOlXG",typeString:"style_typeString__T4aP8 hds-typography-code-100",nestedProperties:"style_nestedProperties__9TAby",descriptiveText:"style_descriptiveText__fNjF6 hds-typography-body-200"}},60127:function(e){e.exports={root:"page-alert_root__8NqzT",icon:"page-alert_icon__ZgLc1",contentContainer:"page-alert_contentContainer__Hxlnn",title:"page-alert_title__DHJ2p",description:"page-alert_description__ZwKbE",neutral:"page-alert_neutral__iIHfs",highlight:"page-alert_highlight__RAjtn",success:"page-alert_success__lHGQg",warning:"page-alert_warning__8HR_P",critical:"page-alert_critical__FMKlD"}},16641:function(e){e.exports={root:"version-switcher_root__5pTE6"}},79558:function(e){e.exports={serviceData:"api-docs-view_serviceData__MoVUW",serviceHeading:"api-docs-view_serviceHeading__JGVaK hds-typography-display-400",sidebarPrompt:"api-docs-view_sidebarPrompt__BO3UV hds-typography-body-300"}},39522:function(e){e.exports={root:"api-docs-version-alert_root___inaN",versionAlertLink:"api-docs-version-alert_versionAlertLink__5CWzg"}},10290:function(e){e.exports={root:"heading-with-badge_root__HM0hl hds-typography-display-500",badgeContainer:"heading-with-badge_badgeContainer__5oCEd"}},17103:function(e){e.exports={root:"docs-page-heading_root__QuBg_",pageHeadingWrapper:"docs-page-heading_pageHeadingWrapper__LEMQ7",versionSwitcherWrapper:"docs-page-heading_versionSwitcherWrapper__bdlWl"}}},function(e){e.O(0,[3262,9547,1525,1709,9873,5665,62,6517,1151,5044,9067,9774,2888,179],function(){return e(e.s=65696)}),_N_E=e.O()}]);