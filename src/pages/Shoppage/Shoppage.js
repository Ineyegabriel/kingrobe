import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverviewContainer from '../../component/HOC/CollectionOverviewContainer/CollectionOverviewContainer';
import CollectionPageContainer from '../../component/HOC/CollectionPageContainer/CollectionPageContainer';
import {connect} from 'react-redux';
import {fetchCollectionStartAsync} from '../../redux/shop/shopActions';

class Shoppage extends React.Component {
    componentDidMount(){
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();
    }
    render(){
        const {match} = this.props;

        return (
            <div className="ShopPage">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
            </div>
        );
    }

};

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync : () => dispatch(fetchCollectionStartAsync())
});
export default connect(null,mapDispatchToProps)(Shoppage);