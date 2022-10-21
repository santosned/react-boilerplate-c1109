import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Error from './Error'

export const APP_PAGE_NAME = 'React Boilerplate'

/**
 * Code splitting and lazy load the App pages & components
 * only when needed to improve performance.
 *
 * Suggestions:
 * 1. Except for the Root & Error components, lazy load everything when needed.
 * 2. You can quickly check the perf metrics with chromium dev tools.
 */
const Home = React.lazy(async () => await import('./Home'))
const Docs = React.lazy(async () => await import('./Docs'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={null}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: 'docs',
        element: (
          <React.Suspense fallback={null}>
            <Docs />
          </React.Suspense>
        ),
      },
    ],
  },
])
