(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-756b8c1d"],{"095a":function(e,t,a){"use strict";var n=a("34c9"),i=a.n(n);i.a},"0eb1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"permission"},[a("p",{staticClass:"htitle"},[a("span",{class:{active:1===e.nowshow},on:{click:function(t){return e.handleSet(1)}}},[e._v("权限管理")]),a("span",{class:{active:2===e.nowshow},on:{click:function(t){return e.handleSet(2)}}},[e._v("我的审核")])]),1===e.nowshow?a("org"):a("approval")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"org"},[a("div",{staticClass:"data1"},[a("div",{staticClass:"selects"},[a("div",{staticClass:"select-titles"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item"},[e._v("公司名称")])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item"},[e._v("公司编码")])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item"},[e._v("组织类型")])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item"})])],1)],1),a("div",{staticClass:"select-content"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item selsct-common"},[a("el-input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.queryFilter.name,callback:function(t){e.$set(e.queryFilter,"name",t)},expression:"queryFilter.name"}})],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item selsct-common"},[a("el-input",{attrs:{placeholder:"请输入公司编码"},model:{value:e.queryFilter.code,callback:function(t){e.$set(e.queryFilter,"code",t)},expression:"queryFilter.code"}})],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"common-item selsct-common"},[a("el-select",{attrs:{placeholder:"请选择事件类型"},model:{value:e.queryFilter.type,callback:function(t){e.$set(e.queryFilter,"type",t)},expression:"queryFilter.type"}},e._l(e.type,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}),1)],1)]),a("el-col",{attrs:{span:6}},[a("el-button",{staticClass:"green",attrs:{type:"primary"},on:{click:e.initData}},[e._v("查询")])],1)],1)],1)]),a("div",{staticClass:"table-data"},[a("iot-table",{attrs:{tableHeader:e.tableHeader,tableData:e.tableData,pagination:e.pagination,loading:e.loading},on:{reloadData:e.initData},scopedSlots:e._u([{key:"col-type",fn:function(t){return a("div",{},[a("p",[e._v(e._s("HQ"===t.row.type?"总代":"代理商"))])])}},{key:"col-province",fn:function(t){return a("div",{},[a("p",[e._v(e._s(t.row.province||"")+e._s(t.row.city||"")+e._s(t.row.county||"")+e._s(t.row.village||""))])])}}])})],1)])])},r=[],l=(a("7f7f"),a("96cf"),a("3b8d")),s=a("8897"),c=a("751a");function p(e){return c["a"].get("".concat(s["a"].baseUrl,"/v2/companies"),e)}var u=a("5568"),d={name:"Permission",components:{iotTable:u["a"]},data:function(){return{loading:!1,queryFilter:{name:"",code:"",type:""},type:[{code:"",name:"全部"},{code:"HQ",name:"总代"},{code:"CH",name:"代理商"}],pagination:{page:1,per_page:10,total:0},tableData:[],tableHeader:[{prop:"name",label:"代理商名称"},{prop:"code",label:"编码"},{prop:"type",label:"组织类型",type:"slot"},{prop:"members_count",label:"人员数"},{prop:"province",label:"所在地区",type:"slot"}]}},mounted:function(){this.initData()},methods:{initData:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,t={page:this.pagination.page,per_page:this.pagination.per_page,name:this.queryFilter.name?this.queryFilter.name:void 0,code:this.queryFilter.code?this.queryFilter.code:void 0,type:this.queryFilter.type?this.queryFilter.type:void 0,status:0},e.next=4,p(t);case 4:a=e.sent,n=a.data,this.tableData=n.items,this.pagination={total:n.page_info.total,page:n.page_info.page,per_page:n.page_info.per_page},this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},m=d,g=(a("21f4"),a("2877")),h=Object(g["a"])(m,o,r,!1,null,"545861bc",null),v=h.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"org"},[a("div",{staticClass:"table-data"},[a("iot-table",{attrs:{tableHeader:e.tableHeader,tableData:e.tableData,pagination:e.pagination,loading:e.loading},on:{reloadData:e.initData},scopedSlots:e._u([{key:"col-type",fn:function(t){return a("div",{},[a("p",[e._v(e._s("HQ"===t.row.type?"总代":"代理商"))])])}},{key:"col-province",fn:function(t){return a("div",{},[a("p",[e._v(e._s(t.row.province||"")+e._s(t.row.city||"")+e._s(t.row.county||"")+e._s(t.row.village||""))])])}}])})],1)])},f=[],b={name:"Permission",components:{iotTable:u["a"]},data:function(){return{loading:!1,queryFilter:{name:"",code:"",type:""},type:[{code:"",name:"全部"},{code:"HQ",name:"总代"},{code:"CH",name:"代理商"}],pagination:{page:1,per_page:10,total:0},tableData:[],tableHeader:[{prop:"name",label:"代理商名称"},{prop:"code",label:"编码"},{prop:"type",label:"组织类型",type:"slot"},{prop:"members_count",label:"人员数"},{prop:"province",label:"所在地区",type:"slot"},{prop:"apply_reason",label:"申请原因"},{prop:"create_user",label:"创建人"},{prop:"memo",label:"备注"}]}},mounted:function(){this.initData()},methods:{initData:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={page:this.pagination.page,per_page:this.pagination.per_page,name:this.queryFilter.name?this.queryFilter.name:void 0,code:this.queryFilter.code?this.queryFilter.code:void 0,type:this.queryFilter.type?this.queryFilter.type:void 0,status:1},this.loading=!0,e.next=4,p(t);case 4:a=e.sent,n=a.data,this.tableData=n.items,this.pagination={total:n.page_info.total,page:n.page_info.page,per_page:n.page_info.per_page},this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},_=b,w=(a("a6ad"),Object(g["a"])(_,y,f,!1,null,"1c8f1860",null)),C=w.exports,q={name:"Permission",components:{org:v,approval:C},data:function(){return{nowshow:1}},mounted:function(){},methods:{handleSet:function(e){this.nowshow=e}}},F=q,k=(a("095a"),Object(g["a"])(F,n,i,!1,null,"23da27d7",null));t["default"]=k.exports},"13e2":function(e,t,a){},"21f4":function(e,t,a){"use strict";var n=a("13e2"),i=a.n(n);i.a},"34c9":function(e,t,a){},5568:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iotTable"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.tableHeader,function(t,n){return"slot"!==t.type?a("el-table-column",{key:n,attrs:{prop:t.prop,width:t.width,label:t.label}}):a("el-table-column",{key:n,attrs:{width:t.width||150,label:t.label},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t("col-"+t.prop,null,{row:a.row,index:a.$index})]}}],null,!0)})}),1),e.hidepagination?e._e():a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-sizes":[10,20,50,100],"page-size":e.pagination.per_page,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},i=[],o={name:"IotTable",props:{tableData:{type:Array,required:!0},tableHeader:{type:Array,required:!0},loading:{type:Boolean},pagination:{type:Object,required:!0},hidepagination:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleSizeChange:function(e){this.pagination.per_page=e,this.$emit("reloaddata")},handleCurrentChange:function(e){this.pagination.page=e,this.$emit("reloaddata")}}},r=o,l=(a("cdff"),a("2877")),s=Object(l["a"])(r,n,i,!1,null,"7ea0e430",null);t["a"]=s.exports},"60ca":function(e,t,a){},"735d":function(e,t,a){},a6ad:function(e,t,a){"use strict";var n=a("735d"),i=a.n(n);i.a},cdff:function(e,t,a){"use strict";var n=a("60ca"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-756b8c1d.218c21cf.js.map