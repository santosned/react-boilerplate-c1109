import React from 'react'
import { APP_PAGE_NAME } from '.'
import './Docs.css'

type DocsData = Array<{ link: string; text: string }>

const Docs: React.FC = () => {
  const [docs, setDocs] = React.useState<DocsData>([])

  React.useEffect(() => {
    document.title = `Documentation - ${APP_PAGE_NAME}`
  }, [])

  React.useEffect(() => {
    if (docs.length === 0) {
      fetch('/docs.json')
        .then(async res => await res.json())
        .then(data => setDocs(data.docs))
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  return (
    <>
      <h1>Documentation</h1>
      <p>For more information see the documentation of each project</p>
      <ul className="list">
        {docs.map(doc => (
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
