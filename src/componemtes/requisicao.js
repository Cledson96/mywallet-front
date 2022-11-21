import axios from 'axios';

const BASE_URL = 'http://localhost:5000';


export function postLogin(body) {

  const promise = axios.post(`${BASE_URL}/`, body);
  return promise;
}

export function postCadastro(body) {
   const promise = axios.post(`${BASE_URL}/cadastro`, body);
  return promise;
}

export function getregistro(Authorization) {

  const promise = axios.get(`${BASE_URL}/registros`, {
    headers: {
      'Authorization': `Bearer ${Authorization}`
    }
  });
  return promise;
}
export function postEntrada(body,token) {

  const promise = axios.post(`${BASE_URL}/entrada`, body, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return promise;
}
export function postSaida(body,token) {
  const promise = axios.post(`${BASE_URL}/saida`, body, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return promise;
}
export function deleteHabitos(id,token) {

  const promise = axios.delete(`${BASE_URL}/deleta`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      id
    }
  });

  return promise;
}

export function deletesessao(tokenn) {

  const promise = axios.delete(`${BASE_URL}/deletasessao`, {
    headers: {
      'Authorization': `Bearer ${tokenn}`
    }
  });

  return promise;
}

