import React, { useContext } from 'react'
import '../styles/SideMenu.css'
import { AppContext } from '../context/AppContext'

const getMenuOptions = () => {
  return [
    'Dashboard',
    'Calendar',
    'Tasks',
    'Clients',
    'Cases',
    'Quotes',
    'Invoices',
    'Payments',
    'TimeEntries'
  ]
}

const SideMenu = () => {
  const context = useContext(AppContext)
  const menuOptions = getMenuOptions()
  const handleClick = (screen) => {
    screen = screen.toLowerCase()
    context.setCurrentScreen(screen)
  }
  return (
    <aside className='side-bar'>
      {menuOptions.map( (i) =>
        <button className='nav-button' key={i} onClick={() => handleClick(i)}>{i}</button>
      )}
    </aside>
  )
}

export default SideMenu
