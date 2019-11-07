import React from 'react';
import Styles from './Collectionitem.module.scss';
import CustomButtons from "../CustomButtons/CustomButtons";
import {connect} from 'react-redux';
import {addNewItemtoCart} from '../../redux/index'
const Collectionitem = ({item,additem}) => {
    const {imageUrl,price,name} = item;
    const itemImage = {
        backgroundImage: `url(${imageUrl})`
    };
    return (
        <div className={Styles.collectionItem} >
            <div className={Styles.image} style={itemImage}></div>
            <div className={Styles.collectionFooter}>
                <span className={Styles.name}>{name}</span>
                <span className={Styles.price}>&euro;{price}</span>
            </div>
            <CustomButtons inverted className={Styles.customButton} onClick={()=>additem(item)}>ADD TO CART</CustomButtons>
        </div>


    );
};
const mapDispatchToProps = dispatch =>({
    additem: (item)=>dispatch(addNewItemtoCart(item))
});
export default connect(null, mapDispatchToProps)(Collectionitem);