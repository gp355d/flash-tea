import{aM as h,aC as E,Q as v,P as g}from"./@vue-a2e6aab2.js";import{c as L}from"./pinia-7d28dea6.js";import{a as P}from"./aos-aa3ba816.js";import{c as O,a as A}from"./vue-router-49be82a2.js";import{a as R}from"./axios-08622986.js";import{p as D}from"./vue-axios-58a7c26f.js";import{d as T}from"./vue-loading-overlay-67898897.js";import{C as y}from"./@ckeditor-b092e1d3.js";import"./sweetalert2-fc38d252.js";import"./bootstrap-d9a0ff4a.js";import{d as I,c as V,F as k,a as $,E as b}from"./vee-validate-aa725db8.js";import{a as m,l as w,s as C,z as F}from"./@vee-validate-55db0f47.js";import"./vue-demi-71ba0ef2.js";import"./lodash.throttle-ab0b6905.js";import"./lodash.debounce-ca1b1d09.js";import"./vue-71628d3f.js";import"./@popperjs-9847b28c.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const x=(r,i)=>{const n=r.__vccOpts||r;for(const[s,t]of i)n[s]=t;return n},B={mounted(){P.init({once:!0})}};function S(r,i,n,s,t,e){const a=h("router-view");return E(),v(a)}const z=x(B,[["render",S]]),M="modulepreload",N=function(r){return"/flash-tea/"+r},u={},o=function(i,n,s){if(!n||n.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=N(e),e in u)return;u[e]=!0;const a=e.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(!!s)for(let _=t.length-1;_>=0;_--){const l=t[_];if(l.href===e&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":M,a||(p.as="script",p.crossOrigin=""),p.href=e,document.head.appendChild(p),a)return new Promise((_,l)=>{p.addEventListener("load",_),p.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i())},W=[{path:"/",component:()=>o(()=>import("./FrontLayout-7bf89d98.js"),["assets/FrontLayout-7bf89d98.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/@vue-a2e6aab2.js","assets/CartStore-28eaf6db.js","assets/axios-08622986.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/sweetalert2-50a54fda.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),children:[{path:"",component:()=>o(()=>import("./HomeView-273b81cb.js"),["assets/HomeView-273b81cb.js","assets/swiper-8542cab2.js","assets/ssr-window-c9202916.js","assets/@vue-a2e6aab2.js","assets/swiper-7c6099aa.css","assets/CartStore-28eaf6db.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/axios-08622986.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/sweetalert2-50a54fda.css","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js","assets/HomeView-013c44cd.css"]),meta:{title:"首頁"}},{path:"about",component:()=>o(()=>import("./AboutView-bb1ef8cb.js"),["assets/AboutView-bb1ef8cb.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/@vue-a2e6aab2.js","assets/sweetalert2-50a54fda.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"關於我們"}},{path:"products",component:()=>o(()=>import("./ProductsView-e522d5f1.js"),["assets/ProductsView-e522d5f1.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/@vue-a2e6aab2.js","assets/ProductStore-b169158e.js","assets/CartStore-28eaf6db.js","assets/axios-08622986.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/sweetalert2-50a54fda.css","assets/PaginationView-54b25221.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js","assets/ProductsView-251c27f1.css"]),meta:{title:"茶品列表"}},{path:"product/:id",component:()=>o(()=>import("./ProductView-0c9f37c8.js"),["assets/ProductView-0c9f37c8.js","assets/swiper-8542cab2.js","assets/ssr-window-c9202916.js","assets/@vue-a2e6aab2.js","assets/swiper-7c6099aa.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/CartStore-28eaf6db.js","assets/axios-08622986.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/sweetalert2-50a54fda.css","assets/ProductStore-b169158e.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js","assets/ProductView-681013f7.css"]),meta:{title:"單一茶品"}},{path:"cart",component:()=>o(()=>import("./CartView-efabf93a.js"),["assets/CartView-efabf93a.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/@vue-a2e6aab2.js","assets/CartStore-28eaf6db.js","assets/axios-08622986.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/sweetalert2-50a54fda.css","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/vue-axios-58a7c26f.js","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js","assets/CartView-3f5a732f.css"]),meta:{title:"購物車列表"}},{path:"order",component:()=>o(()=>import("./OrderView-d0e69eca.js"),["assets/OrderView-d0e69eca.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/@vue-a2e6aab2.js","assets/CartStore-28eaf6db.js","assets/axios-08622986.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/sweetalert2-50a54fda.css","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/vue-axios-58a7c26f.js","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"訂單填寫"}},{path:"complete/:order_id",component:()=>o(()=>import("./CompleteView-877c5599.js"),["assets/CompleteView-877c5599.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/@vue-a2e6aab2.js","assets/sweetalert2-50a54fda.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"訂購完成"}},{path:"pay",component:()=>o(()=>import("./PayCompleteView-00adfea9.js"),["assets/PayCompleteView-00adfea9.js","assets/@vue-a2e6aab2.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/sweetalert2-fc38d252.js","assets/sweetalert2-50a54fda.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"付款完成"}},{path:"qa",component:()=>o(()=>import("./QAView-0f3ce8b5.js"),["assets/QAView-0f3ce8b5.js","assets/@vue-a2e6aab2.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/sweetalert2-fc38d252.js","assets/sweetalert2-50a54fda.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"Q&A"}},{path:"knowledge",component:()=>o(()=>import("./KnowledgeView-806afcec.js"),["assets/KnowledgeView-806afcec.js","assets/PaginationView-54b25221.js","assets/@vue-a2e6aab2.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/sweetalert2-50a54fda.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js","assets/KnowledgeView-421c15fe.css"]),meta:{title:"文章列表"}},{path:"knowledge/:id",component:()=>o(()=>import("./ArticleView-277a756a.js"),["assets/ArticleView-277a756a.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/@vue-a2e6aab2.js","assets/vue-loading-overlay-67898897.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/vue-loading-overlay-980189cf.css","assets/sweetalert2-fc38d252.js","assets/sweetalert2-50a54fda.css","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"單一文章"}},{path:"Favorite",component:()=>o(()=>import("./FavoriteView-880bd6aa.js"),["assets/FavoriteView-880bd6aa.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/@vue-a2e6aab2.js","assets/ProductStore-b169158e.js","assets/CartStore-28eaf6db.js","assets/axios-08622986.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/sweetalert2-50a54fda.css","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/vue-axios-58a7c26f.js","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"收藏"}}]},{path:"/login",component:()=>o(()=>import("./LoginView-984c5466.js"),["assets/LoginView-984c5466.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/@vue-a2e6aab2.js","assets/sweetalert2-50a54fda.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"管理者登入頁面"}},{path:"/admin",component:()=>o(()=>import("./DashboardView-ac80f43c.js"),["assets/DashboardView-ac80f43c.js","assets/sweetalert2-fc38d252.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/@vue-a2e6aab2.js","assets/sweetalert2-50a54fda.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),children:[{path:"products",component:()=>o(()=>import("./AdminProductsView-a63f02c8.js"),["assets/AdminProductsView-a63f02c8.js","assets/DelModal-520c51c9.js","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/@vue-a2e6aab2.js","assets/sweetalert2-fc38d252.js","assets/sweetalert2-50a54fda.css","assets/PaginationView-54b25221.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"產品管理頁面"}},{path:"orders",component:()=>o(()=>import("./AdminOrdersView-c4d26153.js"),["assets/AdminOrdersView-c4d26153.js","assets/DelModal-520c51c9.js","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/@vue-a2e6aab2.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/PaginationView-54b25221.js","assets/sweetalert2-fc38d252.js","assets/sweetalert2-50a54fda.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"訂單管理頁面"}},{path:"coupons",component:()=>o(()=>import("./AdminCouponsView-d92061c9.js"),["assets/AdminCouponsView-d92061c9.js","assets/DelModal-520c51c9.js","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/@vue-a2e6aab2.js","assets/PaginationView-54b25221.js","assets/sweetalert2-fc38d252.js","assets/sweetalert2-50a54fda.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"優惠券管理頁面"}},{path:"articles",component:()=>o(()=>import("./AdminArticlesView-8f352166.js"),["assets/AdminArticlesView-8f352166.js","assets/DelModal-520c51c9.js","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/@vue-a2e6aab2.js","assets/PaginationView-54b25221.js","assets/sweetalert2-fc38d252.js","assets/sweetalert2-50a54fda.css","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"]),meta:{title:"文章管理頁面"}}]},{path:"/:pathMatch(.*)*",component:()=>o(()=>import("./NotFound-e26e446f.js"),["assets/NotFound-e26e446f.js","assets/@vue-a2e6aab2.js","assets/pinia-7d28dea6.js","assets/vue-demi-71ba0ef2.js","assets/aos-aa3ba816.js","assets/lodash.throttle-ab0b6905.js","assets/@ckeditor-b092e1d3.js","assets/vue-71628d3f.js","assets/lodash.debounce-ca1b1d09.js","assets/aos-b16a6001.css","assets/vue-router-49be82a2.js","assets/axios-08622986.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-67898897.js","assets/vue-loading-overlay-980189cf.css","assets/sweetalert2-fc38d252.js","assets/sweetalert2-50a54fda.css","assets/bootstrap-d9a0ff4a.js","assets/@popperjs-9847b28c.js","assets/vee-validate-aa725db8.js","assets/@vee-validate-55db0f47.js"])}],d=O({history:A(),linkActiveClass:"active",routes:W,scrollBehavior(r,i,n){return{top:0}}});function q(r){return`NT$${parseInt(r,10).toFixed(0).replace(/./g,(n,s,t)=>s&&n!=="."&&(t.length-s)%3===0?`, ${n}`.replace(/\s/g,""):n)}`}function H(r){return new Date(r*1e3).toLocaleDateString()}Object.keys(m).forEach(r=>{I(r,m[r])});const c=g(z);c.use(L());c.use(d);c.use(D,R);c.use(T.LoadingPlugin,{color:"#46633D",loader:"bars"});V({generateMessage:w({zh_TW:F}),validateOnInput:!0});C("zh_TW");c.component("VField",k);c.component("VForm",$);c.component("ErrorMessage",b);c.config.globalProperties.$filters={date:H,currency:q};d.beforeEach((r,i,n)=>{r.meta.title&&(document.title=r.meta.title),n()});c.use(y);c.mount("#app");export{x as _};