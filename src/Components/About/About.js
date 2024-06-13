import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src='./images/family shoes.jpg' alt=''/>
      </div>
      <div className='about-right'>
        <span className='ap'>About Products</span>
        <h3>About For Products</h3>
        <div className='about-details'>
            <p className='ad'>Welcome to our online shoe emporium, where style meets comfort at your fingertips. At our shoe ecommerce platform, we pride ourselves on curating a diverse collection of footwear to suit every taste and occasion. Whether you're on the hunt for the latest trends, classic staples, or specialized athletic shoes, 
                our virtual shelves are stocked with a variety of options. Browse through our user-friendly interface, where detailed product descriptions and high-quality images provide an immersive shopping experience.</p>
            <p className='ad'> With seamless navigation and secure checkout, finding the perfect pair has never been easier. Step into the future of footwear shopping with us, where fashion, functionality, and convenience converge in the world of online shoe retail.</p>
            <div className='points'>
                <p className='po'><i class="fa-regular fa-circle-right"/>Diverse and Trendsetting Collection</p>
                <p className='po'><i class="fa-regular fa-circle-right"/>Exceptional Quality and Craftsmanship</p>
                <p className='po'><i class="fa-regular fa-circle-right"/>Personalized Shopping Experience</p>
                <p className='po'><i class="fa-regular fa-circle-right"/>Transparent and Customer-Focused Policies</p>
                <p className='po'><i class="fa-regular fa-circle-right"/>Innovative Technology and Features</p>
                <p className='po'><i class="fa-regular fa-circle-right"/>Fast and Secure Shipping</p>
                <p className='po'><i class="fa-regular fa-circle-right"/>Community Engagement and Social Responsibility</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
