import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component{
    render(){
        return (
            <div>
                <button className={styles.btn}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}

export default Button;