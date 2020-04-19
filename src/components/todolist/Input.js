import React from 'react';

const Input = ({todo, setTodo}) => {
    let task = {
        list: '',
        isComplete: false
    }

    const handleChange = e => {
        task.list = e.target.value;
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodo([...todo, task]);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name='task' type="text"/>
            <button type="submit">ADD</button>
        </form>
    )
}

export default Input;