import React from 'react'
import {useGlobalContext} from '../context';
import CartItem from './CartItem';

const CartContainer = () => {

  const {cart, totalPrice, clearAll, fetchData} = useGlobalContext();
  
  return (
    <div className='cart-container container'>
      <div className='cart-container_title'>
        <h3 className='text-center'>Your Bag</h3>
      </div>
      <div className='cart-container_items'>
        {cart.length === 0? 
           (<h4 className='text-center'>Your bag is currently empty.</h4>) 
              : 
           (cart.map((cartItem)=>{
            return <CartItem key={cartItem.id} {...cartItem}/>
          }))
        }
      </div>
      <div className='total-price'>
        <h4>Total</h4>
        <h4>${totalPrice}</h4>
      </div>
      <div className='clear-all'>
        {cart.length > 0? 
          (<button 
              type='button' 
              className='btn clear-btn'
              onClick={clearAll}
              >
              Clear Cart
            </button>)
                  : 
          (<button 
              type='button' 
              className='btn refresh-btn'
              onClick={fetchData}
              >
              Refresh
           </button>
          )
        }
        
      </div>
    </div>
  )
}

export default CartContainer
