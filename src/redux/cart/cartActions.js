import {CartActionTypes} from '../ActionTypes';
export const cartDropDownHidden = user =>({
    type: CartActionTypes.TOGGLE_CART_DISPLAY
});
export const addNewItemtoCart = item =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});