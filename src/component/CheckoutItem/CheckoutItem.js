import React from 'react';
import Styles from './CheckoutItem.module.scss';
import {connect} from 'react-redux';
import {clearActionFromCart,reduceItemQuantity,addNewItemtoCart} from '../../redux/index'
const CheckoutItem = ({cartItem, removeItem,reduceQuantity, adddingItem}) => {
    const {imageUrl,name,price,quantity} = cartItem;
    return (
        <div className={Styles.checkoutItem}>
            <div className={Styles.imageContainer}>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className={Styles.name}>{name}</span>
            <span className={Styles.quantity}>
                <span className={Styles.arrow} onClick={() => reduceQuantity(cartItem)}>&#60;</span>
                <span>{quantity}</span>
                <span className={Styles.arrow} onClick={() => adddingItem(cartItem)}>&#62;</span>
            </span>
            <span className={Styles.price}>&euro;{price}</span>
            <div className={Styles.removeButton} onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
};
const mapDispatchToProps = dispatch =>({
    adddingItem: (item) => dispatch(addNewItemtoCart(item)),
    removeItem: (item) => dispatch(clearActionFromCart(item)),
    reduceQuantity: (item) => dispatch(reduceItemQuantity(item))
});
export default connect(null,mapDispatchToProps)(CheckoutItem);