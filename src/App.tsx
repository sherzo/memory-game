import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './context/user-context'
import { router } from './router'

function App() {
  return (
    <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </React.StrictMode>
  )
}

export default App
