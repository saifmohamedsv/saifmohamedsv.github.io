"use strict";exports.id=2268,exports.ids=[2268],exports.modules={98455:(t,e,n)=>{n.d(e,{Z:()=>components_FlipNumber});var i=n(30784),o=n(9885),s=n(35266);let components_FlipNumber=function({children:t}){let e=function(){let t=(0,o.useRef)(!0);return(0,o.useEffect)(()=>{t.current=!1},[]),t.current}(),[n,u]=(0,o.useState)("initial"),[a,r]=(0,o.useState)(t);return(0,o.useEffect)(()=>{e||(setTimeout(()=>u("out"),0),setTimeout(()=>r(t),75),setTimeout(()=>u("moveDown"),75),setTimeout(()=>u("initial"),150))},[t,e,75]),i.jsx("span",{className:(0,s.Z)("inline-flex","out"===n&&"opacity-0 -translate-y-3 duration-75 ease-in-out","initial"===n&&"opacity-100 translate-y-0 duration-75 ease-in-out","moveDown"===n&&"opacity-0 translate-y-3"),children:a})}},52589:(t,e,n)=>{n.d(e,{Z:()=>Fetcher});async function Fetcher(...t){let e=await fetch(...t);return e.json()}}};