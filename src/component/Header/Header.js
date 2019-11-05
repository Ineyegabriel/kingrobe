import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../asserts/crown.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectcartHidden} from '../../redux/cart/Cart.Selector';
import {selectCurrentUser} from '../../redux/user/User.Selector';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from "../CartDropDown/CartDropDown";
import {SignOutStart} from '../../redux/user/userActions';

const Header = ({currentUser, cartdropdownHidden, Signingout}) => {
    return (
        <div className={Styles.header}>
            <Link to="/" className={Styles.logoContainer}>
                <Logo className={Styles.logo}/>
            </Link>
            <div className={Styles.optionsContainer}>
                <Link to='/shop' className={Styles.option}>SHOP</Link>
                <Link to='/shop' className={Styles.option}>CONTACT</Link>
                {
                    currentUser?
                        <div className={Styles.option} onClick={Signingout}>SIGN OUT</div>
                        :<Link to='/signin' className={Styles.option}>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {cartdropdownHidden ? null: <CartDropDown/>}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
       currentUser: selectCurrentUser,
       cartdropdownHidden: selectcartHidden
});
const mapDispatchToProps = dispatch =>({
    Signingout: () => dispatch(SignOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);