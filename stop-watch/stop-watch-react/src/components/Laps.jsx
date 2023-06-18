import React, { useEffect, useState } from 'react'
import { timeFormatting } from '../utils/timeFormatting'

export const Laps = ({laps}) => {
  const [lapTime, setLapTime] = useState(laps)
  
  useEffect(()=>{
    setLapTime(prev => laps)
  },[laps])
  
  const lapTimes = lapTime.length > 0 ? lapTime.map(el => el[1]) : [0]
  const minRecord = Math.min(...lapTimes)
  const maxRecord = Math.max(...lapTimes)
  
  const validateLapTimeColor = (record) => {
    if(lapTime.length === 0) {
      return "text-red-600"
    }
    if(record === maxRecord) {
      return "text-red-600"
    }
    if(record === minRecord) {
      return "text-green-600"
    }
    return ""
  }

  return (
    <article className="text-gray-600 h-64 overflow-auto border-t-2">
    <ul>
      {
        lapTime.map((lap,idx) => 
          <li 
            key={ `${lap[0]} + ${idx} + ${lap[1]}` }
            className={`flex justify-between py-2 px-3 border-b-2 ${validateLapTimeColor(lap[1])}`}
          >
             <span>{`랩 ${lap[0]}`}</span> 
             <span >{timeFormatting(lap[1])}</span> 
          </li>  
        )
      }
    </ul>
  </article>
  )
}
