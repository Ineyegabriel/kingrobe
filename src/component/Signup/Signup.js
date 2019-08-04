import React, {Component} from 'react';
import FormInput from "../FormInput/FormInput";
import CustomButtons from "../CustomButtons/CustomButtons";
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import Styles from './Signup.module.scss';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password:'',
            ConfirmPassword:''
        };
    }
    inputChangeHandler = event =>{
        const {name,value} = event.target;
        this.setState({[name]: value});
    };
    formHandleSubmit = async event=>{
        event.preventDefault();
        const {displayName,email,password,ConfirmPassword} = this.state;
        if( password !== ConfirmPassword) {
            alert("Passwords did not match !");
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                ConfirmPassword:''
            });
        }
        catch(error) {
            console.log(error.message);
        }
    }
    render() {
        const {displayName,email,password,ConfirmPassword} = this.state;
        return (
            <div className={Styles.signup}>
                <h2 className={Styles.title}>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="signupForm"onSubmit={this.formHandleSubmit} >
                    <FormInput type="text" name="displayName" value={displayName}
                               onChange={this.inputChangeHandler} label="Display Name" required/>
                    <FormInput type="email" name="email" value={email}
                               onChange={this.inputChangeHandler} label="Email" required/>
                    <FormInput type="password" name="password" value={password}
                               onChange={this.inputChangeHandler} label="Password" required/>
                    <FormInput type="password" name="ConfirmPassword" value={ConfirmPassword}
                               onChange={this.inputChangeHandler} label="Confirm Password" required/>
                    <CustomButtons type="submit">Sign Up</CustomButtons>
                </form>
            </div>
        );
    }
}

export default Signup;