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
    setIsRunning(true)
  }

  const pause = () => {
    clearInterval(timeInterval)
    setIsRunning(false)
  }

  const createLap = () => {
    setLapCount(prev => prev+1)
    const lapTime = centisecond - prevLap.current
    setLaps(prev => [[lapCount, lapTime], ...prev])
    prevLap.current = centisecond
  }

  const reset = () => {
    setLapCount(0)
    setLaps([])
    setCentisecond(0)
    setIsRunning(false)
    prevLap.current = 0
  }
  
  return { centisecond, start, pause, createLap, reset, laps, isRunning}
}