"use strict";(()=>{var e={};e.id=7488,e.ids=[7488],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},80007:(e,t,o)=>{o.r(t),o.d(t,{headerHooks:()=>c,originalPathname:()=>d,requestAsyncStorage:()=>n,routeModule:()=>i,serverHooks:()=>p,staticGenerationAsyncStorage:()=>u,staticGenerationBailout:()=>P});var r={};o.r(r),o.d(r,{GET:()=>GET}),o(78976);var a=o(10884),s=o(16132);async function GET(){try{let e=await fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCVzJy5DLXJisFcAfo1y6wQg&key=AIzaSyDZ17eHNTiQVBLop5m6FS4alR1TRamPmrE"),t=await e.json(),o=t.items[0].statistics.subscriberCount,r=t.items[0].statistics.viewCount;return Response.json({subscribers:o,viewers:r})}catch(e){return new Response(`Something went wrong: ${e}`,{status:200})}}let i=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/youtube/route",pathname:"/api/youtube",filename:"route",bundlePath:"app/api/youtube/route"},resolvedPagePath:"/Users/saifmohamedsv/Work/Personal Portfolios/b-r.io/app/api/youtube/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:n,staticGenerationAsyncStorage:u,serverHooks:p,headerHooks:c,staticGenerationBailout:P}=i,d="/api/youtube/route"},16132:(e,t)=>{var o;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return o}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(o||(o={}))}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),o=t.X(0,[4933],()=>__webpack_exec__(80007));module.exports=o})();