import { PartialRecord } from '../../@types/types'

export type GameProviderProps = { children: React.ReactNode }

export type CardSelected = Pick<TCard, 'uuid' | 'id'>

type ActionKeys = 'incrementMisses' | 'resetAll' | 'addUuidAndIncrementScore'

type PayloadKeys = 'uuid' | 'score' | 'misess'
type Action = {
  type: ActionKeys
  payload?: PartialRecord<PayloadKeys, number | string | any>
}

export type Dispatch = (action: Action) => void

export type State = {
  score: number
  misses: number
  completedCardsUuids: Array<string>
}
