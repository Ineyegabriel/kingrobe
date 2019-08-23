import React from 'react';
import Styles from './CartItem.module.scss';
const CartItem = ({item: {name,imageUrl, price, quantity}}) => {
    return (
        <div className={Styles.cartItem}>
            <img src={imageUrl} alt="item"/>
            <div className={Styles.itemDetails}>
                <span className={Styles.name}>{name}</span>
                <span className={Styles.price}>{quantity} X {price}</span>
            </div>
        </div>
    );
};
export default CartItem;