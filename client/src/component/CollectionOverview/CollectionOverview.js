import React from 'react';
import Styles from './CollectionOverview.module.scss';
import PreviewCollection from "../../component/PreviewCollection/PreviewCollection"
import {connect} from 'react-redux';
import {selectCollectionPreview} from '../../redux/shop/shopSelector';
import {createStructuredSelector} from 'reselect';
const CollectionOverview = ({collectionData}) => {
    return (
        <div className={Styles.collectionsOverview}>
            {
                collectionData.map(collectionItem => {
                    return <PreviewCollection key={collectionItem.id} {...collectionItem}/>
                })
            }
        </div>
    );
};
const mapStateToProps = createStructuredSelector(
    {
        collectionData: selectCollectionPreview
    });

export default connect(mapStateToProps)(CollectionOverview);