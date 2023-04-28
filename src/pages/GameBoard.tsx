import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from '../components/Card'
import { Hud } from '../components/Hud'
import { TCard } from '../@types'
import { useMemoryCards } from '../hooks/useMemoryCards'
import {
  TOTAL_NUMBER_OF_CARDS,
  TIME_TO_FLIP_CARD_IS_MS
} from '../utils/constans'

type CardSelected = Pick<TCard, 'uuid' | 'id'>

type Turn = {
  one: CardSelected | null
  two: CardSelected | null
}

const turnInitialState = { one: null, two: null }

export const GameBoard = () => {
  const [score, setScore] = useState(0)
  const [misess, setMisess] = useState(0)
  const [turn, setTurn] = useState<Turn>(turnInitialState)
  const [completedUuids, setCompletedUuids] = useState<string[]>([])
  const { cards } = useMemoryCards({ total: TOTAL_NUMBER_OF_CARDS })
  const navigate = useNavigate()

  useEffect(() => {
    if (cards.length === 0) {
      return
    }

    if (cards.length / 2 === completedUuids.length) {
      setTimeout(() => {
        setTurn(turnInitialState)
        setScore(0)
        setMisess(0)
        setCompletedUuids([])
        navigate('/game-over')
      }, TIME_TO_FLIP_CARD_IS_MS)
    }
  }, [cards, completedUuids, navigate])

  const handleClick = (newTurn: CardSelected) => {
    if (isATurnInProgress()) {
      return
    }

    if (isThereACardSelected()) {
      setTurn({ ...turn, one: newTurn })
      return
    }

    if (theSelectedCardsAreSame(newTurn)) {
      setCompletedUuids((prev) => [...prev, newTurn.uuid])
      setScore((prev) => prev + 1)
    } else {
      setMisess((prev) => prev + 1)
    }

    setTurn({ ...turn, two: newTurn })
    flipTheCardsOver()
  }

  const isATurnInProgress = () => turn.one !== null && turn.two !== null

  const isThereACardSelected = () => turn.one === null

  const theSelectedCardsAreSame = (newTurn: CardSelected) =>
    turn.one?.uuid === newTurn.uuid

  const flipTheCardsOver = () => {
    setTimeout(() => {
      setTurn(turnInitialState)
    }, TIME_TO_FLIP_CARD_IS_MS)
  }

  const isFlipped = (id: string, uuid: string) => {
    const isCompleted = completedUuids.indexOf(uuid) !== -1
    const isSelected = turn.one?.id === id || turn.two?.id === id
    return isSelected || isCompleted
  }

  return (
    <div>
      <Hud score={score} misses={misess} />
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
    </div>
  )
}
