(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{6435:function(t,n,r){"use strict";r.d(n,{F:function(){return y},f:function(){return $}});var a=r(2265);let s=["light","dark"],i="(prefers-color-scheme: dark)",l="undefined"==typeof window,o=(0,a.createContext)(void 0),c={setTheme:t=>{},themes:[]},y=()=>{var t;return null!==(t=(0,a.useContext)(o))&&void 0!==t?t:c},$=t=>(0,a.useContext)(o)?a.createElement(a.Fragment,null,t.children):a.createElement(f,t),u=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:d=u,defaultTheme:h=r?"system":"light",attribute:g="data-theme",value:v,children:x,nonce:w})=>{let[A,C]=(0,a.useState)(()=>S(c,h)),[j,E]=(0,a.useState)(()=>S(c)),T=v?Object.values(v):d,_=(0,a.useCallback)(t=>{let a=t;if(!a)return;"system"===t&&r&&(a=p());let i=v?v[a]:a,o=n?b():null,c=document.documentElement;if("class"===g?(c.classList.remove(...T),i&&c.classList.add(i)):i?c.setAttribute(g,i):c.removeAttribute(g),l){let t=s.includes(h)?h:null,n=s.includes(a)?a:t;c.style.colorScheme=n}null==o||o()},[]),N=(0,a.useCallback)(t=>{C(t);try{localStorage.setItem(c,t)}catch(t){}},[t]),k=(0,a.useCallback)(n=>{let a=p(n);E(a),"system"===A&&r&&!t&&_("system")},[A,t]);(0,a.useEffect)(()=>{let t=window.matchMedia(i);return t.addListener(k),k(t),()=>t.removeListener(k)},[k]),(0,a.useEffect)(()=>{let e=t=>{t.key===c&&N(t.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),(0,a.useEffect)(()=>{_(null!=t?t:A)},[t,A]);let Z=(0,a.useMemo)(()=>({theme:A,setTheme:N,forcedTheme:t,resolvedTheme:"system"===A?j:A,themes:r?[...d,"system"]:d,systemTheme:r?j:void 0}),[A,N,t,j,r,d]);return a.createElement(o.Provider,{value:Z},a.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:l,storageKey:c,themes:d,defaultTheme:h,attribute:g,value:v,children:x,attrs:T,nonce:w}),x)},m=(0,a.memo)(({forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:o,defaultTheme:c,value:u,attrs:m,nonce:d})=>{let h="system"===c,g="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${m.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,v=o?s.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,n=!1,a=!0)=>{let i=u?u[t]:t,l=n?t+"|| ''":`'${i}'`,c="";return o&&a&&!n&&s.includes(t)&&(c+=`d.style.colorScheme = '${t}';`),"class"===r?c+=n||i?`c.add(${l})`:"null":i&&(c+=`d[s](n,${l})`),c},x=t?`!function(){${g}${$(t)}}()`:l?`!function(){try{${g}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}${h?"":"else{"+$(c,!1,!1)+"}"}${v}}catch(e){}}()`:`!function(){try{${g}var e=localStorage.getItem('${n}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}else{${$(c,!1,!1)};}${v}}catch(t){}}();`;return a.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:x}})},()=>!0),S=(t,n)=>{let r;if(!l){try{r=localStorage.getItem(t)||void 0}catch(t){}return r||n}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(i)),t.matches?"dark":"light")},559:function(t,n,r){"use strict";r.d(n,{Z:function(){return components_FlipNumber}});var a=r(7437),s=r(2265),i=r(3920),components_FlipNumber=function(t){let{children:n}=t,r=function(){let t=(0,s.useRef)(!0);return(0,s.useEffect)(()=>{t.current=!1},[]),t.current}(),[l,o]=(0,s.useState)("initial"),[c,u]=(0,s.useState)(n);return(0,s.useEffect)(()=>{r||(setTimeout(()=>o("out"),0),setTimeout(()=>u(n),75),setTimeout(()=>o("moveDown"),75),setTimeout(()=>o("initial"),150))},[n,r,75]),(0,a.jsx)("span",{className:(0,i.Z)("inline-flex","out"===l&&"opacity-0 -translate-y-3 duration-75 ease-in-out","initial"===l&&"opacity-100 translate-y-0 duration-75 ease-in-out","moveDown"===l&&"opacity-0 translate-y-3"),children:c})}},6128:function(t,n,r){"use strict";r.r(n),r.d(n,{GitHub:function(){return GitHub},YouTube:function(){return YouTube},default:function(){return Stats}});var a=r(7437),s=r(1396),i=r.n(s),l=r(4133),o=r(6435),c=r(3920),u=r(3159),m=r(2265);let d=m.forwardRef(function({title:t,titleId:n,...r},a){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":n},r),t?m.createElement("title",{id:n},t):null,m.createElement("path",{fillRule:"evenodd",d:"M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z",clipRule:"evenodd"}))});var h=r(559),g=r(5610);function addCommas(t){if(void 0!==t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function YouTube(){let{data:t,error:n}=(0,l.ZP)("/api/youtube",g.Z);return n?(0,a.jsx)("div",{children:"failed to load"}):addCommas(null==t?void 0:t.subscribers)}function GitHub(){let{data:t,error:n}=(0,l.ZP)("/api/github?username=saifmohamedsv",g.Z);return n?(0,a.jsx)("div",{children:"failed to load"}):addCommas(null==t?void 0:t.stars)}function Stats(){let{theme:t}=(0,o.F)(),{data:n,error:r}=(0,l.ZP)("/api/github?username=".concat("saifmohamedsv"),g.Z),{data:s,error:m}=(0,l.ZP)("/api/youtube",g.Z);return(0,a.jsxs)("ul",{className:(0,c.Z)("animated-list space-y-2","terminal"===t?"font-mono tracking-tight":""),children:[(0,a.jsx)("li",{className:"transition-opacity",children:(0,a.jsxs)(i(),{className:"flex items-center gap-3 no-underline",href:"https://github.com/saifmohamedsv",children:[(0,a.jsx)(u.hJX,{className:"text-xl"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(h.Z,{children:n?addCommas(null==n?void 0:n.stars):"000"}),(0,a.jsx)("span",{children:" Repository Stars"})]})]})}),(0,a.jsx)("li",{className:"transition-opacity",children:(0,a.jsxs)(i(),{className:"flex items-center gap-3",href:"/blog",children:[(0,a.jsx)(d,{className:"h-5 w-5"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(h.Z,{children:s?addCommas(s.viewers):"0,000"}),(0,a.jsx)("span",{children:" Total Video Views"})]})]})}),(0,a.jsx)("li",{className:"transition-opacity",children:(0,a.jsxs)(i(),{className:"flex items-center gap-3 no-underline",href:"https://www.youtube.com/@saifmohamed_swe",children:[(0,a.jsx)(u.V2E,{className:"text-xl"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(h.Z,{children:s?addCommas(null==s?void 0:s.subscribers):"00,000"}),(0,a.jsx)("span",{children:" YouTube Subscribers"})]})]})})]})}},5610:function(t,n,r){"use strict";async function Fetcher(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];let a=await fetch(...n);return a.json()}r.d(n,{Z:function(){return Fetcher}})},4750:function(t,n,r){"use strict";r.r(n),n.default={src:"/_next/static/media/avatar.22fc7566.png",height:252,width:252,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AGtDM25LPcGZg7yahbygkM6woc2ZgK56ZACncVqmdmHBo5Oiin6xl4u+pJfBppe7mYwAsYFupIJ0xKmfnoiAoYuCy7GomX9zpoh9AJhzZKaHe+DDt513WKWMgNnDu7Kbj6Z8cACCTDK3m5ikpLhufqFyi7mTlrfTrqCugnUAqWtOjIelPX+9jJW1Tny/AFaZnoqRu5SFALaPh2JxmIZ5fpN9ckZklSJbmaefqb+ZigC3iXmLcGFbX3ssa6goVIJvYmvHraC7mI9dSmnk6bdKTwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},1396:function(t,n,r){t.exports=r(8326)},1172:function(t,n,r){"use strict";r.d(n,{w_:function(){return GenIcon}});var a=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(s),__assign=function(){return(__assign=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++)for(var s in n=arguments[r])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t}).apply(this,arguments)},__rest=function(t,n){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&0>n.indexOf(a)&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(r[a[s]]=t[a[s]]);return r};function GenIcon(t){return function(n){return a.createElement(IconBase,__assign({attr:__assign({},t.attr)},n),function Tree2Element(t){return t&&t.map(function(t,n){return a.createElement(t.tag,__assign({key:n},t.attr),Tree2Element(t.child))})}(t.child))}}function IconBase(t){var elem=function(n){var r,s=t.attr,i=t.size,l=t.title,o=__rest(t,["attr","size","title"]),c=i||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),a.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,o,{className:r,style:__assign(__assign({color:t.color||n.color},n.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),t.children)};return void 0!==i?a.createElement(i.Consumer,null,function(t){return elem(t)}):elem(s)}}}]);