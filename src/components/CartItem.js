import React from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa';
import {useGlobalContext} from '../context';

const CartItem = ({id, title, price, img, amount}) => {

  const {increaseItemAmount, decreaseItemAmount, removeItem} = useGlobalContext();

  return (
    <div className='cart-item container'>
      <div className='cart-item__content'>
        <div className='cart-item__image'>
          <img src={img} alt='Cart item'/>
        </div>
        <div className='cart-item__info'>
          <h4>{title}</h4>
          <p>${price}</p>
          <button 
            type='button' 
            className='remove-btn'
            onClick={()=>removeItem(id)}
            >
              remove
            </button>
        </div>
      </div>
      <div className="cart-item__amount">
        <button 
          className='amount-btn'
          onClick={()=>increaseItemAmount(id)}
          >
          <FaPlus/>
        </button>
        <p className='amount'>{amount}</p>
        <button 
          className='amount-btn'
          onClick={()=>decreaseItemAmount(id)}
          >
            <FaMinus/>
        </button>
      </div>
    </div>
  )
}

export default CartItem