import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'




const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({});
    const [imgPok, setImgPok] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data));
    }, [])

    useEffect(() => {
        axios.get(url)
            .then(res => setImgPok(res.data.sprites?.other['dream_world'].front_default));
    }, [])

    
    return (
        <div className='main_container' >
            <div className='box'>
                <div className='container_card' onClick={() => navigate(`/pokedex/${pokemon.name}`)}>
                <img className='img_card' src={imgPok} alt="" />
                <h3 className='title_card'> <b>{pokemon.name}</b>  <br /> <span> hp: {pokemon.stats?.[0].base_stat}</span></h3> <br />
                <hr />
                <div className='box_phase'>
                    <p> <b>type:</b>  {pokemon.types?.[0].type.name}</p>
                    <p> <b>ability:</b>  {pokemon.abilities?.[0].ability.name}</p>
                </div>
            </div>
            


            </div>
        </div>

    );
};

export default PokemonCard;