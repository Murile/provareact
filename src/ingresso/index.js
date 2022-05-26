import { useState } from "react"
import axios from "axios";


export default function Ingresso() {
    const [qtdInteira, setQtdInteiras] = useState(0);
    const [qtdMeia, setQtdMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0)

    async function calcular() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', 
            { qtdInteira: qtdInteira,
                qtdMeia : qtdMeia,
                diaSemana : diaSemana,
                nacionalidade : nacionalidade

        })

        setTotal(resp.data.total);

    }

    return (
        <main>
            <h1> Ingresso </h1>

            <div> 
                Qtd. de Inteiras: <input type='text' value={qtdInteira} onChange={e => setQtdInteiras(Number(e.target.value))} />
            </div>
            <div> 
                Qtd. de Meias: <input type='text' value={qtdMeia} onChange={e => setQtdMeias(Number(e.target.value))}/>
            </div>
            <div> 
                Dia da Semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
            </div>
            <div> 
                Nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
            </div>
            <div> 
                <button onClick={ calcular }> Calcular </button>
            </div>
            <div> 
                O total é R$ { total }
            </div>
        </main>
    )}