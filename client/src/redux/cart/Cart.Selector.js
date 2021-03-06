import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectcartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);
export const selectcartHidden = createSelector(
    [selectCart],
    cart => cart.cartdropdownHidden
);
export const selectcartItemsCount = createSelector(
    [selectcartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartitem) => accumulatedQuantity + cartitem.quantity, 0)
);
export const selectcartItemsTotalPrice = createSelector(
    [selectcartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartitem) => accumulatedQuantity + cartitem.quantity * cartitem.price, 0)
);