(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8979],{18602:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var i=r(85893),a=r(93967),n=r.n(a),o=r(6812),s=r(67294),l=function(e){let t=s.Children.count(e),r=s.Children.toArray(e);if(1!==t||1!==r.length)throw Error("In ImageConfig, found ".concat(t," total children and ").concat(r.length," valid children. Please ensure that ImageConfig has exactly one child element, and ensure it is a valid image element."));let i=r[0];if(!(0,s.isValidElement)(i))throw Error("In ImageConfig, found child that does not seem to be a valid React element. Please ensure that ImageConfig contains a valid image element.");let a=i.props.mdxType||i.type;if("img"===a)return i;if("p"===a)return function(e){let t=s.Children.toArray(e.props.children);t.length>1&&console.warn("Warning: <ImageConfig /> was passed multiple children. We'll filter these children to find the image element being configured. All other children will be ignored. Please ensure that ImageConfig contains only a single image element.");let r=t.filter(e=>!!(0,s.isValidElement)(e)&&"img"==(e.props.mdxType||e.type));if(0==r.length||!(0,s.isValidElement)(r[0]))throw Error("In ImageConfig, could not find a valid image element. Please ensure that ImageConfig contains a valid image element. Child element details: ".concat(JSON.stringify(e,null,2)));return r[0]}(i);throw Error('In ImageConfig, found child with unexpected type: "'.concat(a,'". Please ensure that ImageConfig contains a single <img /> element. Child element details: ').concat(JSON.stringify(i,null,2)))},d=r(29163),u=r(72963),c=r.n(u),m=r(49423),h=r(12315),g=r.n(h);let _={a:m.nu,blockquote:m.N2,h1:m.NM,h2:m.e2,h3:m.Uw,h4:m.RC,h5:m.xh,h6:m.Je,inlineCode:m.yf,li:m.l2,ol:m.P8,p:m.im,pre:m.cb,table:m.pf,ul:m.u$,CodeBlockConfig:m.No,CodeTabs:m.kw,Highlight:m.FZ,ImageConfig:function(e){let{children:t,caption:r,hideBorder:a=!1,width:n,height:o,inline:s}=e,{src:u,alt:m,title:h}=l(t).props;if("string"!=typeof u||""==u)throw Error("Images in MDX must have an source defined. Use the format ![some alt text](path/to/img.jpg). Image details: ".concat(JSON.stringify({src:u,alt:m,title:h})," "));return r?(0,i.jsxs)("figure",{className:c().figure,children:[(0,i.jsx)(d.Z,{src:u,alt:m,title:h,noMargin:!0,noBorder:a,width:n,height:o,inline:s}),(0,i.jsx)("figcaption",{className:c().caption,children:r})]}):(0,i.jsx)(d.Z,{src:u,alt:m,title:h,noBorder:a,width:n,height:o,inline:s})},Note:m.z9,Tab:m.mn,Tabs:m.Nk,Tip:m.au,TryHcpCallout:m.BO,Warning:m.am};var p=e=>{let t,{className:r,children:a,mdxRemoteProps:s}=e;return t=a||(0,i.jsx)(o.R,{...s,components:{..._,...null==s?void 0:s.components}}),(0,i.jsx)("div",{className:n()(g().root,r),children:t})}},29163:function(e,t,r){"use strict";var i=r(85893),a=r(25675),n=r.n(a),o=r(93967),s=r.n(o),l=r(79359),d=r.n(l);t.Z=function(e){let{src:t,alt:r,title:a,noMargin:o,noBorder:l,height:u,width:c,inline:m=!1}=e;"string"!=typeof r&&console.warn('Warning: Found MDX image with undefined alternate text. Even if an image is decorative, it\'s important for alt to be set to an empty string. Please define alt text the syntax "![Some alt text.](/some-image.jpg)". Image details: '.concat(JSON.stringify({src:t,alt:r,title:a})));let h=function(e,t){let r={};return e&&(r.width="".concat(e,"px")),t&&(r.height="".concat(t,"px")),r}(c,u),g=c&&u?{width:c,height:u}:null;g||(g=function(e){if(!e.startsWith("https://content.hashicorp.com"))return null;let t=new URL(e).searchParams,r=t.get("width"),i=t.get("height");return r&&i?{width:parseInt(r),height:parseInt(i)}:null}(t));let _=function(e){let t;let r=new URL(e,"https://developer.hashicorp.com"),i=new RegExp(/#(dark|light)-theme-only/);return i.test(r.hash)?t=r.hash.match(i)[1]:r.hash&&console.warn("[Image]: A hash (#) was detected in src url but it does not match the theme pattern: #{dark|light}-theme-only"),t}(t);return(0,i.jsx)("span",{className:s()(d().root,{[d().noMargin]:o,[d().noBorder]:l,[d().inline]:m}),"data-show-on-theme":_||null,children:g?(0,i.jsx)(n(),{src:t,alt:r,title:a,width:g.width,height:g.height,style:h}):(0,i.jsx)("img",{src:t,alt:r,title:a,style:h})})}},63205:function(e,t,r){"use strict";r.d(t,{V:function(){return d},l:function(){return u}});var i=r(85893),a=r(93967),n=r.n(a),o=r(25462),s=r(97563),l=r.n(s);function d(e){let{backgroundClassName:t,startSlot:r,endSlot:a,className:o}=e;return(0,i.jsxs)("div",{className:l().root,children:[(0,i.jsx)("div",{className:n()(l().backgroundBase,t)}),(0,i.jsx)("div",{className:n()(l().rootContainer,o),children:(0,i.jsxs)("div",{className:l().rootLayout,children:[(0,i.jsx)("div",{className:n()(l().startSlot,o),children:r}),a?(0,i.jsx)("div",{className:l().endSlot,children:a}):null]})})]})}function u(e){let{heading:t,description:r,foreground:a,className:s}=e;return(0,i.jsxs)("div",{className:n()(l().textRoot,l()["foreground-".concat(a)]),children:[(0,i.jsx)("h1",{className:n()(l().textHeading,s),dangerouslySetInnerHTML:{__html:t}}),(null==r?void 0:r.length)?(0,i.jsx)("p",{className:l().textDescription,dangerouslySetInnerHTML:{__html:(0,o.Z)(r,18)}}):null]})}},30007:function(e,t,r){"use strict";var i=r(85893),a=r(33878),n=r(7289),o=r(9682),s=r(57319),l=r.n(s);t.Z=function(){return(0,i.jsxs)(n.Z,{className:l().mobileMenuContainer,children:[(0,i.jsx)(n.v,{}),(0,i.jsxs)("ul",{className:l().mobileMenuNavList,children:[(0,i.jsx)(o.Rd,{item:{heading:"Main Menu"}}),(0,a.A)().map((e,t)=>(0,i.jsx)(o.Rd,{item:e},t))]})]})}},53676:function(e,t,r){"use strict";r.d(t,{bx:function(){return b},u0:function(){return N},Sz:function(){return j},hj:function(){return M},KN:function(){return I},yv:function(){return ee},wu:function(){return ei},Ct:function(){return es}});var i=r(85893),a=r(93967),n=r.n(a),o=r(38248),s=r(81059),l=r.n(s),d=function(e){let{className:t,items:r}=e,a=r.length;return(0,i.jsx)("div",{className:n()(l().root,t),children:r.map((e,t)=>{let{title:r,content:n,initialOpen:s}=e;return(0,i.jsx)(o.Z,{title:r,initialOpen:s,groupData:{numItems:a,currentIndex:t},children:n},r)})})},u=r(18602),c=r(29163),m=r(25675),h=r.n(m),g=r(16029),_=r.n(g),p=r(47419),f=r.n(p);let x={img:function(e){let{alt:t,src:r,title:a}=e;return(0,i.jsx)(c.Z,{alt:t,src:r,title:a,noBorder:!0})},ThemedImage:function(e){let{lightSrc:t,darkSrc:r,alt:a,title:n,width:o,height:s}=e;if(!t||!r)throw Error("[ThemedImage]: Please provide both 'dark' and 'light' src values");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{"data-hide-on-theme":"dark",className:_().root,children:(0,i.jsx)(h(),{className:_().image,src:t,alt:a,title:n,width:o,height:s})}),(0,i.jsx)("span",{"data-hide-on-theme":"light",className:_().root,children:(0,i.jsx)(h(),{className:_().image,src:r,alt:a,title:n,width:o,height:s})})]})}};function b(e){let{items:t}=e;return(0,i.jsx)(d,{items:t.map((e,t)=>({title:e.title,initialOpen:0===t,content:(0,i.jsx)(u.Z,{className:f().mdxContentRoot,mdxRemoteProps:{...e.mdxSource,components:x}})}))})}var v=r(66662),y=r.n(v);function N(e){let{children:t}=e;return(0,i.jsx)("div",{className:y().root,children:t})}var C=r(75885),w=r.n(C);function j(e){let{children:t,className:r}=e;return(0,i.jsx)("div",{className:n()(w().root,r),children:t})}var k=r(14267),T=r.n(k);let S={consul:{associate:{src:"/hashicorp-terraform-cdk/_next/static/media/consul-badge-mini-associate.5128a1e5.svg",height:57,width:48,blurWidth:0,blurHeight:0},pro:{src:"/hashicorp-terraform-cdk/_next/static/media/consul-badge-mini-pro.36f5b8e4.svg",height:57,width:48,blurWidth:0,blurHeight:0}},terraform:{associate:{src:"/hashicorp-terraform-cdk/_next/static/media/terraform-badge-mini-associate.1419a397.svg",height:57,width:48,blurWidth:0,blurHeight:0},pro:{src:"/hashicorp-terraform-cdk/_next/static/media/terraform-badge-mini-pro.a1e0e5e6.svg",height:57,width:48,blurWidth:0,blurHeight:0}},vault:{associate:{src:"/hashicorp-terraform-cdk/_next/static/media/vault-badge-mini-associate.e4c667e0.svg",height:57,width:48,blurWidth:0,blurHeight:0},pro:{src:"/hashicorp-terraform-cdk/_next/static/media/vault-badge-mini-pro.5049366d.svg",height:57,width:48,blurWidth:0,blurHeight:0}}};function M(e){let{productSlug:t,examTier:r="associate"}=e;return(0,i.jsx)(h(),{alt:"",className:T().root,src:S[t][r],width:48,height:56})}var F=r(16045),L=r.n(F);function I(e){let{children:t,theme:r}=e;return(0,i.jsxs)("div",{className:L().root,children:[(0,i.jsx)("div",{className:n()(L().gradientBorderBackground,L()["theme-".concat(r)])}),(0,i.jsx)("div",{className:L().inner,children:t})]})}var R=r(35800);let q={metadata:{success:!0,errors:[],result:[{id:2459,name:"FORM - Newsletter Sign Up",description:"",createdAt:"2023-05-23T16:15:32Z+0000",updatedAt:"2023-05-23T16:15:32Z+0000",url:"https://app-ab32.marketo.com/#FO2459B2",status:"draft",theme:"simple",language:"English",locale:null,progressiveProfiling:!1,labelPosition:"left",fontFamily:"Helvetica",fontSize:"13px",folder:{type:"Folder",value:35855,folderName:"f. Dotcom"},knownVisitor:{type:"form",template:null},thankYouList:[{followupType:"url",followupValue:"https://www.hashicorp.com/thank-you/contact-sales",default:!0}],buttonLocation:120,buttonLabel:"Submit",waitingLabel:"Please Wait",workSpaceId:1}]},fields:{success:!0,errors:[],result:[{id:"Email",dataType:"email",validationMessage:"Please enter a valid business email address.",rowNumber:0,columnNumber:0,required:!0,formPrefill:!0,visibilityRules:{ruleType:"alwaysShow"},hintText:"Business Email Address"},{id:"Consent_Privacy_Policy__c",label:"Send me news about HashiCorp products, releases and events.",dataType:"checkbox",validationMessage:"This field is required.",rowNumber:1,columnNumber:0,required:!1,formPrefill:!0,fieldMetaData:{initiallyChecked:!1},visibilityRules:{ruleType:"alwaysShow"}},{id:"privacy-policy-text",labelWidth:260,dataType:"htmltext",rowNumber:2,columnNumber:0,visibilityRules:{ruleType:"alwaysShow"},text:'By submitting this form, you acknowledge and agree that HashiCorp will process your personal information in accordance with the <a target="_blank" href="https://www.hashicorp.com/privacy">Privacy Policy</a>.'},{id:"utm_medium__c",label:"utm_medium:",dataType:"hidden",rowNumber:3,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"utm_medium"}},{id:"utm_source__c",label:"utm_source:",dataType:"hidden",rowNumber:4,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"utm_source"}},{id:"utm_campaign__c",label:"utm_campaign:",dataType:"hidden",rowNumber:5,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"utm_campaign"}},{id:"utm_cid__c",label:"utm_cid:",dataType:"hidden",rowNumber:6,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"utm_cid"}},{id:"utm_offer__c",label:"utm_offer:",dataType:"hidden",rowNumber:7,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"utm_offer"}},{id:"form_page_url__c",label:"form_page_url:",dataType:"hidden",rowNumber:8,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"form_page_url"}},{id:"utm_term__c",label:"utm_term:",dataType:"hidden",rowNumber:9,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"utm_term"}},{id:"utm_content__c",label:"utm_content:",dataType:"hidden",rowNumber:10,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"utm_content"}},{id:"utm_channel_bucket__c",label:"utm_channel_bucket:",dataType:"hidden",rowNumber:11,columnNumber:0,required:!1,autoFill:{value:"",valueFrom:"query",parameterName:"utm_channel_bucket"}},{id:"Signed_Up_For_Newsletter__c",label:"Signed Up For Newsletter:",dataType:"hidden",rowNumber:12,columnNumber:0,required:!1,autoFill:{value:"TRUE",valueFrom:"default",parameterName:""}}]}};var B=r(60348),E=r(89168),Z=r(88202),H=r.n(Z);function P(){return(0,i.jsxs)("div",{className:H().header,children:[(0,i.jsx)(E.Z,{className:H().heading,level:2,size:500,weight:"bold",children:"Stay Informed"}),(0,i.jsx)(B.Z,{size:200,children:"Sign up to be notified with updates to the HashiCorp Product Certifications program and to receive news and information about HashiCorp products."})]})}var W=r(67294),D=r(35094),O=r(52406),V=r(35605),A=r.n(V);let U=()=>(0,i.jsx)("svg",{className:A().icon,width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",children:(0,i.jsxs)("g",{id:"CheckCircle",children:[(0,i.jsx)("path",{id:"Shape (Stroke)",fillRule:"evenodd",clipRule:"evenodd",d:"M14.7648 4.54512C11.0229 2.87783 6.63007 3.87034 3.96846 6.98441C1.30686 10.0985 1.01054 14.5923 3.24019 18.0289C5.46985 21.4655 9.69434 23.0262 13.6228 21.8647C17.5512 20.7032 20.2477 17.0962 20.2501 12.9996V12.07C20.2501 11.6558 20.5858 11.32 21.0001 11.32C21.4143 11.32 21.7501 11.6558 21.7501 12.07V13C21.7473 17.7609 18.6135 21.9533 14.0481 23.3032C9.4826 24.653 4.57306 22.8392 1.98184 18.8453C-0.609384 14.8514 -0.265011 9.62889 2.82821 6.00983C5.92142 2.39077 11.0266 1.23732 15.3753 3.17498C15.7537 3.34356 15.9237 3.78694 15.7551 4.1653C15.5865 4.54365 15.1432 4.7137 14.7648 4.54512Z",fill:"currentColor"}),(0,i.jsx)("path",{id:"Shape (Stroke)_2",fillRule:"evenodd",clipRule:"evenodd",d:"M22.5303 3.46967C22.8232 3.76256 22.8232 4.23744 22.5303 4.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23744 11.1768 8.53033 11.4697L11 13.9393L21.4697 3.46967C21.7626 3.17678 22.2374 3.17678 22.5303 3.46967Z",fill:"currentColor"})]})}),z=()=>(0,i.jsx)("svg",{className:A().icon,width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",children:(0,i.jsxs)("g",{id:"AlertTriangle",children:[(0,i.jsx)("path",{id:"Shape (Stroke)",fillRule:"evenodd",clipRule:"evenodd",d:"M9.64853 4.47099C10.1471 3.64913 11.0385 3.14722 11.9998 3.14722C12.961 3.14722 13.8525 3.64913 14.351 4.47099L14.3532 4.47455L22.8294 18.6249C23.318 19.471 23.3208 20.513 22.8369 21.3619C22.3531 22.2108 21.4551 22.7392 20.478 22.7499L20.4698 22.75L3.52153 22.75C2.54448 22.7392 1.64649 22.2108 1.16262 21.3619C0.678749 20.513 0.681666 19.4711 1.17028 18.6249L1.17629 18.6145L9.64638 4.47456L9.64853 4.47099ZM10.932 5.24736C10.9317 5.24789 10.9313 5.24841 10.931 5.24893L2.46662 19.3796C2.24716 19.7634 2.24672 20.2348 2.46579 20.6191C2.68512 21.0039 3.09165 21.2438 3.53435 21.25H20.4652C20.9079 21.2438 21.3144 21.0039 21.5338 20.6191C21.7528 20.2348 21.7524 19.7634 21.5329 19.3796L13.0685 5.24893C13.0682 5.24841 13.0679 5.24789 13.0676 5.24736C12.8408 4.87472 12.4361 4.64722 11.9998 4.64722C11.5635 4.64722 11.1588 4.87472 10.932 5.24736Z",fill:"currentColor"}),(0,i.jsx)("path",{id:"Shape (Stroke)_2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14V10C11.25 9.58579 11.5858 9.25 12 9.25Z",fill:"currentColor"}),(0,i.jsx)("path",{id:"Ellipse",d:"M13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z",fill:"currentColor"})]})});var J=e=>{let{submitStatus:t,appearance:r="light"}=e;return(0,i.jsx)("div",{className:n()([A().submittedMsg,A()[r]]),"data-test-id":"submitMessage",children:(0,i.jsx)("div",{className:n()([A().iconWrapper,A()[t]]),children:"success"===t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{}),(0,i.jsx)("p",{className:A().submittedMsgText,children:"Thanks for subscribing!"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z,{}),(0,i.jsxs)("p",{className:A().submittedMsgText,children:["We’re having trouble getting you subscribed. Try again or reach out to"," ",(0,i.jsx)("a",{className:A().submittedMsgTextLink,href:"mailto:hello@hashicorp.com",children:"hello@hashicorp.com"}),"."]})]})})})},X=r(85888),K=r.n(X);function Y(e){let{buttonText:t="Submit",appearance:r="dark",marketoFormData:a}=e,[o,s]=(0,W.useState)(null);return(0,i.jsx)("div",{children:o?(0,i.jsx)(J,{submitStatus:o,appearance:r}):(0,i.jsx)(D.ZP,{...a,submitTitle:t,className:n()(K().formStyleOverrides,K().dark),onSubmitSuccess:()=>{s("success"),(0,O.iH)("Newsletter Signup",{placement:"Dev dot certifications"})},onSubmitError:()=>{s("error")}})})}var Q=r(99799),G=r.n(Q);let $="dark";function ee(){return(0,i.jsx)("div",{className:G().root,children:(0,i.jsxs)("div",{className:G().form,children:[(0,i.jsx)(P,{}),(0,i.jsx)(R.ErrorBoundary,{FallbackComponent:()=>(0,i.jsx)(J,{submitStatus:"error",appearance:$}),children:(0,i.jsx)(Y,{marketoFormData:q,appearance:$})})]})})}var et=r(6172),er=r.n(et);function ei(e){let{startContent:t,endContent:r,className:a}=e;return(0,i.jsxs)("div",{className:n()(er().root,a),children:[(0,i.jsx)("div",{className:er().startContent,children:t}),(0,i.jsx)("div",{className:er().endContent,children:r})]})}var ea=r(91121),en=r(6263),eo=r.n(en);function es(e){let{text:t,size:r="medium"}=e;return(0,i.jsxs)("span",{className:n()(eo().root,eo()[r]),children:[t," ",(0,i.jsx)(ea.k,{})]})}},81059:function(e){e.exports={root:"accordion_root__mDEZx"}},12315:function(e){e.exports={root:"dev-dot-content_root__UJDct hds-typography-body-300"}},72963:function(e){e.exports={figure:"image-config_figure__ryaEI",caption:"image-config_caption__kRe62 hds-typography-body-200"}},79359:function(e){e.exports={root:"image_root__Kkwm7",noMargin:"image_noMargin__4ittr",noBorder:"image_noBorder__e_8et",inline:"image_inline__EKAR7"}},97563:function(e){e.exports={root:"hero_root__zVlK_",backgroundBase:"hero_backgroundBase__1T_jA",rootContainer:"hero_rootContainer__k8aW_",rootLayout:"hero_rootLayout__34Vg_",startSlot:"hero_startSlot__OYVDs",hvdHero:"hero_hvdHero__E5IH9",endSlot:"hero_endSlot__twDWz",textRoot:"hero_textRoot__gLBX8","foreground-dark":"hero_foreground-dark__r_WTY","foreground-light":"hero_foreground-light__htnhC",textHeading:"hero_textHeading__NuR_8 hds-typography-display-500",textDescription:"hero_textDescription__InQl1 hds-typography-display-300"}},57319:function(e){e.exports={mobileMenuContainer:"mobile-menu-levels-generic_mobileMenuContainer__yvFk4",mobileMenuNavList:"mobile-menu-levels-generic_mobileMenuNavList__ZySxX"}},47419:function(e){e.exports={mdxContentRoot:"accordion-with-mdx-content_mdxContentRoot__LNX8t"}},66662:function(e){e.exports={root:"certifications-max-width_root__pG7Dv"}},75885:function(e){e.exports={root:"cta-group_root__d0ZS7"}},14267:function(e){e.exports={root:"exam-badge_root__XlKJC"}},16045:function(e){e.exports={root:"gradient-card_root__6A3Ds",inner:"gradient-card_inner__6VYRh",gradientBorderBackground:"gradient-card_gradientBorderBackground__UNPsC","theme-infrastructure-automation":"gradient-card_theme-infrastructure-automation__JXC3E","theme-networking-automation":"gradient-card_theme-networking-automation__XzcUc","theme-security-automation":"gradient-card_theme-security-automation__LMD0h"}},16029:function(e){e.exports={root:"mdx-themed-image_root__eOwdy",image:"mdx-themed-image_image__osODQ"}},85888:function(e){e.exports={formStyleOverrides:"marketo-form-data_formStyleOverrides__PG6qQ"}},35605:function(e){e.exports={submittedMsg:"submit-message_submittedMsg__hTtN0",dark:"submit-message_dark__b6D1h",submittedMsgText:"submit-message_submittedMsgText__drKQV hds-typography-body-300",submittedMsgTextLink:"submit-message_submittedMsgTextLink__22Rwg",iconWrapper:"submit-message_iconWrapper__zV2CH",success:"submit-message_success__as8zf",error:"submit-message_error__gWffg",icon:"submit-message_icon__qIN_0"}},88202:function(e){e.exports={header:"signup-header_header__85YOb",heading:"signup-header_heading__2ix2v"}},99799:function(e){e.exports={root:"signup-form-area_root__sG2TJ",form:"signup-form-area_form__9vdxT"}},6172:function(e){e.exports={root:"split-card-section_root__nX56_",startContent:"split-card-section_startContent__TwY1u",endContent:"split-card-section_endContent___Mnje"}},6263:function(e){e.exports={root:"standalone-link-contents_root__oLBJv",small:"standalone-link-contents_small__eWphQ hds-typography-body-100",medium:"standalone-link-contents_medium__Sy1C6 hds-typography-body-200"}}}]);