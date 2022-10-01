import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ash from '../img/ash.png'
import submit from '../img/submit.png'
import { useDispatch } from 'react-redux/es/exports';
import { changeName } from '../store/slice/userName.slice';
import {useNavigate} from 'react-router-dom'

const Home = () => {

    const dispatch = useDispatch();
    const [user,setUser] = useState('');
    const navigate = useNavigate();

    const dispatchUserName = () => {
        dispatch(changeName(user)) ;
        navigate('/pokedex')
    }

    return (
        <div>
            <div className='box_home'>
                <h1 className='home_title'>!WELCOME COACH!</h1>
                <p className='home_p'>Give me your name to start</p>
                <img className='home_img' src={ash} alt="" />
                <div className='box_input'>
                    <input 
                     className='home_input'
                      type="text" 
                      placeholder='your nickname'
                      value={user} 
                      onChange={e=>setUser(e.target.value)}/>
                    <img onClick={dispatchUserName} className='home_img-pokebola' src={submit} alt="" width='50px' />
                </div>

            </div>

        </div>
    )
};

export default Home;