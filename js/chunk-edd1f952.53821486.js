(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edd1f952"],{1750:function(e,t,a){},2628:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"malfunction"},[a("title-header",{attrs:{title:"操作日志"}}),a("div",{staticClass:"selects"},[a("div",{staticClass:"select-titles"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"common-item"},[e._v("资源类型")])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"common-item"},[e._v("操作类型")])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"common-item"},[e._v("资源主标识")])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"common-item"},[e._v("备注")])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"common-item"})])],1)],1),a("div",{staticClass:"select-content"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"common-item selsct-common"},[a("el-select",{attrs:{placeholder:"请选择资源类型"},model:{value:e.queryFilter.resourceType,callback:function(t){e.$set(e.queryFilter,"resourceType",t)},expression:"queryFilter.resourceType"}},e._l(e.resourceTypes,function(e){return a("el-option",{key:e.display,attrs:{label:e.display,value:e.code}})}),1)],1)]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"common-item selsct-common"},[a("el-select",{attrs:{placeholder:"请选择操作类型"},model:{value:e.queryFilter.operation,callback:function(t){e.$set(e.queryFilter,"operation",t)},expression:"queryFilter.operation"}},e._l(e.operationTypes,function(e){return a("el-option",{key:e.display,attrs:{label:e.display,value:e.code}})}),1)],1)]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"common-item selsct-common"},[a("el-input",{attrs:{placeholder:"请输入资源主标识"},model:{value:e.queryFilter.resourceKey,callback:function(t){e.$set(e.queryFilter,"resourceKey",t)},expression:"queryFilter.resourceKey"}})],1)]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"common-item selsct-common"},[a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.queryFilter.memo,callback:function(t){e.$set(e.queryFilter,"memo",t)},expression:"queryFilter.memo"}})],1)]),a("el-col",{attrs:{span:4}},[a("el-button",{staticClass:"blue",attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")])],1)],1)],1)]),a("div",{staticClass:"data"},[a("iot-table",{attrs:{tableHeader:e.tableHeader,tableData:e.tableData,pagination:e.pagination,loading:e.loading},on:{reloaddata:e.initData},scopedSlots:e._u([{key:"col-resource_type",fn:function(t){return a("div",{},[a("p",[e._v(e._s(e.resourceType(t.row.resource_type)))])])}},{key:"col-operation",fn:function(t){return a("div",{},[a("p",[e._v(e._s(e.operationType(t.row.operation)))])])}},{key:"col-create_time",fn:function(t){return a("div",{},[a("p",[e._v(e._s(e.calcTime(t.row.create_time)))])])}}])})],1)],1)},n=[],o=(a("96cf"),a("3b8d")),i=a("8593"),l=a("c70b"),s=a("5568"),c=a("dab0"),u=a("3389"),p={name:"Malfunction",components:{iotTable:s["a"],TitleHeader:c["a"]},mounted:function(){this.initData()},data:function(){return{loading:!1,queryFilter:{resourceType:"",operation:"",resourceKey:"",memo:""},operationTypes:[{code:"C",display:"新增"},{code:"U",display:"更新"},{code:"D",display:"删除"}],resourceTypes:[{code:"CO",display:"公司"},{code:"MB",display:"账号"},{code:"PJ",display:"项目"},{code:"DV",display:"设备"}],project:{name:"",id:""},tableData:[],pagination:{page:1,per_page:10,total:0},tableHeader:[{prop:"resource_type",label:"资源类型",type:"slot"},{prop:"resource_key",label:"资源主标识"},{prop:"operation",label:"操作类型",type:"slot"},{prop:"mid",label:"操作账号"},{prop:"memo",label:"备注"},{prop:"create_time",label:"操作时间",type:"slot"}]}},computed:{resourceType:function(){return function(e){return"CO"===e?"公司":"MB"===e?"账号":"PJ"===e?"项目":"DV"===e?"设备":""}},operationType:function(){return function(e){return"C"===e?"新增":"U"===e?"更新":"D"===e?"删除":""}},calcTime:function(){return function(e){return e?l["a"].format(new Date(1e3*e),"YYYY-MM-dd HH:mm:ss"):""}}},methods:{handleSearch:function(){""!==this.queryFilter.resourceType||""!==this.queryFilter.operation||""!==this.queryFilter.resourceKey||""!==this.queryFilter.memo?this.initData():u["a"].error("查询条件不能为空")},initData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,t={page:this.pagination.page,per_page:this.pagination.per_page,resourceType:this.queryFilter.resourceType?this.queryFilter.resourceType:void 0,operation:this.queryFilter.operation?this.queryFilter.operation:void 0,resourceKey:this.queryFilter.resourceKey?this.queryFilter.resourceKey:void 0,memo:this.queryFilter.memo?this.queryFilter.memo:void 0},e.prev=2,e.next=5,Object(i["g"])(t);case 5:a=e.sent,r=a.data,this.tableData=r.items,this.pagination={total:r.page_info.total,page:r.page_info.page,per_page:r.page_info.per_page},this.loading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](2),this.loading=!1,u["a"].error("查询数据失败");case 16:case"end":return e.stop()}},e,this,[[2,12]])}));function t(){return e.apply(this,arguments)}return t}()}},d=p,m=(a("c8db"),a("2877")),y=Object(m["a"])(d,r,n,!1,null,null,null);t["default"]=y.exports},"4ba2":function(e,t,a){"use strict";var r=a("1750"),n=a.n(r);n.a},5568:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iotTable"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.tableHeader,function(t,r){return"slot"!==t.type?a("el-table-column",{key:r,attrs:{prop:t.prop,width:t.width,label:t.label}}):a("el-table-column",{key:r,attrs:{width:t.width||150,label:t.label},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t("col-"+t.prop,null,{row:a.row,index:a.$index})]}}],null,!0)})}),1),e.hidepagination?e._e():a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-sizes":[10,20,50,100],"page-size":e.pagination.per_page,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],o={name:"IotTable",props:{tableData:{type:Array,required:!0},tableHeader:{type:Array,required:!0},loading:{type:Boolean},pagination:{type:Object,required:!0},hidepagination:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleSizeChange:function(e){this.pagination.per_page=e,this.$emit("reloaddata")},handleCurrentChange:function(e){console.log(e),this.pagination.page=e,this.$emit("reloaddata")}}},i=o,l=(a("e927"),a("2877")),s=Object(l["a"])(i,r,n,!1,null,"2e99ce96",null);t["a"]=s.exports},8593:function(e,t,a){"use strict";a.d(t,"f",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return l}),a.d(t,"e",function(){return s}),a.d(t,"c",function(){return c}),a.d(t,"g",function(){return u}),a.d(t,"a",function(){return p});var r=a("8897"),n=a("751a");function o(e){return n["a"].get("".concat(r["a"].baseUrl,"/v2/companies"),e)}function i(){return n["a"].get("".concat(r["a"].baseUrl,"/v2/roles"))}function l(e){return n["a"].del("".concat(r["a"].baseUrl,"/v2/role/").concat(e))}function s(e){return n["a"].get("".concat(r["a"].baseUrl,"/v2/members?page=").concat(e.page||1,"&per_page=").concat(e.per_page||10),e)}function c(e,t){return n["a"].del("".concat(r["a"].baseUrl,"/v3/member?mid=")+e+"&verify_code="+t)}function u(e){return n["a"].get("".concat(r["a"].baseUrl,"/v2/operations"),e)}function p(e){return n["a"].post("".concat(r["a"].baseUrl,"/v2/company/logo/custom"),e)}},b6ee:function(e,t,a){},c8db:function(e,t,a){"use strict";var r=a("dff5"),n=a.n(r);n.a},dab0:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titleHeader"},[a("h3",[e._v(e._s(e.title))])])},n=[],o={name:"TitleHeader",props:["title"],data:function(){return{}}},i=o,l=(a("4ba2"),a("2877")),s=Object(l["a"])(i,r,n,!1,null,"410d105d",null);t["a"]=s.exports},dff5:function(e,t,a){},e927:function(e,t,a){"use strict";var r=a("b6ee"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-edd1f952.53821486.js.map