import React from 'react';
import Wrapper from './Wrapper';
import Nav from './Nav';
import FormWrapper from './FormWrapper';

const NavBar = e =>{
    return(
        <Wrapper>
            <Nav/>
            <FormWrapper/>
        </Wrapper>
    )
}
export default NavBar;