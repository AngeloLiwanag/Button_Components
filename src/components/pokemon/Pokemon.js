import React, {useState} from 'react';
import Button from './Button';
import Data from './Data';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);

    return(
        <div>
            <Button pokemon={pokemon} setPokemon={setPokemon}/>
            {pokemon.map((item, index) => {
                return <Data item={item} index={index}/>
            })}
        </div>
    )
}

export default Pokemon;