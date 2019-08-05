import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/Shoppage";
import SignInandUp from './pages/SignInandSignUp/SignInandSignUp';
import Header from "./component/Header/Header";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;
    componentDidMount(){
        /*Here we are fetching the details of the authenticated user from auth firebase library and doing two things;
        * 1.) checking if the user already exist, then let then mark them as authenticated
        * 2.) checking if the user doesn't exist, then create the new user in our firestore database and authenticate
        * That is why we have the createUserProfileDocument() function we created in our firebase.utils*/
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
            console.log(userAuth);
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser:{
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                })
            }
            else{
                /*if userAuth which is gotten from the auth library is null because user is not authenticated,
                * we still want to set the current user to be null*/
                this.setState({currentUser: userAuth});
            }

        });
    }
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render(){
        return (
            <div className="App">
                <Header currentuser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/shop' component={Shoppage}/>
                    <Route exact path='/signin' component={SignInandUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
