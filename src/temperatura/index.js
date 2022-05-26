import { useState } from "react"
import axios from "axios";


export default function Temperatura() {
    const[numero,setNumero] = useState(0);
    const[resposta,setResposta]= useState(0);
     async function calcular(){
        const resp = await axios.get(`http://localhost:5000/temperatura?a=${numero}`)
             
         if (resp.data.temperatura === true) {
            setResposta('SIM!');
        }
        else {
            setResposta('NÃO!')
        }
     }
   
    return (
        <main>
            <h1>Temperatura</h1>
            <div>
                digite a sua temperatura: <input type="text" value={numero} onChange={e=>setNumero(Number(e.target.value))}/>
            </div>
            <button onClick={ calcular }>Verificar</button>
            <div>
                você está com febre? {resposta}
            </div>
        </main>
    )}