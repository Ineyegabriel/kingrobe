import React from 'react';
import CustomButtons from "../CustomButtons/CustomButtons";
import Styles from './CartDropDown.module.scss';
import CartItem from "../CartItem/CartItem";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectcartItems } from '../../redux/cart/Cart.Selector';
import {withRouter} from 'react-router-dom';
import {cartDropDownHidden} from '../../redux/cart/cartActions';
const CartDropDown = ({cartItems, history, dispatch}) => {
    return (
            <div className={Styles.CartDropDown}>
                <div className={Styles.CartItems}>
                    {
                        cartItems.length ?
                        cartItems.map(items => {
                            return <CartItem key={items.id} item={items}/>
                        })
                            : <span className={Styles.emptyMessage}>There is no item in your bag.</span>
                    }
                </div>
                <CustomButtons onClick={()=>{
                    history.push('/checkout');
                    dispatch(cartDropDownHidden())
                }}>GO TO CHECKOUT</CustomButtons>
        </div>

    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectcartItems
});
export default withRouter(connect(mapStateToProps)(CartDropDown));