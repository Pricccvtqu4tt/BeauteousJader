(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-index"],{"0bde":function(t,e,n){"use strict";var a=n("403b"),o=n.n(a);o.a},1344:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"body[data-v-13589640]{height:100%}.bottom[data-v-13589640]{margin:%?20?%}",""]),t.exports=e},1969:function(t,e,n){"use strict";n.r(e);var a=n("3e1d"),o=n("7620");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("0bde");var u,r=n("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"13589640",null,!1,a["a"],u);e["default"]=c.exports},"3e1d":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("zaudio",{attrs:{theme:t.themelist[t.key].val,autoplay:!0,continue:!0}}),t._l(t.themelist,(function(e,a){return n("v-uni-button",{key:a,staticClass:"bottom",attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTheme(a)}}},[t._v(t._s(e.name))])}))],2)},i=[]},"403b":function(t,e,n){var a=n("1344");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("6cb3d724",a,!0,{sourceMap:!1,shadowMode:!1})},7620:function(t,e,n){"use strict";n.r(e);var a=n("d0a3"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},d0a3:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("d9fe")),i={data:function(){return{key:2,themelist:[{name:"样式1",val:"theme1"},{name:"样式2",val:"theme2"},{name:"样式3",val:"theme3"}]}},components:{zaudio:o.default},onLoad:function(t){var e=t.key;this.$zaudio.setRender(e),this.$zaudio.on("playing","event-a",(function(t){console.log(t,"event-a")})),this.$zaudio.on("playing","event-b",(function(t){console.log(t,"event-b")}))},destroyed:function(){this.$zaudio.off("playing","event-a"),this.$zaudio.off("playing","event-b")},methods:{changeTheme:function(t){this.key=t}}};e.default=i}}]);