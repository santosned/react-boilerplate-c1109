import React from 'react'
import { useQuery } from '@tanstack/react-query'
import './Docs.css'
import { APP_PAGE_NAME } from '.'
import ReactLogo from '~/components/ReactLogo'

const Docs: React.FC = () => {
  const { status, data, error } = useQuery(
    ['docs'],
    async () => await fetch('/docs.json').then(async res => await res.json())
  )

  React.useEffect(() => {
    document.title = `Documentation - ${APP_PAGE_NAME}`
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
      <h1>Documentation</h1>
      <p>For more information see the documentation of each project</p>
      <ul className="list">
        {data.docs.map((doc: { text: any; link: string | undefined }) => (
          <li key={doc.text}>
            <a href={doc.link} target="_blank" rel="noopener noreferrer">
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Docs
