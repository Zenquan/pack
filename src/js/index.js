// http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp

import Player from './player'
import {$} from './utils'

let p = new Player({
  id: '#myvideo',
  width: 600,
  height: 400,
  source: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
  // controls: true,
  autoplay: true
})

$('#playBtn').addEventListener('click', () => p.play())
$('#pauseBtn').addEventListener('click', () => p.pause())
$('#fullScreenBtn').addEventListener('click', () => p.fullScreen())
$('#normalScreenBtn').addEventListener('click', () => p.exitFullscreen())
$('#restartBtn').addEventListener('click', () => p.restart()) 
$('#recordPlayBtn').addEventListener('click', () => p.recordPlay()) 

// console.log('canPlayType==>' + p.canPlayType('video/ogg','theora, vorbis'))
