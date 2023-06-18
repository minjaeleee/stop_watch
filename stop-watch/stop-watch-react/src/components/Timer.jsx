import React from 'react'

export const Timer = ({centisecond}) => {
  const timeFormatting = (centisecond) => {
    // centisecond = 1/100 sec
    const formatString = num => num < 10 ? `0${num}` : num

    const min = parseInt(centisecond / 6000)
    const sec = parseInt((centisecond - (6000 * min)) / 100)
    const centisec = centisecond % 100
    return `${formatString(min)}:${formatString(sec)}.${formatString(centisec)}`
  }

  return (
    <h1 className="text-5xl font-extrabold pb-8 text-center tracking-tighter break-words">
    {timeFormatting(centisecond)}
  </h1>
  )
}
