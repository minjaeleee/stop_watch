import { useState, useRef } from 'react';

export const useTimer = () => {
  const [centisecond, setCentisecond] = useState(0)
  const [lapCount, setLapCount] = useState(1);
  const [timeInterval, setTimeInterval] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([]);

  let prevLap = useRef(0);

  const start = () => {
    let _interval = setInterval(()=> {
      setCentisecond((prev) => prev+1)
    }, 10)
    setTimeInterval(_interval)
    setIsRunning(prev => !prev)
  }

  return { centisecond, start, isRunning}
}