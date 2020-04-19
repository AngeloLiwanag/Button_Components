import React, {useState} from 'react';
import Input from './Input';
import Data from './Data';

const TodoList = props => {
    const [todo, setTodo] = useState([])
    return(
        <div>
            <Input todo={todo} setTodo={setTodo}/>

            {todo.map((item, index) =>{
                return <Data item={item} index={index} todo={todo} setTodo={setTodo}/>
            })}

            {/* {list.map((items, i) => {
                    return(
                        <div>
                            {todo.delete === false && <Data key={i} id={i} todo={todo} setTodo={setTodo} list={items}/>}
                        </div>
                    ) 
                })
            } */}
        </div>
    )
}

export default TodoList;