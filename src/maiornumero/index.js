import { useState } from "react"
import axios from "axios";

export default function Maiornumero() {
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState(0);
    const [resposta, setResposta] = useState('');

    function Adicionar(){
        setNumeros([...numeros, numero]);
        setNumero('');
    }

    async function Verificarmaior() {
        const resp = await axios.post('http://localhost:5000/dia2/maiornumero', numeros);
        setResposta(resp.data.maior);
    }

    return (
        <main>
            <h1> Maior Número</h1>

            <div> 
                Número: <input type='text' value={numero} onChange={e=>setNumero(Number(e.target.value))}/> 
                <button onClick={ Adicionar }> Adicionar Número</button>

            </div>
            <div>
                {numeros.map(item =>
                    <div> {item} </div>
                )}
            </div>
            <div>
                <button onClick={ Verificarmaior }> Verificar</button>
                 Maior número é {resposta}
            </div>
        </main>
    )}