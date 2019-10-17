import {takeLatest,call,put} from 'redux-saga/effects';
import {ShopActionTypes} from '../ActionTypes';
import {firestore,convertSnapShottoMappableArray} from '../../firebase/firebase.utils';
import {fetchCollectionSuccess,fetchCollectionFailure} from '../shop/shopActions';

export function* fetchCollectionAsync(){
    yield console.log('I am Fired');
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertSnapShottoMappableArray,snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    }
    catch (error){
        yield put(fetchCollectionFailure(error.message))
    }


    /*    collectionRef.get().then(snapshot => {
            const collectionsMap = convertSnapShottoMappableArray(snapshot);
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));*/
}
export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionAsync
    );
}