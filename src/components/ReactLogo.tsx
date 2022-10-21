import React from 'react'
import reactLogo from '~/assets/react.svg'

const ReactLogo: React.FC = () => {
  return (
    <div>
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
}

export default ReactLogo
