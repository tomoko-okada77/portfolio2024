import{n as o,o as n,c as s,t as c,x as l,a as _,v as p,b as m,s as d,q as u,F as f}from"./DP1fr-Q-.js";const x=o({__name:"DescriptionTerm",props:{text:{},minWidth:{default:"18rem"}},setup(i){return(e,r)=>(n(),s("dt",{style:l({minWidth:e.minWidth}),class:"font-semibold text-secondary text-2xl tracking-wider"},c(e.text),5))}}),h={class:"font-semibold text-2xl tracking-wider"},D={class:"md:min-w-[8rem] inline-block"},b={key:0,class:"ml-4 font-medium text-xl"},k=o({__name:"DescriptionDefinition",props:{text:{},note:{}},setup(i){return(e,r)=>(n(),s("dt",h,[_("span",D,c(e.text),1),e.note?(n(),s("small",b,c(e.note),1)):p("",!0)]))}}),y={class:"md:flex"},g=o({__name:"DescriptionList",props:{term:{},definition:{},note:{}},setup(i){return(e,r)=>{const a=x,t=k;return n(),s("dl",y,[m(a,{text:e.term,class:"mb-4 md:mb-0"},null,8,["text"]),m(t,{text:e.definition,note:e.note},null,8,["text","note"])])}}}),L=o({__name:"DescriptionLists",props:{lists:{}},setup(i){return(e,r)=>{const a=g;return n(!0),s(f,null,d(e.lists,t=>(n(),u(a,{key:t.label,term:t.label,definition:t.text,note:t.note,class:"mb-10"},null,8,["term","definition","note"]))),128)}}});export{L as _};
