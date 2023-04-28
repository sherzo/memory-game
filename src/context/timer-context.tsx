import * as React from 'react'
import { ONE_SECOND_IN_MS } from '../utils/constans'

type Action = { type: 'increment' | 'reset' }
type Dispatch = (action: Action) => void
type State = { time: number }
type TimerProviderProps = { children: React.ReactNode }

const TimerStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function userReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment': {
      return { time: state.time + ONE_SECOND_IN_MS }
    }
    case 'reset': {
      return { time: 0 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function TimerProvider({ children }: TimerProviderProps) {
  const [state, dispatch] = React.useReducer(userReducer, { time: 0 })

  const value = { state, dispatch }
  return (
    <TimerStateContext.Provider value={value}>
      {children}
    </TimerStateContext.Provider>
  )
}

function useTimer() {
  const context = React.useContext(TimerStateContext)
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider')
  }
  return context
}

export { TimerProvider, useTimer }
