import React from 'react';

const Alert = ({songs}) => {
    const onClickHandler = (e, value) => {
        alert("You clicked the " + value + " button!");
    }
 
    return songs.map((item, index) => {
        return <button onClick={(e) => onClickHandler(e, item)}>{item}</button>
    });
}

export default Alert;