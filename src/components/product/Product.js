import React from 'react'
import './Product.css'
import { useStateValue } from '../../stateProvider/StateProvider'

const Product = ({id, title, image, price, rating}) => {

  const [{basket},dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className='product' key={id}>
      <div className='product__info' key={id}>
        <p>{title}</p>
        <p className='price__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {
                Array(rating).fill().map((_) =>(<span></span>))
            }
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product;
