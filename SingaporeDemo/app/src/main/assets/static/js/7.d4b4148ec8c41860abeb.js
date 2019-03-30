webpackJsonp([7],{"/9j7":function(e,t){},Dd8w:function(e,t,r){"use strict";t.__esModule=!0;var n,o=r("woOf"),a=(n=o)&&n.__esModule?n:{default:n};t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}},bmUB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("h496"),o=(r("GKy3"),r("4vvA")),a=r.n(o),s=r("Dd8w"),c=r.n(s),m=r("bG0Y"),l=r("lqT0"),d=r("fl6T"),u={data:function(){return{loading:!1,showConfirmDialog:!1,form:{payeeName:"",walletAddress:"",AmountCollected:"",remark:"",currency:{name:"",clicked:!1},tradePsw:""}}},computed:c()({checkForm:function(){return""!==this.form.payeeName&&""!==this.form.walletAddress&&""!==this.form.AmountCollected&&""!==this.form.currency.name}},Object(d.d)(["swtAddress","jcWallet"])),methods:{getBaseName:function(e){return"CNT"===e?"CNY":"SWTC"===e?"SWT":e},confirmTransfer:function(){if(!this.checkForm||this.loading)return this.showConfirmDialog=!1,void(this.form.tradePsw="");this.showConfirmDialog=!1,this.loading=!0,a.a.loading({duration:0,forbidClick:!0,message:this.$t("message.transferPayment.payments.transfering")}),this.orderWithtradePsw()},orderWithtradePsw:function(){var e=this,t=new l.JcWalletTool(this.$store.getters.jcWallet),r=this.hosts,n=this.port;t.validatePassword(this.form.tradePsw,"swt").then(function(t){var o={issuer:"jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or"};o.currency=e.getBaseName(e.form.currency.name),o.address=e.swtAddress,o.to=e.form.walletAddress,o.amount=e.form.AmountCollected,o.memo=e.form.remark,o.secret=t,o.hosts=r,o.port=n,o.https=e.https,setTimeout(function(){e.confirmPay(o)},1e3)}).catch(function(e){a.a.fail(e.message)}).finally(function(){})},confirmPay:function(e){console.log("开始转账"),console.log(e),Object(m.transferAccount)(e).then(function(){a.a.success("转账成功")}).catch(function(e){console.log(e.message),a.a.fail(e.message)})}}},f=r("c5/C"),p={name:"payment",components:{JcSelect:n.default},mixins:[f.jNodeConfig,u],mounted:function(){var e=this;setTimeout(function(){e.handleCoinList()},300)},data:function(){return{currencyList:[]}},computed:{getCoinList:function(){return this.$store.getters.coins}},methods:{handleCoinList:function(){var e=this.getCoinList.length;if(!(e<=0))for(i=0;i<e;i++)this.currencyList.push({name:this.getCoinList[i].label,icon:"currency-icon-"+this.getCoinList[i].label})}}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"payment"}},[r("section",{staticStyle:{padding:"1.28rem 0.3rem 0 0.3rem"}},[r("ol",{staticClass:"inputInformation"},[r("li",[r("div",{staticStyle:{position:"relative",width:"100%","margin-right":"0.15rem"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.payeeName,expression:"form.payeeName"}],attrs:{type:"text",placeholder:e.$t("message.transferPayment.payments.payee")},domProps:{value:e.form.payeeName},on:{input:function(t){t.target.composing||e.$set(e.form,"payeeName",t.target.value)}}}),e._v(" "),r("i",{staticClass:"contacts_icon positionIcon",staticStyle:{"margin-top":"-0.15rem"}})]),e._v(" "),r("i",{staticClass:"scanning_icon"})]),e._v(" "),r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.walletAddress,expression:"form.walletAddress"}],attrs:{type:"text",placeholder:e.$t("message.transferPayment.payments.walletAddress")},domProps:{value:e.form.walletAddress},on:{input:function(t){t.target.composing||e.$set(e.form,"walletAddress",t.target.value)}}})]),e._v(" "),r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.AmountCollected,expression:"form.AmountCollected"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:e.$t("message.transferPayment.payments.receivableAmount")},domProps:{value:e.form.AmountCollected},on:{input:function(t){t.target.composing||e.$set(e.form,"AmountCollected",t.target.value)}}}),e._v(" "),r("div",{staticStyle:{position:"relative","min-width":"2.2rem","margin-left":"0.2rem"}},[r("i",{class:"currency-icon-"+e.form.currency.name,staticStyle:{position:"absolute",top:"0.17rem",left:"50%","margin-left":"-0.7rem"}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.currency.name,expression:"form.currency.name"}],staticClass:"placeholder",staticStyle:{"text-align":"center","text-indent":"0.15rem"},attrs:{readonly:"readonly",placeholder:e.$t("message.transferPayment.payments.currency")},domProps:{value:e.form.currency.name},on:{click:function(t){e.form.currency.clicked=!e.form.currency.clicked},input:function(t){t.target.composing||e.$set(e.form.currency,"name",t.target.value)}}}),e._v(" "),r("i",{class:"triangle_"+(e.form.currency.clicked?"clicked":"default"),staticStyle:{position:"absolute",top:"0.26rem",right:"0.2rem"}}),e._v(" "),r("JcSelect",{directives:[{name:"show",rawName:"v-show",value:e.form.currency.clicked,expression:"form.currency.clicked"}],staticStyle:{position:"absolute",top:"100%",left:"50%","margin-left":"-1.1rem","margin-top":"0.2rem"},attrs:{data:e.currencyList,align:"left",width:"100%",borderColor:"#559df7",itemSpacing:"0.15rem",indent:"0.4rem",fontSize:"0.30rem"},on:{close:function(t){e.form.currency.clicked=!1}},model:{value:e.form.currency.name,callback:function(t){e.$set(e.form.currency,"name",t)},expression:"form.currency.name"}})],1)]),e._v(" "),r("li",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.remark,expression:"form.remark"}],staticStyle:{height:"1.8rem",padding:"0.22rem 0 0 0"},attrs:{rows:"2",cols:"300",placeholder:e.$t("message.transferPayment.payments.note"),maxlength:"50"},domProps:{value:e.form.remark},on:{input:function(t){t.target.composing||e.$set(e.form,"remark",t.target.value)}}})]),e._v(" "),r("li",[r("div",{staticClass:"confirm",on:{click:function(t){e.showConfirmDialog=!0}}},[e._v(e._s(e.$t("message.transferPayment.transactionInquiry.confirm")))])])]),e._v(" "),r("van-dialog",{staticStyle:{"margin-top":"-1rem"},attrs:{title:e.$t("message.transferPayment.payments.dialogTitle"),center:"","show-cancel-button":!1,"show-confirm-button":!1},model:{value:e.showConfirmDialog,callback:function(t){e.showConfirmDialog=t},expression:"showConfirmDialog"}},[r("ul",{staticClass:"dialogForm"},[r("li",{staticStyle:{"justify-content":"flex-start"}},[e._v(e._s(e.$t("message.transferPayment.payments.inputPassword")))]),e._v(" "),r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.tradePsw,expression:"form.tradePsw"}],staticStyle:{"text-indent":"0.2rem"},attrs:{type:"password"},domProps:{value:e.form.tradePsw},on:{input:function(t){t.target.composing||e.$set(e.form,"tradePsw",t.target.value)}}})]),e._v(" "),r("div",{staticStyle:{height:"0.1rem"}}),e._v(" "),r("li",[r("button",{staticStyle:{background:"#1D93F7"},on:{click:e.confirmTransfer}},[e._v(e._s(e.$t("message.transferPayment.payments.confirm")))])])])])],1)])},staticRenderFns:[]};var y=r("VU/8")(p,g,!1,function(e){r("/9j7")},"data-v-27d3f256",null);t.default=y.exports}});
//# sourceMappingURL=7.d4b4148ec8c41860abeb.js.map