import React from 'react';

const Multiple = ({word, color, backgroundColor}) => {
    const background ={
        backgroundColor: backgroundColor
    }
    const wordColor = {
        color: color
    }
    return(
        <div style={background}>
            <p style={wordColor}>The Multiple Word is {word}</p>
        </div>
    )
}

export default Multiple;