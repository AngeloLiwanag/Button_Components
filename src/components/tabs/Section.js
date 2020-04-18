import React from 'react';
import styles from './Tabs.module.css';

const Section = ({selectedTab, setSelectedTab, tab}) => {
    const clickHandler = e => {
        setSelectedTab ({
            clicked: false
        })
    }
    return(
        <div className={styles.content}>
            <p>Tab <span className={styles.color}>{tab}</span> content is showing here</p>
            <button className={styles.exit} onClick={clickHandler}>Exit</button>
        </div>
    )
}

export default Section;