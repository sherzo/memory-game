import { createBrowserRouter } from 'react-router-dom'

import { Welcome } from './pages/Welcome'
import { Layout } from './components/Layout'
import { GameOver } from './pages/GameOver'
import { Game } from './pages/Game'

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
        element: <Game />
      },
      {
        path: '/game-over',
        element: <GameOver />
      }
    ]
  }
])
