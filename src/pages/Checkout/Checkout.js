import React from 'react';
import Styles from './Checkout.module.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectcartItems,selectcartItemsTotalPrice} from '../../redux/cart/Cart.Selector';
import CheckoutItem from "../../component/CheckoutItem/CheckoutItem";
const Checkout = ({cartItems,totalprice}) => {
    return (
       <div className={Styles.checkoutPage}>
           <div className={Styles.checkoutHeader}>
               <div className={Styles.headerBlock}>
                   <span>Product</span>
               </div>
               <div className={Styles.headerBlock}>
                   <span>Description</span>
               </div>
               <div className={Styles.headerBlock}>
                   <span>Quantity</span>
               </div>
               <div className={Styles.headerBlock}>
                   <span>Price</span>
               </div>
               <div className={Styles.headerBlock}>
                   <span>Remove</span>
               </div>
           </div>
           {
               cartItems.map(item =>{
                   return <CheckoutItem key={item.id} cartItem={item}/>
               })
           }
           <div className={Styles.total}>
               <span>TOTAL: &euro;{totalprice}</span>
           </div>
       </div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems : selectcartItems,
    totalprice: selectcartItemsTotalPrice
});
export default connect(mapStateToProps)(Checkout);