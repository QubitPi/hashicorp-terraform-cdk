(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7708],{59216:function(e,n,a){"use strict";var t=a(85893),s=a(93258),i=a(81070);n.Z=function(e){let{productSlug:n,className:a,size:r="extra-large"}=e;return(0,t.jsx)(s.Z,{size:r,brandColor:"hcp"==n?"neutral-dark":n,className:a,children:(0,t.jsx)(i.Z,{productSlug:n})})}},97859:function(e,n,a){"use strict";a.d(n,{Z:function(){return c}});var t=a(85893),s=a(94184),i=a.n(s),r=a(88122),o=a(97619),l=a.n(o);function c(e){let{className:n,color:a="neutral",description:s,icon:o=(0,t.jsx)(r.w,{}),title:c,ctaSlot:d}=e;return(0,t.jsxs)("div",{className:i()(l().default,l()[a],n),children:[(0,t.jsx)("span",{className:l().icon,"data-testid":"icon",children:o}),(0,t.jsxs)("span",{className:l().content,children:[(0,t.jsx)("p",{className:l().title,children:c}),(0,t.jsx)("span",{className:l().description,children:s}),d?(0,t.jsx)("span",{className:l().ctaSlot,children:d}):null]})]})}},48032:function(e,n,a){"use strict";var t=a(85893),s=a(72704),i=a(77780),r=a(62029);n.Z=e=>{let{ariaLabel:n,href:a,onClick:o}=e;return(0,t.jsx)(r.Z,{ariaLabel:n,download:!0,href:a,size16Icon:(0,t.jsx)(s.J,{}),size24Icon:(0,t.jsx)(i.l,{}),iconPosition:"trailing",onClick:o,text:"Download"})}},62029:function(e,n,a){"use strict";var t=a(85893),s=a(6407),i=a(64539),r=a.n(i);n.Z=e=>{let{size16Icon:n,size24Icon:a,text:i,...o}=e;return(0,t.jsx)(s.Z,{...o,icon:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:r().notMobileIcon,children:n}),(0,t.jsx)("span",{className:r().mobileIcon,children:a})]}),text:i,textClassName:r().text})}},31766:function(e,n,a){"use strict";a.d(n,{W:function(){return u}});var t=a(85893),s=a(41664),i=a.n(s),r=a(68920),o=a(48197),l=a.n(o),c=a(94184),d=a.n(c);function u(e){let{id:n,ariaLabel:a,children:s,className:o}=e;return(0,t.jsxs)("div",{className:d()(l().root,o),children:[s,(0,t.jsx)(i(),{className:l().permalink,"aria-label":a,href:"#".concat(n),children:(0,t.jsx)(r.j,{className:l().permalinkIcon})})]})}},90657:function(e,n,a){"use strict";var t=a(85893),s=a(81725),i=a(39174),r=a(64991),o=a.n(r),l=a(94184),c=a.n(l);n.Z=e=>{let{className:n,heading:a,subheading:r,icon:l,link:d}=e;return(0,t.jsxs)(s.Z,{className:c()(o().root,n),elevation:"base",children:[void 0!==l?l:null,(0,t.jsxs)("div",{className:o().contentContainer,children:[(0,t.jsx)(i.Z,{className:o().contentHeading,size:200,weight:"semibold",children:a}),void 0!==r?(0,t.jsx)(i.Z,{className:o().contentSubheading,size:200,weight:"regular",children:r}):null]}),void 0!==d?d:null]})}},7708:function(e,n,a){"use strict";a.d(n,{Z:function(){return ev}});var t=a(85893),s=a(67294),i=a(11163),r=a(9008),o=a.n(r),l=a(26107),c=a(1151),d=a(83460),u=a(48011);a(86713),a(6354),a(33959),a(57559),a(63657),a(76397),a(94760);var h=a(44793);let m={Mac:"darwin",Win:"windows",Linux:"linux"},g=(e,n,a)=>[{title:"Developer",url:"/"},{title:e.name,url:"/".concat(e.slug)},{isCurrentPage:!0,title:n?"Install Enterprise":"".concat("/vagrant/install/vmware"===a?"Install VMware Utility":"Install")}],x=e=>{let{latestVersion:n,releaseVersions:a}=e;return a.map(e=>{let a=e.version;return{label:"".concat(a).concat(a===n?" (latest)":""),value:a}})},_=e=>{let n=e.builds.reduce((e,n)=>(e[n.os]||(e[n.os]={}),e[n.os][n.arch]=n.url,e),{}),a=Object.keys(n),t=Object.keys(m).map(e=>m[e]).concat(a).filter((e,n,t)=>t.indexOf(e)==n&&a.indexOf(e)>-1);return a.sort((e,n)=>t.indexOf(e)-t.indexOf(n)).reduce((e,a)=>(e[a]=n[a],e),{})};function p(e){switch(e){case"darwin":return"macOS";case"freebsd":return"FreeBSD";case"openbsd":return"OpenBSD";case"netbsd":return"NetBSD";case"archlinux":return"Arch Linux";case"linux":return"Linux";case"windows":return"Windows";default:return(0,h.Z)(e)}}let f=(0,s.createContext)(void 0);f.displayName="CurrentVersionContext";let j=e=>{let{children:n,initialValue:a,latestVersion:i}=e,[r,o]=(0,s.useState)(a);return(0,t.jsx)(f.Provider,{value:{currentVersion:r,isLatestVersion:r===i,latestVersion:i,setCurrentVersion:o},children:n})},w=()=>{let e=(0,s.useContext)(f);if(void 0===e)throw Error("useCurrentVersion must be used within a CurrentVersionProvider");return e};var b=a(2296),v=a(61525),k=a(8852),N=a(81725),y=a(31633),Z=a(48032),C=a(97859),I=a(74245),S=a(52242),L=a(94184),z=a.n(L),H=a(31766),D=a(37270),O=a.n(D),T=a(90657),B=a(91890),E=a.n(B);let P=e=>{let n={};return e.forEach(e=>{let{os:a}=e;n[a]?n[a].push(e):n[a]=[e]}),n},F={className:E().subheading,level:3,size:200,weight:"semibold"},M=e=>{let{packageManagers:n}=e,a=(null==n?void 0:n.length)===1,s=(null==n?void 0:n.length)>1;return a||s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.Z,{...F,children:"Package manager"}),a&&(0,t.jsx)(b.Z,{className:E().codeBlock,code:n[0].installCodeHtml,language:"shell-session",options:{showClipboard:!0}}),s&&(0,t.jsx)(v.Z,{tabs:n.map(e=>{let{label:n}=e;return n}),children:n.map(e=>{let{label:n,installCodeHtml:a}=e;return(0,t.jsx)(b.Z,{className:E().codeBlocks,code:a,language:"shell-session",options:{showClipboard:!0}},n)})})]}):null},V=e=>{let{downloadsByOS:n,os:a,prettyOSName:s,selectedRelease:i}=e,{name:r,version:o}=i;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.Z,{...F,children:"Binary download"}),(0,t.jsx)("div",{className:E().downloadContainer,children:Object.keys(n[a]).map(e=>(0,t.jsx)(T.Z,{className:E().downloadCard,heading:e.toUpperCase(),subheading:"Version: ".concat(o),link:(0,t.jsx)(Z.Z,{ariaLabel:"download ".concat(r," version ").concat(o," for ").concat(s,", architecture ").concat(e),href:n[a][e],onClick:()=>{(0,S.OQ)({productSlug:r,version:o,prettyOSName:s,architecture:e})}})},e))})]})};var A=e=>{let{packageManagers:n,selectedRelease:a,downloadsByOS:i}=e,{isLatestVersion:r}=w(),o=(0,s.useMemo)(()=>P(n),[n]);return(0,t.jsx)(t.Fragment,{children:Object.keys(i).map(e=>{let n=o[e],s=p(e);return(0,t.jsxs)(N.Z,{className:E().card,elevation:"base",children:[(0,t.jsx)(H.W,{className:E().headingContainer,id:e,ariaLabel:s,children:(0,t.jsx)(y.Z,{id:e,className:z()(E().heading,O().scrollHeading),level:2,size:400,weight:"bold",children:s})}),(0,t.jsxs)("div",{className:E().tabContent,children:[r&&(0,t.jsx)(M,{packageManagers:n,prettyOSName:s}),(0,t.jsx)(V,{downloadsByOS:i,os:e,prettyOSName:s,selectedRelease:a}),"linux"===e&&(0,t.jsx)(C.Z,{className:E().alert,color:"neutral",title:"Note",description:(0,t.jsxs)(t.Fragment,{children:["Complete this"," ",(0,t.jsx)(I.Z,{href:"/well-architected-framework/operational-excellence/verify-hashicorp-binary",textSize:200,children:"tutorial"})," ","to learn how to install and verify HashiCorp tools on any Linux distribution, and create an custom Linux container with verified HashiCorp tools.."]}),icon:(0,t.jsx)(k.k,{className:E().cardIcon})})]})]},e)})})},U=a(75524),R=a(28484),W=a(18949),G=a.n(W),Y=e=>{let{cards:n=[],cardType:a="tutorial"}=e;return n.length<=0?null:(0,t.jsx)("div",{className:G().root,children:"tutorial"===a?(0,t.jsx)(U.b,{tutorials:n}):(0,t.jsx)(U.Z,{children:n.map(e=>(0,t.jsx)(R.FG,{...e},e.id))})})},X=a(59216),q=a(91912),J=a(8889),Q=a.n(J),K=e=>{let{initialValue:n,onChange:a,options:i}=e,r=(0,l.j2)(),[o,c]=(0,s.useState)(n);return(0,t.jsxs)("div",{className:Q().root,children:[(0,t.jsx)("select",{"aria-label":"Choose a different version to install",className:Q().select,onChange:e=>{c(e.target.value),a&&a(e)},value:o,children:i.map(e=>(0,t.jsx)("option",{"aria-label":"".concat(r.name," ").concat(e.label),className:Q().option,value:e.value,children:e.label},e.value))}),(0,t.jsx)(q.b,{className:Q().trailingIcon})]})},$=a(26287),ee=a.n($),en=e=>{let{isEnterpriseMode:n=!1,product:a,versionSwitcherOptions:s}=e,{setCurrentVersion:i}=w(),r=n?"".concat(a.name," Enterprise Installation"):"Install ".concat(a.name),o="sentinel"===a.slug?"hcp":a.slug;return(0,t.jsxs)("div",{className:ee().root,children:[(0,t.jsxs)("div",{className:ee().headingWrapper,children:[(0,t.jsx)(X.Z,{className:ee().iconTileLogo,productSlug:o}),(0,t.jsx)(y.Z,{className:ee().pageHeaderTitle,level:1,size:500,id:"install-".concat(a.slug),weight:"bold",children:r})]}),(0,t.jsx)(K,{onChange:e=>i(e.target.value),options:s})]})},ea=a(8160),et=a(62019),es=a(39174),ei=a(62029),er=a(20918),eo=a.n(er);let el=e=>{let{selectedRelease:n}=e,a=(0,l.j2)(),{name:s,shasums:i,shasums_signature:r,version:o}=n;return(0,t.jsx)(C.Z,{color:"neutral",title:"Note",description:(0,t.jsxs)(t.Fragment,{children:["You can find the"," ",(0,t.jsxs)(I.Z,{href:"https://releases.hashicorp.com/".concat(s,"/").concat(o,"/").concat(i),textSize:200,children:["SHA256 checksums for ",a.name," ",o]})," ","online and you can"," ",(0,t.jsx)(I.Z,{href:"https://releases.hashicorp.com/".concat(s,"/").concat(o,"/").concat(r),textSize:200,children:"verify the checksums signature file"})," ","which has been signed using"," ",(0,t.jsx)(I.Z,{href:"https://www.hashicorp.com/security",textSize:200,children:"HashiCorp's GPG key"}),". Complete this"," ",(0,t.jsx)(I.Z,{href:"/well-architected-framework/operational-excellence/verify-hashicorp-binary",textSize:200,children:"tutorial"})," ","to learn how to install and verify HashiCorp tools on any Linux distribution."]}),icon:(0,t.jsx)(k.k,{className:eo().cardIcon})})},ec=()=>(0,t.jsx)(C.Z,{className:eo().armUserNote,color:"neutral",title:"Note for ARM users",description:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("ul",{className:eo().notesList,children:[(0,t.jsx)(es.Z,{asElement:"li",size:200,weight:"regular",children:"Use Arm for all 32-bit systems"}),(0,t.jsx)(es.Z,{asElement:"li",size:200,weight:"regular",children:"Use Arm64 for all 64-bit architectures"})]}),(0,t.jsx)(es.Z,{className:eo().codePrompt,asElement:"p",size:100,weight:"regular",children:"The following commands can help determine the right version for your system:"}),(0,t.jsx)(b.Z,{code:"$ uname -m",language:"shell-session",options:{wrapCode:!0,showClipboard:!0}}),(0,t.jsx)(b.Z,{className:eo().codeBlock,code:'$ readelf -a /proc/self/exe | grep -q -c Tag_ABI_VFP_args && echo "armhf" || echo "armel"',language:"shell-session",options:{wrapCode:!0,showClipboard:!0}})]}),icon:(0,t.jsx)(k.k,{className:eo().cardIcon})}),ed=e=>{let{selectedRelease:n}=e,{name:a,version:s}=n,i=(0,h.Z)(a);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(T.Z,{heading:"Changelog",subheading:"".concat(i," Version: ").concat(s),link:(0,t.jsx)(ei.Z,{ariaLabel:"".concat(a," version ").concat(s," changelog"),href:"https://github.com/hashicorp/".concat(a,"/releases/tag/v").concat(s),size16Icon:(0,t.jsx)(ea.g,{}),size24Icon:(0,t.jsx)(et.B,{}),iconPosition:"trailing",opensInNewTab:!0,text:"GitHub"})})})},eu=()=>(0,t.jsx)(C.Z,{title:"Terms of use",description:(0,t.jsx)(es.Z,{className:eo().contentSubheading,size:200,weight:"regular",children:"The following shall apply unless your organization has a separately signed Enterprise License Agreement or Evaluation Agreement governing your use of the package: Enterprise packages in this repository are subject to the license terms located in the package. Please read the license terms prior to using the package. Your installation and use of the package constitutes your acceptance of these terms. If you do not accept the terms, do not use the package."}),color:"highlight",icon:(0,t.jsx)(k.k,{className:eo().cardIcon})}),eh=()=>(0,t.jsx)(T.Z,{heading:"Official releases",subheading:"All officially supported HashiCorp release channels and their security guarantees.",link:(0,t.jsx)(ei.Z,{ariaLabel:"View all official releases",href:"https://www.hashicorp.com/official-release-channels",size16Icon:(0,t.jsx)(ea.g,{}),size24Icon:(0,t.jsx)(et.B,{}),iconPosition:"trailing",opensInNewTab:!0,text:"View all"})});var em=e=>{let{selectedRelease:n,releaseHeading:a,isEnterpriseMode:s}=e,i=(0,l.j2)();return(0,t.jsxs)("div",{className:eo().root,children:[(0,t.jsx)(H.W,{className:eo().headingContainer,id:a.id,ariaLabel:a.text,children:(0,t.jsx)(y.Z,{id:a.id,className:z()(eo().heading,O().scrollHeading),level:2,size:400,weight:"bold",children:a.text})}),(0,t.jsxs)("div",{className:eo().notesContainer,children:[(0,t.jsx)(ed,{selectedRelease:n}),(0,t.jsx)(eh,{}),(0,t.jsx)(el,{selectedRelease:n}),"Consul"===i.name&&(0,t.jsx)(ec,{}),s?(0,t.jsx)(eu,{}):null]})]})},eg=a(31304),ex=a.n(eg),e_=a(49555),ep=a(29621),ef=a.n(ep),ej=e=>{let{title:n,subtitle:a,featuredDocsLinks:s}=e;return(0,t.jsxs)(N.Z,{elevation:"base",children:[(0,t.jsx)(es.Z,{className:ef().cardTitle,size:300,weight:"semibold",children:n}),(0,t.jsx)(es.Z,{className:ef().cardSubtitle,size:200,weight:"regular",children:a}),(0,t.jsx)(es.Z,{className:ef().featuredDocsLabel,size:200,weight:"semibold",children:"Featured docs"}),(0,t.jsx)("ul",{className:ef().featuredDocsLinksList,children:s.map(e=>{let{href:n,text:a}=e;return(0,t.jsx)(es.Z,{className:ef().featuredDocsListItem,asElement:"li",size:200,weight:"regular",children:(0,t.jsx)(e_.Z,{className:ef().featuredDocsLink,href:n,children:a})},ex()(a))})})]})};let ew={releaseInfo:{id:"release-information",text:"Release information"},featured:{id:"next-steps",text:"Next steps"}},eb=e=>{let{isEnterpriseMode:n=!1,merchandisingSlot:a,pageContent:r,releases:h,versionSwitcherOptions:m,packageManagers:x}=e,{featuredCollectionCards:f,featuredTutorialCards:j,sidecarMarketingCard:b,sidecarHcpCallout:v,sidebarMenuItems:k=[],installName:N,additionalDownloadItems:Z=[]}=r,C=(0,l.j2)(),{currentVersion:I}=w(),{pathname:S}=(0,i.useRouter)(),L=(0,s.useMemo)(()=>g(C,n,S),[C,n,S]),z=h.versions[I],D=(0,s.useMemo)(()=>_(z),[z]),T=Object.keys(D).map(e=>({title:p(e),fullPath:"#".concat(e)})),B=(null==f?void 0:f.length)>0,E=(null==j?void 0:j.length)>0,P=B||E,F=P?[{title:ew.featured.text,fullPath:"#".concat(ew.featured.id)}]:[],M=[(0,u.Vz)(C.name),(0,u._G)(C),(0,u.Tl)(C,[{divider:!0},{heading:"Operating Systems"},...T,...Z,{divider:!0},{title:ew.releaseInfo.text,fullPath:"#".concat(ew.releaseInfo.id)},...F,...k],n)];return(0,t.jsxs)(c.Z,{sidebarNavDataLevels:M,breadcrumbLinks:L,sidecarSlot:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ej,{...b}),v?(0,t.jsx)("div",{className:O().sidecarTryHcpCallout,children:(0,t.jsx)(d.X,{productSlug:v.productSlug,heading:v.heading,description:v.description,ctaText:v.ctaText,ctaUrl:v.ctaUrl})}):null]}),children:[n?(0,t.jsx)(o(),{children:(0,t.jsx)("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null,(0,t.jsx)(en,{isEnterpriseMode:n,product:{name:N||C.name,slug:C.slug},versionSwitcherOptions:m}),(null==a?void 0:a.position)==="above"?a.slot:null,(0,t.jsx)(A,{packageManagers:x,selectedRelease:z,downloadsByOS:D}),(null==a?void 0:a.position)==="middle"?a.slot:null,(0,t.jsx)(em,{releaseHeading:ew.releaseInfo,selectedRelease:z,isEnterpriseMode:n}),(null==a?void 0:a.position)==="below"?a.slot:null,P?(0,t.jsx)(H.W,{className:O().nextStepsHeading,id:ew.featured.id,ariaLabel:ew.featured.text,children:(0,t.jsx)(y.Z,{className:O().scrollHeading,level:2,id:ew.featured.id,size:500,weight:"bold",children:ew.featured.text})}):null,(0,t.jsx)(Y,{cards:f,cardType:"collection"}),(0,t.jsx)(Y,{cards:j,cardType:"tutorial"})]})};var ev=e=>{let{isEnterpriseMode:n=!1,latestVersion:a,merchandisingSlot:i,pageContent:r,releases:o,sortedAndFilteredVersions:l,packageManagers:c}=e,d=(0,s.useMemo)(()=>x({latestVersion:a,releaseVersions:l}),[a,l]);return(0,t.jsx)(j,{initialValue:a,latestVersion:a,children:(0,t.jsx)(eb,{isEnterpriseMode:n,merchandisingSlot:i,pageContent:r,releases:o,versionSwitcherOptions:d,packageManagers:c})})}},97619:function(e){e.exports={default:"inline-alert_default___c6Mu hds-typography-body-200",icon:"inline-alert_icon__b_Ema",content:"inline-alert_content__fR9kv",title:"inline-alert_title__20wIt",description:"inline-alert_description__tisu9",ctaSlot:"inline-alert_ctaSlot__Hks6I",highlight:"inline-alert_highlight__Gg_mI",warning:"inline-alert_warning__2yPdZ",critical:"inline-alert_critical__De5HV"}},64539:function(e){e.exports={notMobileIcon:"mobile-standalone-link_notMobileIcon__CZgXI",mobileIcon:"mobile-standalone-link_mobileIcon___pSdm",text:"mobile-standalone-link_text__S8cCv"}},8889:function(e){e.exports={root:"version-context-switcher_root__FXLOW",trailingIcon:"version-context-switcher_trailingIcon__Wwxye",select:"version-context-switcher_select__G78BX g-focus-ring-from-box-shadow hds-surface-low",option:"version-context-switcher_option__4RyaC hds-typography-body-200"}},48197:function(e){e.exports={root:"content-with-permalink_root__hBEnj",permalink:"content-with-permalink_permalink__aE8L7 g-focus-ring-from-box-shadow",permalinkIcon:"content-with-permalink_permalinkIcon__hQs6l"}},64991:function(e){e.exports={root:"card-with-link_root__sn_Ty",contentHeading:"card-with-link_contentHeading__oVi52",contentSubheading:"card-with-link_contentSubheading__ea7yE"}},91890:function(e){e.exports={card:"downloads-section_card__kzODS",heading:"downloads-section_heading__vun_o",subheading:"downloads-section_subheading___ljz_",tabContent:"downloads-section_tabContent__G3dAp",downloadContainer:"downloads-section_downloadContainer__tIcqw",downloadCard:"downloads-section_downloadCard__SUT8n",codeBlock:"downloads-section_codeBlock__CEniD",codeBlocks:"downloads-section_codeBlocks__LLbxq",alert:"downloads-section_alert__3kdbc"}},18949:function(e){e.exports={root:"featured-learn-cards-section_root__2Owma"}},26287:function(e){e.exports={root:"page-header_root__m_XxU",iconTileLogo:"page-header_iconTileLogo__zDy_a",pageHeaderTitle:"page-header_pageHeaderTitle__u6kno",headingWrapper:"page-header_headingWrapper__NyPgy"}},20918:function(e){e.exports={root:"release-information_root__6JZfR",headingContainer:"release-information_headingContainer__aaYu8",heading:"release-information_heading__YAaO9",notesContainer:"release-information_notesContainer__Gob_D",cardIcon:"release-information_cardIcon__FFYaF",armUserNote:"release-information_armUserNote__FyYNm",codePrompt:"release-information_codePrompt__fsnUn",notesList:"release-information_notesList__Hff3v",codeBlock:"release-information_codeBlock__9is_K"}},29621:function(e){e.exports={cardTitle:"sidecar-marketing-card_cardTitle__REpOB",cardSubtitle:"sidecar-marketing-card_cardSubtitle__K0GDD",featuredDocsLabel:"sidecar-marketing-card_featuredDocsLabel__0J2Hd",featuredDocsLinksList:"sidecar-marketing-card_featuredDocsLinksList__ANAza",featuredDocsListItem:"sidecar-marketing-card_featuredDocsListItem__bt5mB",featuredDocsLink:"sidecar-marketing-card_featuredDocsLink__Ao3P6"}},37270:function(e){e.exports={heading2:"product-downloads-view_heading2__h7U7p hds-typography-display-300 hds-font-weight-bold",sidecarTryHcpCallout:"product-downloads-view_sidecarTryHcpCallout__r9QjI",nextStepsHeading:"product-downloads-view_nextStepsHeading___hIvk",scrollHeading:"product-downloads-view_scrollHeading__InHeZ"}}}]);