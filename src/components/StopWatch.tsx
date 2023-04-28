import React from 'react'
import { Timer } from './Timer'
import { ONE_SECOND_IN_MS } from '../utils/constans'
import { useTimer } from '../context/timer-context'

export const StopWatch = () => {
  const { state, dispatch } = useTimer()
  const { time } = state

  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'increment' })
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
