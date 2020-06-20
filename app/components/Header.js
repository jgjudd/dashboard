import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='app-header'>
      <div className="ui menu">
        <a className="item">HomePage</a>
        <div className="right menu">
          <a className="item">Sign Up</a>
          <a className="item">Help</a>
        </div>
      </div>
    </header>
  )
}

export default Header