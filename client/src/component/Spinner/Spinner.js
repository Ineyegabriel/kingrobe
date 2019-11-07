import React from 'react';
import Styles from './Spinner.module.scss'
const Spinner = () => {
    return (
        <div className={Styles.spinnerContainer}>
            <div className={Styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};
export default Spinner;