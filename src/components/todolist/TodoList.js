import React, {useState} from 'react';
import Input from './Input';
import Data from './Data';

const TodoList = props => {
    const [todo, setTodo] = useState([])
    return(
        <div>
            <h1>Daily To Do List</h1>
            <Input todo={todo} setTodo={setTodo}/>

            {todo.map((item, index) =>{
                return <Data item={item} index={index} todo={todo} setTodo={setTodo}/>
            })}

        </div>
    )
}

export default TodoList;