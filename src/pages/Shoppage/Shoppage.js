import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../component/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const Shoppage = ({match}) =>{
        return (
            <div className="ShopPage">
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );
};

export default Shoppage;