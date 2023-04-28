import { useState } from 'react'

import { Card } from '../components/Card'
import { CardSelected, TCard } from '../@types/types'
import { TIME_TO_FLIP_CARD_IS_MS } from '../utils/constans'
import { useGame } from '../context/game'

type Turn = {
  selectedCardOne: CardSelected | null
  selectedCardTwo: CardSelected | null
}

const turnInitialState = { selectedCardOne: null, selectedCardTwo: null }

type GameBoardProps = {
  cards: TCard[]
}

export const GameBoard = ({ cards }: GameBoardProps) => {
  const [turn, setTurn] = useState<Turn>(turnInitialState)
  const { state, dispatch } = useGame()
  const { completedCardsUuids } = state

  /**
   * Manage user interaction with cards
   * @param cardSelected CardSelected
   * @returns void
   */
  const handleClick = (cardSelected: CardSelected) => {
    if (isATurnInProgress()) {
      return
    }

    if (isTheFirstCardSelected()) {
      setTurn({ ...turn, selectedCardOne: cardSelected })
      return
    }

    if (theSelectedCardsAreSame(cardSelected)) {
      dispatch({
        type: 'addUuidAndIncrementScore',
        payload: {
          uuid: cardSelected.uuid
        }
      })
    } else {
      dispatch({ type: 'incrementMisses' })
    }

    setTurn({ ...turn, selectedCardTwo: cardSelected })
    resetTurnWithDelay()
  }

  /**
   * Check if a turn is in progress
   * @returns void
   */
  const isATurnInProgress = () =>
    turn.selectedCardOne !== null && turn.selectedCardTwo !== null

  /**
   * Check if I already selected the first card
   * @returns void
   */
  const isTheFirstCardSelected = () => turn.selectedCardOne === null

  /**
   * Check if the selected cards are the same
   * @returns void
   */
  const theSelectedCardsAreSame = (newTurn: CardSelected) =>
    turn.selectedCardOne?.uuid === newTurn.uuid

  /**
   * Restart the turn with a timeout
   * @returns void
   */
  const resetTurnWithDelay = () => {
    setTimeout(() => {
      setTurn(turnInitialState)
    }, TIME_TO_FLIP_CARD_IS_MS)
  }

  /**
   * return if a card should be flipped
   * @param id string
   * @param uuid string
   * @returns boolean
   */
  const isFlipped = (id: string, uuid: string): boolean => {
    const isCompleted = completedCardsUuids.indexOf(uuid) !== -1
    const isSelected =
      turn.selectedCardOne?.id === id || turn.selectedCardTwo?.id === id
    return isSelected || isCompleted
  }

  return (
    <div
      className="grid grid-flow-dense gap-4 mx-auto
        [grid-auto-rows:7rem] 
        [grid-template-columns:repeat(auto-fit,minmax(1.5rem,1fr))] 
        md:[grid-auto-rows:10rem] 
        md:[grid-template-columns:repeat(auto-fit,minmax(3rem,1fr))]
        lg:[grid-auto-rows:11.5rem] 
        lg:[grid-template-columns:repeat(auto-fit,minmax(4rem,1fr))]
        lg:w-10/12"
    >
      {cards.map((card: TCard) => (
        <Card
          id={card.id}
          key={card.id}
          uuid={card.uuid}
          title={card.title}
          url={card.url}
          onClick={handleClick}
          isFlipped={isFlipped(card.id, card.uuid)}
        />
      ))}
    </div>
  )
}
