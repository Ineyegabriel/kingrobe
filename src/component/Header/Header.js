import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../asserts/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
const Header = ({currentuser}) => {
    return (
        <div className={Styles.header}>
            <Link to="/" className={Styles.logoContainer}>
                <Logo className={Styles.logo}/>
            </Link>
            <div className={Styles.optionsContainer}>
                <Link to='/shop' className={Styles.option}>SHOP</Link>
                <Link to='/shop' className={Styles.option}>CONTACT</Link>
                {
                    currentuser?
                        <div className={Styles.option} onClick={()=> auth.signOut()}>SIGN OUT</div>
                        :<Link to='/signin' className={Styles.option}>SIGN IN</Link>
                }
            </div>
        </div>
    );
};
const mapStateToProps = statefromredux =>{
   return{
       currentuser: statefromredux.user.currentUser
   }
};
export default connect(mapStateToProps)(Header);