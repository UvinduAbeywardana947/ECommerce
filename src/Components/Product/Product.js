import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className='product'>
      <span>New Products</span>
      <h3>Popular Products</h3>
      <div className='product-grid'>
        <div className='product-details'>
          <p className='pd'>Get up 50% off today only</p>
          <img src='./images/nike shoe.png' alt=''/>
          <div className='product-cate'>
            <h4>Casual Shoes</h4>
            <p className='pc'>$ 29.99</p>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className='icons'>
             <i class="fa-solid fa-cart-shopping"/>  
             <i class="fa fa-search"/>
             <i class="fa-solid fa-heart"/>
            </div>
          </div>
        </div>
        <div className='product-details'>
          <p className='pd'>Get up 20% off today only</p>
          <img src='./images/athletic.png' alt=''/>
          <div className='product-cate'>
            <h4>Athletic Shoes</h4>
            <p className='pc'>$ 39.99</p>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className='icons'>
             <i class="fa-solid fa-cart-shopping"/>  
             <i class="fa fa-search"/>
             <i class="fa-solid fa-heart"/>
            </div>
          </div>
        </div>
        <div className='product-details'>
          <p className='pd'>Get up 10% off today only</p>
          <img src='./images/boots.png' alt=''/>
          <div className='product-cate'>
            <h4>Boots Shoes</h4>
            <p className='pc'>$ 24.99</p>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className='icons'>
             <i class="fa-solid fa-cart-shopping"/>  
             <i class="fa fa-search"/>
             <i class="fa-solid fa-heart"/>
            </div>
          </div>
        </div>
        <div className='product-details'>
          <p className='pd'>Get up 15% off today only</p>
          <img src='./images/children.png' alt=''/>
          <div className='product-cate'>
            <h4>Children Shoes</h4>
            <p className='pc'>$ 19.99</p>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className='icons'>
             <i class="fa-solid fa-cart-shopping"/>  
             <i class="fa fa-search"/>
             <i class="fa-solid fa-heart"/>
            </div>
          </div>
        </div>
        <div className='product-details'>
          <p className='pd'>Get up 10% off today only</p>
          <img src='./images/fashion.png' alt=''/>
          <div className='product-cate'>
            <h4>Fashion Shoes</h4>
            <p className='pc'>$ 34.99</p>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className='icons'>
             <i class="fa-solid fa-cart-shopping"/>  
             <i class="fa fa-search"/>
             <i class="fa-solid fa-heart"/>
            </div>
          </div>
        </div>
        <div className='product-details'>
          <p className='pd'>Get up 20% off today only</p>
          <img src='./images/outdoor.png' alt=''/>
          <div className='product-cate'>
            <h4>Outdoor Shoes</h4>
            <p className='pc'>$ 29.99</p>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className='icons'>
             <i class="fa-solid fa-cart-shopping"/>  
             <i class="fa fa-search"/>
             <i class="fa-solid fa-heart"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
