import {takeEvery} from 'redux-saga/effects';
import {ShopActionTypes} from '../ActionTypes';

export function* fetchCollectionAsync(){
    yield console.log('I am Fired');
}
export function* fetchCollectionStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionAsync
    );
}