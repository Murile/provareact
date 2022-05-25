import { Link } from "react-router-dom"


export default function Home(){
    return (
        <main>
            <h1> Home </h1>
            <ul>
                <li><Link to='/caracter'>Caracter</Link></li>
                <li><Link to='/dobro'>Dobro</Link></li>
                <li><Link to='/somar'>Somar</Link></li>
                <li><Link to='/ingresso'>Ingresso</Link></li>
                <li><Link to='/maironumero'>MaiorNumero</Link></li>
                <li><Link to='/media'>Media</Link></li>
                <li><Link to='/tabuada'>Tabauda</Link></li>
                <li><Link to='/temperatura'>Temperatura</Link></li>
                <li><Link to='/corprimaria'>Cor</Link></li>
            </ul>
        </main>
    )}