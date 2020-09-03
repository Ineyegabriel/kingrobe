import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from "./component/Header/Header";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/User.Selector';
import {checkUserSession} from './redux/user/userActions';
import Spinner from './component/Spinner/Spinner';
import ErrorBoundary from './component/ErrorBoundary/ErrorBoundary.component';


const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Shoppage = lazy(() => import('./pages/Shoppage/Shoppage'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const SignInandUp = lazy(() => import('./pages/SignInandSignUp/SignInandSignUp'));

const App = ({checkingUserSession, currentuser}) =>{

    useEffect(() => {
        checkingUserSession();
    },[checkingUserSession]);
    return (
        <div className="App">

            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={Spinner}>
                        <Route exact path='/' component={Homepage}/>
                        <Route  path='/shop' component={Shoppage}/>
                        <Route  path='/checkout' component={Checkout}/>
                        <Route  path='/signin' render={() => currentuser ? (<Redirect to='/'/>) : (<SignInandUp/>) }/>
                    </Suspense>
                </ErrorBoundary>
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

