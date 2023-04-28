import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main className="container mx-auto min-h-screen px-4">
      <Outlet />
    </main>
  )
}
