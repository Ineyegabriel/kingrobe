import {CartActionTypes} from '../ActionTypes';
const initialState ={
    cartdropdownHidden: true
};
const cartReducer = (state = initialState, action) =>{
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_DISPLAY:
            return {
                ...state,
                cartdropdownHidden: !state.cartdropdownHidden
            };
        default:
            return state;
    }
};
export default  cartReducer;