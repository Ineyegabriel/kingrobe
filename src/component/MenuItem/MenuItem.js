import React from 'react';
import Styles from './MenuItemStyle.module.scss';
const MenuItem = ({itemtitle,imgsrc}) => {
    const imgstyle = {
        backgroundImage: `url(${imgsrc})`,
    };
    console.log(imgsrc);
    return (
            <div className={Styles.menu_item}>
                <div className={Styles.background_image} style={imgstyle}></div>
                <div className={Styles.content}>
                    <div className={Styles.title}>{itemtitle}</div>
                    <span className={Styles.subtitle}>SHOP NOW</span>
                </div>
            </div>
    );
};
export default MenuItem;