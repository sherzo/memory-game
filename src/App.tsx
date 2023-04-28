import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './context/user-context'
import { GameProvider } from './context/game-context'
import { router } from './router'

function App() {
  return (
    <React.StrictMode>
      <UserProvider>
        <GameProvider>
          <RouterProvider router={router} />
        </GameProvider>
      </UserProvider>
    </React.StrictMode>
  )
}

export default App
