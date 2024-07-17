import{d as U,S as A,a6 as $,D as O,E as x,c as o,e as u,f as c,n as m,G as s,H as h,h as v,g as y,k as B,t as z,F as P,U as D,N as S,I as G,X as Z,a3 as ee,a4 as H,a5 as j,a7 as te,a8 as ae,V as se,a9 as ne,aa as V,Y as M,x as re,K as I,L,z as ie,M as oe,w as f,O as E,P as le,s as T,R as ce,ab as ue}from"./DL5ydOWs.js";import{_ as de}from"./DPlzAKXa.js";import"./Rhw0napU.js";const pe={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},ge={key:2},fe=U({inheritAttrs:!1,__name:"PageHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},align:{type:String,default:"left"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const a=e,n=A(()=>{const t=$("gap-8 sm:gap-y-16",a.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),p=$("",a.align==="center"&&"text-center flex flex-col items-center",a.align==="right"&&"lg:order-last"),g=$("mt-8 flex flex-wrap gap-x-3 gap-y-1.5",a.align==="center"&&"justify-center");return{wrapper:"py-8 sm:py-16",container:t,base:p,icon:{wrapper:"flex mb-4",base:"w-10 h-10 flex-shrink-0 text-primary"},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",links:g}}),{ui:r,attrs:i}=O("page.hero",x(a,"ui"),n,x(a,"class"),!0);return(t,p)=>{var l,k;const g=Z,_=ee;return o(),u("div",G({class:s(r).wrapper},s(i)),[c("div",{class:m(s(r).container)},[e.icon||t.$slots.icon||e.title||t.$slots.title||e.description||t.$slots.description||(l=e.links)!=null&&l.length||t.$slots.links?(o(),u("div",{key:0,class:m(s(r).base)},[e.icon||t.$slots.icon?(o(),u("div",{key:0,class:m(s(r).icon.wrapper)},[h(t.$slots,"icon",{},()=>[v(g,{name:e.icon,class:m(s(r).icon.base)},null,8,["name","class"])])],2)):y("",!0),c("h1",{class:m(s(r).title)},[h(t.$slots,"title",{},()=>[B(z(e.title),1)])],2),e.description||t.$slots.description?(o(),u("div",{key:1,class:m(s(r).description)},[h(t.$slots,"description",{},()=>[B(z(e.description),1)])],2)):y("",!0),(k=e.links)!=null&&k.length||t.$slots.links?(o(),u("div",{key:2,class:m(s(r).links)},[h(t.$slots,"links",{},()=>[(o(!0),u(P,null,D(e.links,(w,C)=>(o(),S(_,G({key:C,ref_for:!0},w,{onClick:w.click}),null,16,["onClick"]))),128))])],2)):y("",!0)],2)):y("",!0),t.$slots.default?h(t.$slots,"default",{key:1}):e.align==="right"?(o(),u("div",ge)):y("",!0)],2)],16)}}}),F=H(j.ui.strategy,j.ui.avatar,te),me=H(j.ui.strategy,j.ui.avatarGroup,pe),_e=U({inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(F.size).includes(e)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:a}){const{ui:n,attrs:r}=O("avatarGroup",x(e,"ui"),me,x(e,"class")),i=A(()=>ae(a)),t=A(()=>typeof e.max=="string"?parseInt(e.max,10):e.max),p=A(()=>i.value.map((g,_)=>{const l={};return!e.max||t.value&&_<t.value?(e.size&&(l.size=e.size),l.class=g.props.class||"",l.class=se($(l.class,n.value.ring,n.value.margin),l.class),ne(g,l)):t.value!==void 0&&_===t.value?V(M,{size:e.size||F.default.size,text:`+${i.value.length-t.value}`,class:$(n.value.ring,n.value.margin)}):null}).filter(Boolean).reverse());return()=>V("div",{class:n.value.wrapper,...r.value},p.value)}}),he=U({inheritAttrs:!1,__name:"PageGrid",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const a={wrapper:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"},n=e,{ui:r,attrs:i}=O("page.grid",x(n,"ui"),a,x(n,"class"),!0);return(t,p)=>(o(),u("div",G({class:s(r).wrapper},s(i)),[h(t.$slots,"default")],16))}});function ve(e){return typeof e=="string"&&(e=new Date(e)),new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(e)}const ye={class:"aspect-[16/9] overflow-hidden"},xe=["src","alt"],ke={class:"flex flex-row justify-between"},we=c("dt",{class:"sr-only"}," Published at ",-1),be=["datetime"],$e=c("dt",{class:"sr-only"}," Authors ",-1),Ce=c("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ze=U({__name:"index",async setup(e){var l,k,w,C;let a,n;const r=re(),{data:i,error:t}=([a,n]=I(()=>E(r.path,()=>T(r.path).findOne(),"$tXCWyqljTG")),a=await a,n(),a);if(t.value)throw L({statusCode:404,message:"Page not found",fatal:!0});const p=ie();oe({title:(l=i.value)==null?void 0:l.title,ogTitle:(k=i.value)==null?void 0:k.title,description:((w=i.value)==null?void 0:w.description)||p.seo.tagLine,ogDescription:((C=i.value)==null?void 0:C.description)||p.seo.tagLine});const{data:g,error:_}=([a,n]=I(()=>E("content:articles",()=>T("/articles/").only(["_path","title","description","publishedAt","authors","cover"]).sort({publishedAt:-1}).find(),{default:()=>[]})),a=await a,n(),a);if(_.value)throw L({statusCode:404,message:"Unable to fetch articles"});return(N,Ae)=>{const R=fe,q=ue,X=M,J=_e,K=de,W=he,Y=ce,Q=le;return s(i)?(o(),S(Q,{key:0},{default:f(()=>[v(Y,null,{default:f(()=>[v(R,{title:s(i).hero.title,description:s(i).hero.description},null,8,["title","description"]),v(W,null,{default:f(()=>[(o(!0),u(P,null,D(s(g),d=>(o(),S(K,{key:d._path,title:d.title,description:d.description,to:d._path,ui:{wrapper:"overflow-hidden",header:{padding:"px-0 sm:p-0 py-0"},body:{padding:"!pb-0"}}},{header:f(()=>[c("div",ye,[c("img",{src:d.cover.src,alt:d.cover.alt,class:"aspect-[16/9] object-cover object-center group-hover:scale-105 transition-transform ease-in",width:"1920",height:"1080"},null,8,xe)])]),footer:f(()=>[c("dl",ke,[we,c("dd",null,[c("time",{datetime:d.publishedAt},z(("formatDate"in N?N.formatDate:s(ve))(d.publishedAt)),9,be)]),$e,c("dd",null,[v(J,{size:"xs"},{default:f(()=>[(o(!0),u(P,null,D(d.authors,b=>(o(),S(X,{key:b.name,src:b.avatar,alt:b.name,title:b.name,class:"hover:scale-105 hover:ring-primary-500 dark:hover:ring-primary-400 transition-transform"},{default:f(()=>[v(q,{to:`https://x.com/${b.twitter}`,target:"_blank",class:"focus:outline-none",tabindex:"-1"},{default:f(()=>[Ce]),_:2},1032,["to"])]),_:2},1032,["src","alt","title"]))),128))]),_:2},1024)])])]),_:2},1032,["title","description","to"]))),128))]),_:1})]),_:1})]),_:1})):y("",!0)}}});export{ze as default};
