import React from 'react';
import CustomButtons from "../CustomButtons/CustomButtons";
import Styles from './CartDropDown.module.scss';
import {connect} from 'react-redux';
const CartDropDown = () => {
    return (
        <div className={Styles.CartDropDown}>
            <div className={Styles.CartItems}></div>
            <CustomButtons>GO TO CHECKOUT</CustomButtons>
        </div>
    );
};
const mapStateToProps = state =>({
    hidden: state.cart.cartdropdownHidden
});
export default connect(mapStateToProps)(CartDropDown);