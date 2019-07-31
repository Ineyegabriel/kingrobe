import React from 'react';
import Styles from './Collectionitem.module.scss';
const Collectionitem = ({imageUrl,price,name}) => {
    const itemImage = {
        backgroundImage: `url(${imageUrl})`
    };
    return (
        <div className={Styles.collectionItem} >
            <div className={Styles.image} style={itemImage}></div>
            <div className={Styles.collectionFooter}>
                <span className={Styles.name}>{name}</span>
                <span className={Styles.price}>{price}</span>
            </div>
        </div>


    );
};
export default Collectionitem;