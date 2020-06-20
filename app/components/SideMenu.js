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
    <aside style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'grey', minHeight: '45rem' }}>
      {menuOptions.map( (i) =>
        <span className='nav-background' key={i}>
          <a className='nav-link' onClick={() => handleClick(i)}>{i}</a>
        </span>
      )}
    </aside>
  )
}

export default SideMenu
