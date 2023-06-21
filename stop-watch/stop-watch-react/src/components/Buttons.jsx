import React, { memo } from 'react'

const Buttons = ({
    isRunning, 
    onClickLap, 
    onClickReset, 
    onClickStart, 
    onClickPause
  }) => {

  const resetAndLap = isRunning ? "랩" : "리셋"
  const startAndPause = isRunning ? "중단" : "시작"
  
  return (
      <div className="flex justify-between text-white pb-8 text-sm select-none">
          <button
            className="bg-gray-600 rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md "
            onClick={() => { isRunning ? onClickLap() : onClickReset() }}
          >
            <p className="text-base">
              {resetAndLap}
            </p>
            <p className="text-xs">L</p>
          </button>
          <button
            className={`${isRunning ? "bg-red-600" : "bg-green-600"} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md`}
            onClick={() => { isRunning ? onClickPause() : onClickStart() }}
          >
            <p id="start-stop-btn-label" className="text-base">
              {startAndPause}
            </p>
            <p className="text-xs">S</p>
          </button>
        </div>
  )
}

export default memo(Buttons);