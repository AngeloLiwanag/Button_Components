import React from 'react';

const Color = ({color, setColor, box, setBox}) => {
    const handleChange = e => {
        setColor({
            ...color,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setColor({
            color: ''
        })
        let box = {
            color: color.color
        }
        setBox(e => [...e, box]);
    }

    return( 
        <form onSubmit={handleSubmit}>
            <span>Color</span>
            <input type="text" name="color" onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default Color;