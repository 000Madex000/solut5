import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import pikachu from '../img/pikachu.png'
import axios from 'axios';
import PokemonCard from './PokemonCard';
import logo5 from '../img/logo5.svg'
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {

    const name = useSelector(state => state.userName);
    const [pokemonList, setPokemonList] = useState([]);
    const [listPoke, setListPoke] = useState([]);
    const [nameInput, setNameInput] = useState('');
    const navigate = useNavigate();

    const searchName = () => {
        navigate(`/pokedex/${nameInput}`)
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemonList(res.data.results));

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setListPoke(res.data.results));

    }, [])
    console.log(listPoke)

    const searchPokemon = (pokemonUrl) => {
        axios.get(pokemonUrl)
            .then(res => setPokemonList(res.data.pokemon))
    }

    return (
        <div className='container_pokedex'>
            <div className='container_logo-pokemon'>
                <img className='img_pikachu' src={pikachu} alt="" width={300} />
                <img src={logo5} alt="" />
                <p className='pokedex_phase'>
                    Welcome to your first day as a coach " {name}"
                </p>

            </div>

            <div className='box_btn'>
                <div className='btn'>
                    <input type="text" placeholder='name pokemon'
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)} />
                    <button onClick={searchName}> search
                    </button>
                </div>
                <select className='select_btn' onChange={e => searchPokemon(e.target.value)} >
                    <option >
                        select your pokemon
                    </option>
                    {
                        listPoke.map(pokemon => (
                            <option
                                value={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
                                {pokemon.name}
                            </option>
                        ))
                    }
                </select>

            </div>
            <div className='container_card-pokemon'>
                {
                    pokemonList.map(Pokedex => (
                        <PokemonCard url={Pokedex.url} key={Pokedex.url} />
                    ))
                }
            </div>


        </div>
    );
};

export default Pokedex;