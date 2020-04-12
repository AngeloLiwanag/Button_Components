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
                        <p className={link}>about</p>
                    </li>
                    <li>
                        <p className={link}>blog</p>
                    </li>
                    <li>
                        <p className={link}>contact</p>
                    </li>
                    <li>
                        <p className={link}>projects</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;