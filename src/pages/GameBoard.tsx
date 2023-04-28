import { Card } from '../components/Card'
import { Hud } from '../components/Hud'
import { TCard } from '../@types'
import { useMemoryCards } from '../hooks/useMemoryCards'
import { TOTAL_NUMBER_OF_CARDS } from '../utils/constans'

export const GameBoard = () => {
  const { cards } = useMemoryCards({ total: TOTAL_NUMBER_OF_CARDS })

  return (
    <div>
      <Hud />
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
          />
        ))}
      </div>
    </div>
  )
}
