import sair from "../img/Vector.png"
import mais from "../img/ant-design_plus-circle-outlined.png"
import menos from "../img/ant-design_minus-circle-outlined.png"
import { useEffect, useState } from 'react';
import { getregistro, deleteHabitos, deletesessao } from "../componemtes/requisicao"
import { useNavigate } from 'react-router-dom'

export default function Registros({ dados }) {
    const navigate = useNavigate();
    let nome = localStorage.getItem("nome");
    let token = dados.token;
    const [registros, setregistros] = useState([]);
    const [atualiza, setatualiza] = useState([]);
    
    let somar = Number(0);
    let tirar = Number(0);
    if (registros.length > 0) {

        for (let i = 0; i < registros.length; i++) {
            if (registros[i].tipo == "entrada") {
                somar = somar + Number(registros[i].valor)
            }
            if (registros[i].tipo == "saida") {
                tirar = tirar + Number(registros[i].valor)
            }

        }
    }

    let saldo = Number(somar - tirar);

    useEffect(() => {
        let resposta = getregistro(token)
        resposta.then((res) => {
            setregistros(res.data);

        });
        resposta.catch(() => alert("Tivemos um problema para recuperar seu registros!!!"));
    }, [atualiza, token]);


    return (
        registros.length === 0 ?

            <div className='fundo'>

                <div className="topo"><h2>Olá, {nome}</h2> <img onClick={() => {
                    let resposta = deletesessao(token);
                    resposta.then(() => {
                        navigate('/')
                    })
                    resposta.catch((ref) => { console.log(ref.response.data) })
                }} className="sair" alt="" src={sair} /></div>

                <div className="registros">
                    <h4>Não há registros de
                        entrada ou saída</h4>

                </div>

                <div className="modifica">

                    <button onClick={() => navigate('/entrada')} className="registrar">
                        <img className="modific" alt="" src={mais} />
                        <div className="arruma">
                            <h3>Nova</h3>
                            <h3>entrada</h3>
                        </div>

                    </button>

                    <button onClick={() => navigate('/saida')} className="registrar">
                        <img className="modific" alt="" src={menos} />
                        <div className="arruma">
                            <h3>Nova</h3>
                            <h3>saida</h3>
                        </div>
                    </button>
                </div>


            </div>

            :

            <div className='fundo'>

                <div className="topo"><h2>Olá, {nome}</h2> <img onClick={() => {
                    let resposta = deletesessao(token);
                    resposta.then(() => {
                        navigate('/')
                            ;
                    })
                    resposta.catch((ref) => { console.log(ref.response.data) })
                }} className="sair" alt="" src={sair} /></div>

                <div className="registros">
                    <div className="tdsregistros">
                        {registros.map((ref, index) => {
                            let valor = parseInt(ref.valor)
                            if (ref.tipo == "entrada") {
                                return (
                                    <div key={index} className="registrado">
                                        <span>
                                            <div className="data">
                                                {ref.data}
                                            </div>
                                            <div className="atividade">
                                                {ref.descricao}
                                            </div>
                                        </span>
                                        <span>
                                            <div className="valorpositivo">
                                                {valor.toFixed(2)}
                                            </div>
                                            <div className="data" onClick={() => {
                                                if (window.confirm('Tem certeza que deseja deletar este registro?')) {
                                                    let resposta = deleteHabitos(ref._id, dados.token);

                                                    resposta.then(() => {
                                                        let resposta = getregistro(token)
                                                        resposta.then((res) => {
                                                            setregistros(res.data);

                                                        });
                                                    })
                                                    resposta.catch(() => { console.log(ref.response.data) })
                                                }
                                            }}> x
                                            </div>
                                        </span>

                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className="registrado">
                                        <span>
                                            <div className="data">
                                                {ref.data}
                                            </div>
                                            <div className="atividade">
                                                {ref.descricao}
                                            </div>
                                        </span>
                                        <span>
                                            <div className="valornegativo">
                                                {valor.toFixed(2)}
                                            </div>
                                            <div className="data" onClick={() => {
                                                if (window.confirm('Tem certeza que deseja deletar este registro?')) {
                                                    let resposta = deleteHabitos(ref._id, token);

                                                    resposta.then(() => {
                                                        console.log("apagou")
                                                        let resposta = getregistro(token)
                                                        resposta.then((res) => {
                                                            setregistros(res.data);

                                                        });
                                                    })
                                                    resposta.catch(() => { console.log(ref.response.data) })
                                                }
                                            }}> x
                                            </div>
                                        </span>

                                    </div>
                                )
                            }

                        })}

                    </div>
                    <div className="total">
                        <h5>SALDO</h5>
                        {saldo > 0 ? <div className="valorpositivo">
                            {saldo.toFixed(2)}
                        </div>
                            :
                            <div className="valornegativo">
                                {saldo.toFixed(2)}
                            </div>

                        }

                    </div>
                </div>

                <div className="modifica">

                    <button onClick={() => navigate('/entrada')} className="registrar">
                        <img className="modific" alt="" src={mais} />
                        <div className="arruma">
                            <h3>Nova</h3>
                            <h3>entrada</h3>
                        </div>

                    </button>

                    <button onClick={() => navigate('/saida')} className="registrar">
                        <img className="modific" alt="" src={menos} />
                        <div className="arruma">
                            <h3>Nova</h3>
                            <h3>saida</h3>
                        </div>
                    </button>
                </div>


            </div>

    )
}