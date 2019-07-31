import React from 'react';
import './Homepage-Styles.scss';
import Directory from "../../component/Directory/Directory";
const Homepage = (props) => {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    );
};
export default Homepage;