import React, {useState} from 'react';
import Input from './Input';
import Data from './Data';

const TodoList = props => {
    const [todo, setTodo] = useState({
        list:'',
        check: false,
        delete: false
    })
    const [list, setList] = useState([])

    return(
        <div>
            <Input todo={todo} setTodo={setTodo} setList={setList}/>
            {list.map((items, i) => {
                    return(
                        <div>
                            {todo.delete === false && <Data key={i} id={i} todo={todo} setTodo={setTodo} list={items}/>}
                        </div>
                    ) 
                })
            }
        </div>
    )
}

export default TodoList;