(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2eac":function(n,t,i){"use strict";i.r(t);var a=i("57a4"),o=i.n(a);for(var e in a)"default"!==e&&function(n){i.d(t,n,(function(){return a[n]}))}(e);t["default"]=o.a},3116:function(n,t,i){var a=i("e540");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=i("4f06").default;o("4fa0e9ea",a,!0,{sourceMap:!1,shadowMode:!1})},"57a4":function(n,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i("4004")),e={data:function(){return{audiolist:this.$zaudio.audiolist,playIndex:this.$zaudio.playIndex,paused:this.$zaudio.paused,playinfo:this.$zaudio.playinfo}},components:{zaudio:o.default},onLoad:function(){this.$zaudio.on("stop","aaa",(function(){console.log("aa")}))},onShow:function(){var n=this;this.$zaudio.syncRender(),this.$zaudio.syncStateOn("page-index-get-state",(function(t){var i=t.audiolist,a=t.playIndex,o=t.paused,e=t.playinfo;n.audiolist=i,n.playIndex=a,n.paused=o,n.playinfo=e}))},onHide:function(){this.$zaudio.syncStateOff("page-index-get-state")},methods:{play:function(n){this.$zaudio.operate(n)},go:function(n){uni.navigateTo({url:"/pages/detail/index?key="+n})},reset:function(){var n=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/21/21a_zj/01.mp3",title:"二人转",singer:"作者333",coverImgUrl:"https://img.1ting.com/images/special/374/s300_2f06b17427718e01e54be1cfe462f3e0.jpg"}];this.$zaudio.setAudio(n)},add:function(){var n=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/jn/12.jlhg/8.zhg/2.mp3",title:"天边",singer:"作者222",coverImgUrl:"https://img.1ting.com/images/special/377/s300_4631dc844ab6429b6bc6fe4ccdc6ed6f.jpg"}];this.$zaudio.updateAudio(n)},willStop:function(){var n=this;this.$zaudio.on("playing","recharge",(function(t){t.current_value>5&&(n.$zaudio.stop(),uni.showModal({title:"打钱后才可以听",content:"打钱后才可以听",success:function(n){n.confirm?console.log("用户点击确定"):n.cancel&&console.log("用户点击取消")}}))}))},removeStop:function(){this.$zaudio.off("playing","recharge"),this.$zaudio.operate()},logPlaying:function(n){this.$zaudio.on("playing",n,(function(t){console.log("播放中----"+n,t)}))},offPlaying:function(n){this.$zaudio.off("playing",n)},stepPlay:function(n){this.$zaudio.stepPlay(n)}}};t.default=e},"6f46":function(n,t,i){"use strict";var a=i("3116"),o=i.n(a);o.a},"9d53":function(n,t,i){"use strict";i.r(t);var a=i("f697"),o=i("2eac");for(var e in o)"default"!==e&&function(n){i.d(t,n,(function(){return o[n]}))}(e);i("6f46");var s,u=i("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"d897d0fa",null,!1,a["a"],s);t["default"]=c.exports},e540:function(n,t,i){var a=i("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.listbox[data-v-d897d0fa]{margin:20px 10px 10px;border:1px solid rgba(0,0,0,.2)}.listbox .list[data-v-d897d0fa]{line-height:40px;border-top:1px solid #ccc;padding:0 10px}.listbox .list uni-button[data-v-d897d0fa]{float:right;margin-top:5px;margin-left:5px}.demo[data-v-d897d0fa]{margin-top:20px}.demo uni-button[data-v-d897d0fa]{margin:5px}',""]),n.exports=t},f697:function(n,t,i){"use strict";var a;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return e})),i.d(t,"a",(function(){return a}));var o=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("zaudio",{attrs:{theme:"theme1"}}),i("v-uni-view",{staticClass:"listbox"},[i("v-uni-view",{staticStyle:{padding:"10px"}},[n._v("音频列表:")]),n._l(n.audiolist,(function(t,a){return i("v-uni-view",{key:a,staticClass:"list"},[n._v(n._s(t.title)),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.go(a)}}},[n._v("查看详情")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.play(a)}}},[n._v(n._s(n.paused||t.src!==n.playinfo.src?"播放":"暂停"))])],1)}))],2),i("div",{staticClass:"demo"},[i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.reset.apply(void 0,arguments)}}},[n._v("覆盖音频")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.add.apply(void 0,arguments)}}},[n._v("添加音频")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.willStop.apply(void 0,arguments)}}},[n._v("注册5秒后暂停事件")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.removeStop.apply(void 0,arguments)}}},[n._v("卸载5秒后暂停事件")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.logPlaying("log")}}},[n._v("注册播放时打印事件")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.offPlaying("log")}}},[n._v("卸载播放时打印事件")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.stepPlay(20)}}},[n._v("快进20s")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.stepPlay(-20)}}},[n._v("快退20s")])],1)],1)},e=[]}}]);