import{d as T,S as O,a6 as B,D as N,E as U,c as s,e as l,H as u,h as A,w,f as $,n as c,G as e,g as d,I as C,P as R,k as _,t as x,F as L,U as j,N as S,a3 as X,ac as ie,ad as ae,r as V,ae as z,af as re,ag as le,ah as oe,ai as ce,aj as P,ak as de,al as ue,am as ge,ab as pe,X as q,p as fe,j as ye,l as me,z as J,V as he,K as F,L as Y,M as ke,O as G,s as H}from"./DL5ydOWs.js";import{_ as K}from"./Rhw0napU.js";import{_ as be}from"./DPlzAKXa.js";const ve=T({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const n=t,g=O(()=>{const i=B("gap-16 sm:gap-y-24",n.orientation==="vertical"&&"flex flex-col",n.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),a=n.orientation==="vertical"?"text-center":"",m=B("mt-10 flex flex-wrap gap-x-6 gap-y-3",n.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:i,base:a,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:m}}),{ui:r,attrs:o}=N("landing.hero",U(n,"ui"),g,U(n,"class"),!0);return(i,a)=>{const m=X,h=R;return s(),l("div",C({class:e(r).wrapper},e(o)),[u(i.$slots,"top"),A(h,{class:c(e(r).container)},{default:w(()=>{var f;return[$("div",{class:c(e(r).base)},[i.$slots.headline?(s(),l("div",{key:0,class:c(e(r).headline)},[u(i.$slots,"headline")],2)):d("",!0),$("h1",{class:c(e(r).title)},[u(i.$slots,"title",{},()=>[_(x(t.title),1)])],2),t.description||i.$slots.description?(s(),l("div",{key:1,class:c(e(r).description)},[u(i.$slots,"description",{},()=>[_(x(t.description),1)])],2)):d("",!0),(f=t.links)!=null&&f.length||i.$slots.links?(s(),l("div",{key:2,class:c(e(r).links)},[u(i.$slots,"links",{},()=>[(s(!0),l(L,null,j(t.links,(b,v)=>(s(),S(m,C({key:v,ref_for:!0},b,{onClick:b.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2),u(i.$slots,"default")]}),_:3},8,["class"]),u(i.$slots,"bottom")],16)}}}),xe=ie(ae);function we(t,n={}){const{x:g,y:r}=xe(n),o=V(t??(window==null?void 0:window.document.body)),i=V(0),a=V(0);return z&&re([o,g,r],()=>{const m=le(o);if(!m)return;const{left:h,top:f}=m.getBoundingClientRect(),b=g.value-(h+z.scrollX),v=r.value-(f+z.scrollY);Math.abs(b)>1500||Math.abs(v)>1500||z.screen.width<=800||(i.value=b,a.value=v)},{immediate:!0,throttle:50}),{x:g,y:r,elementX:i,elementY:a}}const $e=t=>(fe("data-v-7e110e3c"),t=t(),ye(),t),Se=$e(()=>$("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),Ce=T({inheritAttrs:!1,__name:"LandingCard",props:{...oe,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){ce(p=>({"65b53f48":e(g),"7a374370":e(r)}));const n=t,g=O(()=>{var p;return n.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((p=P[n.color])==null?void 0:p["500"])||P[n.color]||n.color}),r=O(()=>{var p;return n.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((p=P[n.color])==null?void 0:p["400"])||P[n.color]||n.color}),o=O(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:B("gap-x-8 gap-y-4 rounded-xl flex-1",n.orientation==="vertical"&&"flex flex-col",!!a.default&&n.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),i=V(),a=de(),{elementX:m,elementY:h}=we(i),{ui:f,attrs:b}=N("landing.card",U(n,"ui"),o,U(n,"class"),!0),v=O(()=>ue(n)),E=O(()=>(n.title||a.title&&ge(a.title())||"Card link").trim());return(p,M)=>{const D=pe,y=q,I=K;return s(),l("div",C({ref_key:"el",ref:i,style:{"--x":`${e(m)}px`,"--y":`${e(h)}px`},class:[e(f).wrapper,p.to&&e(f).to]},e(b)),[A(I,{ui:e(f)},{default:w(()=>[$("div",{class:c(e(f).container)},[p.to?(s(),S(D,C({key:0,"aria-label":e(E)},e(v),{class:"focus:outline-none",tabindex:"-1"}),{default:w(()=>[Se]),_:1},16,["aria-label"])):d("",!0),t.icon||p.$slots.icon?(s(),l("div",{key:1,class:c(e(f).icon.wrapper)},[u(p.$slots,"icon",{},()=>[A(y,{name:t.icon,class:c(e(f).icon.base)},null,8,["name","class"])],!0)],2)):d("",!0),t.title||p.$slots.title?(s(),l("p",{key:2,class:c(e(f).title)},[u(p.$slots,"title",{},()=>[_(x(t.title),1)],!0)],2)):d("",!0),t.description||p.$slots.description?(s(),l("div",{key:3,class:c(e(f).description)},[u(p.$slots,"description",{},()=>[_(x(t.description),1)],!0)],2)):d("",!0),u(p.$slots,"container",{},void 0,!0)],2),p.$slots.default?u(p.$slots,"default",{key:0},void 0,!0):d("",!0)]),_:3},8,["ui"])],16)}}}),Ae=me(Ce,[["__scopeId","data-v-7e110e3c"]]),Ue=T({inheritAttrs:!1,__name:"LandingGrid",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const n={wrapper:"flex flex-col lg:grid gap-8 lg:grid-cols-12 relative"},g=t,{ui:r,attrs:o}=N("landing.grid",U(g,"ui"),n,U(g,"class"),!0);return(i,a)=>(s(),l("div",C({class:e(r).wrapper},e(o)),[u(i.$slots,"default")],16))}}),Le={key:0},je={key:2},_e={key:0},Oe=T({inheritAttrs:!1,__name:"LandingSection",props:{icon:{type:String,default:void 0},headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},features:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},slot:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const n=J(),g=t,r=O(()=>{const a=B("gap-16 sm:gap-y-24",g.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),m=B("",g.align==="center"&&"text-center flex flex-col items-center",g.align==="right"&&"lg:order-last");return{wrapper:"py-24 sm:py-32",container:a,base:m,icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:n.ui.icons.check}}}}),{ui:o,attrs:i}=N("landing.section",U(g,"ui"),r,U(g,"class"),!0);return(a,m)=>{const h=q,f=X,b=R;return s(),l("div",C({class:e(o).wrapper},e(i)),[u(a.$slots,"top"),A(b,{class:c(e(o).container)},{default:w(()=>{var v,E,p,M,D;return[t.icon||a.$slots.icon||t.headline||a.$slots.headline||t.title||a.$slots.title||t.description||a.$slots.description||(v=t.links)!=null&&v.length||a.$slots.links?(s(),l("div",{key:0,class:c(e(o).base)},[t.icon||a.$slots.icon?(s(),l("div",{key:0,class:c(e(o).icon.wrapper)},[u(a.$slots,"icon",{},()=>[A(h,{name:t.icon,class:c(e(o).icon.base)},null,8,["name","class"])])],2)):t.headline||a.$slots.headline?(s(),l("div",{key:1,class:c(e(o).headline)},[u(a.$slots,"headline",{},()=>[_(x(t.headline),1)])],2)):d("",!0),t.title||a.$slots.title?(s(),l("h2",{key:2,class:c(e(o).title)},[u(a.$slots,"title",{},()=>[_(x(t.title),1)])],2)):d("",!0),t.description||a.$slots.description?(s(),l("div",{key:3,class:c(e(o).description)},[u(a.$slots,"description",{},()=>[_(x(t.description),1)])],2)):d("",!0),t.align!=="center"&&((E=t.features)!=null&&E.length)?(s(),l("dl",{key:4,class:c([e(o).features.wrapper.base,e(o).features.wrapper.list])},[(s(!0),l(L,null,j(t.features,y=>(s(),l("div",{key:y.name,class:c(e(o).features.base)},[$("dt",{class:c(e(o).features.name)},[A(h,{name:y.icon||e(o).features.icon.name,class:c(e(o).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),y.name?(s(),l("span",Le,x(y.name),1)):d("",!0)],2),y.description?(s(),l("dd",{key:0,class:c(e(o).features.description)},x(y.description),3)):d("",!0)],2))),128))],2)):d("",!0),t.align!=="center"&&((p=t.links)!=null&&p.length||a.$slots.links)?(s(),l("div",{key:5,class:c(e(o).links)},[u(a.$slots,"links",{},()=>[(s(!0),l(L,null,j(t.links,(y,I)=>(s(),S(f,C({key:I,ref_for:!0},y,{onClick:y.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2)):d("",!0),a.$slots[t.slot||"default"]?u(a.$slots,t.slot||"default",{key:1}):t.align==="right"?(s(),l("div",je)):d("",!0),t.align==="center"&&((M=t.features)!=null&&M.length)?(s(),l("dl",{key:3,class:c([e(o).features.wrapper.base,e(o).features.wrapper.grid])},[(s(!0),l(L,null,j(t.features,y=>(s(),l("div",{key:y.name,class:c(e(o).features.base)},[$("dt",{class:c(e(o).features.name)},[A(h,{name:y.icon||e(o).features.icon.name,class:c(e(o).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),y.name?(s(),l("span",_e,x(y.name),1)):d("",!0)],2),y.description?(s(),l("dd",{key:0,class:c(e(o).features.description)},x(y.description),3)):d("",!0)],2))),128))],2)):d("",!0),t.align==="center"&&((D=t.links)!=null&&D.length||a.$slots.links)?(s(),l("div",{key:4,class:c(e(he)(e(o).links,"mt-0 justify-center"))},[u(a.$slots,"links",{},()=>[(s(!0),l(L,null,j(t.links,(y,I)=>(s(),S(f,C({key:I,ref_for:!0},y,{onClick:y.click}),null,16,["onClick"]))),128))])],2)):d("",!0)]}),_:3},8,["class"]),u(a.$slots,"bottom")],16)}}}),Be={key:1},Ee=T({inheritAttrs:!1,__name:"LandingCTA",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},card:{type:Boolean,default:!0},links:{type:Array,default:()=>[]},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const n=t,g=O(()=>{const i={};n.card?i.rounded="rounded-xl":(i.ring="",i.rounded="",i.background="",i.shadow="",i.divide="");const a=B("",n.align==="center"&&"text-center",n.align==="right"&&"lg:order-last"),m=B("flex flex-col",n.align!=="center"&&"lg:grid lg:grid-cols-2 lg:items-center","gap-16 sm:gap-y-24"),h=n.card?"py-24 sm:py-32 sm:px-16":"py-24 sm:py-32 px-6 lg:px-8",f=B("mt-10 flex items-center gap-x-6",n.align==="center"&&"justify-center");return{...i,wrapper:"relative",container:a,body:{base:m,padding:h},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:f}}),{ui:r,attrs:o}=N("landing.cta",U(n,"ui"),g,U(n,"class"),!0);return(i,a)=>{const m=X,h=K;return s(),S(h,C({class:e(r).wrapper},e(o),{ui:e(r)}),{default:w(()=>{var f;return[$("div",{class:c(e(r).container)},[t.title||i.$slots.title?(s(),l("h2",{key:0,class:c(e(r).title)},[u(i.$slots,"title",{},()=>[_(x(t.title),1)])],2)):d("",!0),t.description||i.$slots.description?(s(),l("div",{key:1,class:c(e(r).description)},[u(i.$slots,"description",{},()=>[_(x(t.description),1)])],2)):d("",!0),(f=t.links)!=null&&f.length||i.$slots.links?(s(),l("div",{key:2,class:c(e(r).links)},[u(i.$slots,"links",{},()=>[(s(!0),l(L,null,j(t.links,(b,v)=>(s(),S(m,C({key:v,ref_for:!0},b,{onClick:b.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2),i.$slots.default?u(i.$slots,"default",{key:0}):t.align==="right"?(s(),l("div",Be)):d("",!0)]}),_:3},16,["class","ui"])}}}),Ie={class:"flex justify-center gap-4"},Me=["src","alt"],Te={class:"flex flex-col gap-8"},De={class:"aspect-[1/1] overflow-hidden"},Ne=["src","alt"],Xe=T({__name:"index",async setup(t){var v,E,p,M;let n,g;const{data:r,error:o}=([n,g]=F(()=>G("index",()=>H("/").findOne())),n=await n,g(),n);if(o.value)throw Y({statusCode:404,message:"Page not found",fatal:!0});const i=J();ke({title:(v=r.value)==null?void 0:v.title,ogTitle:(E=r.value)==null?void 0:E.title,description:((p=r.value)==null?void 0:p.description)||i.seo.tagLine,ogDescription:((M=r.value)==null?void 0:M.description)||i.seo.tagLine});const{data:a,error:m}=([n,g]=F(()=>G("content:home:last-article",()=>H("/articles/").where({_path:/^\/articles\//}).only(["_path","title"]).sort({publishedAt:-1}).findOne())),n=await n,g(),n);if(m.value)throw Y({statusCode:404,message:"Unable to fetch last articles"});const h=[];a.value&&h.push({to:a.value._path,label:a.value.title,variant:"outline",icon:"i-ph-arrow-right",size:"xs",trailing:!0});const{data:f,error:b}=([n,g]=F(()=>G("content:home:latest-articles",()=>H("/articles/").only(["_path","title","description","publishedAt","authors","cover"]).sort({publishedAt:-1}).limit(2).find(),{default:()=>[]})),n=await n,g(),n);if(b.value)throw Y({statusCode:404,message:"Unable to fetch latest articles"});return(D,y)=>{const I=X,W=ve,Q=Ae,Z=Ue,ee=Oe,te=be,se=Ee,ne=R;return s(),l("div",null,[e(r)&&e(a)?(s(),S(W,{key:0,ui:{title:"max-w-3xl mx-auto",description:"max-w-2xl mx-auto"},title:e(r).hero.title,description:e(r).hero.description,links:e(r).hero.links},{headline:w(()=>[$("div",Ie,[(s(),l(L,null,j(h,k=>A(I,C({key:k.label,ref_for:!0},{ui:{rounded:"rounded-full"},...k}),null,16)),64))])]),_:1},8,["title","description","links"])):d("",!0),e(r)?(s(),S(ee,{key:1,title:e(r).sections.inspirations.title,links:e(r).sections.inspirations.links},{default:w(()=>[A(Z,{ui:{wrapper:"lg:grid-cols-2"}},{default:w(()=>[(s(!0),l(L,null,j(e(r).sections.inspirations.cards,k=>(s(),S(Q,{key:k.src,title:k.title,description:k.description,to:k.to,target:"_blank"},{container:w(()=>[$("img",{src:k.src,alt:k.alt,class:"mt-4 aspect-[16/9] object-cover object-center rounded-md",ui:{body:{base:"px-0 py-0 sm:p-0"}}},null,8,Me)]),_:2},1032,["title","description","to"]))),128))]),_:1})]),_:1},8,["title","links"])):d("",!0),e(r)?(s(),S(ne,{key:2},{default:w(()=>[A(se,{title:e(r).sections.articles.title,description:e(r).sections.articles.description,links:e(r).sections.articles.links,card:!1,align:"left"},{default:w(()=>[$("div",Te,[(s(!0),l(L,null,j(e(f),k=>(s(),S(te,{key:k._path,to:k._path,title:k.title,description:k.description,ui:{wrapper:"flex flex-row items-center overflow-hidden",header:{base:"w-1/3",padding:"px-0 sm:p-0 py-0"}}},{header:w(()=>[$("div",De,[$("img",{src:k.cover.src,alt:k.cover.alt,class:"aspect-[1/1] w-[44rem] object-cover object-center group-hover:scale-105 transition-transform ease-in",width:"1920",height:"1080"},null,8,Ne)])]),_:2},1032,["to","title","description"]))),128))])]),_:1},8,["title","description","links"])]),_:1})):d("",!0)])}}});export{Xe as default};