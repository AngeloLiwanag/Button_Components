import React from 'react';
import styles from './TodoList.module.css';

const Data = ({key, id, todo, setTodo, list}) => {
    const handleCheck = e => {
        setTodo({
            ...todo,
            check: true,
        })
    }

    const handleDelete = e => {
        setTodo({
            ...todo,
            delete: true
        })

    }

    // const handleDelete = e => {
    //     console.log(typeof(list))
    //     setTodo(e => list.filter(todo => todo !== id))
    // }

    return(
        <div>
            {todo.check ? <label className={styles.crossOver}>{list}</label> : <label>{list}</label>}
            <input type="checkbox" onChange={handleCheck}/>
            <button onClick={handleDelete}>DELETE</button>
        </div>

    )
}

export default Data;