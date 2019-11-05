import {UserActionTypes} from '../ActionTypes';

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const googleSigninStart = () =>({
    type: UserActionTypes.GOOGLE_SIGNIN_START
});
export const emailSigninStart = emailandpassword =>({
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload: emailandpassword
});
export const SigninSuccess = user => ({
    type: UserActionTypes.SIGNIN_SUCCESS,
    payload: user
});

export const SigninFailure = error => ({
    type: UserActionTypes.SIGNIN_FAILURE,
    payload: error
});

export const SignOutStart = () => ({
    type: UserActionTypes.SIGNOUT_START
});
export const SignOutSuccess = () =>({
    type: UserActionTypes.SIGNOUT_SUCCESS
});
export const SignOutFailure = (error) => ({
    type: UserActionTypes.SIGNIN_FAILURE,
    payload: error
});

export const SignupStart = (usercredentials) =>({
    type: UserActionTypes.SIGNUP_START,
    payload: usercredentials
});

export const SignupSuccess = ({user, additionalData}) =>({
    type: UserActionTypes.SIGNUP_SUCCESS,
    payload: {user, additionalData}
});

export const SignupFailure = error =>({
    type: UserActionTypes.SIGNUP_FAILURE,
    payload: error
});