import React from 'react';
import Styles from './CartIcon.module.scss';
import {ReactComponent as Logo} from '../../asserts/shopping-bag.svg';
import {connect} from 'react-redux';
import {cartDropDownHidden} from '../../redux/cart/cartActions';
const CartIcon = ({ActionToggling}) => {
    return (
        <div className={Styles.CartIcon} onClick={ActionToggling}>
            <Logo className={Styles.ShoppingIcon}/>
            <span className={Styles.ItemCount}>0</span>
        </div>
    );
};
const mapDispatchToProps = dispatch =>({
    ActionToggling: () => dispatch(cartDropDownHidden())
});
export default connect(null,mapDispatchToProps)(CartIcon);