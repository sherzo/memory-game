import { CardSelected, TCard } from '../@types/types'

type CardProps = TCard & {
  onClick: (turn: CardSelected) => void
  isFlipped: boolean
}

export const Card = ({
  id,
  uuid,
  url,
  title,
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
      data-testid={id}
      className={`card ${isFlipped ? 'card--is-flipped' : ''} `}
      onClick={handleClick}
      title={title}
    >
      <div className="card__face card__face--front">
        <span className="text-3xl font-bold">❔</span>
      </div>
      <div className="card__face card__face--back">
        <img
          src={url}
          className="object-cover aspect-video h-full"
          alt={title}
        />
      </div>
    </div>
  )
}
