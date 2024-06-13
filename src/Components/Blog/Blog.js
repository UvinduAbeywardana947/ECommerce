import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog'>
      <span className='bl'>Our Blog</span>
      <h3>Blog Content</h3>
      <p>Explore our wide range of brands, colors, and sizes, all crafted with quality materials and expert craftsmanship. With hassle-free shopping and fast delivery, <span className='sc'>Shop Clues</span> makes it easy to step up your shoe game and walk with confidence.</p>
      <div className='brands'>
        <h4>Our Top Brands</h4>
        <div className='brands-det'>
          <img src='./images/adidas.png' alt=''/>
          <img src='./images/nike.png' alt=''/>
          <img src='./images/puma.png' alt=''/>
          <img src='./images/reebok.png' alt=''/>
          <img src='./images/converse.png' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Blog
