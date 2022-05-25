import { useState } from "react"
import axios from "axios";

export default function Dobro() {
   const[numero,setNumero] = useState(0);
   const[resposta,setResposta]= useState(0);
    async function calcular(){
       const resp = await axios.get(`http://localhost:5000/dobro/${numero}`)
       setResposta(resp.data.dobro)
   }
   
    return (
        <main>
            <h1>Dobro</h1>
            <div>
                digite um numero: <input type="text" value={numero} onChange={e=>setNumero(Number(e.target.value))}/>
            </div>
            <div>
                <button onClick={calcular}>Calcular</button>
            </div>
            <div>
                O dobro é {resposta}
            </div>
            
        </main>
    )}