"use strict";(()=>{var e={};e.id=8548,e.ids=[8548],e.modules={30421:e=>{e.exports=require("google-spreadsheet")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},56249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,o){return o in t?t[o]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,o)):"function"==typeof t&&"default"===o?t:void 0}}})},93147:(e,t,o)=>{o.r(t),o.d(t,{config:()=>m,default:()=>l,routeModule:()=>f});var s={};o.r(s),o.d(s,{allowedKeys:()=>p,default:()=>c});var r=o(71802),a=o(47153),n=o(56249);let u=require("cors");var i=o.n(u),d=o(30421);let p=["segment_anonymous_id","primary_opt_out_reason","details","opt_out_page_url"],_=i()({origin:"*",methods:["POST"]});async function c(e,t){if(await new Promise((o,s)=>{_(e,t,e=>e instanceof Error?s(e):o(e))}),"POST"!==e.method){t.status(404).json({meta:{status_code:404,status_text:"Not Found"}});return}if("application/json"!==e.headers["content-type"]){t.status(400).json({meta:{status_code:400,status_text:"Bad Request"},errors:[{msg:"expects header Content-Type: application/json"}]});return}if(!e.body.opt_out_page_url){t.status(400).json({meta:{status_code:400,status_text:"Bad Request"},errors:[{msg:"Required body key `opt_out_page_url` is not provided"}]});return}let o={};p.forEach(t=>{void 0!==e.body[t]&&(o[t]=e.body[t])}),o.submission_timestamp=new Date().toString();try{let e=new d.GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID);await e.useServiceAccountAuth({client_email:process.env.FEEDBACK_SERVICE_EMAIL,private_key:process.env.FEEDBACK_PRIVATE_KEY}),await e.loadInfo();let s=e.sheetsByIndex[0];await s.addRow(o),t.status(200).json({meta:{status_code:200,status_text:"OK"}})}catch(e){console.error("Google Sheet Submission Error:",e.message),t.status(500).json({meta:{status_code:500,status_text:"Internal Server Error"}})}}let l=(0,n.l)(s,"default"),m=(0,n.l)(s,"config"),f=new r.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/opt-out-feedback",pathname:"/api/opt-out-feedback",bundlePath:"",filename:""},userland:s})},47153:(e,t)=>{var o;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return o}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(o||(o={}))},71802:(e,t,o)=>{e.exports=o(20145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var o=t(t.s=93147);module.exports=o})();