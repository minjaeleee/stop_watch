import { useState } from 'react';
import './App.css';
import { useTimer } from './hooks/useTimer';
import { Timer } from './components/Timer';

function App() {
  const { start, centisecond, isRunning } = useTimer()
  const [time, setTime] = useState("00:00.00")


  const onClickStart = () => {
    start()
  }

  return (
    <>
      <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
        <Timer />
        <div className="flex justify-between text-white pb-8 text-sm select-none">
          <button
            id="lap-reset-btn"
            className="bg-gray-600 rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md "
          >
            <p id="lap-reset-btn-label" className="text-base">
              리셋
            </p>
            <p className="text-xs">L</p>
          </button>
          <button
            className="bg-green-600 rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md"
            onClick={onClickStart}
          >
            <p id="start-stop-btn-label" className="text-base">
              시작
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
