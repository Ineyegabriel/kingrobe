import React from 'react';
import Styles from './PreviewCollection.module.scss';
import Collectionitem from "../Collectionitem/Collectionitem";
const PreviewCollection = ({title,items}) => {
    return (
        <div className={Styles.collectionPreview}>
            <h1 className={Styles.title}>{title}</h1>
            <div className={Styles.preview}>
                {
                    items.filter((item, index) => index < 4).map(shopItem => {
                        return <Collectionitem key={shopItem.id} item={shopItem}/>
                    })
                }
            </div>
        </div>
    );
};
export default PreviewCollection;