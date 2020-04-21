import React, { useContext } from 'react';
import MyContext from './context/MyContext';

const Nav = e =>{
    const context = useContext(MyContext);
    const navBar = {
        backgroundColor: 'purple',
        padding: '10px',
        color: 'white',
        textAlign: 'right'
    };

    return(
        <div style={navBar}>
            Hi {context.name.user}!
        </div>
    )
}
export default Nav;