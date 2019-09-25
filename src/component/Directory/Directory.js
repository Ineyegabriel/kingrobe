import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectCurrentDirectory} from '../../redux/directory/directorySelector';
import Styles from './Directory.module.scss';
const Directory =({section}) => {
        return (
            <div className="directory-menu">
                {
                    section.map(({title,id,imageUrl,linkUrl}) => {
                        return <Link to={linkUrl} className={Styles.wrapper}>
                                    <MenuItem itemtitle={title} key={id} imgsrc={imageUrl}/>
                                </Link>
                    })

                }
            </div>
        );
};
const mapStateToProps = createStructuredSelector({
    section: selectCurrentDirectory
});
export default connect(mapStateToProps)(Directory);