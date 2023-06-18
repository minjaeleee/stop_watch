import './App.css';
import { useTimer } from './hooks/useTimer';
import { Timer } from './components/Timer';
import { Buttons } from './components/Buttons';
import { Laps } from './components/Laps';
import { useEffect } from 'react';

function App() {
  const { start, pause, centisecond, isRunning, createLap, laps, reset } = useTimer()

  const onClickStart = () => {
    start()
  }

  const onClickPause = () => {
    pause()
  }

  const onClickLap = () => {
    createLap()
  }

  const onClickReset = () => {
    reset()
  }

  useEffect(() => {
    const keyDown = (e) => {
      if (e.keyCode === 76) {
        //L 버튼 입력
        isRunning ? onClickLap() : onClickReset()
      }
      if (e.keyCode === 83) {
        //S 버튼 입력
        isRunning ? onClickPause() : onClickStart()
      }
    };
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  });

  return (
    <>
      <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
        <Timer centisecond={centisecond} />
        <Buttons {...{ isRunning, onClickLap, onClickReset, onClickStart, onClickPause }} />
        <Laps {...{ laps }} />
      </section>
    </>
  );
}

export default App;
