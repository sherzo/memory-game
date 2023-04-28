import * as React from 'react'
import { ONE_SECOND_IN_MS } from '../utils/constans'

type Action = { type: 'incrementTime' | 'resetTime' }
type Dispatch = (action: Action) => void
type State = { time: number }
type GameProviderProps = { children: React.ReactNode }

const GameStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function gameReducer(state: State, action: Action) {
  switch (action.type) {
    case 'incrementTime': {
      return { ...state, time: state.time + ONE_SECOND_IN_MS }
    }
    case 'resetTime': {
      return { ...state, time: 0 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = React.useReducer(gameReducer, { time: 0 })

  const value = { state, dispatch }
  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  )
}

function useGame() {
  const context = React.useContext(GameStateContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

export { GameProvider, useGame, ONE_SECOND_IN_MS }
