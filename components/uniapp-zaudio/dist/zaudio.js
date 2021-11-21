"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zaudioCbName;
(function (zaudioCbName) {
    zaudioCbName["onError"] = "error";
    zaudioCbName["onTimeUpdate"] = "playing";
    zaudioCbName["onCanplay"] = "canPlay";
    zaudioCbName["onPause"] = "pause";
    zaudioCbName["onEnded"] = "ended";
    zaudioCbName["setAudio"] = "setAudio";
    zaudioCbName["updateAudio"] = "updateAudio";
    zaudioCbName["seek"] = "seek";
    zaudioCbName["onStop"] = "stop";
    zaudioCbName["syncStateOn"] = "syncStateOn";
})(zaudioCbName || (zaudioCbName = {}));
const util_1 = require("./util");
/**
 * ZAudio类
 * @class ZAudio
 * @constructor
 * @param    {String}    defaultCover    音频默认封面
 * @param    {Boolean}   continuePlay    继续播放,错误播放或结束播放后执行
 * @param    {Boolean}   autoPlay        自动播放,部分浏览器不支持
 * @property {Number}         renderIndex     当前渲染索引
 * @property {<audioinfo>}      renderinfo      当前渲染数据
 * @property {Array<audio>}   audiolist       音频列表数组
 * @property {<audioinfo>}      playinfo        当前播放数据
 * @property {Boolean}        paused          音频暂停状态
 * @property {Number}         playIndex       当前播放索引
 * @property {Boolean}        renderIsPlay    渲染与播放是否一致
 *
 * @method on(event, action, fn)       回调函数注册业务事件
 * @method off(event, action)          回调函数中卸载业务事件
 * @method setRender(data)             指定音频, 渲染到zaudio组件
 * @method syncRender()    						 同步并渲染当前的播放状态
 * @method operate(index)       			 播放或暂停指定索引的音频
 * @method setAudio(list)		   				 覆盖音频列表
 * @method updateAudio(list)   				 添加音频列表
 * @method stop()          						 强制暂停当前播放音频
 * @method stepPlay(count)      				快进快退
 * @method syncStateOn(action, cb)       	注册一个用于同步获取当前播放状态的事件
 * @method syncStateOff(action)     		卸载用于同步获取当前播放状态的事件
 *
 *
 * **/
class ZAudio extends util_1.EventBus {
    constructor(options) {
        super();
        this.renderIndex = 0;
        this.audiolist = [];
        this.renderinfo = {
            current: 0,
            duration: 0,
            duration_value: 0,
            current_value: 0,
            src: "",
            title: "",
            singer: "",
            coverImgUrl: "",
        };
        this.playinfo = {
            current: 0,
            duration: 0,
            duration_value: 0,
            current_value: 0,
            src: "",
            title: "",
            singer: "",
            coverImgUrl: "",
        };
        this.paused = true;
        this.uPause = false;
        this.autoPlay = false;
        this.defaultCover = "";
        this.continuePlay = true;
        let { defaultCover, autoPlay, continuePlay } = options;
        if (this.audioCtx)
            return;
        this.defaultCover = defaultCover;
        this.autoPlay = autoPlay;
        this.continuePlay = continuePlay;
        this.init();
    }
    init() {
        // #ifndef H5
        var audioCtx = uni.getBackgroundAudioManager();
        // #endif
        // #ifdef H5
        var audioCtx = uni.createInnerAudioContext();
        audioCtx.autoplay = this.autoPlay;
        // #endif
        this.audioCtx = audioCtx;
        this.audioCtx.onCanplay(this.onCanplayHandler.bind(this));
        this.audioCtx.onPlay(this.onPlayHandler.bind(this));
        this.audioCtx.onPause(this.onPauseHandler.bind(this));
        this.audioCtx.onStop(this.onStopHandler.bind(this));
        this.audioCtx.onEnded(this.onEndedHandler.bind(this));
        //fix: 节流触发播放中的回调函数,
        //由于播放回调时间间隔有误差,设置1000ms时,会跳过某一秒; 经测试900ms是最准确的保证每一秒都有回调,
        let throttlePlaying = util_1.throttle(this.onTimeUpdateHandler, 900).bind(this);
        this.audioCtx.onTimeUpdate(throttlePlaying);
        this.audioCtx.onError(this.onErrorHandler.bind(this));
        //fix: 修复iOS原生音频切换不起作用
        //  #ifdef APP-PLUS
        if (uni.getSystemInfoSync().platform == "ios") {
            const bgMusic = plus.audio.createPlayer();
            bgMusic.addEventListener("prev", () => {
                this.changeplay(-1);
            });
            bgMusic.addEventListener("next", () => {
                this.changeplay(1);
            });
        }
        // #endif
        // #ifndef H5
        setTimeout(() => {
            if (this.autoPlay) {
                this.operate();
            }
        }, 500);
        // #endif
        this.appCheckReplay();
    }
    /**
     * @description 回调中卸载业务事件
     * @param {<zaudioCbName>}   event     回调名称枚举值,具体看types.ts
     * @param {Sting}         action    业务函数名,用于区分不同业务
     * @returns undefined
     * **/
    off(event, action) {
        super.off(event, action);
    }
    /**
     * @description 回调中注册业务事件
     * @param {<zaudioCbName>}        event     回调名称枚举值,具体看types.ts
     * @param {Sting}              action    业务函数名,用于区分不同业务
     * @param {function(object|string|number|undefined):undefined}      fn      业务函数, 参数或为音频状态
     * @returns undefined
     * **/
    on(event, action, fn) {
        super.on(event, action, fn);
    }
    /**
     * @description 订阅触发音频回调
     * @param {<zaudioCbName>}        event      回调名称枚举值,具体看types.ts
     * @param {object|string|number|undefined}     data        订阅触发回调时,传的音频属性
     * @returns undefined
     * **/
    emit(event, data) {
        super.emit(event, data);
    }
    commit(action, data) {
        typeof this[action] === "function" && this[action](data);
    }
    onCanplayHandler() {
        this.emit(zaudioCbName.onCanplay, this.playinfo);
        this.syncStateEmit();
    }
    onPlayHandler() {
        // #ifdef APP-PLUS
        this.commit("setPlayinfo", {
            duration: util_1.formatSeconds(this.audioCtx.duration),
            duration_value: this.audioCtx.duration,
        });
        // #endif
        this.commit("setPause", false);
        this.commit("setUnnormalPause", false);
    }
    onPauseHandler() {
        this.commit("setPause", true);
        this.emit(zaudioCbName.onPause);
        this.syncStateEmit();
    }
    onStopHandler() {
        this.commit("setPause", true);
        this.emit(zaudioCbName.onStop);
        this.syncStateEmit();
    }
    onEndedHandler() {
        this.commit("setPause", true);
        this.audioCtx.startTime = 0;
        this.commit("setPlayinfo", {
            current: util_1.formatSeconds("0"),
            current_value: "0",
        });
        this.emit(zaudioCbName.onEnded);
        this.syncStateEmit();
        //续播
        if (this.continuePlay) {
            this.changeplay(1);
        }
    }
    onTimeUpdateHandler() {
        
        if (this.renderIsPlay) {
            //fix: 解决播放进度大于总进度问题
            let currentTime = this.audioCtx.currentTime > this.audioCtx.duration
                ? this.audioCtx.duration
                : this.audioCtx.currentTime;
            this.commit("setPlayinfo", {
                current: util_1.formatSeconds(currentTime),
                current_value: currentTime,
            });
            // #ifndef APP-PLUS
            //fix: 解决小程序与h5无法获取总进度的问题
            if (this.audioCtx.duration != this.playinfo.duration_value) {
                this.commit("setPlayinfo", {
                    duration: util_1.formatSeconds(this.audioCtx.duration),
                    duration_value: this.audioCtx.duration,
                });
            }
            // #endif
        }
        this.emit(zaudioCbName.onTimeUpdate, this.playinfo);
        this.syncStateEmit();
    }
    onErrorHandler() {
        this.commit("setPause", true);
        this.commit("setRender", {
            src: "",
            title: "",
            singer: "",
            coverImgUrl: "",
        });
        this.commit("setPlayinfo", {
            current: 0,
            current_value: 0,
            duration: 0,
            duration_value: 0,
            title: "",
            src: "",
        });
        this.emit(zaudioCbName.onError);
        this.syncStateEmit();
        if (this.continuePlay) {
            this.changeplay(1);
        }
    }
    //同步渲染当前状态 (用于不同页面zaudio组件同步播放状态)
    syncRender() {
        this.setRender(this.playIndex);
    }
    //注册一个同步获取属性的方法
    syncStateOn(action, fn) {
        typeof fn === "function" && this.on(zaudioCbName.syncStateOn, action, fn);
    }
    //卸载同步获取属性的方法
    syncStateOff(action) {
        this.off(zaudioCbName.syncStateOn, action);
    }
    //订阅同步获取属性事件
    syncStateEmit() {
        this.emit(zaudioCbName.syncStateOn, {
            renderIndex: this.renderIndex,
            audiolist: this.audiolist,
            renderinfo: this.renderinfo,
            playinfo: this.playinfo,
            paused: this.paused,
            playIndex: this.playIndex,
            renderIsPlay: this.renderIsPlay,
        });
    }
    //指定位置
    seek(value) {
        this.audioCtx.seek(value);
        this.commit("setPlayinfo", {
            current: util_1.formatSeconds(value),
            current_value: value,
        });
        // setTimeout(() => {
        //   this.emit(zaudioCbName.seek, this.playinfo.current);
        // }, 0);
        this.emit(zaudioCbName.seek, this.playinfo.current);
    }
    //快进,退
    stepPlay(value) {
        if (this.renderIsPlay) {
            let pos = this.playinfo.current_value + value;
            this.seek(pos);
        }
    }
    //切歌
    changeplay(count) {
        if (this.renderIsPlay) {
            let nowindex = this.renderIndex;
            nowindex += count;
            nowindex =
                nowindex < 0
                    ? this.audiolist.length - 1
                    : nowindex > this.audiolist.length - 1
                        ? 0
                        : nowindex;
            this.commit("setPause", true);
            this.operate(nowindex);
        }
        else {
            this.commit("setPause", true);
            this.operate(this.renderIndex);
        }
    }
    //手动播放或暂停, 并渲染对应的数据
    operate(key) {
        key !== undefined && this.commit("setRender", key);
        this.operation();
    }
    //强制暂停播放
    stop() {
        this.audioCtx.pause();
        this.commit("setPause", true);
        this.commit("setUnnormalPause", true);
        this.emit(zaudioCbName.onStop);
    }
    //播放,暂停事件判断,
    //播放数据与渲染数据相同时: 播放->暂停, 暂停->播放
    //播放数据与渲染数据不相同时: 播放渲染音频
    operation() {
        const { duration, current, duration_value, current_value, src, } = this.playinfo;
        const { src: renderSrc, title: renderTitle, singer: renderSinger, coverImgUrl: renderCoverImgUrl, } = this.renderinfo;
        let renderIsPlay = this.renderIsPlay;
        let paused = this.paused;
        if (!renderIsPlay) {
            //渲染与播放地址 不同
            this.audioCtx.src = renderSrc;
            this.audioCtx.title = renderTitle;
            this.audioCtx.singer = renderSinger;
            this.audioCtx.coverImgUrl = renderCoverImgUrl || this.defaultCover;
            this.audioCtx.startTime = 0;
            this.audioCtx.seek(0);
            this.audioCtx.play();
            this.commit("setPause", false);
            this.commit("setPlayinfo", {
                src: renderSrc,
                title: renderTitle,
                singer: renderSinger,
                coverImgUrl: renderCoverImgUrl,
            });
        }
        else {
            if (paused) {
                //渲染与播放地址相同
                this.audioCtx.play();
                this.audioCtx.startTime = current_value;
                this.audioCtx.seek(current_value);
                this.commit("setPause", false);
                this.commit("setPlayinfo", {
                    src: renderSrc,
                    title: renderTitle,
                    singer: renderSinger,
                    coverImgUrl: renderCoverImgUrl,
                });
            }
            else {
                this.audioCtx.pause();
                this.commit("setPause", true);
                this.commit("setUnnormalPause", true);
            }
        }
    }
    //覆盖音频
    setAudio(data) {
        this.audiolist = [...data];
        this.emit(zaudioCbName.setAudio, this.audiolist);
        this.syncStateEmit();
    }
    //添加音频
    updateAudio(data) {
        this.audiolist.push(...data);
        this.emit(zaudioCbName.updateAudio, this.audiolist);
        this.syncStateEmit();
    }
    //设置当前播放信息
    setPlayinfo(data) {
        if (data.current) {
            this.playinfo.current = data.current;
        }
        if (data.duration) {
            this.playinfo.duration = data.duration;
        }
        if (data.duration_value) {
            this.playinfo.duration_value = data.duration_value;
        }
        if (data.current_value) {
            this.playinfo.current_value = data.current_value;
        }
        if (data.src) {
            this.playinfo.src = data.src;
        }
        if (data.title) {
            this.playinfo.title = data.title;
        }
        if (data.singer) {
            this.playinfo.singer = data.singer;
        }
        if (data.coverImgUrl) {
            this.playinfo.coverImgUrl = data.coverImgUrl;
        }
    }
    //设置暂停状态
    setPause(data) {
        this.paused = data;
    }
    //设置通话时暂停状态
    setUnnormalPause(data) {
        this.uPause = data;
    }
    //设置渲染 @param 索引或渲染信息
    setRender(data) {
        if (this.audiolist.length == 0)
            return;
        if (typeof data === "number" || typeof data === "string") {
            this.renderIndex = typeof data === "string" ? parseInt(data) : data;
            this.renderinfo = {
                src: this.audiolist[this.renderIndex].src,
                title: this.audiolist[this.renderIndex].title,
                singer: this.audiolist[this.renderIndex].singer,
                coverImgUrl: this.audiolist[this.renderIndex].coverImgUrl,
                current: "00:00",
                duration: "00:00",
                current_value: 0,
                duration_value: 100,
            };
        }
        else {
            this.renderinfo = data;
            let renderIndex = this.audiolist.findIndex((i) => i.src == data.src);
            if (renderIndex >= 0) {
                this.renderIndex = renderIndex;
            }
        }
    }
    //当前索引
    get playIndex() {
        let index = this.audiolist.findIndex((i) => i.src == this.playinfo.src);
        return index <= 0 ? 0 : index;
    }
    //渲染与播放是否一致
    get renderIsPlay() {
        return this.renderinfo.src == this.playinfo.src;
    }
    //app端判断电话来电后, 音频意外中断之后的继续播放
    appCheckReplay() {
        let _t = this;
        // #ifdef APP-PLUS
        try {
            if (uni.getSystemInfoSync().platform == "android") {
                var main = plus.android.runtimeMainActivity();
                var Context = plus.android.importClass("android.content.Context");
                var telephonyManager = plus.android.importClass("android.telephony.TelephonyManager");
                var telephonyManager = plus.android
                    .runtimeMainActivity()
                    .getSystemService(Context.TELEPHONY_SERVICE);
                var receiver = plus.android.implements("io.dcloud.android.content.BroadcastReceiver", {
                    onReceive: function (intent) {
                        //实现onReceiver回调函数
                        plus.android.importClass(intent);
                        var telephonyManager = plus.android.importClass("android.telephony.TelephonyManager");
                        var telephonyManager = plus.android
                            .runtimeMainActivity()
                            .getSystemService(Context.TELEPHONY_SERVICE);
                        var phonetype = telephonyManager.getCallState();
                        var phoneNumber = intent.getStringExtra(telephonyManager.EXTRA_INCOMING_NUMBER);
                        if (phonetype == 0 && !_t.uPause) {
                            _t.audioCtx.play();
                        }
                    },
                });
                var IntentFilter = plus.android.importClass("android.content.IntentFilter");
                var filter = new IntentFilter();
                filter.addAction(telephonyManager.ACTION_PHONE_STATE_CHANGED); //监听开关
                main.registerReceiver(receiver, filter); //注册监听
            }
            else if (uni.getSystemInfoSync().platform == "ios") {
                var callstatus = false;
                var CTCall = plus.ios.importClass("CTCall");
                var CTCallCenter = plus.ios.importClass("CTCallCenter");
                var center = new CTCallCenter();
                center.init();
                center.setCallEventr(function (ctCall) {
                    callstatus = !callstatus;
                    if (!callstatus && !_t.uPause) {
                        _t.audioCtx.play();
                    }
                    else {
                        _t.audioCtx.pause();
                    }
                });
            }
        }
        catch (err) {
            console.warn(err);
        }
        // #endif
    }
}
exports.default = ZAudio;
ZAudio.version = "2.2.0";
