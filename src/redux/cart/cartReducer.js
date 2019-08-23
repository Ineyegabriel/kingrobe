import {CartActionTypes} from '../ActionTypes';
import {addItemToCart} from './cart.Utils';
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
        default:
            return state;
    }
};
export default  cartReducer;