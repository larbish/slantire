import{d as C,ah as N,ak as B,D as L,E as p,S as m,al as _,am as P,c as n,N as f,an as V,w as i,H as o,I as g,G as t,g as l,e as d,n as c,h as I,k as y,t as k,f as U,ab as j,X as A}from"./DL5ydOWs.js";import{_ as D}from"./Rhw0napU.js";const E=U("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),G=C({inheritAttrs:!1,__name:"PageCard",props:{...N,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const h={wrapper:"relative group",to:"hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{wrapper:"mb-6 flex",base:"w-10 h-10 flex-shrink-0 text-primary"},body:{base:"flex-1"},title:"text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"},r=a,u=B(),{ui:s,attrs:b}=L("page.card",p(r,"ui"),h,p(r,"class"),!0),v=m(()=>_(r)),x=m(()=>(r.title||u.title&&P(u.title())||"Card link").trim());return(e,O)=>{const $=j,S=A,w=D;return n(),f(w,g({class:[t(s).wrapper,e.to&&t(s).to]},t(b),{ui:t(s)}),V({default:i(()=>[e.to?(n(),f($,g({key:0,"aria-label":t(x)},t(v),{class:"focus:outline-none",tabindex:"-1"}),{default:i(()=>[E]),_:1},16,["aria-label"])):l("",!0),a.icon||e.$slots.icon?(n(),d("div",{key:1,class:c(t(s).icon.wrapper)},[o(e.$slots,"icon",{},()=>[I(S,{name:a.icon,class:c(t(s).icon.base)},null,8,["name","class"])])],2)):l("",!0),a.title||e.$slots.title?(n(),d("p",{key:2,class:c(t(s).title)},[o(e.$slots,"title",{},()=>[y(k(a.title),1)])],2)):l("",!0),a.description||e.$slots.description?(n(),d("div",{key:3,class:c(t(s).description)},[o(e.$slots,"description",{},()=>[y(k(a.description),1)])],2)):l("",!0),o(e.$slots,"default")]),_:2},[e.$slots.header?{name:"header",fn:i(()=>[o(e.$slots,"header")]),key:"0"}:void 0,e.$slots.footer?{name:"footer",fn:i(()=>[o(e.$slots,"footer")]),key:"1"}:void 0]),1040,["class","ui"])}}});export{G as _};