import {ShopActionTypes} from '../ActionTypes';
import {firestore, convertSnapShottoMappableArray} from '../../firebase/firebase.utils';


export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collection =>({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collection
});

export const fetchCollectionFailure = errorMessage =>({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertSnapShottoMappableArray(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
};