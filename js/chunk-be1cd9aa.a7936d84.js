(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be1cd9aa"],{"04b3":function(e,t,n){e.exports=n.p+"img/close.ab0461dc.png"},1750:function(e,t,n){},"1df3":function(e,t,n){"use strict";var c=n("3f7e"),a=n.n(c);a.a},"3f7e":function(e,t,n){},"4ba2":function(e,t,n){"use strict";var c=n("1750"),a=n.n(c);a.a},"5df3":function(e,t,n){"use strict";var c=n("02f4")(!0);n("01f9")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=c(t,n),this._i+=e.length,{value:e,done:!1})})},a463:function(e,t,n){},b3aa:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return r}),n.d(t,"b",function(){return o});var c=n("8897"),a=n("751a");function i(e){return a["a"].get("".concat(c["a"].baseUrl,"/v2/devices/type/report"),e)}function s(e){return a["a"].get("".concat(c["a"].baseUrl,"/v2/company/").concat(e,"/agent"))}function l(e){return a["a"].get("".concat(c["a"].baseUrl,"/v2/company/").concat(e,"/places"))}function r(e,t,n){var i="key=".concat(e).concat(t?"&start=".concat(t):"").concat(n?"&end=".concat(n):"");return a["a"].get("".concat(c["a"].baseUrl,"/v2/stats/common?").concat(i))}function o(e){return a["a"].get("".concat(c["a"].baseUrl,"/v3/places/all"),e)}},c428:function(e,t,n){"use strict";var c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading"},[n("i",{staticClass:"el-icon-loading"})])}],i={name:"Loading",data:function(){return{}}},s=i,l=(n("1df3"),n("2877")),r=Object(l["a"])(s,c,a,!1,null,"64c5c865",null);t["a"]=r.exports},dab0:function(e,t,n){"use strict";var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"titleHeader"},[n("h3",[e._v(e._s(e.title))])])},a=[],i={name:"TitleHeader",props:["title"],data:function(){return{}}},s=i,l=(n("4ba2"),n("2877")),r=Object(l["a"])(s,c,a,!1,null,"410d105d",null);t["a"]=r.exports},ebde:function(e,t,n){"use strict";var c=n("a463"),a=n.n(c);a.a},f36a:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"report"},[c("title-header",{attrs:{title:"安装报表/九九物联"}}),c("div",{staticClass:"tools"},[c("el-button",{staticClass:"green",attrs:{type:"primary"},on:{click:e.initData}},[e._v("查询")]),c("el-button",{staticClass:"green",attrs:{type:"primary"},on:{click:e.initData}},[e._v("导出")])],1),c("div",{staticClass:"filter"},[c("el-row",{attrs:{gutter:24}},[c("el-col",{attrs:{span:8}},[c("p",{staticClass:"name"},[e._v("汇总方式")]),c("el-select",{attrs:{placeholder:"请选择汇总方式"},model:{value:e.queryFilter.summarymode,callback:function(t){e.$set(e.queryFilter,"summarymode",t)},expression:"queryFilter.summarymode"}},e._l(e.summarymode,function(e,t){return c("el-option",{key:t,attrs:{label:e.display,value:e.code}})}),1)],1),c("el-col",{attrs:{span:8}},[c("p",{staticClass:"name"},[e._v("开始时间")]),c("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择"},model:{value:e.queryFilter.start,callback:function(t){e.$set(e.queryFilter,"start",t)},expression:"queryFilter.start"}})],1),c("el-col",{attrs:{span:8}},[c("p",{staticClass:"name"},[e._v("结束时间")]),c("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择"},model:{value:e.queryFilter.end,callback:function(t){e.$set(e.queryFilter,"end",t)},expression:"queryFilter.end"}})],1)],1),c("br"),c("el-row",{attrs:{gutter:24}},[c("el-col",{attrs:{span:8}},[c("p",{staticClass:"name"},[e._v("省级代理商")]),c("el-select",{attrs:{placeholder:"请选择省级代理"},model:{value:e.provinceagent,callback:function(t){e.provinceagent=t},expression:"provinceagent"}},e._l(e.provinceagentlist,function(e,t){return c("el-option",{key:t,attrs:{label:e.name,value:e}})}),1)],1),c("el-col",{attrs:{span:8}},[c("p",{staticClass:"name"},[e._v("市级代理商")]),c("el-select",{attrs:{placeholder:"市级代理商"},model:{value:e.cityagent,callback:function(t){e.cityagent=t},expression:"cityagent"}},e._l(e.cityagentlist,function(e,t){return c("el-option",{key:t,attrs:{label:e.name,value:e}})}),1)],1),c("el-col",{attrs:{span:8}},[c("p",{staticClass:"name"},[e._v("区/县级代理商")]),c("el-select",{attrs:{placeholder:"请选择区/县级代理"},model:{value:e.countyagent,callback:function(t){e.countyagent=t},expression:"countyagent"}},e._l(e.countyagentlist,function(e,t){return c("el-option",{key:t,attrs:{label:e.name,value:e}})}),1)],1)],1),c("br"),c("el-row",{attrs:{gutter:24}},[c("el-col",{attrs:{span:8}},[c("p",{staticClass:"name"},[e._v("汇总项目")]),c("el-select",{attrs:{placeholder:"请选择省级代理"},model:{value:e.projectchoseall,callback:function(t){e.projectchoseall=t},expression:"projectchoseall"}},e._l(e.allSupervisors,function(e,t){return c("el-option",{key:t,attrs:{label:e.name,value:e}})}),1)],1)],1),c("br"),c("div",{staticClass:"device-list"},[c("p",{staticClass:"name"},[e._v("汇总设备")]),c("div",{staticClass:"lists"},[c("div",{staticClass:"select common-item",on:{click:e.choseequipment}},[e._v("选择设备")]),e._l(e.equipmentlistz,function(t,n){return t.checked?c("div",{key:n,staticClass:"list-item common-item"},[e._v("\n          "+e._s(t.name)+"\n          "),c("span",{on:{click:function(n){return e.deleteChecked(t)}}},[c("i",{staticClass:"iconfont iconguanbi"})])]):e._e()})],2)])],1),c("div",{directives:[{name:"show",rawName:"v-show",value:e.showequipment,expression:"showequipment"}],staticClass:"popups"},[c("div",{staticClass:"equipmentpanel"},[c("h3",{staticClass:"equipmentpaneltitle"},[e._v("\n        总汇设备\n        "),c("img",{staticClass:"closeshowequipment",attrs:{src:n("04b3")},on:{click:e.allcancel}})]),c("div",{staticClass:"content"},[c("h3",{staticClass:"equipmentpanelcontent"},[e._v("\n          请勾选需要的设备：\n        ")]),c("ul",{staticClass:"contentcheck"},e._l(e.equipmentlistz,function(t,n){return c("li",{key:n,on:{click:function(n){return e.changecheck(t)}}},[c("label",[c("div",{class:{ischecked:t.checked}}),e._v(e._s(t.name)+"\n            ")])])}),0),c("ul",{staticClass:"contentcheck"},[c("li",{on:{click:e.allchangechecked}},[c("label",[c("div",{class:{ischecked:this.allchecked}}),e._v("全部选择\n            ")])]),c("li",{on:{click:e.dischangechecked}},[c("label",[c("div",{class:{ischecked:this.dischecked}}),e._v("全部取消\n            ")])])]),c("div",{staticClass:"text-center"},[c("button",{staticClass:"btn btn-middle",on:{click:e.allcancel}},[e._v("\n            取消\n          ")]),c("button",{staticClass:"btn btn-middle btn-green",on:{click:e.choseequipment}},[e._v("\n            确认\n          ")])])])])]),c("loading",{directives:[{name:"show",rawName:"v-show",value:e.showLoadingDiolod,expression:"showLoadingDiolod"}]})],1)},a=[],i=(n("96cf"),n("3b8d")),s=(n("7f7f"),n("ac6a"),n("5df3"),n("dab0")),l=n("b3aa"),r=n("72bb"),o=n("8897"),u=n("3389"),d=n("c428"),h={name:"Report",components:{TitleHeader:s["a"],Loading:d["a"]},mounted:function(){var e=this;this.companyName=Object(r["a"])(o["a"].companyTureName),this.level=Object(r["a"])(o["a"].level),this.cid=Object(r["a"])(o["a"].companyId),this.showLoadingDiolod=!0,Promise.all([this.getagentlist(Object(r["a"])(o["a"].companyId)),this.getplaceslist(Object(r["a"])(o["a"].code)),this.getreporttypelist(Object(r["a"])(o["a"].companyId),this.pids)]).then(function(){e.showLoadingDiolod=!1}).catch(function(t){e.showLoadingDiolod=!1,u["a"].error("查询数据失败",u["a"].findErrorMsg(t))})},data:function(){return{showLoadingDiolod:!1,allchecked:!1,dischecked:!1,showequipment:!1,queryFilter:{project:void 0,cycle:void 0,summarymode:{code:"2",display:"按设备"},start:"",end:""},provinceagentlist:[],cityagentlist:[],countyagentlist:[],equipmentlistz:[],projectchoseall:"",provinceagent:"",cityagent:"",countyagent:"",placeslist:"",level:"",cid:"",summarymode:[{code:"1",display:"按项目"},{code:"2",display:"按设备"}],equipmentlist:[{code:"1",checked:!0,name:"定位终端"},{code:"2",checked:!0,name:"智能烟感"},{code:"3",checked:!0,name:"红外"},{code:"5",checked:!0,name:"气体报警"},{code:"6",checked:!0,name:"一氧化碳"},{code:"7",checked:!0,name:"一键报警"},{code:"11",checked:!0,name:"智能用电终端"},{code:"12",checked:!0,name:"电器线路"},{code:"13",checked:!0,name:"古玩字画"},{code:"14",checked:!0,name:"WISE主机"},{code:"15",checked:!0,name:"智能温感"},{code:"17",checked:!0,name:"液化石油气报警终端"},{code:"21",checked:!0,name:"用电安全"},{code:"22",checked:!0,name:"消防栓"},{code:"23",checked:!0,name:"水位仪"},{code:"24",checked:!0,name:"消防主机联网"},{code:"26",checked:!0,name:"巡更助手"},{code:"27",checked:!0,name:"消防栓压力监控"},{code:"28",checked:!0,name:"液位监控"},{code:"30",checked:!0,name:"电气火灾监控器"},{code:"91",checked:!0,name:"视频监控"},{code:"92",checked:!0,name:"灭火器"},{code:"178",checked:!0,name:"NB烟感"},{code:"181",checked:!0,name:"NB燃气"},{code:"229",checked:!0,name:"工业燃气"},{code:"31",checked:!0,name:"控制柜监测"},{code:"183",checked:!0,name:"NB一键报警"}]}},computed:{allSupervisors:function(){return this.placeslist?this.placeslist.map(function(e){return{name:e.name,id:e.id,flag:!1}}):{}}},methods:{getreporttypelist:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var c,a,i,s,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return c={cid:t,pids:n},e.prev=1,e.next=4,Object(l["d"])(c);case 4:for(a=e.sent,i=a.data,this.cid=t,this.reporttype=i.types,s=[],r=0;r<this.equipmentlist.length;r++)for(o=0;o<this.reporttype.length;o++)this.equipmentlist[r].code==this.reporttype[o]&&s.push(this.equipmentlist[r]);this.equipmentlistz=s,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),u["a"].error("查询数据失败",u["a"].findErrorMsg(e.t0));case 16:case"end":return e.stop()}},e,this,[[1,13]])}));function t(t,n){return e.apply(this,arguments)}return t}(),getagentlist:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,c,a,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l["a"])(t);case 3:if(n=e.sent,c=n.data,"province"!=c.level){e.next=12;break}if(0!==c.companys_list.length){e.next=8;break}return e.abrupt("return");case 8:for(this.provinceagentlist=c.companys_list,a=0;a<this.provinceagentlist.length;a++)"CH"==this.provinceagentlist[a].type_level&&this.provinceagentlist.splice(a,1);e.next=27;break;case 12:if("city"!=c.level){e.next=19;break}if(0!==c.companys_list.length){e.next=15;break}return e.abrupt("return");case 15:for(this.cityagentlist=c.companys_list,i=0;i<this.cityagentlist.length;i++)"CH"==this.cityagentlist[i].type_level&&this.cityagentlist.splice(i,1);e.next=27;break;case 19:if("county"!=c.level){e.next=26;break}if(0!==c.companys_list.length){e.next=22;break}return e.abrupt("return");case 22:for(this.countyagentlist=c.companys_list,s=0;s<this.countyagentlist.length;s++)"CH"==this.countyagentlist[s].type_level&&this.countyagentlist.splice(s,1);e.next=27;break;case 26:c.level;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e["catch"](0),u["a"].error("查询数据失败",u["a"].findErrorMsg(e.t0));case 32:case"end":return e.stop()}},e,this,[[0,29]])}));function t(t){return e.apply(this,arguments)}return t}(),getplaceslist:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l["c"])(t);case 3:n=e.sent,c=n.data,this.placeslist=c,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),u["a"].error("查询数据失败",u["a"].findErrorMsg(e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),deleteChecked:function(e){e.checked=!e.checked,this.equipmentlistz},choseequipment:function(){this.showequipment=!this.showequipment},changecheck:function(e){e.checked=!e.checked},initData:function(){},allchangechecked:function(){for(var e=0;e<this.equipmentlistz.length;e++)this.equipmentlistz[e].checked=!0;this.allchecked=!0,this.dischecked=!1},dischangechecked:function(){for(var e=0;e<this.equipmentlistz.length;e++)this.equipmentlistz[e].checked=!1;this.dischecked=!0,this.allchecked=!1},allcancel:function(){this.showequipment=!this.showequipment}}},p=h,m=(n("ebde"),n("2877")),v=Object(m["a"])(p,c,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-be1cd9aa.a7936d84.js.map