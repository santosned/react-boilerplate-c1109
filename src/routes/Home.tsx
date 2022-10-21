import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ReactLogo from '~/components/ReactLogo'
import { APP_PAGE_NAME } from '.'

const Home: React.FC = () => {
  const { status, data, error } = useQuery(
    ['deps'],
    async () => await fetch('/deps.json').then(async res => await res.json())
  )

  React.useEffect(() => {
    document.title = APP_PAGE_NAME
  }, [])

  if (status === 'loading') {
    return <ReactLogo />
  }

  if (status === 'error') {
    console.log(error)
    return <></>
  }

  return (
    <>
      <ReactLogo />
      <h1>React Boilerplate</h1>
      <div className="card">
        <code id="deps">{JSON.stringify(data.deps, null, 2)}</code>
      </div>
    </>
  )
}

export default Home
