import React from 'react';
import styles from './Tabs.module.css';

const Button = ({item, selectedTab, setSelectedTab}) => {
    const clickHandler = (e, value) => {
        console.log("Tab " + value + " content is showing here.")
        setSelectedTab({
            ...selectedTab,
            [e.target.name]: value,
            clicked:true
        })
        console.log(selectedTab)
    }

    return(
        <button 
            onClick={(e) => 
            clickHandler(e, item)} 
            className={styles.btn} 
            name="tab"
        >Tab {item}</button>
    )
}

export default Button;