import React from 'react';
import styles from './TodoList.module.css';

const Data = ({item, index, todo, setTodo}) => {
    const handleDelete = e => {
        setTodo(()=>{
            return todo.filter(item => todo.indexOf(item) !== index);
        })
    }
    
    const handleChange = e => {
        todo[index].isComplete = !todo[index].isComplete;
        setTodo([...todo]);
    }
    return(
        <div>
            {item.isComplete ? <b className={styles.crossOver}>{item.list}</b> : <b>{item.list}</b>}
            <input onChange={handleChange} type="checkbox"/>
            <button onClick={handleDelete}>DELETE</button>
        </div>

    )
}

export default Data;