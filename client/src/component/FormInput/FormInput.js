import React from 'react';
import Styles from './FormInput.module.scss';
const FormInput = ({handlechange,label, ...otherProps}) => {
    return (
        <div className={Styles.group}>
            <input  className={Styles.formInput} onChange={handlechange} {...otherProps}/>
            {
                label ?
                    (<label className={[`${ otherProps.value.length ? Styles.shrink : ''}`, Styles.formInputLabel].join('')}>
                        {label}
                    </label>)
                    :null

            }
        </div>
    );
};
export default FormInput;