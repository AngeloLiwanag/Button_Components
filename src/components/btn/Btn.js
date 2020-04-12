import React, { useState } from 'react';
import styles from './Btn.module.css';


const Btn = props => {
    const [ state, setState ] = useState({
        clickCount: 0
    });

    const handleClick = e => {
        e.preventDefault();
        setState({
            clickCount: state.clickCount + 1
        });
    }

    const {btnText, numText} = props;
    return(
        <div className={styles.inlineBlock}>
            <h1>Button with function components!</h1>
            <button className={styles.btn} onClick={handleClick}>
                {btnText}
            </button>
            <p>You pressed this button {state.clickCount} times</p>
            <p>{numText} + {state.clickCount} = {numText + state.clickCount}</p>
        </div>
    );
}

export default Btn;