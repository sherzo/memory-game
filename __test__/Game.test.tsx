import { fireEvent, render, screen } from '@testing-library/react'
import { GameBoard } from '../src/components/GameBoard'
import { GameProvider, useGame } from '../src/context/game'

const cards = [
  {
    id: '4452fe5-ca10-4b35-ad7a-62fc44c60d27',
    url: 'https://cloud.modyocdn.com/uploads/4a1b66ba-ba4e-438d-be40-d9960818e06a/original/bear.jpg',
    uuid: '4a1b66ba-ba4e-438d-be40-d9960818e06a',
    title: 'Bear'
  },
  {
    id: 'e5a7f1c5-c8dd-43f5-a87b-12bf01b684ba',
    url: 'https://cloud.modyocdn.com/uploads/4a1b66ba-ba4e-438d-be40-d9960818e06a/original/bear.jpg',
    uuid: '4a1b66ba-ba4e-438d-be40-d9960818e06a',
    title: 'Bee'
  },
  {
    id: '0d39b30f-1a65-493b-b11a-a2568b98e430"',
    url: 'https://cloud.modyocdn.com/uploads/85360c7a-90f1-49ce-b6a0-994543a3cfad/original/cat.jpg',
    uuid: '85360c7a-90f1-49ce-b6a0-994543a3cfad',
    title: 'Cat'
  },
  {
    id: '84bde01-aad5-47c9-a2e3-8940ef4fefbf',
    url: 'https://cloud.modyocdn.com/uploads/85360c7a-90f1-49ce-b6a0-994543a3cfad/original/cat.jpg',
    uuid: '85360c7a-90f1-49ce-b6a0-994543a3cfad',
    title: 'Arac'
  }
]

const HubStub = () => {
  const {
    state: { score, misses }
  } = useGame()

  return (
    <div>
      <p>Score: {score}</p>
      <p>Misses: {misses}</p>
    </div>
  )
}

describe('GameBoard Componente', () => {
  it('Should list cards', () => {
    render(
      <GameProvider>
        <GameBoard cards={cards} />
      </GameProvider>
    )

    cards.forEach((card) => {
      const image = screen.getByAltText<HTMLImageElement>(card.title)
      expect(image.src).toContain(card.url)
    })
  })

  it('Should add 1 to the score when clicking on the same cards', () => {
    render(
      <GameProvider>
        <HubStub />
        <GameBoard cards={cards} />
      </GameProvider>
    )

    const firstCard = screen.getByTestId(cards[0].id)
    const secondCard = screen.getByTestId(cards[1].id)

    fireEvent.click(firstCard)
    fireEvent.click(secondCard)
    const score = screen.getByText(/Score: 1/i)

    expect(score).toBeInTheDocument()
  })

  it('Should add 1 to misses when clicking on different cards', () => {
    render(
      <GameProvider>
        <HubStub />
        <GameBoard cards={cards} />
      </GameProvider>
    )

    const firstCard = screen.getByTestId(cards[0].id)
    const thirdCard = screen.getByTestId(cards[2].id)

    fireEvent.click(firstCard)
    fireEvent.click(thirdCard)
    const misses = screen.getByText(/Misses: 1/i)

    expect(misses).toBeInTheDocument()
  })
})
