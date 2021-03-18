export const ACTIONS = {
  CALCULATE_TOTAL_AMOUNT_OF_ITEMS: 'CALCULATE_TOTAL_AMOUNT_OF_ITEMS',
  CALCULATE_TOTAL_PRICE: 'CALCULATE_TOTAL_PRICE',
  CLEAR_ALL: 'CLEAR_ALL',
  DECREASE_AMOUNT: 'DECREASE_AMOUNT',
  INCREASE_AMOUNT: 'INCREASE_AMOUNT',
  LOADING: 'LOADING',
  LOADING_ERROR: 'LOADING_ERROR',
  LOADING_SUCCESS: 'LOADING_SUCCESS',  
  REMOVE_ITEM: 'REMOVE_ITEM'
}

export function reducer(state, action){
  
  switch(action.type){

    case ACTIONS.CALCULATE_TOTAL_AMOUNT_OF_ITEMS:
      const totalAmount = state.cart.reduce(
        (acc, item)=>
        acc + Number(item.amount), 0);

      return {
        ...state,
        totalAmountOfItems: totalAmount
      }
    
    case ACTIONS.CALCULATE_TOTAL_PRICE:
      const totalValue = state.cart.reduce(
        (acc, item)=>
        Number(
          (acc + (Number(item.amount) * Number(item.price))).toFixed(2)
        )
        , 0);

      return {
        ...state,
        totalPrice: totalValue
      }
    
    case ACTIONS.CLEAR_ALL:
      return{
        ...state,
        cart: []
      }

    case ACTIONS.DECREASE_AMOUNT:
      const cartItemDecreased = state.cart.map((item)=>{
        const {id, amount} = item;
        if(id === action.payload.id){
          return {...item, amount: amount - 1};
        }
        return item;
      })
      return {
        ...state,
        cart: cartItemDecreased,
        }
  
    case ACTIONS.INCREASE_AMOUNT:
      const cartItemIncreased = state.cart.map((item)=>{
        const {id, amount} = item;
        if(id === action.payload.id){
          return {...item, amount: amount + 1};
        }
        return item;
      })
      return {
        ...state,
        cart: cartItemIncreased,
      }


    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.LOADING_SUCCESS:
      return {
        ...state,
        isLoading:false,
        cart: action.payload.cartData,
      };

    case ACTIONS.LOADING_ERROR:
      return {
        ...state,
        isLoading: false,
        hasErrorOcurred: true,
      };
        
    case ACTIONS.REMOVE_ITEM:
      const cartAfterItemRemoval = state.cart.filter(
        (item)=>item.id !== action.payload.id);

      return {...state, cart: cartAfterItemRemoval}

    default:
      return {...state}
  }
}