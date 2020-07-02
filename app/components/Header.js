import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='app-header'>
      
        <div className='site-header'>
          SITE TITLE
        </div>
        <div className='settings'>
          <button>Settings</button>
          <button>Help</button>
          <button>Logout</button>
        </div>
  
    </header>
  )
}

export default Header