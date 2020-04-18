import React from 'react';

const Input = ({todo, setTodo, setList}) => {
    const handleChange = e => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
        let data = todo.list;
        setList(e => [
            ...e,
            data
        ])
        console.log(todo.list)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name='list' onChange={handleChange}/>
            <button type="submit">ADD</button>
        </form>
    )
}

export default Input;