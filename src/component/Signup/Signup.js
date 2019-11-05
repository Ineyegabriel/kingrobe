import React, {useState} from 'react';
import FormInput from "../FormInput/FormInput";
import CustomButtons from "../CustomButtons/CustomButtons";
import {connect} from 'react-redux';
import {SignupStart} from '../../redux/user/userActions';
import Styles from './Signup.module.scss';
const Signup = ({Signinup}) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        ConfirmPassword:''
    });
    const {displayName,email,password,ConfirmPassword} = userCredentials;

    const inputChangeHandler = event =>{
        const {name,value} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    };
    const formHandleSubmit = async event=>{
        event.preventDefault();
        if( password !== ConfirmPassword) {
            alert("Passwords did not match !");
            return
        }
        Signinup({displayName,email,password});
    };


    return (
        <div className={Styles.signup}>
            <h2 className={Styles.title}>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="signupForm" onSubmit={formHandleSubmit} >
                <FormInput type="text" name="displayName" value={displayName}
                           onChange={inputChangeHandler} label="Display Name" required/>
                <FormInput type="email" name="email" value={email}
                           onChange={inputChangeHandler} label="Email" required/>
                <FormInput type="password" name="password" value={password}
                           onChange={inputChangeHandler} label="Password" required/>
                <FormInput type="password" name="ConfirmPassword" value={ConfirmPassword}
                           onChange={inputChangeHandler} label="Confirm Password" required/>
                <CustomButtons type="submit">Sign Up</CustomButtons>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch =>({
    Signinup: (usercredentials) => dispatch(SignupStart(usercredentials))
});

export default connect(null, mapDispatchToProps)(Signup);