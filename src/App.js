import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/Shoppage";
import SignInandUp from './pages/SignInandSignUp/SignInandSignUp';
import Checkout from "./pages/Checkout/Checkout";
import Header from "./component/Header/Header";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userActions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/User.Selector';

class App extends React.Component{
    unsubscribeFromAuth = null;
    componentDidMount(){
        /*Here we are fetching the details of the authenticated user from auth firebase library and doing two things;
        * 1.) checking if the user already exist, then let then mark them as authenticated
        * 2.) checking if the user doesn't exist, then create the new user in our firestore database and authenticate
        * That is why we have the createUserProfileDocument() function we created in our firebase.utils*/
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
            const {settingCurrentUser} = this.props;
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    settingCurrentUser({
                        currentUser:{
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                })
            }
                /*if userAuth which is gotten from the auth library is null because user is not authenticated,
                * we still want to set the current user to be null*/
                settingCurrentUser(userAuth);

            /*    addDocumentandCollection('collections', collectionsArray.map( ({items,title}) => ({ items, title}) ));*/

        });
    }
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render(){
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route  path='/shop' component={Shoppage}/>
                    <Route  path='/checkout' component={Checkout}/>
                    <Route  path='/signin' render={() =>this.props.currentuser ? (<Redirect to='/'/>) : (<SignInandUp/>) }/>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector( {
    currentuser:  selectCurrentUser,
});
const mapDispatchToProps = dispatch =>{
    return{
        settingCurrentUser: (user) => dispatch(setCurrentUser(user))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

