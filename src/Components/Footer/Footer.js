import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-det'>
        <img src='./images/logo.png' alt=''/>
        <p>STORE - worldwide fashion store since 2021</p>
        <p>we sell over 100+ branded product on website</p>
        <div className='icons'>
          <h4>www.company.com</h4>
          <div className='icons-det'>
           <i class="fa-brands fa-facebook-f"></i>
           <i class="fa-brands fa-instagram"></i>
           <i class="fa-brands fa-linkedin-in"></i>
           <i class="fa-brands fa-skype"></i>
           <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className='footer-det'>
        <h3>Information</h3>
        <ul style={{listStyle: 'none'}}>
          <li>New Collection</li>
          <li>About store</li>
          <li>Latest News</li>
          <li>Orders History</li>
        </ul>
      </div>
      <div className='footer-det'>
        <h3>FooterMenu</h3>
        <ul style={{listStyle: 'none'}}>
          <li>New Collection</li>
          <li>Instagram Profile</li>
          <li>Latest News</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='footer-det'>
        <h3>Useful Links</h3>
        <ul style={{listStyle: 'none'}}>
          <li>New Collection</li>
          <li>About store</li>
          <li>Latest News</li>
          <li>Purchase Theme</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
