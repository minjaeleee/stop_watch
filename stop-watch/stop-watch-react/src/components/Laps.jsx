import React, { useEffect, useState } from 'react'
import { timeFormatting } from '../utils/timeFormatting'

export const Laps = ({laps}) => {
  const [lapTime, setLapTime] = useState(laps)

  useEffect(()=>{
    setLapTime(prev => laps)
  },[laps])
  
  return (
    <article className="text-gray-600 h-64 overflow-auto border-t-2">
    <ul>
      {
        lapTime.map((lap,idx) => 
          <li 
            key={ `${lap[0]} + ${idx} + ${lap[1]}` }
            className="flex justify-between py-2 px-3 border-b-2"
          >
             <span>{`랩 ${lap[0]}`}</span> 
             <span>{timeFormatting(lap[1])}</span> 
          </li>  
        )
      }
    </ul>
  </article>
  )
}
