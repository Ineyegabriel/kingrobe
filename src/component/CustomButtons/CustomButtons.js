import React from 'react';
import Styles from './CustomButtons.module.scss';
const CustomButtons = ({children,isGooglesignin, ...otherProps}) => {
    return (
        <button className={[`${isGooglesignin?Styles.googleblue: ''}`,Styles.customButton].join(' ')} {...otherProps}>{children}</button>
    );
};
export default CustomButtons;