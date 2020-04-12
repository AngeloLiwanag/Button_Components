import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }

    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }

    render(){
        const {buttonText, numberText} = this.props;
        const {clickCount} = this.state;
        const {handleClick} = this;

        return (
            <div className={styles.inlineBlock}>
                <h1>Button with class components!</h1>
                <button className={styles.btn} onClick={handleClick}>
                    {buttonText}
                </button>
                <p>You pressed this button {clickCount} times </p>
                <p>{numberText} + {clickCount} = {numberText + clickCount}</p>
            </div>
        );
    }
}

export default Button;