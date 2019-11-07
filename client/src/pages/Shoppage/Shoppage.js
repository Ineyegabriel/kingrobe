import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import CollectionOverviewContainer from '../../component/HOC/CollectionOverviewContainer/CollectionOverviewContainer';
import CollectionPageContainer from '../../component/HOC/CollectionPageContainer/CollectionPageContainer';
import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shopActions';

const Shoppage = ({fetchCollectionStart, match}) => {
    useEffect(() =>{
        fetchCollectionStart();
    },[fetchCollectionStart]);

    return (
        <div className="ShopPage">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
    );

};

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart : () => dispatch(fetchCollectionStart())
});
export default connect(null,mapDispatchToProps)(Shoppage);