import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component{
    render(){
        const {logoText} = this.props;
        const {header, logo, link } = styles;
        return(
            <div className={header}>
                <h3 className={logo}>{logoText}</h3>
                <ul>
                    <li>
                        <a href="#" className={link}>about</a>
                    </li>
                    <li>
                        <a href="#" className={link}>contact</a>
                    </li>
                    <li>
                        <a href="#" className={link}>contact</a>
                    </li>
                    <li>
                        <a href="#" className={link}>contact</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;