import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../asserts/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from "../CartDropDown/CartDropDown";

const Header = ({currentUser, cartdropdownHidden}) => {
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
                        <div className={Styles.option} onClick={()=> auth.signOut()}>SIGN OUT</div>
                        :<Link to='/signin' className={Styles.option}>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {cartdropdownHidden ? null: <CartDropDown/>}
        </div>
    );
};

const mapStateToProps = ({user:{currentUser}, cart:{cartdropdownHidden}}) =>{
   return{
       currentUser,
       cartdropdownHidden,
   }
};
export default connect(mapStateToProps)(Header);