import React from 'react'
import reactLogo from '~/assets/react.svg'
import { APP_PAGE_NAME } from '.'

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = APP_PAGE_NAME
  }, [])

  return (
    <>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Boilerplate</h1>
      <div className="card">
        <code id="deps">
          {JSON.stringify(
            {
              'react': '^18.2.0',
              'react-router-dom': '^6.4.2',
              'typescript': '^4.6.4',
              'vite': '^3.1.0',
            },
            null,
            2
          )}
        </code>
      </div>
    </>
  )
}

export default Home
