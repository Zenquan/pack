export const controls = `<button id="playBtn">播放</button>
<button id="pauseBtn">暂停</button>
<div id="progress-outer">
  <div id="progress-iner"></div>
</div>
<button id="fullScreenBtn">全屏</button>
<button id="normalScreenBtn">恢复</button>
<button id="restartBtn">重新开始</button>
<button id="recordPlayBtn">记录播放</button>`

export const controlsStyle = `
  #controls {
    display: flex;
  }
  #playBtn, #pauseBtn, #fullScreenBtn, #normalScreenBtn, #restartBtn, #recordPlayBtn {
    width: 50px;
    height: 50px;
    background: #ccc;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  #progress-outer {
    width: 500px;
    height: 20px;
    background: blue;
  }
  #progress-iner {
    width: 30%;
    height: 20px;
    background: deeppink;
    z-index: 999;
  }
`
