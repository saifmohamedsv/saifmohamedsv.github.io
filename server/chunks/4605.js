exports.id=4605,exports.ids=[4605],exports.modules={81269:(e,t,r)=>{Promise.resolve().then(r.bind(r,31336)),Promise.resolve().then(r.bind(r,86841)),Promise.resolve().then(r.bind(r,66157))},24948:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13724,23)),Promise.resolve().then(r.t.bind(r,35365,23)),Promise.resolve().then(r.t.bind(r,44900,23)),Promise.resolve().then(r.t.bind(r,44714,23)),Promise.resolve().then(r.t.bind(r,45392,23)),Promise.resolve().then(r.t.bind(r,8898,23))},2521:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,30614,23))},31336:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Navigation});var s=r(30784),a=r(9885),i=r(11440),l=r.n(i),n=r(57114),o=r(71072),d=r(35266);function NavLink({href:e,children:t}){let r=`/${(0,n.usePathname)().split("/")[1]}`;return s.jsx(l(),{className:(0,d.Z)("px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",r===e?"bg-secondaryA text-primary":"text-secondary"),href:e,children:t})}var c=r(89374),m=r(94149),h=r(36929),u=r(23128),x=r(50653),p=r(43857);function ThemeSwitcher(){let[e,t]=(0,a.useState)(!1),{theme:r,setTheme:i,resolvedTheme:l,themes:n}=(0,o.F)();return((0,a.useEffect)(()=>{t(!0)},[]),e)?s.jsx(s.Fragment,{children:s.jsx(c.R,{value:r,onChange:e=>i(e),children:({open:e})=>{let t=(0,d.Z)("w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors",e?"text-primary":"text-secondary");return(0,s.jsxs)("div",{className:"relative",children:[s.jsx(c.R.Button,{className:(0,d.Z)("relative w-8 h-8 cursor-default rounded-full flex items-center justify-center focus:outline-none "),children:"dark"===l?s.jsx(u.Z,{className:t}):s.jsx(p.Z,{className:t})}),s.jsx(m.M,{children:e&&s.jsx(c.R.Options,{as:h.E.ul,static:!0,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{type:"spring",bounce:.3,duration:.3},className:"absolute right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 w-42 rounded-xl bg-white dark:bg-black focus:outline-none sm:text-sm capitalize",style:"terminal"===r?{background:"#040605"}:{},children:n.map(e=>s.jsx(c.R.Option,{className:({active:e})=>(0,d.Z)("relative cursor-default select-none py-2 pl-10 pr-4 rounded-md",e?"bg-tertiary":""),value:e,children:({selected:t})=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("span",{className:`block truncate ${t?"font-medium":"font-normal"}`,children:"system"==e?"Automatic":e}),t?s.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50",children:s.jsx(x.Z,{className:"w-5 h-5","aria-hidden":"true"})}):null]})},e))})})]})}})}):null}var f=r(19895),v=r(96904);let g=[{label:"About",href:"/about"},{label:"Blog",href:"/blog"},{label:"Projects",href:"/projects"}];function Navigation(){let e=`/${(0,n.usePathname)().split("/")[1]}`,{theme:t}=(0,o.F)();return s.jsx("header",{className:(0,d.Z)("relative top-0 z-20 bg-primary md:sticky"),children:(0,s.jsxs)("nav",{className:"lg mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6",children:[s.jsx(l(),{href:"/",className:"shrink-0 text-primary",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 143 236",version:"1.2",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[s.jsx("path",{d:"M71.3589 0V46.585L0 105.127V58.5419L71.3589 0Z",fill:"currentColor"}),s.jsx("path",{d:"M71.3588 0V46.585L142.714 105.127V58.5419L71.3588 0Z",fill:"currentColor"}),s.jsx("path",{d:"M71.3589 235V188.411L0 129.869V176.454L71.3589 235Z",fill:"currentColor"}),s.jsx("path",{d:"M71 235.131V188.542L142.355 130V176.585L71 235.131Z",fill:"currentColor"}),s.jsx("path",{d:"M0 105.127L142.714 176.454V129.869L0 58.5419V105.127Z",fill:"currentColor"})]})}),s.jsx("ul",{className:"hidden items-center gap-1 md:flex",children:g.map(e=>s.jsx("li",{children:s.jsx(NavLink,{href:e.href,children:e.label})},e.href))}),(0,s.jsxs)(f.J,{className:"relative ml-auto md:hidden",children:[(0,s.jsxs)(f.J.Button,{className:"flex items-center gap-1 rounded-lg p-1 text-secondary focus:ring-0 focus-visible:outline-none",children:["Menu",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-5 w-5",children:s.jsx("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})})]}),s.jsx(v.u,{as:a.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:s.jsx(f.J.Panel,{className:"absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base shadow-lg focus:outline-none dark:bg-black sm:text-sm",style:"terminal"===t?{background:"#040605"}:{},children:s.jsx("div",{className:"grid",children:g.map(t=>s.jsx(l(),{href:t.href,className:(0,d.Z)("rounded-md px-4 py-2 transition-colors hover:text-primary",e===t.href?"bg-tertiary font-medium":"font-normal"),children:t.label},t.href))})})})]}),s.jsx("div",{className:"flex h-8 w-8 items-center justify-center",children:s.jsx(ThemeSwitcher,{})})]})})}},86841:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ThemeProvider:()=>ThemeProvider});var s=r(30784);r(9885);var a=r(71072);function ThemeProvider({children:e,...t}){return s.jsx(a.f,{themes:["light","dark","terminal"],...t,children:e})}},37770:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>RootLayout,metadata:()=>v});var s=r(4656),a=r(61326),i=r.n(a);r(67272);var l=r(82433),n=r(40331),o=r(95153);let d=(0,o.createProxy)(String.raw`/Users/saifmohamedsv/Work/Personal Portfolios/b-r.io/components/ThemeProvider.tsx`),{__esModule:c,$$typeof:m}=d;d.default;let h=d.ThemeProvider,u=(0,o.createProxy)(String.raw`/Users/saifmohamedsv/Work/Personal Portfolios/b-r.io/components/Navigation.tsx`),{__esModule:x,$$typeof:p}=u,f=u.default,v={title:"Home | Saif Mohamed",description:"I am a full-stack software engineer who basically just enjoys creating things."};function RootLayout({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:(0,n.Z)(i().className,"width-full bg-primary text-primary antialiased"),children:[(0,s.jsxs)(h,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:[s.jsx(f,{}),s.jsx("div",{className:"mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20",children:e})]}),s.jsx(l.c,{})]})})}},44293:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__,metadata:()=>i});var s=r(4656),a=r(79233);let i={title:"404 | Saif Mohamed",description:"Uh oh! This page does not exist"},__WEBPACK_DEFAULT_EXPORT__=()=>(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("h1",{children:"404 - Page not found"}),s.jsx("p",{className:"text-secondary",children:"Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again…"}),s.jsx("div",{className:"h-2"}),s.jsx(a.Z,{href:"/",underline:!0,children:"Return home"})]})},79233:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Link});var s=r(4656),a=r(24353),i=r.n(a),l=r(40331);function Link(e){let t=!e.href.toString().startsWith("/"),{underline:r,...a}=e;return s.jsx(i(),{...a,className:(0,l.Z)("underline-offset-4",(t||r)&&"underline",e.className),target:t?"_blank":void 0,children:e.children})}},53226:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(31323);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"apple-icon.png");return[{type:"image/png",sizes:"180x180",url:t+"?e1f96b00e1135525"}]}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(31323);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},4998:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(31323);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"icon.png");return[{type:"image/png",sizes:"180x180",url:t+"?e1f96b00e1135525"}]}},67272:()=>{}};