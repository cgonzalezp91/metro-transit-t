import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import logo from '../../assets/MetroTransitLogo.svg'

export default function Navbar() {
  const [isActive, setisActive] = useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src={logo}
            alt='Logo'
            width='112'
            height='28'
          />
        </a>

        <button
           onClick={() => {
            setisActive(!isActive)
          }}
          //role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>
              Home
            </a>
            <a href='/' className='navbar-item'>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
