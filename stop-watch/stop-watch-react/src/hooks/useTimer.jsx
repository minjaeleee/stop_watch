import { useState, useRef, useCallback } from 'react';

export const useTimer = () => {
  const [centisecond, setCentisecond] = useState(0)
  const [lapCount, setLapCount] = useState(1);
  const [timeInterval, setTimeInterval] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([]);

  let prevLap = useRef(0);

  const start = useCallback(() => {
    let _interval = setInterval(()=> {
      setCentisecond((prev) => prev+1)
    }, 1000)
    setTimeInterval(_interval)
    setIsRunning(true)
  },[])

  const pause = useCallback(() => {
    clearInterval(timeInterval)
    setIsRunning(false)
  },[timeInterval])

  const createLap = useCallback(() => {
    setLapCount(prev => prev+1)
    const lapTime = centisecond - prevLap.current
    setLaps(prev => [[lapCount, lapTime], ...prev])
    prevLap.current = centisecond
  },[centisecond, lapCount])

  const reset = useCallback(() => {
    setLapCount(0)
    setLaps([])
    setCentisecond(0)
    setIsRunning(false)
    prevLap.current = 0
  },[])
  
  return { centisecond, start, pause, createLap, reset, laps, isRunning}
}