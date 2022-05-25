import { useState } from "react"
import axios from "axios";

export default function Tabuada() {
    const[numero,setNumero] = useState(0);
    const[resposta,setResposta]= useState(0);
     async function calcular(){
        const resp = await axios.get(`http://localhost:5000/tabuada?a=${numero}`)
        setResposta(resp.data.tabuada)
    }
    
    return (
        <di>
            <h1>Tabuada</h1>
            <div>
                digite um numero:<input type="text" value={numero} onChange ={e =>setNumero(Number(e.target.value))}/>
            </div>
            <div>
                <button onClick={calcular}>Calcular</button>
            </div>
            <div>
                A tabuada é {resposta}
            </div>
        </di>
    )}