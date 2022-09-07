import React from 'react'
import Header from '../../components/header/Header';
import Product from '../../components/product/Product';
import './Home.css'

const Home = () => {
  return (
    <><Header />
    <div className='home'>
      <img className='home__image'
      src='https://m.media-amazon.com/images/I/715wUFtDVNL._SR1500,844_.jpg' alt=''/>
      <div className='home__row'>
        <Product 
        id='101'
        title='Acer Nitro 5 Intel i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop'
        image='https://images-na.ssl-images-amazon.com/images/I/81IXuyeJhYL._SX679_.jpg'
        price={1600}
        rating={5}
        />
        <Product 
        id='102'
        title='Microsoft Surface Laptop 4: 13.5" Touchscreen (Intel® Core i5/8GB RAM/512GB SSD) Platinum - English'
        image='https://m.media-amazon.com/images/I/71p-M3sPhhL._AC_SX679_.jpg'
        price={1400}
        rating={4}
        />
      </div>
      <div className='home__row'>
        <Product 
        id='103'
        title='DJI Mini 3 Pro (DJI RC) – Lightweight and Foldable Camera Drone with 4K/60fps Video, 48MP Photo, 34-min Flight Time, Tri-Directional Obstacle Sensing, Ideal for Aerial Photography and Social Media'
        image='https://images-na.ssl-images-amazon.com/images/I/61Y1P6uIRFL.__AC_SX300_SY300_QL70_ML2_.jpg'
        price={1179}
        rating={5}
        />
        <Product 
        id='104'
        title='Canon EOS M50 Mark II + EF-M 15-45mm is STM Kit Black'
        image='https://m.media-amazon.com/images/I/71woYLtQs4L._AC_SX355_.jpg'
        price={869}
        rating={4}
        />
      </div>
      <div className='home__row'>
        <Product 
        id='105'
        title='Champion Mens Classic Jersey T-Shirt'
        image='https://m.media-amazon.com/images/I/61GgF9Dhq2L._AC_UX679_.jpg'
        price={26}
        rating={5}
        />
        <Product 
        id='106'
        title='KR Strikeforce Womens Bowling Shoes Bowling Shoes'
        image='https://images-na.ssl-images-amazon.com/images/I/710RatcUKwL.__AC_SY300_SX300_QL70_ML2_.jpg'
        price={97}
        rating={4}
        />
      </div>
    </div></>
  )
}
export default Home;
