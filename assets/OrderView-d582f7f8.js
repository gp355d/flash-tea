import{m as w,a as P}from"./pinia-7d28dea6.js";import{c as y,s as T}from"./CartStore-28eaf6db.js";import{L as A}from"./vue-loading-overlay-67898897.js";import{S as f}from"./sweetalert2-fc38d252.js";import{aM as u,aC as d,W as c,a3 as i,X as s,bj as h,F as E,aK as N,bl as V,bc as C,bo as B,aZ as r,a1 as M,a2 as k,ar as _}from"./@vue-a2e6aab2.js";import{_ as I}from"./index-5ee32276.js";import"./vue-demi-71ba0ef2.js";import"./axios-08622986.js";import"./@ckeditor-b092e1d3.js";import"./vue-71628d3f.js";import"./aos-aa3ba816.js";import"./lodash.throttle-ab0b6905.js";import"./lodash.debounce-ca1b1d09.js";import"./vue-router-49be82a2.js";import"./vue-axios-58a7c26f.js";import"./bootstrap-d9a0ff4a.js";import"./@popperjs-9847b28c.js";import"./vee-validate-aa725db8.js";import"./@vee-validate-55db0f47.js";const{VITE_APP_URL:j,VITE_APP_PATH:U}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"leo533",BASE_URL:"/flash-tea/",MODE:"production",DEV:!1,PROD:!0},q={data(){return{form:{email:"",name:"",phone:"",address:"",region:"",msg:""},couponCode:"",discountStatus:!1,final_total:0,discount:0}},computed:{...w(y,["carts","total","isLoading","coupon_Name","cartNUm"]),...w(T,["isLoading"])},methods:{...P(y,["getCarts"]),validateTelephone(o){return/^(09)[0-9]{8}$/.test(o)?!0:"請輸入09開頭的手機號碼"},sendCoupon(o){this.couponCode=o;const e={code:this.couponCode};this.$http.post(`${j}v2/api/${U}/coupon`,{data:e}).then(a=>{this.discountStatus=a.data.success,this.final_total=Math.round(a.data.data.final_total),this.discount=Math.round(this.final_total-this.total),f.fire({position:"top-end",icon:"success",title:"已套用優惠券",showConfirmButton:!1,timer:1500})}).catch(a=>(f.fire({position:"top-end",icon:"error",title:a.response.data.message,showConfirmButton:!1,timer:1500}),0)),this.couponCode=""},sendOrder(){if(this.carts.length===0)alert("購物車清單內為空");else{const o={user:{name:this.form.name,email:this.form.email,tel:this.form.phone,address:this.form.address},message:this.form.msg},e=this.$loading.show();this.$http.post(`${j}v2/api/${U}/order`,{data:o}).then(a=>{this.getCarts(),this.loadingItem="",this.$refs.form.resetForm(),f.fire({position:"top-end",icon:"success",title:"訂單已送出",showConfirmButton:!1,timer:1500}),this.$router.push(`/complete/${a.data.orderId}`),e.hide()}).catch(a=>{f.fire({position:"top-end",icon:"error",title:a.response.data.message,showConfirmButton:!1,timer:1500})})}}},components:{Loading:A},mounted(){this.getCarts()}},D={class:"container py-8"},O=M('<h1 class="text-center fw-bold text-primary mb-7 noto-serif-font">填寫訂單</h1><div class="pt-4 pb-3 mb-3"><div class="container"><div class="row justify-content-center"><div class="col-9 col-md-7 timeline"></div></div><div class="row"><div class="col-3 col-md-5"><div class="timeline-pointer text-center step-1 active"><p>購物清單確認</p></div></div><div class="col-6 col-md-2"><div class="timeline-pointer text-center step-2 active"><p>填寫訂單</p></div></div><div class="col-3 col-md-5"><div class="timeline-pointer text-center step-3"><p>購物完成</p></div></div></div></div></div>',2),R={class:"row g-0 g-md-3 justify-content-center flex-column flex-md-row"},F={class:"col-md-9 d-flex flex-column justify-content-between mt-0"},H={class:"col-12"},X=s("span",{class:"material-icons"},"keyboard_return",-1),z={class:"row g-0 g-md-3 justify-content-center flex-column flex-md-row mt-2"},K={class:"col-md-9 mb-3 d-flex flex-column justify-content-between mt-0"},W={class:"row g-0 g-md-3"},Z={key:0,class:"col-md-6"},G={class:"border p-2 h-100"},J=s("h3",{class:"text-center fw-bold text-primary"},"訂單明細",-1),Q={class:"col-4"},Y=["src"],$={class:"col-3"},ss={class:"fs-6 fs-md-4 mb-0"},es={class:"col-3 text-end"},ts={class:"fs-6 fs-md-4"},os={class:"col-2 text-end"},ns={class:"col-2 fs-6 fs-md-4"},ls={class:"d-flex justify-content-center"},is={class:"d-flex justify-content-between fs-5"},as={key:0,class:"w-100"},ds=s("div",{class:"d-flex"},[s("span",{class:"fw-bold text-success"},"已套用優惠券")],-1),cs={class:"d-flex justify-content-between"},rs=s("span",null,"原價",-1),ms={class:"fw-bold text-success"},ps={class:"d-flex justify-content-between"},us=s("span",null,"優惠折抵",-1),_s={class:"fw-bold text-success"},fs={class:"d-flex justify-content-between"},hs=s("span",null,"總計",-1),vs={class:"fw-bold text-danger"},bs={key:1,class:"w-100 d-flex justify-content-between"},gs=s("span",null,"總計",-1),xs={class:"fw-bold text-danger"},ws={key:1,class:"col-md-6"},ys={class:"border p-2 w-100 h-100 text-center d-flex justify-content-center align-items-center flex-column"},Vs=s("h2",{class:"fs-5 fw-bold"},"目前無選購商品",-1),Cs={class:"col-md-6"},ks={class:"p-2"},js=s("h3",{class:"text-center fw-bold text-primary"},"顧客資訊",-1),Us={class:"mb-3"},Ss=s("span",{class:"text-danger me-1"},"*",-1),Ls=s("label",{for:"customer-name",class:"form-label"},"姓名",-1),Ps={class:"mb-3"},Ts=s("span",{class:"text-danger me-1"},"*",-1),As=s("label",{for:"customer-emall",class:"form-label"},"Email",-1),Es={class:"mb-3"},Ns=s("span",{class:"text-danger me-1"},"*",-1),Bs=s("label",{for:"customer-phone",class:"form-label"},"電話",-1),Ms={class:"mb-3"},Is=s("span",{class:"text-danger me-1"},"*",-1),qs=s("label",{for:"customer-address",class:"form-label"},"地址",-1),Ds={class:"mb-3"},Os=s("span",{class:"text-danger me-1"},"*",-1),Rs=s("label",{for:"customer-pay",class:"form-label"},"付款方式",-1),Fs=s("option",{value:"",disabled:""},"請選擇",-1),Hs=s("option",{value:"1"},"ATM轉帳",-1),Xs=s("option",{value:"2"},"信用卡",-1),zs=s("option",{value:"3"},"銀行轉帳",-1),Ks=s("option",{value:"4"},"超商繳費",-1),Ws={class:"mb-3"},Zs=s("label",{for:"customer-note",class:"form-label"},"備註",-1),Gs=s("div",{class:"text-end"},[s("button",{type:"submit",class:"btn btn-primary"},"送出訂單")],-1);function Js(o,e,a,Qs,t,v){const S=u("Loading"),b=u("router-link"),m=u("v-field"),p=u("error-message"),L=u("v-form");return d(),c("div",D,[i(S,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=n=>o.isLoading=n),loader:"bars"},null,8,["active"]),O,s("div",R,[s("div",F,[s("div",H,[i(b,{to:"/cart",class:"d-inline-flex align-items-center text-decoration-none"},{default:h(()=>[X,k(" 回購物車列表 ")]),_:1})])])]),s("div",z,[s("div",K,[s("div",W,[o.cartNUm>0?(d(),c("div",Z,[s("div",G,[J,(d(!0),c(E,null,N(o.carts.carts,n=>{var l,g,x;return d(),c("div",{class:"d-flex align-items-center mb-4 shadow-sm p-2",key:n.id},[s("div",Q,[s("img",{class:"col-4 object-fit p-1 w-100 img-fluid",src:(l=n.product)==null?void 0:l.imageUrl,alt:"order-img",height:"150"},null,8,Y)]),s("div",$,[s("span",ss,r((g=n.product)==null?void 0:g.title),1)]),s("div",es,[s("span",ts,r(o.$filters.currency((x=n.product)==null?void 0:x.price)),1)]),s("div",os,[s("span",ns,"X"+r(n.qty),1)])])}),128)),s("div",ls,[V(s("input",{type:"text",class:"form-control me-2","onUpdate:modelValue":e[1]||(e[1]=n=>t.couponCode=n)},null,512),[[C,t.couponCode]]),s("button",{class:"btn btn-primary text-nowrap",type:"button",onClick:e[2]||(e[2]=B(()=>v.sendCoupon(t.couponCode),["prevent"]))},"套用優惠碼")]),s("div",is,[t.discountStatus?(d(),c("div",as,[ds,s("div",cs,[rs,s("span",ms,r(o.$filters.currency(o.total)),1)]),s("div",ps,[us,s("span",_s,r(t.discount),1)]),s("div",fs,[hs,s("span",vs,r(o.$filters.currency(t.final_total)),1)])])):(d(),c("div",bs,[gs,s("span",xs,r(o.$filters.currency(o.total)),1)]))])])])):(d(),c("div",ws,[s("div",ys,[Vs,i(b,{to:"/products",class:"btn btn-primary"},{default:h(()=>[k("去選購商品")]),_:1})])])),s("div",Cs,[i(L,{ref:"form",onSubmit:v.sendOrder},{default:h(({errors:n})=>[s("div",ks,[js,s("div",Us,[Ss,Ls,i(m,{type:"text",name:"姓名",class:_(["form-control",{"is-invalid":n.姓名}]),id:"customer-name",placeholder:"請填寫姓名",rules:"required",modelValue:t.form.name,"onUpdate:modelValue":e[3]||(e[3]=l=>t.form.name=l)},null,8,["class","modelValue"]),i(p,{name:"姓名",class:"invalid-feedback"})]),s("div",Ps,[Ts,As,i(m,{type:"email",name:"信箱",class:_(["form-control",{"is-invalid":n.信箱}]),id:"customer-emall",placeholder:"name@example.com",rules:"email|required",modelValue:t.form.email,"onUpdate:modelValue":e[4]||(e[4]=l=>t.form.email=l)},null,8,["class","modelValue"]),i(p,{name:"信箱",class:"invalid-feedback"})]),s("div",Es,[Ns,Bs,i(m,{type:"tel",name:"電話",class:_(["form-control",{"is-invalid":n.電話}]),id:"customer-phone",placeholder:"0912345678",rules:v.validateTelephone,modelValue:t.form.phone,"onUpdate:modelValue":e[5]||(e[5]=l=>t.form.phone=l)},null,8,["class","rules","modelValue"]),i(p,{name:"電話",class:"invalid-feedback"})]),s("div",Ms,[Is,qs,i(m,{type:"text",name:"地址",class:_(["form-control",{"is-invalid":n.地址}]),id:"customer-address",placeholder:"請輸入地址",rules:"required",modelValue:t.form.address,"onUpdate:modelValue":e[6]||(e[6]=l=>t.form.address=l)},null,8,["class","modelValue"]),i(p,{name:"地址",class:"invalid-feedback"})]),s("div",Ds,[Os,Rs,i(m,{id:"customer-pay",name:"付款方式",class:_(["form-control",{"is-invalid":n.付款方式}]),rules:"required",modelValue:t.form.region,"onUpdate:modelValue":e[7]||(e[7]=l=>t.form.region=l),as:"select"},{default:h(()=>[Fs,Hs,Xs,zs,Ks]),_:2},1032,["class","modelValue"]),i(p,{name:"付款方式",class:"invalid-feedback"})]),s("div",Ws,[Zs,V(s("textarea",{class:"form-control",id:"customer-note",rows:"3","onUpdate:modelValue":e[8]||(e[8]=l=>t.form.msg=l)},null,512),[[C,t.form.msg]])]),Gs])]),_:1},8,["onSubmit"])])])])])])}const ve=I(q,[["render",Js]]);export{ve as default};
