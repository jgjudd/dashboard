import React from 'react'
import '../styles/App.css'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header id='header'>Header</Header>
      <MainContent>Main</MainContent>
      <Footer id='footer'>Footer</Footer>
    </div>
  )
}

export default App