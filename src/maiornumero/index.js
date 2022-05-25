import { useState } from "react"
import axios from "axios";

export default function MaiorNumero() {
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState(0);
    const [resposta, setResposta] = useState('');

    function adicionar(){
        setNumeros([...numeros, numero]);
        setNumero('');
    }

    async function verificarMaior() {
        const resp = await axios.post('http://localhost:5000/dia/maiorNumero', numeros);
        setResposta(resp.data.maior);
    }

    return (
        <main>
            <h1> Maior Número</h1>

            <div> 
                Número: <input type='text' /> <button> Adicionar Número</button>
            </div>
            <div>
                {numeros.map(item =>
                    <div> {item} </div>
                )}
            </div>
            <div>
                <button onClick={ verificarMaior }> Verificar</button> Maior número é {resposta}
            </div>
        </main>
    )}