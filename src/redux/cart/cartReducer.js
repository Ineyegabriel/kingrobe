import {CartActionTypes} from '../ActionTypes';
import {addItemToCart,reduceItemquantity} from './cart.Utils';
const initialState ={
    cartdropdownHidden: true,
    cartItems: []
};
const cartReducer = (state = initialState, action) =>{
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_DISPLAY:
            return {
                ...state,
                cartdropdownHidden: !state.cartdropdownHidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REDUCE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: reduceItemquantity(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
};
export default  cartReducer;