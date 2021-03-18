import React from 'react'
import {FaShoppingBag} from 'react-icons/fa';
import {useGlobalContext} from '../context';

const Navbar = () => {

  const {totalAmountOfItems} = useGlobalContext();

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-content'>
          <div className="nav-title">
           <h2>Shop App</h2>
          </div>
          <div className="icon">
            <FaShoppingBag/>
          </div>
          <div className='amount-container'>
            <p className='total-amount'>{totalAmountOfItems}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
