(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{4174:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list[data-v-395235db]{line-height:40px;border-top:1px solid #ccc;padding:0 10px}.list[data-v-395235db]:last-child{border-bottom:1px solid #ccc}.list uni-button[data-v-395235db]{float:right;margin-top:5px;margin-left:5px}',""]),t.exports=n},"419c":function(t,n,i){"use strict";var e=i("7a78"),a=i.n(e);a.a},"688b":function(t,n,i){"use strict";i.r(n);var e=i("87b3"),a=i.n(e);for(var r in e)"default"!==r&&function(t){i.d(n,t,(function(){return e[t]}))}(r);n["default"]=a.a},7081:function(t,n,i){"use strict";i.r(n);var e=i("752d"),a=i("688b");for(var r in a)"default"!==r&&function(t){i.d(n,t,(function(){return a[t]}))}(r);i("419c");var s,o=i("f0c5"),u=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"395235db",null,!1,e["a"],s);n["default"]=u.exports},"752d":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"content"},[i("zaudio",{ref:"zaudio",attrs:{theme:"theme3",autoplay:!1,continue:!0}}),t._l(t.audiolist,(function(n,e){return i("v-uni-view",{key:e,staticClass:"list"},[t._v(t._s(n.title)),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go(e)}}},[t._v("查看详情")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.play(e)}}},[t._v(t._s(n.src!==t.playinfo.src||t.paused?"播放":"暂停"))])],1)}))],2)},r=[]},"7a78":function(t,n,i){var e=i("4174");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("2150dcdc",e,!0,{sourceMap:!1,shadowMode:!1})},"87b3":function(t,n,i){"use strict";var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("5530")),r=e(i("edbe")),s=i("2f62"),o={data:function(){return{songlist:[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3",title:"恭喜发财",singer:"刘德华",coverImgUrl:"https://gitee.com/jingangtui/static/raw/master/src/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"},{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3",title:"好运来",singer:"作者1111",coverImgUrl:"https://gitee.com/jingangtui/static/raw/master/src/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"}]}},components:{zaudio:r.default},computed:(0,a.default)({},(0,s.mapGetters)(["audiolist","playIndex","playinfo","paused"])),onLoad:function(){this.set_audiolist({data:this.songlist,status:!1})},onShow:function(){this.set_renderIndex(this.playIndex)},methods:(0,a.default)((0,a.default)({},(0,s.mapMutations)(["set_renderIndex","set_audiolist","set_audio"])),{},{play:function(t){this.set_audio(this.audiolist[t]),this.$refs.zaudio.operation(!0)},go:function(t){this.set_audio(this.audiolist[t]),uni.navigateTo({url:"/pages/detail/index"})}})};n.default=o}}]);