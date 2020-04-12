import React from 'react';

const Box = ({box}) => {

    const boxStyle = {
        backgroundColor: `${box}`,
        height: '150px',
        width: '150px',
        border: '1px solid black',
        margin: '10px'
    }

    return(
        <div style={boxStyle}>
            {box}
        </div>
    )
}

export default Box;