import React from 'react';
import styles from './Form.module.css';

const Input = ({form, setForm}) => {
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setForm({
            ...form,
            submitted: true
        })
        console.log(form);
    }

    let fnMessage;
    let lnMessage;
    let emMessage;
    let pwMessage;
    let cpMessage;

    const {fn, ln, em, pw, cp} = form;
    if(fn.length < 2){
        fnMessage = <p>First name must be more than 2 characters</p>
    }
    if(ln.length < 2){
        lnMessage = <p>Last name must be more than 2 characters</p>
    }
    if(em.length < 2){
        emMessage = <p>Email must be more than 2 characters</p>
    }    
    if(pw.length < 8){
        pwMessage = <p>Password must be more than 8 characters</p>
    }
    if(pw !== cp){
        cpMessage = <p>Passwords must match</p>
    }


    return(
        <form className={styles.inlineBlock} onSubmit={handleSubmit}>
            {fnMessage}
            <label>First Name</label>
            <input type="text" name="fn" onChange={handleChange}/>
            <br/>
            {lnMessage}
            <label>Last Name</label>
            <input type="text" name="ln" onChange={handleChange}/>
            <br/>
            {emMessage}
            <label>Email</label>
            <input type="email" name="em" onChange={handleChange}/>
            <br/>
            {pwMessage}
            <label>Password</label>
            <input type="password" name="pw" onChange={handleChange}/>
            <br/>
            {cpMessage}
            <label>Confirm Password</label>
            <input type="password" name="cp" onChange={handleChange}/>
            <br/>
            <input type="submit"/>
        </form>    
    )
}

export default Input;