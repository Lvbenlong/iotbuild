(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e7a238"],{"04b3":function(t,a,e){t.exports=e.p+"img/close.ab0461dc.png"},"0a49":function(t,a,e){var n=e("9b43"),i=e("626a"),s=e("4bf8"),r=e("9def"),o=e("cd1c");t.exports=function(t,a){var e=1==t,c=2==t,l=3==t,u=4==t,p=6==t,d=5==t||p,f=a||o;return function(a,o,v){for(var b,h,g=s(a),m=i(g),y=n(o,v,3),w=r(m.length),_=0,k=e?f(a,w):c?f(a,0):void 0;w>_;_++)if((d||_ in m)&&(b=m[_],h=y(b,_,g),t))if(e)k[_]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return _;case 2:k.push(b)}else if(u)return!1;return p?-1:l||u?u:k}}},1169:function(t,a,e){var n=e("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"2bfc":function(t,a,e){"use strict";var n=e("5cd5"),i=e.n(n);i.a},"3f13":function(t,a,e){},"47b9":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"gateway"},[e("p",{staticClass:"tab"},[e("span",{class:{active:0===t.pageState},on:{click:function(a){t.pageState=0}}},[t._v("\n      网关\n    ")]),e("span",{class:{active:1===t.pageState},on:{click:function(a){t.pageState=1}}},[t._v("\n      升级列表\n    ")])]),e("div",{staticClass:"tab-con"},[0===t.pageState?e("gateway-list"):e("upgrade-list")],1)])},i=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"gateway condition2"},[e("div",{staticClass:"search-box"},[e("ul",[e("li",[e("p",{staticClass:"input-title"},[t._v("IMEI")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.queryFilter.imei,expression:"queryFilter.imei"}],attrs:{type:"text",placeholder:"请输入IMEI"},domProps:{value:t.queryFilter.imei},on:{input:function(a){a.target.composing||t.$set(t.queryFilter,"imei",a.target.value)}}})]),e("li",[e("p",{staticClass:"input-title"},[t._v("设备状态")]),e("div",{staticClass:"dropmenu"},[e("input",{attrs:{type:"text",readonly:"readonly",placeholder:"请选择"}}),e("div",{staticClass:"dropdown"},[e("ul",[e("li",{on:{click:function(a){t.queryFilter.status=-1}}},[t._v("全部状态")]),e("li",{on:{click:function(a){t.queryFilter.status=1}}},[t._v("在线")]),e("li",{on:{click:function(a){t.queryFilter.status=0}}},[t._v("离线")])])])])]),e("li",{staticClass:"search-btn"},[e("el-button",{staticClass:"blue",attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")])],1)])]),e("div",{staticClass:"data"},[e("iot-table",{attrs:{tableHeader:t.tableHeader,tableData:t.tableData,pagination:t.pagination,loading:t.loading},on:{reloaddata:t.initData},scopedSlots:t._u([{key:"col-is_working",fn:function(a){return e("div",{},[e("p",[t._v(t._s(0===a.row.is_working?"离线":"在线"))])])}}])})],1)])},r=[],o=(e("96cf"),e("3b8d")),c=(e("7514"),e("1157")),l=e.n(c),u=e("9f2d"),p=e("5568"),d=e("3389"),f={name:"Gateway",components:{iotTable:p["a"]},mounted:function(){l()(".dropmenu").click(function(){l()(this).children(".dropdown").slideToggle()}),l()(".dropdown li").click(function(){var t=l()(this).text();l()(this).closest(".dropmenu").find("input").val(t)}),this.initData()},data:function(){return{loading:!1,queryFilter:{imei:"",status:""},tableData:[],pagination:{page:1,per_page:10,total:0},tableHeader:[{prop:"imei",label:"imei"},{prop:"version",label:"版本号"},{prop:"connection_num",label:"连接次数"},{prop:"is_working",label:"当前状态",type:"slot"},{prop:"address",label:"街道"}]}},methods:{initData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var a,e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,a={page:this.pagination.page,per_page:this.pagination.per_page,imei:this.queryFilter.imei?this.queryFilter.imei:void 0,is_working:this.queryFilter.status?this.queryFilter.status:void 0},t.prev=2,t.next=5,Object(u["a"])(a);case 5:e=t.sent,n=e.data,this.tableData=n.items,this.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](2),this.loading=!1,d["a"].error("查询数据失败");case 15:case"end":return t.stop()}},t,this,[[2,11]])}));function a(){return t.apply(this,arguments)}return a}(),handleSearch:function(){""!==this.queryFilter.imei||""!==this.queryFilter.status?this.initData():d["a"].error("查询条件不能为空")}}},v=f,b=(e("ba23"),e("2877")),h=Object(b["a"])(v,s,r,!1,null,"3a76867a",null),g=h.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"upgrade"},[e("div",{staticClass:"data"},[e("iot-table",{attrs:{tableHeader:t.tableHeader,tableData:t.tableData,pagination:t.pagination,loading:t.loading},on:{reloaddata:t.initData},scopedSlots:t._u([{key:"col-middle",fn:function(a){return e("div",{},[e("button",{staticClass:"btn btn-middle",on:{click:function(e){return t.upgrade_station(a.index)}}},[t._v("启动OTA")])])}}])})],1),e("start-ota",{ref:"startOta"})],1)},y=[],w=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showStatus,expression:"showStatus"}],staticClass:"popup popup1 task-popup",attrs:{id:"startOta"}},[n("p",{staticClass:"popup-title"},[t._v("\n    基站OTA\n  ")]),n("div",{staticClass:"popup-con"},[n("ul",[n("li",[n("span",[t._v("基站IMEI标识")]),n("p",[t._v(t._s(t.station.imei))])]),n("li",[n("span",[t._v("基站固件版本")]),n("p",[t._v(t._s(t.station.version))])]),n("li",[n("span",[t._v("基站安装位置")]),n("p",[t._v(t._s(t.station.address))])]),n("li",[n("span",[t._v("升级密钥(4位数字)")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.station.password,expression:"station.password"}],attrs:{type:"text"},domProps:{value:t.station.password},on:{input:function(a){a.target.composing||t.$set(t.station,"password",a.target.value)}}})])]),n("li",[n("button",{staticClass:"btn btn-middle cancel",on:{click:t.cancel}},[t._v("取消")]),n("button",{staticClass:"btn btn-middle yes",on:{click:t.submit}},[t._v("确定")])])])]),n("span",{staticClass:"layui-layer-setwin"},[n("a",{staticClass:"close-popup layui-layer-close layui-layer-close1",attrs:{href:"javascript:;"},on:{click:t.cancel}},[n("img",{attrs:{src:e("04b3"),title:"关闭"}})])])])},_=[],k=(e("b5ae"),e("78ef"),{data:function(){return{showStatus:!1,station:{imei:"",address:0,version:"",password:""}}},methods:{show:function(t){this.station={imei:t.imei,address:t.address,version:t.version},this.showStatus=!0},submit:function(){var t=this;Object(u["d"])(this.station.imei,{password:this.station.password}).then(function(a){t.showStatus=!1,d["a"].success("向在线基站下发OTA指令成功")},function(t){d["a"].error("向基站下发OTA指令失败",d["a"].findErrorMsg(t))})},cancel:function(){this.showStatus=!1}}}),x=k,C=(e("6728"),Object(b["a"])(x,w,_,!1,null,null,null)),O=C.exports,D={name:"Upgrade",components:{startOta:O,iotTable:p["a"]},mounted:function(){this.initData()},data:function(){return{loading:!0,tableData:[],pagination:{page:1,per_page:10,total:0},tableHeader:[{prop:"address",label:"地址"},{prop:"imei",label:"imei"},{prop:"version",label:"版本号"},{prop:"middle",label:"升级进度",type:"slot"}]}},methods:{initData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var a,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,Object(u["e"])("0.2");case 4:a=t.sent,e=a.data,this.tableData=e.items,this.loading=!1,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),this.loading=!1,d["a"].error("查询数据失败");case 14:case"end":return t.stop()}},t,this,[[1,10]])}));function a(){return t.apply(this,arguments)}return a}(),upgrade_station:function(t){this.$refs.startOta.show(this.tableData[t])}}},S=D,F=(e("2bfc"),Object(b["a"])(S,m,y,!1,null,null,null)),q=F.exports,j={name:"Gateway",components:{GatewayList:g,UpgradeList:q},data:function(){return{pageState:0}}},A=j,E=(e("ba8b"),Object(b["a"])(A,n,i,!1,null,"17df75e8",null));a["default"]=E.exports},"5cd5":function(t,a,e){},6728:function(t,a,e){"use strict";var n=e("3f13"),i=e.n(n);i.a},7514:function(t,a,e){"use strict";var n=e("5ca1"),i=e("0a49")(5),s="find",r=!0;s in[]&&Array(1)[s](function(){r=!1}),n(n.P+n.F*r,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(s)},"8e72":function(t,a,e){},9292:function(t,a,e){},"9f2d":function(t,a,e){"use strict";e.d(a,"c",function(){return s}),e.d(a,"a",function(){return r}),e.d(a,"e",function(){return o}),e.d(a,"d",function(){return c}),e.d(a,"b",function(){return l});var n=e("8897"),i=e("751a");function s(t,a,e){var s="key=".concat(t).concat(a?"&start=".concat(a):"").concat(e?"&end=".concat(e):"");return i["a"].get("".concat(n["a"].baseUrl,"/v2/stats/common?").concat(s))}function r(t){return i["a"].get("".concat(n["a"].baseUrl,"/v2/stations"),t)}function o(t){return i["a"].get("".concat(n["a"].baseUrl,"/v2/stations/version/").concat(t))}function c(t,a){return i["a"].get("".concat(n["a"].baseUrl,"/v2/station/").concat(t,"/upgrade"),a)}function l(){return i["a"].get("".concat(n["a"].baseUrl,"/v2/stats/projects/dist"))}},ba23:function(t,a,e){"use strict";var n=e("9292"),i=e.n(n);i.a},ba8b:function(t,a,e){"use strict";var n=e("8e72"),i=e.n(n);i.a},cd1c:function(t,a,e){var n=e("e853");t.exports=function(t,a){return new(n(t))(a)}},e853:function(t,a,e){var n=e("d3f4"),i=e("1169"),s=e("2b4c")("species");t.exports=function(t){var a;return i(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)||(a=void 0),n(a)&&(a=a[s],null===a&&(a=void 0))),void 0===a?Array:a}}}]);
//# sourceMappingURL=chunk-63e7a238.7af63453.js.map