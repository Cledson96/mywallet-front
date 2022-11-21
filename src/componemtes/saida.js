import '../style.css'
import { useNavigate} from 'react-router-dom'
import { postSaida } from './requisicao'
import { useState } from 'react';

export default function Saida({dados}) {
    const [carregando, setcarregando] = useState([]);
    const [enventrada, setenventrada] = useState({});
    const navigate = useNavigate();
    function handleForm({ value, name }) {
        setenventrada({
            ...enventrada,
            [name]: value,
        });
    };
    console.log(enventrada)
    function autoriza(){
        setcarregando(["referencia"])
        let resposta = postSaida(enventrada,dados.token);
       
        resposta.then((ref) => {
        
                    navigate('/registros')
        })
        resposta.catch((ref) => { setcarregando([]);console.log(ref.response.data)})

    }
    return (
        <div className='fundo'>
            <div className='registrando'>
                <div className="topo"><h2 >Nova saida</h2> </div>
               
                
                <input name="valor" type="number" placeholder='Valor' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
                <input name="descricao" type="string" placeholder='Descrição' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
                <button onClick={autoriza} className='Entrar'>Salvar saida</button>

            </div>

        </div>

    )
}