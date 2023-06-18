import React from 'react'
import { timeFormatting } from '../utils/timeFormatting'

export const Timer = ({centisecond}) => {
  return (
    <h1 className="text-5xl font-extrabold pb-8 text-center tracking-tighter break-words">
    {timeFormatting(centisecond)}
  </h1>
  )
}
