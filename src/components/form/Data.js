import React from 'react';
import styles from './Form.module.css';

const Data = ({form}) => {
    const {fn, ln, em, pw, cp} = form;
    return(
        <div className={styles.inlineBlock}>
            <p className={styles.noSpace}>First Name: <span className={styles.spanColor}>{fn}</span></p>
            <p className={styles.noSpace}>Last Name: <span className={styles.spanColor}>{ln}</span></p>
            <p className={styles.noSpace}>Email: <span className={styles.spanColor}>{em}</span></p>
            <p className={styles.noSpace}>Password: <span className={styles.spanColor}>{pw}</span></p>
            <p className={styles.noSpace}>Confirm Password: <span className={styles.spanColor}>{cp}</span></p>

        </div>
    )
}

export default Data;