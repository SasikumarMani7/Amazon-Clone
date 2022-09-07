import React from 'react'
import Header from '../../components/header/Header';
import './Checkout.css'
import { useStateValue } from '../../stateProvider/StateProvider';
import CheckoutProduct from '../../components/checkoutproduct/CheckoutProduct';
import Subtotal from '../../components/subtotal/Subtotal';

const Checkout = () => {

  const [{basket}] =useStateValue();

  return (
    <>
      <Header />
      <div className='checkout'>
        <div className='checkout__left'>
        <img className='checkout__ad'
        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
        alt='ad'/>
        {
          basket.length === 0 ?
          (<div>
            <h2>Your shopping basket is empty</h2>
            <p> You have no items in your basket. To buy or more items, Click "Add to Basket" next to the item.</p>
          </div>) : (
            <div>
              <h2 className='checkout__title'>Your shopping basket</h2>
              {
                basket.map((item) =>{
                  return(
                    <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                  );
                })
              }
            </div>
          )
        }
      </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
      </div>
    </>
  )
}

export default Checkout;
