import { GameBoard } from './components/GameBoard'
import { useMemoryCards } from './hooks/useMemoryCards'
import { TOTAL_NUMBER_OF_CARDS } from './utils/constans'

function App() {
  const { cards } = useMemoryCards({ total: TOTAL_NUMBER_OF_CARDS })

  return (
    <main className="container mx-auto min-h-screen px-4">
      <GameBoard cards={cards} />
    </main>
  )
}

export default App
