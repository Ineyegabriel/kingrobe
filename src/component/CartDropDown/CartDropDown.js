import React from 'react';
import CustomButtons from "../CustomButtons/CustomButtons";
import Styles from './CartDropDown.module.scss';
import CartItem from "../CartItem/CartItem";
import {connect} from 'react-redux';
import { selectcartItems } from '../../redux/cart/Cart.Selector';
const CartDropDown = ({cartItems}) => {
    return (
            <div className={Styles.CartDropDown}>
                <div className={Styles.CartItems}>
                    {
                        cartItems.map(items => {
                            return <CartItem key={items.id} item={items}/>
                        })
                    }
                </div>
                <CustomButtons>GO TO CHECKOUT</CustomButtons>
        </div>

    );
};
const mapStateToProps = state =>({
    cartItems: selectcartItems(state)
});
export default connect(mapStateToProps)(CartDropDown);