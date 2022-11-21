import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componemtes/login";
import Cadastro from "./componemtes/cadastro";
import Registros from "./componemtes/registros";
import Entrada from "./componemtes/entrada";
import Saida from "./componemtes/saida";
import { useState } from 'react';

export default function App() {
  const [dados, setdados] = useState([]);
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Login setdados={setdados} />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/registros' element={<Registros dados={dados} />} />
          <Route path='/entrada' element={<Entrada dados={dados} />} />
          <Route path='/saida' element={<Saida dados={dados} />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}


