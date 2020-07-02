import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../styles/Content.css'

import SideMenu from './SideMenu'
import MainContent from './MainContent'

const Content = () => {
  const context = useContext(AppContext)
  const [currentScreen, setCurrentScreen] = useState(context)
  const value = { currentScreen, setCurrentScreen }

  return (
    <div className='content'>
      <AppContext.Provider value={value}>
        <SideMenu />
        <MainContent />
      </AppContext.Provider>
    </div>
  )
}

export default Content
