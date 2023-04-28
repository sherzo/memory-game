import { createBrowserRouter } from 'react-router-dom'

import { Welcome } from './pages/Welcome'
import { GameBoard } from './pages/GameBoard'
import { Layout } from './components/Layout'
import { GameOver } from './pages/GameOver'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Welcome />
      },
      {
        path: '/game',
        element: <GameBoard />
      },
      {
        path: '/game-over',
        element: <GameOver />
      }
    ]
  }
])
