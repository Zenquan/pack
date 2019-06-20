import {$, createElem} from './utils'
import {controls, controlsStyle} from './controls'

// 播放器基础类
class Player {
  constructor(options) {
    this._initVideo(options)
    this._initSource(options)
    this.size = [options.width, options.height]
    if (!this.v.controls) {
      this._initControls(options)
    }
  }
  _initSource(options) {
    const s = createElem('source')
    s.src = options.source
    this.v.appendChild(s)
    document.body.appendChild(this.v)
  }
  _initVideo(options) {
    const video = $(options.id) || createElem('video')
    this.v = video
    this.v.width = options.width
    this.v.height = options.height
    this.v.controls = !!options.controls 
    this.v.autoplay = true
  }
  _initControls() {
    const oStyle = createElem('style')
    oStyle.innerHTML = controlsStyle
    const oDiv = createElem('div')
    oDiv.id = 'controls'
    oDiv.innerHTML = controls
    document.head.appendChild(oStyle)
    document.body.appendChild(oDiv)
    console.log(this.v.duration)
    this._controlProgress()
  }
  // 控制进度条
  _controlProgress() {
    let currentTime = this.getCurrentTime()
    let duration = this.getDuration()
    let percentage = (currentTime / duration) * 100
    console.log(percentage, duration, currentTime)
    $('#progress-iner').style.width = `${percentage}%`
  }
  // 播放
  play() {
    this.v.play()
  }
  // 暂停
  pause() {
    this.v.pause()
    let currentTime = this.getCurrentTime()
    localStorage.setItem('currentTime', currentTime)
  }
  // 全局
  recordPlay() {
    this.v.currentTime = Number(localStorage.getItem('currentTime'))
    this.play()
  }
  // 获取当前播放时间
  getCurrentTime() {
    return this.v.currentTime
  }
  // 获取视频总时间
  getDuration () {
    return this.v.duration
  }
  // 重新开始
  restart() {
    this.v.load()
  }
  // 检查是否是支持播放的类型
  // canPlayType('video/ogg','theora, vorbis')
  canPlayType(vidType, codType) {
    const cpt = this.v.canPlayType(vidType+';codecs="'+codType+'"')
    if(cpt === 'probably') alert('can play')
    return cpt
  }
  //进入全屏
  fullScreen() {
    var ele = document.documentElement;
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.webkitRequestFullScreen) {
        ele.webkitRequestFullScreen();
    }
    this.v.style.width = '100%'
    this.v.style.height = '100%'
  }
  //退出全屏
  exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
    this.v.style = {
      width: this.size[0],
      height: this.size[1]
    }
  }
}

export default Player