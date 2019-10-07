import {connect} from 'react-redux';
import {compose} from 'redux';
import CollectionPage from '../../../pages/CollectionPage/CollectionPage';
import WithSpinner from '../WithSpinner/WithSpinner';
import {createStructuredSelector} from 'reselect';
import {selectCollectionLoaded} from '../../../redux/shop/shopSelector';

const mapStateToProps = createStructuredSelector({
    isloading: state => !selectCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;