import{S as m}from"./sweetalert2-fc38d252.js";import{aM as p,aC as c,W as h,X as t,a3 as e,bj as a,bo as v,U as u,Q as k,F as g,a2 as n}from"./@vue-a2e6aab2.js";import{_ as b}from"./index-5ee32276.js";import"./@ckeditor-b092e1d3.js";import"./vue-71628d3f.js";import"./pinia-7d28dea6.js";import"./vue-demi-71ba0ef2.js";import"./aos-aa3ba816.js";import"./lodash.throttle-ab0b6905.js";import"./lodash.debounce-ca1b1d09.js";import"./vue-router-49be82a2.js";import"./axios-08622986.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-67898897.js";import"./bootstrap-d9a0ff4a.js";import"./@popperjs-9847b28c.js";import"./vee-validate-aa725db8.js";import"./@vee-validate-55db0f47.js";const w="/flash-tea/assets/slogo-6aaff272.svg",{VITE_APP_URL:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"leo533",BASE_URL:"/flash-tea/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{checkSuccess:!1}},methods:{logout(){document.cookie=`mytoken=; expires=${new Date};`,this.$router.push("/login")},checkLogin(){const r=document.cookie.replace(/(?:(?:^|.*;\s*)mytoken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=r;const s=this.$loading.show();this.$http.post(`${x}api/user/check`).then(i=>{i.data.success?(this.checkSuccess=!0,s.hide(),this.$router.push("/admin/products")):(m.fire({position:"top-end",icon:"error",title:i.data.message,showConfirmButton:!1,timer:1500}),s.hide(),this.$router.push("/login"))}).catch(i=>{m.fire({position:"top-end",icon:"error",title:i.response.data.message,showConfirmButton:!1,timer:1500}),s.hide()})}},mounted(){this.checkLogin()}},V={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap ps-3 shadow"},P={class:"col-md-3 col-lg-12 me-0"},y=t("img",{src:w,alt:"",height:"50"},null,-1),B=t("button",{class:"navbar-toggler position-absolute d-md-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"true","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),C=t("div",{class:"navbar-nav"},[t("div",{class:"nav-item text-nowrap"})],-1),E={class:"container-fluid"},S={key:0,id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},A={class:"position-sticky pt-3"},M={class:"nav flex-column"},T=t("h2",{class:"fw-bold fs-5 p-3"},"請選擇功能",-1),D={class:"nav-item"},L={class:"nav-item"},N={class:"nav-item"},R={class:"nav-item"},U={class:"nav-item"},I={class:"nav-item"};function F(r,s,i,O,l,d){const o=p("router-link"),_=p("router-view");return c(),h(g,null,[t("header",V,[t("div",P,[e(o,{to:"/admin/products"},{default:a(()=>[y]),_:1})]),B,C]),t("div",E,[l.checkSuccess?(c(),h("nav",S,[t("div",A,[t("ul",M,[T,t("li",D,[e(o,{class:"nav-link",to:"/admin/products"},{default:a(()=>[n("商品管理")]),_:1})]),t("li",L,[e(o,{class:"nav-link",to:"/admin/orders"},{default:a(()=>[n("訂單管理")]),_:1})]),t("li",N,[e(o,{class:"nav-link",to:"/admin/coupons"},{default:a(()=>[n("優惠券管理")]),_:1})]),t("li",R,[e(o,{class:"nav-link",to:"/admin/articles"},{default:a(()=>[n("文章管理")]),_:1})]),t("li",U,[e(o,{class:"nav-link",to:"/"},{default:a(()=>[n("回前台首頁")]),_:1})]),t("li",I,[t("a",{class:"nav-link",href:"#",onClick:s[0]||(s[0]=v((...f)=>d.logout&&d.logout(...f),["prevent"]))},"登出")])])])])):u("",!0),l.checkSuccess?(c(),k(_,{key:1})):u("",!0)])],64)}const nt=b($,[["render",F]]);export{nt as default};
