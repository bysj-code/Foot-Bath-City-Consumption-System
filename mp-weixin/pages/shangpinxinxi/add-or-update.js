(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"031b":function(n,e,a){"use strict";var i=a("bbe6"),t=a.n(i);t.a},"44cc":function(n,e,a){"use strict";a.r(e);var i=a("e00e"),t=a.n(i);for(var r in i)"default"!==r&&function(n){a.d(e,n,(function(){return i[n]}))}(r);e["default"]=t.a},bbe6:function(n,e,a){},c3bf:function(n,e,a){"use strict";a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"0d50"))}},t=function(){var n=this,e=n.$createElement;n._self._c},r=[]},e00e:function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(a("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e,a,i,t,r,u){try{var s=n[r](u),o=s.value}catch(c){return void a(c)}s.done?e(o):Promise.resolve(o).then(i,t)}function u(n){return function(){var e=this,a=arguments;return new Promise((function(i,t){var u=n.apply(e,a);function s(n){r(u,i,t,s,o,"next",n)}function o(n){r(u,i,t,s,o,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("0d50"))}.bind(null,a)).catch(a.oe)},o={data:function(){return{cross:"",ruleForm:{shangpinbianhao:this.getUUID(),shangpinmingcheng:"",shangpinfenlei:"",shangpintupian:"",fabushijian:"",guige:"",pinpai:"",jiage:"",shangpinxiangqing:"",shangjiazhanghao:"",shangjiaxingming:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpinfenlei:!1,shangpintupian:!1,fabushijian:!1,guige:!1,pinpai:!1,jiage:!1,shangpinxiangqing:!1,shangjiazhanghao:!1,shangjiaxingming:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var a=this;return u(i.default.mark((function t(){var r,u,s,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.fabushijian=a.$utils.getCurDate(),r=n.getStorageSync("nowTable"),t.next=4,a.$api.session(r);case 4:return u=t.sent,a.user=u.data,a.ruleForm.shangjiazhanghao=a.user.shangjiazhanghao,a.ro.shangjiazhanghao=!0,a.ruleForm.shangjiaxingming=a.user.shangjiaxingming,a.ro.shangjiaxingming=!0,t.next=12,a.$api.option("shangpinfenlei","shangpinfenlei",{});case 12:if(u=t.sent,a.shangpinfenleiOptions=u.data,a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=22;break}return a.ruleForm.id=e.id,t.next=20,a.$api.info("shangpinxinxi",a.ruleForm.id);case 20:u=t.sent,a.ruleForm=u.data;case 22:if(a.cross=e.cross,!e.cross){t.next=82;break}s=n.getStorageSync("crossObj"),t.t0=i.default.keys(s);case 26:if((t.t1=t.t0()).done){t.next=82;break}if(o=t.t1.value,"shangpinbianhao"!=o){t.next=32;break}return a.ruleForm.shangpinbianhao=s[o],a.ro.shangpinbianhao=!0,t.abrupt("continue",26);case 32:if("shangpinmingcheng"!=o){t.next=36;break}return a.ruleForm.shangpinmingcheng=s[o],a.ro.shangpinmingcheng=!0,t.abrupt("continue",26);case 36:if("shangpinfenlei"!=o){t.next=40;break}return a.ruleForm.shangpinfenlei=s[o],a.ro.shangpinfenlei=!0,t.abrupt("continue",26);case 40:if("shangpintupian"!=o){t.next=44;break}return a.ruleForm.shangpintupian=s[o],a.ro.shangpintupian=!0,t.abrupt("continue",26);case 44:if("fabushijian"!=o){t.next=48;break}return a.ruleForm.fabushijian=s[o],a.ro.fabushijian=!0,t.abrupt("continue",26);case 48:if("guige"!=o){t.next=52;break}return a.ruleForm.guige=s[o],a.ro.guige=!0,t.abrupt("continue",26);case 52:if("pinpai"!=o){t.next=56;break}return a.ruleForm.pinpai=s[o],a.ro.pinpai=!0,t.abrupt("continue",26);case 56:if("jiage"!=o){t.next=60;break}return a.ruleForm.jiage=s[o],a.ro.jiage=!0,t.abrupt("continue",26);case 60:if("shangpinxiangqing"!=o){t.next=64;break}return a.ruleForm.shangpinxiangqing=s[o],a.ro.shangpinxiangqing=!0,t.abrupt("continue",26);case 64:if("shangjiazhanghao"!=o){t.next=68;break}return a.ruleForm.shangjiazhanghao=s[o],a.ro.shangjiazhanghao=!0,t.abrupt("continue",26);case 68:if("shangjiaxingming"!=o){t.next=72;break}return a.ruleForm.shangjiaxingming=s[o],a.ro.shangjiaxingming=!0,t.abrupt("continue",26);case 72:if("clicktime"!=o){t.next=76;break}return a.ruleForm.clicktime=s[o],a.ro.clicktime=!0,t.abrupt("continue",26);case 76:if("clicknum"!=o){t.next=80;break}return a.ruleForm.clicknum=s[o],a.ro.clicknum=!0,t.abrupt("continue",26);case 80:t.next=26;break;case 82:a.styleChange();case 83:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(n){this.ruleForm.fabushijian=n.target.value,this.$forceUpdate()},clicktimeConfirm:function(n){console.log(n),this.ruleForm.clicktime=n.result,this.$forceUpdate()},shangpinfenleiChange:function(n){this.shangpinfenleiIndex=n.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},shangpintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shangpintupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(i.default.mark((function a(){var t,r,u,s,o,c,g,l,f,h;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.ruleForm.jiage||e.$validate.isNumber(e.ruleForm.jiage)){a.next=3;break}return e.$utils.msg("价格应输入数字"),a.abrupt("return");case 3:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){a.next=6;break}return e.$utils.msg("点击次数应输入整数"),a.abrupt("return");case 6:if(!e.cross){a.next=22;break}if(s=n.getStorageSync("statusColumnName"),o=n.getStorageSync("statusColumnValue"),""==s){a.next=22;break}if(c=n.getStorageSync("crossObj"),s.startsWith("[")){a.next=18;break}for(g in c)g==s&&(c[g]=o);return l=n.getStorageSync("crossTable"),a.next=16,e.$api.update("".concat(l),c);case 16:a.next=22;break;case 18:t=Number(n.getStorageSync("userid")),r=c["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!r||!t){a.next=44;break}return e.ruleForm.crossuserid=t,e.ruleForm.crossrefid=r,f={page:1,limit:10,crossuserid:t,crossrefid:r},a.next=28,e.$api.list("shangpinxinxi",f);case 28:if(h=a.sent,!(h.data.total>=u)){a.next=34;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 34:if(!e.ruleForm.id){a.next=39;break}return a.next=37,e.$api.update("shangpinxinxi",e.ruleForm);case 37:a.next=41;break;case 39:return a.next=41,e.$api.add("shangpinxinxi",e.ruleForm);case 41:e.$utils.msgBack("提交成功");case 42:a.next=52;break;case 44:if(!e.ruleForm.id){a.next=49;break}return a.next=47,e.$api.update("shangpinxinxi",e.ruleForm);case 47:a.next=51;break;case 49:return a.next=51,e.$api.add("shangpinxinxi",e.ruleForm);case 51:e.$utils.msgBack("提交成功");case 52:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,t=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(a,"-").concat(i,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,a("543d")["default"])},e91b:function(n,e,a){"use strict";(function(n){a("fcca");i(a("66fd"));var e=i(a("f4c7"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},f4c7:function(n,e,a){"use strict";a.r(e);var i=a("c3bf"),t=a("44cc");for(var r in t)"default"!==r&&function(n){a.d(e,n,(function(){return t[n]}))}(r);a("031b");var u,s=a("f0c5"),o=Object(s["a"])(t["default"],i["b"],i["c"],!1,null,"d7bfe06c",null,!1,i["a"],u);e["default"]=o.exports}},[["e91b","common/runtime","common/vendor"]]]);