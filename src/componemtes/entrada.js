import '../style.css'
import { useNavigate } from 'react-router-dom'
import { postEntrada } from './requisicao'
import { useState } from 'react';

export default function Entrada({ dados }) {
    const [carregando, setcarregando] = useState([]);
    const [enventrada, setenventrada] = useState({});
    const navigate = useNavigate();
    function handleForm({ value, name }) {
        setenventrada({
            ...enventrada,
            [name]: value,
        });
    };
    function autoriza() {

        setcarregando(["referencia"])
        let resposta = postEntrada(enventrada, dados.token);

        resposta.then((ref) => {
            navigate('/registros')
        })
        resposta.catch(() => { setcarregando([])})

    }
    return (
        <div className='fundo'>
            <div className='registrando'>
                <div className="topo"><h2 >Nova entrada</h2> </div>


                <input name="valor" type="number" placeholder='Valor' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
                <input name="descricao" type="string" placeholder='Descrição' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
                <button onClick={autoriza} className='Entrar'>Salvar entrada</button>

            </div>

        </div>

    )
}