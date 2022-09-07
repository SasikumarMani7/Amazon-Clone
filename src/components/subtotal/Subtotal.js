import React from 'react'
import './Subtotal.css'
import * as CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../stateProvider/StateProvider'
import { getBasketTotal } from '../../stateProvider/Reducer'

const Subtotal = () => {
    const [{basket}] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat renderText={(value)=>{
        return(
            <>
            <p>Subtotal ({basket.length} item): <strong>{value}</strong></p>
            <small className='subtotal__gift'>
                <input type='checkbox'/>
                This order contains a gift
            </small>
            </>
        )
      }}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
