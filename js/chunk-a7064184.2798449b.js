(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7064184"],{"0090":function(e,t,a){"use strict";var n=a("37f1"),i=a.n(n);i.a},"05ab":function(e,t,a){},"0eb1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"permission"},[a("p",{staticClass:"htitle"},[a("span",{class:{active:1===e.nowshow},on:{click:function(t){return e.handleSet(1)}}},[e._v("权限管理")]),a("span",{class:{active:2===e.nowshow},on:{click:function(t){return e.handleSet(2)}}},[e._v("我的审核")])]),1===e.nowshow?a("org"):a("approval")],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"org"},[a("div",{staticClass:"data1"},[a("div",{staticClass:"selects"},[a("div",{staticClass:"select-titles"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item"},[e._v("公司名称")])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item"},[e._v("公司编码")])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item"},[e._v("组织类型")])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item"})])],1)],1),a("div",{staticClass:"select-content"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item selsct-common"},[a("el-input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.queryFilter.name,callback:function(t){e.$set(e.queryFilter,"name",t)},expression:"queryFilter.name"}})],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item selsct-common"},[a("el-input",{attrs:{placeholder:"请输入公司编码"},model:{value:e.queryFilter.code,callback:function(t){e.$set(e.queryFilter,"code",t)},expression:"queryFilter.code"}})],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item selsct-common"},[a("el-select",{attrs:{placeholder:"请选择事件类型"},model:{value:e.queryFilter.type,callback:function(t){e.$set(e.queryFilter,"type",t)},expression:"queryFilter.type"}},e._l(e.type,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}),1)],1)]),a("el-col",{attrs:{span:6}},[a("el-button",{staticClass:"green",attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")])],1)],1)],1)]),a("div",{staticClass:"table-data"},[a("iot-table",{attrs:{tableHeader:e.tableHeader,tableData:e.tableData,pagination:e.pagination,loading:e.loading},on:{reloaddata:e.initData},scopedSlots:e._u([{key:"col-type",fn:function(t){return a("div",{},[a("p",[e._v(e._s("HQ"===t.row.type?"总代":"代理商"))])])}},{key:"col-province",fn:function(t){return a("div",{},[a("p",[e._v(e._s(t.row.province||"")+e._s(t.row.city||"")+e._s(t.row.county||"")+e._s(t.row.village||""))])])}}])})],1)])])},o=[],l=(a("7f7f"),a("96cf"),a("3b8d")),s=a("8897"),c=a("751a");function p(e){return c["a"].get("".concat(s["a"].baseUrl,"/v2/companies"),e)}var u=a("5568"),d=a("3389"),g={name:"Permission",components:{iotTable:u["a"]},data:function(){return{loading:!1,queryFilter:{name:"",code:"",type:""},type:[{code:"",name:"全部"},{code:"HQ",name:"总代"},{code:"CH",name:"代理商"}],pagination:{page:1,per_page:10,total:0},tableData:[],tableHeader:[{prop:"name",label:"代理商名称"},{prop:"code",label:"编码"},{prop:"type",label:"组织类型",type:"slot"},{prop:"members_count",label:"人员数"},{prop:"province",label:"所在地区",type:"slot"}]}},mounted:function(){this.initData()},methods:{initData:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,t={page:this.pagination.page,per_page:this.pagination.per_page,name:this.queryFilter.name?this.queryFilter.name:void 0,code:this.queryFilter.code?this.queryFilter.code:void 0,type:this.queryFilter.type?this.queryFilter.type:void 0,status:0},e.prev=2,e.next=5,p(t);case 5:a=e.sent,n=a.data,this.tableData=n.items,this.pagination={total:n.page_info.total,page:n.page_info.page,per_page:n.page_info.per_page},this.loading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](2),this.loading=!1,d["a"].error("查询数据失败",d["a"].findErrorMsg(e.t0));case 16:case"end":return e.stop()}},e,this,[[2,12]])}));function t(){return e.apply(this,arguments)}return t}(),handleSearch:function(){""!==this.queryFilter.name||""!==this.queryFilter.code||""!==this.queryFilter.type?this.initData():d["a"].error("查询条件不能为空")}}},m=g,h=(a("5095"),a("2877")),v=Object(h["a"])(m,r,o,!1,null,"a9f2c908",null),y=v.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"org"},[a("div",{staticClass:"table-data"},[a("iot-table",{attrs:{tableHeader:e.tableHeader,tableData:e.tableData,pagination:e.pagination,loading:e.loading},on:{reloaddata:e.initData},scopedSlots:e._u([{key:"col-type",fn:function(t){return a("div",{},[a("p",[e._v(e._s("HQ"===t.row.type?"总代":"代理商"))])])}},{key:"col-province",fn:function(t){return a("div",{},[a("p",[e._v(e._s(t.row.province||"")+e._s(t.row.city||"")+e._s(t.row.county||"")+e._s(t.row.village||""))])])}}])})],1)])},b=[],_={name:"Permission",components:{iotTable:u["a"]},data:function(){return{loading:!1,queryFilter:{name:"",code:"",type:""},type:[{code:"",name:"全部"},{code:"HQ",name:"总代"},{code:"CH",name:"代理商"}],pagination:{page:1,per_page:10,total:0},tableData:[],tableHeader:[{prop:"name",label:"代理商名称"},{prop:"code",label:"编码"},{prop:"type",label:"组织类型",type:"slot"},{prop:"members_count",label:"人员数"},{prop:"province",label:"所在地区",type:"slot"},{prop:"apply_reason",label:"申请原因"},{prop:"create_user",label:"创建人"},{prop:"memo",label:"备注"}]}},mounted:function(){this.initData()},methods:{initData:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={page:this.pagination.page,per_page:this.pagination.per_page,name:this.queryFilter.name?this.queryFilter.name:void 0,code:this.queryFilter.code?this.queryFilter.code:void 0,type:this.queryFilter.type?this.queryFilter.type:void 0,status:1},this.loading=!0,e.prev=2,e.next=5,p(t);case 5:a=e.sent,n=a.data,this.tableData=n.items,this.pagination={total:n.page_info.total,page:n.page_info.page,per_page:n.page_info.per_page},this.loading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](2),this.loading=!1,d["a"].error("查询数据失败",d["a"].findErrorMsg(e.t0));case 16:case"end":return e.stop()}},e,this,[[2,12]])}));function t(){return e.apply(this,arguments)}return t}()}},w=_,q=(a("c5a6"),Object(h["a"])(w,f,b,!1,null,"31348c08",null)),C=q.exports,F={name:"Permission",components:{org:y,approval:C},data:function(){return{nowshow:1}},mounted:function(){},methods:{handleSet:function(e){this.nowshow=e}}},k=F,x=(a("0090"),Object(h["a"])(k,n,i,!1,null,"15d71ef7",null));t["default"]=x.exports},3573:function(e,t,a){},"37f1":function(e,t,a){},5095:function(e,t,a){"use strict";var n=a("3573"),i=a.n(n);i.a},5568:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iotTable"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.tableHeader,function(t,n){return"slot"!==t.type?a("el-table-column",{key:n,attrs:{prop:t.prop,width:t.width,label:t.label}}):a("el-table-column",{key:n,attrs:{width:t.width||150,label:t.label},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t("col-"+t.prop,null,{row:a.row,index:a.$index})]}}],null,!0)})}),1),e.hidepagination?e._e():a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-sizes":[10,20,50,100],"page-size":e.pagination.per_page,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},i=[],r={name:"IotTable",props:{tableData:{type:Array,required:!0},tableHeader:{type:Array,required:!0},loading:{type:Boolean},pagination:{type:Object,required:!0},hidepagination:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleSizeChange:function(e){this.pagination.per_page=e,this.$emit("reloaddata")},handleCurrentChange:function(e){console.log(e),this.pagination.page=e,this.$emit("reloaddata")}}},o=r,l=(a("e927"),a("2877")),s=Object(l["a"])(o,n,i,!1,null,"2e99ce96",null);t["a"]=s.exports},b6ee:function(e,t,a){},c5a6:function(e,t,a){"use strict";var n=a("05ab"),i=a.n(n);i.a},e927:function(e,t,a){"use strict";var n=a("b6ee"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-a7064184.2798449b.js.map