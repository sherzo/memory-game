import { useState } from 'react'
import { TCard } from '../@types'

type CardProps = TCard

export const Card = ({ id, url }: CardProps): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div
      data-id={id}
      className={`card ${isFlipped ? 'card--is-flipped' : ''} `}
      onClick={() => {
        setIsFlipped((prev) => !prev)
      }}
    >
      <div className="card__face card__face--front">
        <span className="text-3xl font-bold">?</span>
      </div>
      <div className="card__face card__face--back">
        <img src={url} className="object-cover aspect-video h-full" />
      </div>
    </div>
  )
}
