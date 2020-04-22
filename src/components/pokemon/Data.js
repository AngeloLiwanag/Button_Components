import React from 'react';

const Data = ({item, index}) => {
    return(
        <div>
            <ul>
                <li>{item.pokemon[index].name}</li>
            </ul>
        </div>
    )
}

export default Data;