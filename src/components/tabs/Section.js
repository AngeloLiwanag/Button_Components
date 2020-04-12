import React from 'react';
import styles from './Tabs.module.css';

const Section = ({selectedTab}) => {
    return(
        <div className={styles.content}>
            <p>Tab <span className={styles.color}>{selectedTab}</span> content is showing here</p>
        </div>
    )
}

export default Section;