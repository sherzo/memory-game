import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './context/user-context'
import { GameProvider } from './context/game'
import { router } from './router'
import { TimerProvider } from './context/timer-context'

function App() {
  return (
    <React.StrictMode>
      <UserProvider>
        <GameProvider>
          <TimerProvider>
            <RouterProvider router={router} />
          </TimerProvider>
        </GameProvider>
      </UserProvider>
    </React.StrictMode>
  )
}

export default App
