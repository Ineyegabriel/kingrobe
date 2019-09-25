import React from 'react';
import {selectedCollectionItem} from '../../redux/shop/shopSelector';
import {connect} from 'react-redux';
import Styles from './CollectionPage.module.scss';
import CollectionItem from '../../component/Collectionitem/Collectionitem';
const CollectionPage = ({collection}) => {
    console.log(collection);
    const {items,title} = collection;
    return (
        <div className={Styles.collectionpage}>
            <h2 className={Styles.title}>{title}</h2>
            <div className={Styles.items}>
               {
                    items.map(item =>{
                        return <CollectionItem key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
    );
};
const mapStateToProps = (state, ownProps) =>({
    collection: selectedCollectionItem(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);