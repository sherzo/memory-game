import { useState } from 'react'
import { Card } from './Card'

export const GameBoard = () => {
  const [cards] = useState(Array.from(Array(18).keys()))
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
      {cards.map(Card)}
    </div>
  )
}
