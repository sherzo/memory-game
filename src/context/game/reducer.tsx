import { Action, State } from './types'

const initialState: State = {
  score: 0,
  misses: 0,
  completedCardsUuids: []
}

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addUuidAndIncrementScore': {
      const completedCardsUuids = [
        ...state.completedCardsUuids,
        action.payload?.uuid as string
      ]
      return {
        ...state,
        completedCardsUuids: completedCardsUuids,
        score: state.score + 1
      }
    }
    case 'incrementMisses': {
      return {
        ...state,
        misses: state.misses + 1
      }
    }
    case 'resetAll': {
      return initialState
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
