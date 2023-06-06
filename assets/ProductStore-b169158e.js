import{d as e,a as l}from"./pinia-7d28dea6.js";import{s as r,c as a}from"./CartStore-28eaf6db.js";import{a as c}from"./axios-08622986.js";import{S as s}from"./sweetalert2-fc38d252.js";const i=r(),{VITE_APP_URL:d,VITE_APP_PATH:n}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"leo533",BASE_URL:"/flash-tea/",MODE:"production",DEV:!1,PROD:!0},g=e("product",{state:()=>({tempProducts:[],followList:{id:[],list:[]},productsAll:[],category:"",categories:[],isLoading:!1,loadingItem:""}),actions:{...l(a,["addToCart"]),getProductAll(){i.isLoading=!0,c.get(`${d}v2/api/${n}/products/all`).then(t=>{this.productsAll=t.data.products,this.tempProductsall(this.productsAll),this.createCategories(),i.isLoading=!1}).catch(t=>{s.fire({position:"top-end",icon:"error",title:t.response.data.message,showConfirmButton:!1,timer:1500})})},createCategories(){if(this.productsAll.length!==0){const t=this.productsAll.map(o=>o.category);this.categories=[...new Set(t)]}},setCategory(t=""){this.category=t},tempProductsall(t){this.tempProducts=t,this.getid(),this.checkCollection()},getid(){this.followList.id=JSON.parse(localStorage.getItem("followId"))||[]},checkCollection(){this.followList.list=[],this.tempProducts.forEach(t=>{this.followList.id.indexOf(t.id)>-1&&this.followList.list.push(t)})},addtoFollow(t){const o=this.followList.id.indexOf(t);o===-1?(this.followList.id.push(t),s.fire({position:"top-end",icon:"success",title:"已收藏",showConfirmButton:!1,timer:1500})):(this.followList.id.splice(o,1),s.fire({position:"top-end",icon:"success",title:"取消收藏",showConfirmButton:!1,timer:1500})),localStorage.setItem("followId",JSON.stringify(this.followList.id)),this.getProductAll()}}});export{g as p};
