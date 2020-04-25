import React from 'react';

const Value = props => {
    return(
        <div>
            {isNaN(props.value) ? <p>The word is {props.value}</p> : <p>The number is {props.value}</p>} 
        </div>
    )
}

export default Value;