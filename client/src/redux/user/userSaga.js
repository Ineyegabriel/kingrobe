import {takeLatest,put,all,call} from 'redux-saga/effects';
import {UserActionTypes} from '../ActionTypes';
import {auth,GoogleProvider,createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import {SigninFailure,SigninSuccess, SignOutSuccess, SignOutFailure,SignupSuccess,SignupFailure} from './userActions';

export function* getUserSnapShot(userAuth, additionalData) {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapShot = yield userRef.get();
        yield put(
            SigninSuccess({
                id: userSnapShot.id,
                ...userSnapShot.data()
            })
        );
    }
    catch(error){
        yield put(SigninFailure(error));
    }
}

export function* isUserAuthenticated() {
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getUserSnapShot(userAuth);

    }
    catch (error){
        yield put(SigninFailure(error));
    }
}

export function* onCheckuserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* SigninwithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(GoogleProvider);
        yield getUserSnapShot(user);
    }catch (error){
        yield put(SigninFailure(error))
    }
}

export function* onGoogleSigninStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, SigninwithGoogle)
}

export function* SigninwithEmail({payload: { email, password }}) {
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getUserSnapShot(user);
    }catch(error){
        yield put(SigninFailure(error))
    }
}

export function* onEMailSigninStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, SigninwithEmail)
}

export function* SigningOut () {
   try{
       yield auth.signOut();
       yield put(SignOutSuccess());
   }catch(error){
        yield put(SignOutFailure(error));
   }
}

export function* onSignout(){
    yield takeLatest(UserActionTypes.SIGNOUT_START, SigningOut)
}

export function* SigningUp({payload: {email, password, displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(SignupSuccess({ user, additionalData: {displayName} }) )
    }
    catch(error) {
        yield put(SignupFailure(error))
    }
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGNUP_START, SigningUp)
};
export function* signinAfterSignup({payload: {user, additionalData}}){
    yield getUserSnapShot(user, additionalData)
}
export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signinAfterSignup)
}
export function* userSaga() {
    yield all([
        call(onGoogleSigninStart),
        call(onEMailSigninStart),
        call(onCheckuserSession),
        call(onSignout),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}