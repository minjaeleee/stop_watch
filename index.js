import Stopwatch from "./stopwatch.js"

const stopWatch = new Stopwatch()

const $timer = document.getElementById("timer")
const $startStopBtn = document.getElementById("start-stop-btn")
const $startStopBtnLabel = document.getElementById("start-stop-btn-label")
const $resetAndLapBtn = document.getElementById("lap-reset-btn")
const $resetAndLapBtnLabel = document.getElementById("lap-reset-btn-label")
const $laps = document.getElementById("laps")

let isTimeRunning = false


const timeFormatting = (centisecond) => {
  // centisecond = 1/100 sec
  const formatString = num => num < 10 ? `0${num}` : num

  const min = parseInt(centisecond / 6000)
  const sec = parseInt((centisecond - (6000 * min)) / 100)
  const centisec = centisecond % 100
  return `${formatString(min)}:${formatString(sec)}.${formatString(centisec)}`
}

const updateTime = time => {
  $timer.innerText = timeFormatting(time)
}

const onClickStartBtn = () => {
  isTimeRunning = true
  stopWatch.start()
  setInterval(() => updateTime(stopWatch.centisecond), 10)

  $startStopBtnLabel.innerText = "중단"
  $startStopBtn.classList.toggle("bg-green-600")
  $startStopBtn.classList.toggle("bg-red-600")
  $resetAndLapBtnLabel.innerText = "랩"
  return;
}

const onClickStopBtn = () => {
  isTimeRunning = false
  stopWatch.pause()
  updateTime(stopWatch.centisecond)

  $startStopBtnLabel.innerText = "시작"
  $startStopBtn.classList.toggle("bg-red-600")
  $startStopBtn.classList.toggle("bg-green-600")
  $resetAndLapBtnLabel.innerText = "리셋"
  return;
}

const onClickStartStopBtn = () => {
  return isTimeRunning ? onClickStopBtn() : onClickStartBtn()
}

let $minLap, $maxLap
const onClickLapBtn = () => {
  const [lapCount, lapTime] = stopWatch.createLap()
  const $lap = document.createElement("li")
  $lap.setAttribute('data-time', lapTime)
  $lap.classList.add("flex", "justify-between", "py-2", "px-3", "border-b-2")
  $lap.innerHTML = `
      <span> 랩 ${lapCount} </span>
      <span> ${timeFormatting(lapTime)} </span>
    `
  $laps.prepend($lap)

  const selectMinMaxLapLabel = (type, color) => {
    if (type === "min") {
      $minLap = $lap
      $minLap.style.color = color
    }
    if (type === "max") {
      $maxLap = $lap
      $maxLap.style.color = color
    }
  }

  // 초기 값 최소 랩타임
  if (!$minLap) {
    selectMinMaxLapLabel("min", "red")
  }
  // 2개 랩타임 최소/최대 적용
  if (!$maxLap && $minLap) {
    if ($minLap.dataset.time < lapTime) {
      selectMinMaxLapLabel("max", "green")
    }
  }
  // 다수 랩타임 최소/최대 비교
  if ($minLap && $maxLap) {
    if ($minLap.dataset.time > lapTime) {
      $minLap.style.color = 'black'
      selectMinMaxLapLabel("min", "red")
    }
    if ($maxLap.dataset.time < lapTime) {
      $maxLap.style.color = 'black'
      selectMinMaxLapLabel("max", "green")
    }
  }
}

const onClickResetBtn = () => {
  stopWatch.reset()
  const centisec = stopWatch.centisecond
  updateTime(centisec)

  $laps.innerHTML = ''
  $minLap = undefined;
  $maxLap = undefined;
}

const onClickResetAndLapBtn = () => {
  return isTimeRunning ? onClickLapBtn() : onClickResetBtn()
}

const onKeydown = (e) => {
  if (e.keyCode === 76) {
    onClickResetAndLapBtn()
  }
  if (e.keyCode === 83) {
    onClickStartStopBtn()
  }
}

$startStopBtn.addEventListener("click", onClickStartStopBtn)
$resetAndLapBtn.addEventListener("click", onClickResetAndLapBtn)
document.addEventListener("keydown", (e) => onKeydown(e))