(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-index"],{"0e9b":function(e,t,n){"use strict";n.r(t);var a=n("3bed"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"3bed":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("e106")),i={data:function(){return{key:2,themelist:[{name:"样式1",val:"theme1"},{name:"样式2",val:"theme2"},{name:"样式3",val:"theme3"}]}},components:{zaudio:o.default},onLoad:function(e){var t=e.key;this.$zaudio.setRender(t),this.$zaudio.on("playing","event-a",(function(e){console.log(e,"event-a")})),this.$zaudio.on("playing","event-b",(function(e){console.log(e,"event-b")}))},destroyed:function(){this.$zaudio.off("playing","event-a"),this.$zaudio.off("playing","event-b")},methods:{changeTheme:function(e){this.key=e}}};t.default=i},"626c":function(e,t,n){var a=n("6738");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("26c985f0",a,!0,{sourceMap:!1,shadowMode:!1})},6738:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"body[data-v-80d5b7fc]{height:100%}.bottom[data-v-80d5b7fc]{margin:%?20?%}",""]),e.exports=t},dcfb:function(e,t,n){"use strict";n.r(t);var a=n("e3fe"),o=n("0e9b");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("e424");var u,c=n("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"80d5b7fc",null,!1,a["a"],u);t["default"]=r.exports},e3fe:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("zaudio",{attrs:{theme:e.themelist[e.key].val,autoplay:!0,continue:!0}}),e._l(e.themelist,(function(t,a){return n("v-uni-button",{key:a,staticClass:"bottom",attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTheme(a)}}},[e._v(e._s(t.name))])}))],2)},i=[]},e424:function(e,t,n){"use strict";var a=n("626c"),o=n.n(a);o.a}}]);