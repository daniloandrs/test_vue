import{C as R,P as q}from"./payments.service-Kx_u52bo.js";import{j as A,d as G,u as H,r,k as J,o as K,a as t,c,w as e,b as s,e as o,g as h,i as y,F as w,h as k,n as Q,t as T,f as W}from"./index-uEO5ItrJ.js";class _{static async show(a,m){A.emit("toastOpen",{message:a,type:m})}static async success(a){a||(a="Done"),_.show(a,"success")}static async error(a){_.show(a,"error")}}const X=_.error,Y=k("label",null,"Buscar empresa",-1),Z={class:"d-flex align-center justify-center fill-height"},ne=G({__name:"Index",setup($){const a=H(),m=r(!1),p=r(!1),d=r([]),u=r(""),f=r(),x=r([{id:1,name:"todos",icon:"mdi-heart-outline"},{id:2,name:"favoritos",icon:"mdi-star-outline"},{id:3,name:"telefonia",icon:"mdi-phone-outline"},{id:4,name:"universidades",icon:"mdi-account-school-outline"}]),C=J(()=>u&&d?d.value.filter(l=>u.value.toLowerCase().split("").every(i=>l.company.toLowerCase().includes(i))):d.value),V=()=>{},b=async()=>{try{p.value=!0;const{data:l}=await q.getProviders();d.value=l.companies}catch(l){X(l.message)}finally{p.value=!1}};return K(async()=>{a.navbar={title:"Recargas"},await b()}),(l,i)=>{const B=t("v-text-field"),v=t("v-col"),P=t("v-chip"),S=t("v-slide-group-item"),z=t("v-slide-group"),L=t("v-sheet"),N=t("v-skeleton-loader"),j=t("v-progress-circular"),g=t("v-img"),D=t("v-avatar"),E=t("v-btn"),F=t("v-list-item"),I=t("v-list"),U=t("v-row");return s(),c(R,null,{default:e(()=>[o(U,null,{default:e(()=>[o(v,{cols:"12"},{default:e(()=>[Y,o(B,{loading:m.value,density:"compact",variant:"outlined",modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=n=>u.value=n),label:"Buscar","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"","onClick:appendInner":V},null,8,["loading","modelValue"])]),_:1}),o(v,{cols:"12"},{default:e(()=>[o(L,{class:"mx-auto",elevation:"0","max-width":"800"},{default:e(()=>[o(z,{modelValue:f.value,"onUpdate:modelValue":i[1]||(i[1]=n=>f.value=n),"show-arrows":!1,"selected-class":"bg-primary",multiple:"",variant:"outline"},{default:e(()=>[(s(!0),h(w,null,y(x.value,n=>(s(),c(S,{key:n.id},{default:e(({isSelected:ee,toggle:M,selectedClass:O})=>[o(P,{class:Q([O,"mx-2"]),color:"indigo","prepend-icon":n.icon,onClick:M},{default:e(()=>[W(T(n.name),1)]),_:2},1032,["class","prepend-icon","onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(v,{cols:"12",style:{height:"23rem","overflow-y":"hidden"}},{default:e(()=>[p.value?(s(),c(N,{key:0,type:"list-item-avatar@5"})):(s(),c(I,{key:1,lines:"two",height:"100%"},{default:e(()=>[(s(!0),h(w,null,y(C.value,n=>(s(),c(F,{key:n._id,title:n.company},{prepend:e(()=>[o(D,null,{default:e(()=>[o(g,{"lazy-src":n.image,src:n.image,alt:""},{placeholder:e(()=>[k("div",Z,[o(j,{color:"grey-lighten-4",indeterminate:""})])]),error:e(()=>[o(g,{class:"mx-auto",height:"300","max-width":"500",src:"@/assets/images/broken-image.png"})]),_:2},1032,["lazy-src","src"])]),_:2},1024)]),append:e(()=>[o(E,{color:"grey-lighten-1",icon:"mdi-star-outline",variant:"text"})]),_:2},1032,["title"]))),128))]),_:1}))]),_:1})]),_:1})]),_:1})}}});export{ne as default};