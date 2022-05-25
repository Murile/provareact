import { useState } from "react"
import axios from "axios";


export default function Somar() {
    const[numero,setNumero] = useState(0);
    const[numerodois,setNumerodois] = useState(0);
    const[resposta,setResposta]= useState(0);
     async function calcular(){
        const resp = await axios.get(`http://localhost:5000/somar?a=${numero}&b=${numerodois}`)
        setResposta(resp.data.soma)
    }
    

    return (
        <main>
            <h1>Somar</h1>
            <div>
                digite o primeiro numero:<input type="text" value={numero} onChange={e=>setNumero(Number(e.target.value))}/>
            </div>
            <div>
                digite o segundo numero:<input type="text" value={numerodois} onChange={e=>setNumerodois(Number(e.target.value))}/>
            </div>
            <div>
                <button onClick={calcular}>Calcular</button>
            </div>
            <div>
                o total é {resposta}
            </div>
        </main>
    )}