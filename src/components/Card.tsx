import { CardSelected, TCard } from '../@types/types'

type CardProps = TCard & {
  onClick: (turn: CardSelected) => void
  isFlipped: boolean
}

export const Card = ({
  id,
  uuid,
  url,
  isFlipped,
  onClick
}: CardProps): JSX.Element => {
  const handleClick = () => {
    if (isFlipped) {
      return
    }

    onClick({ id, uuid })
  }

  return (
    <div
      data-id={id}
      className={`card ${isFlipped ? 'card--is-flipped' : ''} `}
      onClick={handleClick}
    >
      <div className="card__face card__face--front">
        <span className="text-3xl font-bold">❔</span>
      </div>
      <div className="card__face card__face--back">
        <img src={url} className="object-cover aspect-video h-full" />
      </div>
    </div>
  )
}
