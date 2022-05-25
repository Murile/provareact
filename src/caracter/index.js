import { useState } from "react"
import axios from "axios";

export default function Caracter() {
    const [texto,setTexto]= useState('');
    const [caracter,setCaracter]= useState('');
    const [resposta,setresposta]= useState('');
    
    async function Verificar(){
        const resp= await axios.get(`http://localhost:5000/dia2/freqcaracter/${texto}/${caracter}`)
        setresposta(resp.data.freqcaracter);
    }

    return (
        <main>
            <h1>Caracter</h1>
            <div>
                digite a palavra:<input type="text" value={texto} onChange={e=>setTexto(e.target.value)}/> 
            </div>
            <div>
                digite o caracter:<input type="text" value={caracter} onChange={e=>setCaracter(e.target.value)}/>
            </div>
            <div>
                <button onClick={ Verificar }>verificar</button>
            </div>
            <div>
                A Quantidade de Caracter é {resposta}
            </div>
        </main>
    )}