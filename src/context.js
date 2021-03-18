import React, {useContext, useReducer, useEffect} from 'react';
import cartItems from './data/data';
import {ACTIONS, reducer} from './reducer'

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cart: cartItems,
  isLoading: false,
  hasErrorOcurred: false,
  totalPrice: 0,
  totalAmountOfItems: 0,
};

export const AppProvider = ({children}) =>{

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async() =>{
    dispatch({type:ACTIONS.LOADING});
    try {
      const response = await fetch(url);
      const cartData = await response.json();
      dispatch({type:ACTIONS.LOADING_SUCCESS, payload:{cartData}});
    } catch (error) {
      dispatch({type:ACTIONS.LOADING_ERROR});
    }
  };

  const increaseItemAmount = (id) =>{
    dispatch({type:ACTIONS.INCREASE_AMOUNT, payload:{id}});
  };

  const decreaseItemAmount = (id) =>{
    const itemToDecrease = state.cart.find((item)=>item.id === id);
    if(itemToDecrease.amount - 1 === 0){
      removeItem(id);
    }else{
      dispatch({type:ACTIONS.DECREASE_AMOUNT, payload:{id}});
    }
  };
  
  const removeItem = (id) =>{
    dispatch({type:ACTIONS.REMOVE_ITEM, payload:{id}});
  };

  const clearAll = () =>{
    dispatch({type:ACTIONS.CLEAR_ALL});
  };

  const calculateTotalPrice = () =>{
    dispatch({type:ACTIONS.CALCULATE_TOTAL_PRICE});
  };
  const calculateTotalAmountOfItems = () =>{
    dispatch({type:ACTIONS.CALCULATE_TOTAL_AMOUNT_OF_ITEMS});
  };

  useEffect(()=>{
    fetchData();
  }, []);

  useEffect(() => {
    calculateTotalAmountOfItems();
    calculateTotalPrice();
  }, [state.cart]);

  return <AppContext.Provider value={
    {
    ...state,
    increaseItemAmount,
    decreaseItemAmount,
    removeItem,
    clearAll,
    fetchData
    }
  }>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
  return useContext(AppContext);
}