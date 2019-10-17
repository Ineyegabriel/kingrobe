import {all,call} from 'redux-saga/effects';
import {fetchCollectionStart} from './shop/shopSagas';

export default function* rootSaga(){
    yield all([call(fetchCollectionStart)])
};