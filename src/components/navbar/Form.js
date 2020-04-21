import React, { useContext } from 'react';
import MyContext from './context/MyContext';

const Form = e =>{
    const user = useContext(MyContext);

    const handleChange = e => {
        e.preventDefault();
        user.setName({
            ...user.name,
            [e.target.name]: e.target.value
        })
        console.log(user.name.user)
    }
    return(
        <div>
            <label>Your Name:</label>
            <input onChange={handleChange} type="text" name="user"/>
        </div>
    )
}
export default Form;