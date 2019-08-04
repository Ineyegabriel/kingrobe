import React from 'react';
import SignIn from "../../component/SignIn/SignIn";
import Signup from "../../component/Signup/Signup";
import Styles from "./SignInandSignUp.module.scss";
const SignInandSignUp = (props) => {
    return (
        <div className={Styles.signIn_and_signUp}>
            <SignIn/>
            <Signup/>
        </div>
    );
};
export default SignInandSignUp;