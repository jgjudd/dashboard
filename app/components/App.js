import React, { useContext, useState } from 'react'
import '../styles/App.css'

import { AppContext } from '../context/AppContext'

import Header from './Header'
import SideMenu from './SideMenu'
import MainContent from './MainContent'
import Footer from './Footer'

const App = () => {
  const context = useContext(AppContext)
  const [currentScreen, setCurrentScreen] = useState(context)
  const value = { currentScreen, setCurrentScreen }
  return (
    <div>
      <Header>Header</Header>
      <br />
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '15% 85%'
      }}>
        <AppContext.Provider value={value}>
          <SideMenu />
          <MainContent />
        </AppContext.Provider>
      </div>
      <Footer>Footer</Footer>
    </div>
  )
}

export default App