import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/Shoppage";
import SignInandUp from './pages/SignInandSignUp/SignInandSignUp';
import Checkout from "./pages/Checkout/Checkout";
import Header from "./component/Header/Header";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/User.Selector';
import {checkUserSession} from './redux/user/userActions';
const App = ({checkingUserSession, currentuser}) =>{

    useEffect(() => {
        checkingUserSession();
    },[checkingUserSession]);

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route  path='/shop' component={Shoppage}/>
                <Route  path='/checkout' component={Checkout}/>
                <Route  path='/signin' render={() => currentuser ? (<Redirect to='/'/>) : (<SignInandUp/>) }/>
            </Switch>
        </div>
    );
}
const mapStateToProps = createStructuredSelector( {
    currentuser:  selectCurrentUser,
});
const mapDispatchToProps = dispatch =>({
   checkingUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps,mapDispatchToProps)(App);

