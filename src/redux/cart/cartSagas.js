import {all,call,put,takeLatest} from 'redux-saga/effects';
import  {UserActionTypes} from '../ActionTypes';
import {clearCart} from '../index';

export function* clearCartOnSignout() {
    yield put(clearCart());
}
export function* onSignnOutSuccess (){
  yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartOnSignout)
}
export function* cartSagas (){
    yield all([
        call(onSignnOutSuccess)
    ])
}