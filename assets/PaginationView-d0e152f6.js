import{aC as s,W as t,X as n,ar as l,bo as c,F as p,aK as _,aZ as g}from"./@vue-a2e6aab2.js";import{_ as d}from"./index-5ee32276.js";const u={props:["pages"],methods:{updatePage(o){this.$emit("emitPages",o)}}},m={"aria-label":"Page navigation example"},k={class:"pagination justify-content-center"},f={key:0,class:"page-link"},h=["onClick"];function P(o,i,e,v,b,r){return s(),t("nav",m,[n("ul",k,[n("li",{class:l(["page-item",{disabled:!e.pages.has_pre}])},[n("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=c(()=>r.updatePage(e.pages.current_page-1),["prevent"]))}," « ")],2),(s(!0),t(p,null,_(e.pages.total_pages,a=>(s(),t("li",{class:l(["page-item",{active:e.pages.current_page===a}]),key:a},[a===e.pages.current_page?(s(),t("span",f,g(a),1)):(s(),t("a",{key:1,class:"page-link",href:"#",onClick:c(()=>r.updatePage(a),["prevent"])},g(a),9,h))],2))),128)),n("li",{class:l(["page-item",{disabled:!e.pages.has_next}])},[n("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=c(()=>r.updatePage(e.pages.current_page+1),["prevent"]))}," » ")],2)])])}const y=d(u,[["render",P]]);export{y as P};
