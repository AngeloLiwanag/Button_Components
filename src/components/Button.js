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
        const {buttonText} = this.props;
        const {clickCount} = this.state;
        const {handleClick} = this;

        return (
            <div className={styles.inlineBlock}>
                <button className={styles.btn} onClick={handleClick}>
                    {buttonText}
                </button>
                <p>You pressed this button {clickCount} times </p>
            </div>
        );
    }
}

export default Button;