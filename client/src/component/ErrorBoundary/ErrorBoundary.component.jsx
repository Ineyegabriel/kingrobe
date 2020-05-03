import React from 'react';
import Spinner from '../Spinner/Spinner';
import PageNotFound from '../../PageNotFound/PageNotFound.component';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasError){
            return <PageNotFound/>
        }
        return this.props.children;
    }

}

export default ErrorBoundary;