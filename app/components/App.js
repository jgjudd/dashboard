import React from 'react'
import '../styles/App.css'

import Header from './Header'
import Content from './Content'

const App = () => {
  return (
    <div className='grid'>
      <Header>Header</Header>
      <Content />
    </div>
  )
}

export default App