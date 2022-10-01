import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './componentes/Home'
import Pokedex from './componentes/Pokedex'
import PokedexId from './componentes/PokedexId'
import ProtectedRoutes from './componentes/ProtectedRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container'>
        <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>

        <Route element={<ProtectedRoutes/>}>

          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokedexId/>} />
          
        </Route>

          
        </Routes>
      </HashRouter>
      </div>
      
      
    </div>
  )
}

export default App
