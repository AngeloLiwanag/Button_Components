import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Axios = props => {
    const [responseData, setResponseData] = useState([]);
    let [clicked, setClicked] = useState(false);

    const handleClick = e => {
        setClicked(clicked = !clicked)
    }

    useEffect(()=>{
        if(clicked === true){
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
                .then(response=>{
                    let pokemon = {
                        item: response
                    }
                    setResponseData([
                        ...responseData,
                        pokemon
                    ])
                })
            setClicked(clicked = !clicked);
            console.log(clicked)
        }
    }, [clicked]); 


    return(
        <div>
            <button onClick={handleClick}>Fetch Pokemon With Axios</button>
            {responseData.map((pokemon, index) =>{
                return (
                    <ul>
                        <li>{pokemon.item.data.results[index].name}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Axios;