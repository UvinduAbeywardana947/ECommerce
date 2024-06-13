import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
  <div className='header'>
    <img src='./images/logo.png' alt=''/>
    <div className='bn-container'>
      <ul style={{ listStyleType: 'none' }}>
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Contact Us</li>
      </ul>
    </div>
    <div className='nav-logos'>
      <a href='#'><i class="fa fa-search"/></a>
      <a href='#'><i class="fa-solid fa-user"/></a>
      <a className='cart-icon' href='#'><i class="fa-solid fa-cart-shopping"/><span className='count'>0</span></a>
    </div>
  </div>

  )
}

export default Navbar
