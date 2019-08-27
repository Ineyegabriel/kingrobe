import {CartActionTypes} from '../ActionTypes';
export const cartDropDownHidden = user =>({
    type: CartActionTypes.TOGGLE_CART_DISPLAY
});
export const addNewItemtoCart = item =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
export const reduceItemQuantity = item =>({
    type: CartActionTypes.REDUCE_ITEM_QUANTITY,
    payload: item
});
export const clearActionFromCart = item =>({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
});