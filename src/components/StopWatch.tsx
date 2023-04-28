import React from 'react'
import { useGame, ONE_SECOND_IN_MS } from '../context/game-context'
import { Timer } from './Timer'

export const StopWatch = () => {
  const { state, dispatch } = useGame()
  const { time } = state

  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'incrementTime' })
    }, ONE_SECOND_IN_MS)

    return () => {
      clearInterval(interval)
    }
  }, [dispatch])

  return (
    <div
      className="bg-blue-900 h-16 w-24 rounded-md sm:w-40
          shadow-lg absolute left-1/2 transform -translate-x-1/2 
          -translate-y-1/2 mt-4 flex justify-center items-center 
        "
    >
      <span className="text-2xl text-white font-bold">
        <Timer time={time} />
      </span>
    </div>
  )
}
