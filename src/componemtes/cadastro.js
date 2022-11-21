import '../style.css'
import { postCadastro } from './requisicao'
import { Link,useNavigate} from 'react-router-dom'
import { useState } from 'react';

export default function Cadastro() {
    const [cadastrar, setcadastrar] = useState({});
    const [carregando, setcarregando] = useState([]);
    const [confirmasenha, setconfirmasenha] = useState([]);
    const navigate = useNavigate();


    function handleForm({ value, name }) {
        setcadastrar({
            ...cadastrar,
            [name]: value,
        });
    };
    function senhac({ value, name }){
        setconfirmasenha({
            ...confirmasenha,
            [name]: value,
        });

    }
    function autoriza(){
        setcarregando(["referencia"])
        let resposta = postCadastro(cadastrar);
        if(cadastrar.password != confirmasenha.passwordconfirm){
            return alert("As senhas precisam ser iguais!!")
        }
        resposta.then((ref) => {
         
          navigate('/')
        })
        resposta.catch((ref) => { setcarregando([])})

    }
    return (
        <div className='fundo'>

            <h1>MyWallet</h1>

            <input name="name" type="text" placeholder='Nome' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}/>
            <input name="email" type="email" placeholder='E-mail' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input name="password" type="password" placeholder='Senha' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}/> 
            <input name="passwordconfirm" type="password" placeholder='Comfirme a senha' onChange={(e) => senhac({ name: e.target.name, value: e.target.value, })}/> 
            <button onClick={autoriza} className='Entrar'>Cadastrar</button>

            <Link className='link' to={'/'}>Já tem uma conta? Entre agora!</Link>
        </div>

    )
}