import React from 'react'
import './Shop.css';

const Shop = () => {
  return (
    <div className='shop'>
      <span>New Shop</span>
      <h3>Shop Details</h3>
      <div className='shop-cate'>
        <div className='shop-left'>
            <img src='./images/shop shoes.jpg' alt=''/>
        </div>
        <div className='shop-right'>
            <p>Discover the perfect pair of shoes to elevate your style at our online shoe store! From trendy sneakers to sophisticated heels, we offer a wide range of footwear options to suit every occasion and preference.<br/> Browse through our curated collection of high-quality shoes crafted with premium materials and impeccable attention to detail. </p>
            <div className='shop-buttons'>
               <button className='1b'>Shop Now</button>
               <button className='2b'>More Details</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
