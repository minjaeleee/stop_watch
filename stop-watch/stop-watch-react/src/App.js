import './App.css';
import { useTimer } from './hooks/useTimer';
import { Timer } from './components/Timer';

function App() {
  const { start, pause, centisecond, isRunning } = useTimer()

  const onClickStart = () => {
    start()
  }

  const onClickPause = () => {
    pause()
  }

  const resetAndLap = isRunning ? "랩" : "리셋"
  const startAndPause = isRunning ? "중단" : "시작"

  return (
    <>
      <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
        <Timer centisecond={centisecond} />
        <div className="flex justify-between text-white pb-8 text-sm select-none">
          <button className="bg-gray-600 rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md ">
            <p id="lap-reset-btn-label" className="text-base">
              {resetAndLap}
            </p>
            <p className="text-xs">L</p>
          </button>
          <button
            className={`${isRunning ? "bg-red-600" : "bg-green-600"} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md`}
            onClick={() => { isRunning ? onClickPause() : onClickStart() }}
          >
            <p id="start-stop-btn-label" className="text-base">
              {startAndPause}
            </p>
            <p className="text-xs">S</p>
          </button>
        </div>
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
          <ul id="laps">
            {/* 추가되는 lap은 아래의 HTML 코드 형식을 사용해 추가해주세요.  */}
            {/* <li className="flex justify-between py-2 px-3 border-b-2">
                            <span>랩 5</span>
                            <span>00:00.28</span>
                        </li> */}
          </ul>
        </article>
      </section>
    </>
  );
}

export default App;
