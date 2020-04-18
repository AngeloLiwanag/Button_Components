import React, {useState} from 'react';
import Button from './Button';
import Section from './Section';
import styles from './Tabs.module.css';

const Tabs = ({section}) => {
    const [selectedTab, setSelectedTab] = useState({
        tab:"",
        clicked: false
    })

    return (
        <div className={styles.inlineBlock}>
            {section.map((item, i) => (
                <Button 
                item={item} 
                selectedTab={selectedTab} setSelectedTab={setSelectedTab}
                />)
            )}
            {selectedTab.clicked && <Section selectedTab={selectedTab} setSelectedTab={setSelectedTab} tab={selectedTab.tab}/>}
        </div>
    )
}

export default Tabs;