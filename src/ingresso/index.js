import { useState } from "react"
import axios from "axios";


export default function Ingresso() {
    const [qtdinteira, setQtdInteiras] = useState(0);
    const [qtdMeia, setQtdMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacionalide, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0)

    async function calcular() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', 
            { qtdinteira: qtdinteira,
                qtdMeia : qtdMeia,
                diaSemana : diaSemana,
                nacionalide : nacionalide

        })

        setTotal(resp.data.total);

    }

    return (
        <main>
            <h1> Ingresso </h1>

            <div> 
                Qtd. de Inteiras: <input type='text' value={qtdinteira} onChange={e => setQtdInteiras(Number(e.target.value))} />
            </div>
            <div> 
                Qtd. de Meias: <input type='text' value={qtdMeia} onChange={e => setQtdMeias(Number(e.target.value))}/>
            </div>
            <div> 
                Dia da Semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
            </div>
            <div> 
                Nacionalidade: <input type='text' value={nacionalide} onChange={e => setNacionalidade(e.target.value)} />
            </div>
            <div> 
                <button onClick={ calcular }> Calcular </button>
            </div>
            <div> 
                O total é R$ { total }
            </div>
        </main>
    )}