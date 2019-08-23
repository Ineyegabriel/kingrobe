import React from 'react';
import Styles from './CustomButtons.module.scss';
const CustomButtons = ({children,isGooglesignin, inverted,...otherProps}) => {
    return (
        <button className={[`${inverted?Styles.inverted: ''}`,Styles.customButton].join(' ')} {...otherProps}>{children}</button>
    );
};
export default CustomButtons;