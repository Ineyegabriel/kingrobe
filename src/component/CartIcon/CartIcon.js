import React from 'react';
import Styles from './CartIcon.module.scss';
import {ReactComponent as Logo} from '../../asserts/shopping-bag.svg';
import {connect} from 'react-redux';
import {cartDropDownHidden} from '../../redux/cart/cartActions';
import {selectcartItemsCount} from '../../redux/cart/Cart.Selector';
const CartIcon = ({ActionToggling,ItemCount}) => {
    console.log(ItemCount);
    return (
        <div className={Styles.CartIcon} onClick={ActionToggling}>
            <Logo className={Styles.ShoppingIcon}/>
            <span className={Styles.ItemCount}>{ItemCount}</span>
        </div>
    );
};
const mapStateToProps = state => ({
    ItemCount: selectcartItemsCount(state)
});
const mapDispatchToProps = dispatch =>({
    ActionToggling: () => dispatch(cartDropDownHidden())
});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);