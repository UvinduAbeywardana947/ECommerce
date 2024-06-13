import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-left'>
        <div className='fb'>Favorite Brands</div>
        <div className='intro'>
            <span className='hlt'>An Exciting Place</span><br/> 
            <span className='ex-hlt'>for the whole family<br/>to shop</span>
        </div>
        <p>Step into style with our trendy e-commerce<br/>shoe collection</p>
        <button className='home-button'>Shop Now</button>
      </div>
      <div className='home-right'>
        <img src='./images/intro shoes.png' alt=''/>
      </div>
    </div>
  )
}

export default Home
