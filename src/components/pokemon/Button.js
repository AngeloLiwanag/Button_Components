import React from 'react';

const Button = ({pokemon, setPokemon}) => {

    const handleClick = e => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                return response.json();
            }).then(response => {
                // console.log ('Fetch response:', response.results);

                let item = {
                    pokemon : response.results
                }

                setPokemon([
                    ...pokemon,
                    item
                ])

                console.log(item)

            }).catch( error => {
                console.log ('Fetch error:', error);
            })

    }
    return(
        <div>
            <button onClick={handleClick}>Fetch Pokemon</button>
        </div>
    )
}

export default Button;