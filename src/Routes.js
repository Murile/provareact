import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './home'
import Dobro from './dobro'
import Somar from './somar'
import Caracter from './caracter'
import Media from './media'
import Temperatura from './temperatura'
import Tabauda from './tabuada'
import MaiorNumero from './maiornumero'
import Ingresso from './ingresso'
import CorPrimaria from './corprimaria'



export default function SiteRoute(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/dobro' element = {<Dobro/>}/>
            <Route path='/somar' element = {<Somar/>}/>
            <Route path='/caracter' element = {<Caracter/>}/>
            <Route path='/media' element = {<Media/>}/>
            <Route path='/temperatura' element = {<Temperatura/>}/>
            <Route path='/tabuada' element = {<Tabauda/>}/>
            <Route path='/maiornumero' element = {<MaiorNumero/>}/>
            <Route path='/ingresso' element = {<Ingresso/>}/>
            <Route path='/corprimaria' element = {<CorPrimaria/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}