import React from 'react'
import { Dispatch, GameProviderProps, State } from './types'
import { gameReducer } from './reducer'

const initialState: State = {
  score: 0,
  misses: 0,
  completedCardsUuids: []
}

const GameStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = React.useReducer(gameReducer, initialState)

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

export { GameProvider, useGame }
