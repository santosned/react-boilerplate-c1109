import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './Root.css'

const queryClient = new QueryClient()

const Root: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Outlet />
      </main>

      <footer>
        <nav>
          <Link to="/">Home</Link>
          <span>•</span>
          <Link to="/docs">Docs</Link>
          <span>•</span>
          <Link to={'/' + (Math.random() + 1).toString(36).substring(7)}>
            Not Found
          </Link>
        </nav>
      </footer>
    </QueryClientProvider>
  )
}

export default Root
