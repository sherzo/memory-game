import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Hud } from '../components/Hud'
import { useMemoryCards } from '../hooks/useMemoryCards'
import { DELAY_TO_END_GAME, TOTAL_NUMBER_OF_CARDS } from '../utils/constans'
import { useGame } from '../context/game'
import { GameBoard } from '../components/GameBoard'

export const Game = () => {
  const { cards } = useMemoryCards({ total: TOTAL_NUMBER_OF_CARDS })
  const navigate = useNavigate()
  const {
    state: { score, misses },
    dispatch
  } = useGame()

  useEffect(() => {
    if (score === TOTAL_NUMBER_OF_CARDS / 2) {
      setTimeout(() => {
        dispatch({
          type: 'resetAll'
        })
        navigate('/game-over')
      }, DELAY_TO_END_GAME)
    }
  }, [score, dispatch, navigate])

  return (
    <div>
      <Hud score={score} misses={misses} />
      <GameBoard cards={cards} />
    </div>
  )
}
