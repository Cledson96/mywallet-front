import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

let token = localStorage.getItem("token");

export function postLogin (body) {
    console.log(body)
    const promise = axios.post(`${BASE_URL}/`,body);
    return promise;
}

export function postCadastro(body) {
    console.log(body)
    const promise = axios.post(`${BASE_URL}/cadastro`,body);
    return promise;
}

export function getregistro(Authorization) {
    console.log(Authorization)
    const promise = axios.get(`${BASE_URL}/registros`,{
        headers: {
          'Authorization': `Bearer ${Authorization}`
        }
      });
    return promise;
}
export function postEntrada(body) {
    console.log(body)
    const promise = axios.post(`${BASE_URL}/entrada`,body,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    return promise;
}
export function postSaida(body) {
    console.log(body)
    const promise = axios.post(`${BASE_URL}/saida`,body,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    return promise;
}
export function deleteHabitos (id) {
  console.log(id)

  const promise = axios.delete(`${BASE_URL}/deleta`,{
    headers: {
      'Authorization': `Bearer ${token}`,
      id
    }
  });
  
  return promise;
}

