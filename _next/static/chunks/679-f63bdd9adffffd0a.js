(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{2310:(e,t,r)=>{Promise.resolve().then(r.bind(r,9615)),Promise.resolve().then(r.bind(r,5506))},4436:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),l=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:i,title:o}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,l),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(a)}},5506:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var n=r(5155),a=r(6874),i=r.n(a),l=r(5695),s=r(226),o=r(2115),c=r(9911);let u={hidden:{opacity:0,y:-20},visible:{opacity:1,y:0,transition:{duration:.5,staggerChildren:.1}}},d={hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},m={closed:{opacity:0,y:-20,height:0,transition:{staggerChildren:.05,staggerDirection:-1,when:"afterChildren"}},open:{opacity:1,y:0,height:"auto",transition:{staggerChildren:.1,delayChildren:.1}}};function h(){let e=(0,l.usePathname)(),[t,r]=(0,o.useState)(!1),a=[{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/projects",label:"Projects"},{href:"/blog",label:"Blog"},{href:"/contact",label:"Contact"}];return(0,n.jsxs)(s.P.nav,{initial:"hidden",animate:"visible",variants:u,className:"w-full mb-12 border-primary-900 pb-4",children:[(0,n.jsxs)(s.P.div,{className:"flex justify-content-between align-items-center",children:[(0,n.jsx)(s.P.div,{variants:d,className:"list-none",children:(0,n.jsx)(i(),{href:"/",className:"text-xl font-pixel gradient-text no-underline",children:"QuangPao"})}),(0,n.jsx)("div",{className:"block md:hidden",children:(0,n.jsx)("button",{onClick:()=>r(!t),className:"p-2 rounded-sm focus:outline-none","aria-label":"Toggle navigation",children:t?(0,n.jsx)(c.QCr,{className:"text-primary",style:{width:"1.5rem",height:"1.5rem"}}):(0,n.jsx)(c.OXb,{className:"text-primary",style:{width:"1.5rem",height:"1.5rem"}})})}),(0,n.jsx)(s.P.ul,{className:"hidden md:flex gap-6 list-none m-0 p-0",variants:u,children:a.map(t=>{let{href:r,label:a}=t;return(0,n.jsx)(s.P.li,{variants:d,className:"list-none",children:(0,n.jsxs)(i(),{href:r,className:"relative text-base transition-all duration-300 font-medium no-underline px-3 py-2 rounded-sm\n                  ".concat(e===r?"text-white bg-primary-900/30 shadow-glow font-semibold":"text-text-secondary hover:text-primary hover:bg-primary-900/10"),children:[a,e===r&&(0,n.jsx)(s.P.div,{layoutId:"underline-desktop",className:"absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-primary via-secondary to-accent",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3}})]})},r)})})]}),(0,n.jsx)(s.P.div,{initial:"closed",animate:t?"open":"closed",variants:m,className:"overflow-hidden md:hidden w-full mt-4",children:(0,n.jsx)(s.P.ul,{className:"flex flex-column gap-3 list-none m-0 p-0 w-full",children:a.map(t=>{let{href:a,label:l}=t;return(0,n.jsx)(s.P.li,{variants:d,className:"list-none w-full",children:(0,n.jsxs)(i(),{href:a,onClick:()=>r(!1),className:"relative text-base transition-all duration-300 font-medium no-underline px-3 py-2 rounded-sm flex w-full\n                  ".concat(e===a?"text-white bg-primary-900/30 shadow-glow font-semibold":"text-text-secondary hover:text-primary hover:bg-primary-900/10"),children:[l,e===a&&(0,n.jsx)(s.P.div,{layoutId:"underline-mobile",className:"absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-primary via-secondary to-accent",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3}})]})},a)})})})]})}},5695:(e,t,r)=>{"use strict";var n=r(8999);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}})},9615:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(5155),a=r(2115),i=r(226);function l(e){let{text:t,className:r=""}=e,[l,s]=(0,a.useState)(""),[o,c]=(0,a.useState)(!0),[u,d]=(0,a.useState)(!1),m=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(m.current){let e=m.current.offsetHeight;m.current.style.minHeight="".concat(e,"px")}},[]),(0,a.useEffect)(()=>{let e=0,r=setInterval(()=>{e<t.length?(s(t.substring(0,e+1)),e++):(clearInterval(r),d(!0))},100);return()=>clearInterval(r)},[t]),(0,a.useEffect)(()=>{let e=setInterval(()=>{c(e=>!e)},530);return()=>clearInterval(e)},[]);let h={hidden:{opacity:0,scale:.9},visible:e=>({opacity:1,scale:1,transition:{delay:.05*e+.2}})};return(0,n.jsxs)("h1",{ref:m,className:"".concat(r," relative pixel-text text-white"),children:[(0,n.jsxs)("span",{className:"code-line relative",children:[(0,n.jsx)("span",{className:"code-prompt text-primary mr-2",children:">"}),l||(0,n.jsx)("span",{style:{opacity:0},children:t}),!u&&(0,n.jsx)("span",{className:"code-cursor ".concat(o?"opacity-100":"opacity-0"),children:"_"})]}),u&&(0,n.jsx)(i.P.div,{initial:"hidden",animate:"visible",className:"syntax-highlight absolute -bottom-1 left-0 right-0",children:[...Array(Math.ceil(t.length/5))].map((e,r)=>(0,n.jsx)(i.P.span,{custom:r,variants:h,className:"inline-block h-0.5 bg-gradient-to-r from-primary via-secondary to-accent",style:{width:"".concat(20*Math.min(5,t.length-5*r),"%"),marginLeft:"".concat(100*r,"%"),opacity:.7-.1*r}},r))})]})}}}]);