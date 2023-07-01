import{m as V,D as E}from"./DelModal-520c51c9.js";import{L}from"./vue-loading-overlay-67898897.js";import{aM as u,aC as d,W as r,X as t,a2 as B,aZ as n,U as x,F as m,aK as k,bl as v,b8 as M,a3 as f,bo as A,ar as S}from"./@vue-a2e6aab2.js";import{_ as $}from"./index-8f9b4ce5.js";import{P as T}from"./PaginationView-54b25221.js";import{S as h}from"./sweetalert2-fc38d252.js";import"./bootstrap-d9a0ff4a.js";import"./@popperjs-9847b28c.js";import"./@ckeditor-b092e1d3.js";import"./vue-71628d3f.js";import"./pinia-7d28dea6.js";import"./vue-demi-71ba0ef2.js";import"./aos-aa3ba816.js";import"./lodash.throttle-ab0b6905.js";import"./lodash.debounce-ca1b1d09.js";import"./vue-router-49be82a2.js";import"./axios-08622986.js";import"./vue-axios-58a7c26f.js";import"./vee-validate-aa725db8.js";import"./@vee-validate-55db0f47.js";const U={props:["order"],data(){return{tempOrder:{},isPaid:!1,isLoading:!1}},methods:{changestatus(o){this.$emit("change-status",o)}},components:{Loading:L},watch:{order(){this.tempOrder=this.order}},mixins:[V]},N={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},I={class:"modal-dialog modal-xl",role:"document"},R={class:"modal-content border-0"},q=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),F={class:"modal-body"},H={class:"row"},j={class:"col-md-4"},z=t("h3",null,"用戶資料",-1),K={class:"table"},W={key:0},X=t("th",{style:{width:"100px"}},"姓名",-1),Z=t("th",null,"Email",-1),G=t("th",null,"電話",-1),J=t("th",null,"地址",-1),Q={class:"col-md-8"},Y=t("h3",null,"訂單細節",-1),tt={class:"table"},et=t("th",{style:{width:"100px"}},"訂單編號",-1),ot=t("th",null,"下單時間",-1),st=t("th",null,"付款時間",-1),nt={key:0},dt={key:1},rt=t("th",null,"付款狀態",-1),lt={key:0,class:"text-success"},at={key:1,class:"text-muted"},it=t("th",null,"總金額",-1),ct=t("h3",null,"選購商品",-1),pt={class:"table"},ht=t("thead",null,[t("tr")],-1),_t={class:"text-end"},ut={class:"d-flex justify-content-end"},mt={class:"form-check"},ft={class:"form-check-label",for:"flexCheckDefault"},bt={key:0},gt={key:1},yt={class:"modal-footer"},Ot=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function xt(o,s,a,b,e,c){const g=u("loading");return d(),r("div",N,[t("div",I,[t("div",R,[q,t("div",F,[t("div",H,[t("div",j,[B(n(e.tempOrder.paid_date)+" ",1),z,t("table",K,[e.tempOrder.user?(d(),r("tbody",W,[t("tr",null,[X,t("td",null,n(e.tempOrder.user.name),1)]),t("tr",null,[Z,t("td",null,n(e.tempOrder.user.email),1)]),t("tr",null,[G,t("td",null,n(e.tempOrder.user.tel),1)]),t("tr",null,[J,t("td",null,n(e.tempOrder.user.address),1)])])):x("",!0)])]),t("div",Q,[Y,t("table",tt,[t("tbody",null,[t("tr",null,[et,t("td",null,n(e.tempOrder.id),1)]),t("tr",null,[ot,t("td",null,n(o.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[st,t("td",null,[e.tempOrder.paid_date?(d(),r("span",nt,n(o.$filters.date(e.tempOrder.paid_date)),1)):(d(),r("span",dt,"時間不正確"))])]),t("tr",null,[rt,t("td",null,[e.tempOrder.is_paid?(d(),r("strong",lt,"已付款")):(d(),r("span",at,"尚未付款"))])]),t("tr",null,[it,t("td",null,n(o.$filters.currency(e.tempOrder.total)),1)])])]),ct,t("table",pt,[ht,t("tbody",null,[(d(!0),r(m,null,k(e.tempOrder.products,i=>{var _;return d(),r("tr",{key:i.id},[t("th",null,n((_=i.product)==null?void 0:_.title),1),t("td",null,n(i.qty)+" / "+n(i.product.unit),1),t("td",_t,n(i.final_Total),1)])}),128))])]),t("div",ut,[t("div",mt,[v(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":s[0]||(s[0]=i=>e.tempOrder.is_paid=i)},null,512),[[M,e.tempOrder.is_paid]]),t("label",ft,[e.tempOrder.is_paid?(d(),r("span",bt,"已付款")):(d(),r("span",gt,"未付款"))]),f(g,{active:e.isLoading,"onUpdate:active":s[1]||(s[1]=i=>e.isLoading=i)},null,8,["active"])])])])])]),t("div",yt,[Ot,t("button",{type:"button",class:"btn btn-primary",onClick:s[2]||(s[2]=A(()=>c.changestatus(e.tempOrder),["prevent"]))}," 修改付款狀態 ")])])])],512)}const kt=$(U,[["render",xt]]),{VITE_APP_URL:y,VITE_APP_PATH:O}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"leo533",BASE_URL:"/flash-tea/",MODE:"production",DEV:!1,PROD:!0},wt={data(){return{orders:{},isNew:!1,pagination:{},tempOrder:{}}},methods:{getOrders(o=1){const s=this.$loading.show();this.$http.get(`${y}v2/api/${O}/admin/orders/?page=${o}`).then(a=>{this.orders=a.data.orders,this.pagination=a.data.pagination,s.hide()}).catch(a=>{h.fire({position:"top-end",icon:"error",title:a.response.data.message,showConfirmButton:!1,timer:1500}),s.hide()})},openModal(o,s){o==="look"?(this.tempOrder={...s},this.isNew=!1,this.$refs.orderModal.openModal()):o==="delete"&&(this.tempOrder={...s},this.$refs.orderdelModal.openModal())},updatePaid(o){if(o.is_paid){const e=Math.floor(new Date/1e3);o.paid_date=e}else o.paid_date="";const s=this.$loading.show(),a=`${y}v2/api/${O}/admin/order/${o.id}`,b={is_paid:o.is_paid,paid_date:o.paid_date};this.$http.put(a,{data:b}).then(e=>{this.getOrders(),this.$refs.orderModal.hideModal(),s.hide(),h.fire({position:"top-end",icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500})}).catch(e=>{h.fire({position:"top-end",icon:"error",title:e.response.data.message,showConfirmButton:!1,timer:1500})})},deleteOrder(){const o=`${y}v2/api/${O}/admin/order/${this.tempOrder.id}`;this.$http.delete(o).then(s=>{h.fire({position:"top-end",icon:"success",title:s.data.message,showConfirmButton:!1,timer:1500}),this.$refs.orderdelModal.hideModal(),this.getOrders()}).catch(s=>{h.fire({position:"top-end",icon:"error",title:s.response.data.message,showConfirmButton:!1,timer:1500})})}},components:{OrderModal:kt,DelModal:E,Pagination:T},mounted(){this.getOrders(),document.title=this.$route.meta.title}},Ct={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},vt=t("h1",{class:"text-center text-primary fw-bold my-2"},"訂單管理",-1),Mt={class:"py-0"},$t={class:"table-responsive"},Pt={class:"table mt-4"},Dt=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",{class:"text-nowrap"},"Email"),t("th",{class:"text-nowrap"},"購買款項"),t("th",{class:"text-nowrap"},"應付金額"),t("th",{class:"text-nowrap"},"付款狀態"),t("th",{class:"text-nowrap"},"操作行為")])],-1),Vt={class:"text-nowrap"},Et=["textContent"],Lt={class:"text-nowrap"},Bt={class:"text-right text-nowrap"},At={class:"text-nowrap"},St={class:"form-check form-switch"},Tt=["id","onUpdate:modelValue","onChange"],Ut=["for"],Nt={key:0},It={key:1},Rt={class:"text-nowrap"},qt={class:"btn-group"},Ft=["onClick"],Ht=["onClick"];function jt(o,s,a,b,e,c){const g=u("OrderModal"),i=u("DelModal"),_=u("Pagination");return d(),r("main",Ct,[vt,t("div",Mt,[t("div",$t,[t("table",Pt,[Dt,t("tbody",null,[(d(!0),r(m,null,k(e.orders,(l,P)=>(d(),r(m,{key:P},[e.orders.length?(d(),r("tr",{key:0,class:S({"text-secondary":!l.is_paid})},[t("td",null,n(o.$filters.date(l.create_at)),1),t("td",Vt,[l.user?(d(),r("span",{key:0,textContent:n(l.user.email)},null,8,Et)):x("",!0)]),t("td",Lt,[(d(!0),r(m,null,k(l.products,(p,D)=>{var w,C;return d(),r("ul",{class:"list-unstyled",key:D},[t("li",null,n((w=p.product)==null?void 0:w.title)+" 數量："+n(p.qty)+" "+n((C=p.product)==null?void 0:C.unit),1)])}),128))]),t("td",Bt,n(o.$filters.currency(l.total)),1),t("td",At,[t("div",St,[v(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${l.id}`,"onUpdate:modelValue":p=>l.is_paid=p,onChange:()=>c.updatePaid(l)},null,40,Tt),[[M,l.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${l.id}`},[l.is_paid?(d(),r("span",Nt,"已付款")):(d(),r("span",It,"未付款"))],8,Ut)])]),t("td",Rt,[t("div",qt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:()=>c.openModal("look",l)}," 檢視 ",8,Ft),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:()=>c.openModal("delete",l)}," 刪除 ",8,Ht)])])],2)):x("",!0)],64))),128))])]),f(g,{ref:"orderModal",order:e.tempOrder,onChangeStatus:c.updatePaid},null,8,["order","onChangeStatus"]),f(i,{ref:"orderdelModal","temp-items":e.tempOrder,onDeleteData:c.deleteOrder,id:2},null,8,["temp-items","onDeleteData"]),f(_,{pages:e.pagination,onEmitPages:c.getOrders},null,8,["pages","onEmitPages"])])])])}const pe=$(wt,[["render",jt]]);export{pe as default};