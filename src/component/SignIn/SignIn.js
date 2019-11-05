import React, {useState} from 'react';
import FormInput from "../FormInput/FormInput";
import CustomButtons from "../CustomButtons/CustomButtons";
import Styles from './SignIn.module.scss';
import {connect} from 'react-redux';
import {googleSigninStart, emailSigninStart} from '../../redux/user/userActions';
const SignIn = ({signinwithEmail,signinwithGoogle}) => {
    const [userCredentials, setuserCredentials] = useState({ email : '', password: ''});
    const {email,password} = userCredentials;
    const submitHandler = async event =>{
        event.preventDefault();
        signinwithEmail(email, password);
    };
    const inputonChangedhandler = event =>{
        const {name, value} = event.target;
        console.log(`${value}`);
        setuserCredentials({...userCredentials, [name]: value})
    };
    return (
        <div className={Styles.signIn}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput type="email" name="email" label='Email'
                           value={email} required
                           handlechange={inputonChangedhandler}/>
                <FormInput type="password" name="password" label='Password'
                           value={password} required
                           handlechange={inputonChangedhandler}/>
                <div className={Styles.buttonContainer}>
                    <CustomButtons type="submit">Sign In</CustomButtons>
                    <CustomButtons type="button" onClick={signinwithGoogle} isGooglesignin>Sign In with Google</CustomButtons>
                </div>
            </form>
        </div>
    );
}
const mapDispatchToProps = dispatch =>({
    signinwithGoogle: () => dispatch(googleSigninStart()),
    signinwithEmail : (email, password) => dispatch(emailSigninStart({email, password}))
});
export default connect(null,mapDispatchToProps)(SignIn);