(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2eac":function(n,t,i){"use strict";i.r(t);var e=i("57a4"),o=i.n(e);for(var a in e)"default"!==a&&function(n){i.d(t,n,(function(){return e[n]}))}(a);t["default"]=o.a},"46b3":function(n,t,i){var e=i("e08e");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var o=i("4f06").default;o("32a4a24a",e,!0,{sourceMap:!1,shadowMode:!1})},"4df9":function(n,t,i){"use strict";var e;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return e}));var o=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("zaudio",{attrs:{theme:"theme3"}}),i("v-uni-view",{staticClass:"listbox"},[i("v-uni-view",{staticStyle:{padding:"10px"}},[n._v("音频列表:")]),n._l(n.audiolist,(function(t,e){return i("v-uni-view",{key:e,staticClass:"list"},[n._v(n._s(t.title)),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.go(e)}}},[n._v("查看详情")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.play(e)}}},[n._v(n._s(t.src!==n.playinfo.src||n.paused?"播放":"暂停"))])],1)}))],2),i("div",{staticClass:"demo"},[i("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.reset.apply(void 0,arguments)}}},[n._v("音频-覆盖")]),i("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.add.apply(void 0,arguments)}}},[n._v("音频-添加")]),i("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.willStop.apply(void 0,arguments)}}},[n._v("限制播放5s后暂停")]),i("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.removeStop.apply(void 0,arguments)}}},[n._v("去除播放限制,并继续播放")])],1)],1)},a=[]},"57a4":function(n,t,i){"use strict";var e=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e(i("4004")),a={data:function(){return{}},components:{zaudio:o.default},computed:{paused:function(){return this.$zaudio.paused},playIndex:function(){return this.$zaudio.playIndex},audiolist:function(){return this.$zaudio.audiolist},playinfo:function(){return this.$zaudio.playinfo}},onLoad:function(){},onShow:function(){this.$zaudio.syncRender()},methods:{play:function(n){this.$zaudio.operate(n)},go:function(n){uni.navigateTo({url:"/pages/detail/index?key="+n})},reset:function(){var n=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/21/21a_zj/01.mp3",title:"二人转",singer:"作者333",coverImgUrl:"https://img.1ting.com/images/special/374/s300_2f06b17427718e01e54be1cfe462f3e0.jpg"}];this.$zaudio.setAudio(n)},add:function(){var n=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/jn/12.jlhg/8.zhg/2.mp3",title:"天边",singer:"作者222",coverImgUrl:"https://img.1ting.com/images/special/377/s300_4631dc844ab6429b6bc6fe4ccdc6ed6f.jpg"}];this.$zaudio.updateAudio(n)},willStop:function(){var n=this;this.$zaudio.onPlaying=function(t){t.current_value>5&&(n.$zaudio.stop(),uni.showModal({title:"打钱后才可以听",content:"打钱后才可以听",success:function(n){n.confirm?console.log("用户点击确定"):n.cancel&&console.log("用户点击取消")}}))}},removeStop:function(){this.$zaudio.onPlaying=null,this.$zaudio.operate()}}};t.default=a},"9d53":function(n,t,i){"use strict";i.r(t);var e=i("4df9"),o=i("2eac");for(var a in o)"default"!==a&&function(n){i.d(t,n,(function(){return o[n]}))}(a);i("f314");var r,u=i("f0c5"),s=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"678e6188",null,!1,e["a"],r);t["default"]=s.exports},e08e:function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.listbox[data-v-678e6188]{margin:20px 10px 10px;border:1px solid rgba(0,0,0,.2)}.listbox .list[data-v-678e6188]{line-height:40px;border-top:1px solid #ccc;padding:0 10px}.listbox .list uni-button[data-v-678e6188]{float:right;margin-top:5px;margin-left:5px}.demo[data-v-678e6188]{margin-top:30px}.demo uni-button[data-v-678e6188]{margin:5px}',""]),n.exports=t},f314:function(n,t,i){"use strict";var e=i("46b3"),o=i.n(e);o.a}}]);