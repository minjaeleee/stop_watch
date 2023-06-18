import './App.css';
import { useTimer } from './hooks/useTimer';
import { Timer } from './components/Timer';
import { Buttons } from './components/Buttons';
import { Laps } from './components/Laps';

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
