import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={`${styles.Navbar} container`}>
      <div className='logo'>
        <img src="/images/logo.png" alt="coding" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar
