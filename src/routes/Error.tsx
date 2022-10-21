import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom'
import './Error.css'

interface ErrorType {
  data: any
  status: number
  statusText: string
}

const Error: React.FC = () => {
  const navigate = useNavigate()
  const error = useRouteError() as ErrorType

  React.useEffect(() => {
    document.title = `Error ${error?.status}!! (${error.statusText})`
  }, [error])

  return (
    <>
      <main>
        <code>
          Error {Object.hasOwnProperty.call(error, 'status') && error?.status}
        </code>
        <h1>
          {Object.hasOwnProperty.call(error, 'statusText') && error?.statusText}
        </h1>
        <p>Sorry, it seems an error has occurred.</p>
      </main>
      <footer>
        <nav>
          <button type="button" onClick={() => navigate(-1)}>
            Back
          </button>
        </nav>
      </footer>
    </>
  )
}

export default Error
