import React from 'react';
import SpinnerComponent from '../../Spinner/Spinner';

const WithSpinner = (WrappedComponent) => {
    const wrappingcomponent = ({isloading, ...otherProps}) =>{
        return isloading ?<SpinnerComponent/>  : <WrappedComponent {...otherProps}/>
    };
    return wrappingcomponent;
};
export default WithSpinner;