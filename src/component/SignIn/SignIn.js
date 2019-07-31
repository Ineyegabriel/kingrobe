import React, {Component} from 'react';
import FormInput from "../FormInput/FormInput";
import CustomButtons from "../CustomButtons/CustomButtons";
import Styles from './SignIn.module.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    submitHandler = event =>{
        event.preventDefault();
        this.setState({email: '', password: ''})
    }
    inputonChangedhandler = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className={Styles.signIn}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and passwrd</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput type="email" name="email" label='Email'
                               value={this.state.email} required
                               handlechange={this.inputonChangedhandler}/>

                    <FormInput type="password" name="password" label='Password'
                               value={this.state.password} required
                               handlechange={this.inputonChangedhandler}/>
                    <div className={Styles.buttonContainer}>
                        <CustomButtons type="submit">Sign In</CustomButtons>
                        <CustomButtons onClick={signInWithGoogle} isGooglesignin>Sign In with Google</CustomButtons>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;