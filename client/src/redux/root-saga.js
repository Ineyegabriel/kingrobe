import {all,call} from 'redux-saga/effects';
import {ShopSaga} from './shop/shopSagas';
import {userSaga} from './user/userSaga';
import {cartSagas} from './cart/cartSagas';

export default function* rootSaga(){
    yield all([call(ShopSaga), call(userSaga), call(cartSagas)])
};