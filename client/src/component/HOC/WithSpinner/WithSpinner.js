import React from 'react';
import SpinnerComponent from '../../Spinner/Spinner';

const WithSpinner = (wrappedComponent) => {
    const wrappingcomponent = ({isloading, ...otherProps}) =>{
        return isloading ?<SpinnerComponent/>  : <wrappedComponent {...otherProps}/>
    };
    return wrappingcomponent;
};
export default WithSpinner;