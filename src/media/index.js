import { useState } from "react"
import axios from "axios";


export default function Media() {
   const [nota1,setNota1] = useState(0);
   const [nota2,setNota2] = useState(0);
   const[nota3,setNota3] = useState(0);
   const[resposta,setResposta] = useState(0);

   async function calcular(){
    const resp = await axios.post('http://localhost:5000/media', 
    { a: nota1,
        b : nota2,
        c : nota3

})

setResposta(resp.data.media);
   }
   
    return (
        <main>
            <h1>Média</h1>
            <div>
                adicine a primeira nota :<input type="text" value={nota1} onChange={e=>setNota1(Number(e.target.value))}/>
            </div>
            
            <div>
                adicine a segunda nota :<input type="text" value={nota2} onChange={e=>setNota2(Number(e.target.value))}/>
            </div>
            
            <div>
                adicine a terceira nota :<input type="text" value={nota3} onChange={e=>setNota3(Number(e.target.value))}/>
            </div>
            
            <div>
                <button onClick={calcular}>verificar</button>
            </div>
            
            <div>
                A nota é : {resposta}
            </div>
        </main>
    )}