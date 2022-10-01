import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const PokedexId = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setCharacter(res.data))
    }, [])
    console.log(character)
    return (
        <div>
            <div className='box_id'>
                <h2 className='id_title'>{id}</h2>
                <p>id:{character.id}</p>
                <p>type:{character.types?.[0].type.name}</p>
                <img className='id_img' src={character.sprites?.other['dream_world'].front_default} alt="" />
                <p className='id_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sit odit! Debitis, nam? Recusandae sed nobis unde nihil non explicabo repellendus voluptatum consectetur laboriosam vitae cumque, et a, saepe atque?</p>
            </div>
            





        </div>
    );
};

export default PokedexId;