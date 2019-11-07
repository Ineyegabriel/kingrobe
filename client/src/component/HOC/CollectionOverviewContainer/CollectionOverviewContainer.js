import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../../redux/shop/shopSelector';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionOverview from '../../CollectionOverview/CollectionOverview';

const mapStateToProps = createStructuredSelector({
    isloading: selectIsCollectionFetching
});
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;

