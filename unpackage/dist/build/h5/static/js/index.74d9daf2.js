(function(e){function t(t){for(var i,r,s=t[0],u=t[1],c=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={index:0},o=[];function r(e){return s.p+"static/js/"+({"pages-detail-index~pages-index-index":"pages-detail-index~pages-index-index","pages-detail-index":"pages-detail-index","pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-detail-index~pages-index-index":"cfbdde08","pages-detail-index":"795e495b","pages-index-index":"83b6e55e"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=a[e]=[t,i]}));t.push(n[2]=i);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,n[1](c)}a[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="./",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("512f")},"0211":function(e,t,n){"use strict";var i=n("0732"),a=n.n(i);a.a},"0704":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("3c3b")),o=a.default;t.default=o},"0732":function(e,t,n){var i=n("1c81");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("3f0a333c",i,!0,{sourceMap:!1,shadowMode:!1})},"1c81":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"body,.uni-page-head{max-width:414px;margin:0 auto}",""]),e.exports=t},2037:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={onLaunch:function(){},onShow:function(){},onHide:function(){}};t.default=i},3481:function(e,t,n){"use strict";(function(e){var t=n("4ea4"),i=t(n("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uniapp-zaudio",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="3.0.5",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={maps:{}},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=n.e,i.default.component("pages-index-index",(function(e){var t={component:Promise.all([n.e("pages-detail-index~pages-index-index"),n.e("pages-index-index")]).then(function(){return e(n("9681"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),i.default.component("pages-detail-index",(function(e){var t={component:Promise.all([n.e("pages-detail-index~pages-index-index"),n.e("pages-detail-index")]).then(function(){return e(n("9e52"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/detail/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"uniapp-zaudio"})},[e("pages-detail-index",{slot:"page"})])}},meta:{name:"pages-detail-index",isNVue:!1,maxWidth:0,pagePath:"pages/detail/index",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,n("c8ba"))},"3c3b":function(e,t,n){"use strict";n("c740"),n("d3b7"),n("e25e");var i=n("448a");n("96cf");var a,o=n("970b"),r=n("5bc3"),s=n("8962"),u=n("36c6"),c=n("ed6d"),d=n("2d0d"),l=this&&this.__awaiter||function(e,t,n,i){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function r(e){try{u(i.next(e))}catch(t){o(t)}}function s(e){try{u(i["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):a(e.value).then(r,s)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e["onWaiting"]="waiting",e["onError"]="error",e["onTimeUpdate"]="playing",e["onCanplay"]="canPlay",e["onPause"]="pause",e["onEnded"]="ended",e["setAudio"]="setAudio",e["updateAudio"]="updateAudio",e["seek"]="seek",e["onStop"]="stop",e["syncStateOn"]="syncStateOn"}(a||(a={}));var f=n("f52e"),h=function(e){c(n,e);var t=d(n);function n(e){var i;o(this,n),i=t.call(this),i.loading=!1,i.renderIndex=0,i.audiolist=[],i.renderinfo={current:"00:00",duration:"00:00",duration_value:0,current_value:0,src:"",title:"",singer:"",coverImgUrl:""},i.playinfo={current:"00:00",duration:"00:00",duration_value:0,current_value:0,src:"",title:"",singer:"",coverImgUrl:""},i.paused=!0,i.uPause=!1,i.autoPlay=!1,i.defaultCover="",i.continuePlay=!0,i.throttlePlaying=f.throttle((function(){i.emit(a.onTimeUpdate,i.playinfo),i.syncStateEmit()}),1e3);var r=e.defaultCover,s=e.autoPlay,u=e.continuePlay;return i.defaultCover=r,i.autoPlay=s,i.continuePlay=u,i.init(),i}return r(n,[{key:"init",value:function(){var e=uni.createInnerAudioContext();e.autoplay=this.autoPlay,this.audioCtx=e,this.audioCtx.onWaiting(this.onWaitingHandler.bind(this)),this.audioCtx.onCanplay(this.onCanplayHandler.bind(this)),this.audioCtx.onPlay(this.onPlayHandler.bind(this)),this.audioCtx.onPause(this.onPauseHandler.bind(this)),this.audioCtx.onStop(this.onStopHandler.bind(this)),this.audioCtx.onEnded(this.onEndedHandler.bind(this)),this.audioCtx.onTimeUpdate(this.onTimeUpdateHandler.bind(this)),this.audioCtx.onError(this.onErrorHandler.bind(this)),this.appCheckReplay()}},{key:"off",value:function(e,t){s(u(n.prototype),"off",this).call(this,e,t)}},{key:"on",value:function(e,t,i){s(u(n.prototype),"on",this).call(this,e,t,i)}},{key:"emit",value:function(e,t){s(u(n.prototype),"emit",this).call(this,e,t)}},{key:"commit",value:function(e,t){"function"===typeof this[e]&&this[e](t)}},{key:"onWaitingHandler",value:function(){this.commit("setLoading",!0),this.emit(a.onWaiting,!0),this.syncStateEmit()}},{key:"onCanplayHandler",value:function(){this.emit(a.onCanplay,Object.assign(Object.assign({},this.playinfo),{waiting:!1})),this.syncStateEmit(),this.commit("setLoading",!1)}},{key:"onPlayHandler",value:function(){this.commit("setPause",!1),this.commit("setUnnormalPause",!1)}},{key:"onPauseHandler",value:function(){this.commit("setPause",!0),this.emit(a.onPause),this.syncStateEmit()}},{key:"onStopHandler",value:function(){this.commit("setPause",!0),this.emit(a.onStop),this.syncStateEmit()}},{key:"onEndedHandler",value:function(){this.commit("setPause",!0),this.audioCtx.startTime=0,this.commit("setPlayinfo",{current:"00:00",current_value:0}),this.emit(a.onEnded),this.syncStateEmit(),this.continuePlay&&this.changeplay(1)}},{key:"onTimeUpdateHandler",value:function(){if(this.renderIsPlay){var e=this.audioCtx.currentTime>this.audioCtx.duration?this.audioCtx.duration:this.audioCtx.currentTime;this.commit("setPlayinfo",{current:f.formatSeconds(e),current_value:e}),this.audioCtx.duration!=this.playinfo.duration_value&&this.commit("setPlayinfo",{duration:f.formatSeconds(this.audioCtx.duration),duration_value:this.audioCtx.duration})}this.throttlePlaying()}},{key:"onErrorHandler",value:function(){this.commit("setPause",!0),this.commit("setRender",{src:"",title:"",singer:"",coverImgUrl:""}),this.commit("setPlayinfo",{current:"00:00",current_value:0,duration:"00:00",duration_value:0,title:"",src:""}),this.emit(a.onError),this.syncStateEmit(),this.continuePlay&&this.changeplay(1)}},{key:"syncRender",value:function(){this.setRender(this.playIndex)}},{key:"syncStateOn",value:function(e,t){"function"===typeof t&&this.on(a.syncStateOn,e,t)}},{key:"syncStateOff",value:function(e){this.off(a.syncStateOn,e)}},{key:"syncStateEmit",value:function(){this.emit(a.syncStateOn,{renderIndex:this.renderIndex,audiolist:this.audiolist,renderinfo:this.renderinfo,playinfo:this.playinfo,paused:this.paused,playIndex:this.playIndex,renderIsPlay:this.renderIsPlay,loading:this.loading})}},{key:"seek",value:function(e){var t=e>this.audioCtx.duration?this.audioCtx.duration:e;this.audioCtx.seek(t),this.commit("setPlayinfo",{current:f.formatSeconds(t),current_value:t}),this.emit(a.seek,this.playinfo.current)}},{key:"stepPlay",value:function(e){if(this.renderIsPlay){var t=this.playinfo.current_value+e;this.seek(t)}}},{key:"changeplay",value:function(e){if(1==this.audiolist.length&&this.commit("setPlayinfo",{current:"00:00",current_value:0,duration:"00:00",duration_value:0,title:"",src:""}),this.renderIsPlay){var t=this.renderIndex;t+=e,t=t<0?this.audiolist.length-1:t>this.audiolist.length-1?0:t,this.commit("setPause",!0),this.operate(t)}else this.commit("setPause",!0),this.operate(this.renderIndex)}},{key:"operate",value:function(e){void 0!==e&&this.commit("setRender",e),this.operation()}},{key:"stop",value:function(){this.audioCtx.pause(),this.commit("setPause",!0),this.commit("setUnnormalPause",!0),this.emit(a.onStop)}},{key:"operation",value:function(){return l(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i,a,o,r,s,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.playinfo,t.duration,t.current,t.duration_value,n=t.current_value,t.src,i=this.renderinfo,a=i.src,o=i.title,r=i.singer,s=i.coverImgUrl,u=this.renderIsPlay,c=this.paused,u?c?(this.audioCtx.play(),this.audioCtx.startTime=n,this.commit("setPause",!1),this.commit("setPlayinfo",{src:a,title:o,singer:r,coverImgUrl:s})):(this.audioCtx.pause(),this.commit("setPause",!0),this.commit("setUnnormalPause",!0)):(this.audioCtx.src=a,this.audioCtx.title=o,this.audioCtx.singer=r,this.audioCtx.coverImgUrl=s||this.defaultCover,this.audioCtx.startTime=0,this.audioCtx.seek(0),this.audioCtx.play(),this.commit("setPause",!1),this.commit("setPlayinfo",{src:a,title:o,singer:r,coverImgUrl:s}));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"setAudio",value:function(e){this.audiolist=i(e),this.emit(a.setAudio,this.audiolist),this.syncStateEmit()}},{key:"updateAudio",value:function(e){var t;(t=this.audiolist).push.apply(t,i(e)),this.emit(a.updateAudio,this.audiolist),this.syncStateEmit()}},{key:"setPlayinfo",value:function(e){for(var t in e)this.playinfo[t]=e[t]}},{key:"setPause",value:function(e){this.paused=e}},{key:"setLoading",value:function(e){this.loading=e}},{key:"setUnnormalPause",value:function(e){this.uPause=e}},{key:"setRender",value:function(e){if(0!=this.audiolist.length)if("number"===typeof e||"string"===typeof e)this.renderIndex="string"===typeof e?parseInt(e):e,this.renderinfo={src:this.audiolist[this.renderIndex].src,title:this.audiolist[this.renderIndex].title,singer:this.audiolist[this.renderIndex].singer,coverImgUrl:this.audiolist[this.renderIndex].coverImgUrl,current:"00:00",duration:"00:00",current_value:0,duration_value:100};else{this.renderinfo=e;var t=this.audiolist.findIndex((function(t){return t.src==e.src}));t>=0&&(this.renderIndex=t)}}},{key:"appCheckReplay",value:function(){}},{key:"playIndex",get:function(){var e=this,t=this.audiolist.findIndex((function(t){return t.src==e.playinfo.src}));return t<=0?0:t}},{key:"renderIsPlay",get:function(){return this.renderinfo.src==this.playinfo.src}}]),n}(f.EventBus);t.default=h,h.version="2.2.3"},"512f":function(e,t,n){"use strict";var i=n("4ea4"),a=i(n("5530"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("3481"),n("1c31");var o=i(n("e143")),r=i(n("aaa3")),s=i(n("0704"));o.default.config.productionTip=!1,r.default.mpType="app";var u=new s.default({continuePlay:!0,autoPlay:!1});o.default.prototype.$zaudio=u;var c=[{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3",title:"恭喜发财",singer:"刘德华",coverImgUrl:"https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg"},{src:"https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3",title:"好运来",singer:"作者1111",coverImgUrl:"https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg"}];u.setAudio(c);var d=new o.default((0,a.default)({},r.default));d.$mount()},aaa3:function(e,t,n){"use strict";n.r(t);var i=n("b91d"),a=n("c36c");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("0211");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=u.exports},b91d:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[]},c36c:function(e,t,n){"use strict";n.r(t);var i=n("2037"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},f52e:function(e,t,n){"use strict";n("99af"),n("4de4"),n("c740"),n("4160"),n("4ec9"),n("d3b7"),n("acd8"),n("3ca3"),n("159b"),n("ddb0");var i=n("448a"),a=n("970b"),o=n("5bc3");function r(e){var t="string"===typeof e?parseFloat(e):e;if(isNaN(t))return"";var n=Math.floor(t/3600)<10?"0"+Math.floor(t/3600):Math.floor(t/3600),i=Math.floor(t/60%60)<10?"0"+Math.floor(t/60%60):Math.floor(t/60%60)+60*n,a=Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60);return"".concat(i,":").concat(a)}function s(e,t){var n=0;return function(){var i=this,a=Date.now();if(a-n>t){for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];e.apply(i,r),n=a}}}Object.defineProperty(t,"__esModule",{value:!0}),t.EventBus=t.throttle=t.formatSeconds=void 0,t.formatSeconds=r,t.throttle=s;var u=function(){function e(){a(this,e),this._events=new Map}return o(e,[{key:"on",value:function(e,t,n){if(void 0!==e&&void 0!==t){var a=this._events.get(e),o=a?a.findIndex((function(e){return e.action==t})):-1;if(o>-1)return;this._events.set(e,[].concat(i(this._events.get(e)||[]),[{action:t,fn:n}]))}}},{key:"has",value:function(e){return this._events.has(e)}},{key:"emit",value:function(e,t){if(this.has(e)){var n=this._events.get(e);n.forEach((function(e){e.fn(t)}))}}},{key:"off",value:function(e,t){if(this.has(e)){var n=this._events.get(e),a=n.filter((function(e){return e.action!==t}));this._events.set(e,i(a))}}}]),e}();t.EventBus=u}});