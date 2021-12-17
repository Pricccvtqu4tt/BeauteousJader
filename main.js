import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

App.mpType = 'app'

import ZAudio from '@/components/uniapp-zaudio'
// import ZAudio from 'uniapp-zaudio' // npm引用方式

console.log(`ZAudio当前版本`,ZAudio.version)
let zaudio = new ZAudio({
	continuePlay: true, //续播
	autoPlay: false, //自动播放 部分浏览器不支持
})
 
Vue.prototype.$zaudio = zaudio


//模拟初始数据
var data = [{
		src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3',
		title: '恭喜发财',
		singer: '刘德华',
		coverImgUrl: 'https://img.1ting.com/images/special/75/s150_f84ef5082b0420f74cd2546b986ab0fc.jpg'
	},
	{
		src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',
		title: '好运来',
		singer: '作者1111',
		coverImgUrl: 'https://img.1ting.com/images/special/204/s150_77254cd4a4da1a33b8faf89c4cbf6e40.jpg',
	}
];


// 设置音频数据
zaudio.setAudio(data)

//渲染第一首音频
zaudio.setRender(0)

const app = new Vue({
	...App
})
app.$mount()
