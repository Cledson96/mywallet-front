import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componemtes/login";

export default function App() {
  return (
    <>
    <BrowserRouter>
    
        <Routes>

            <Route path='/' element={<Login />} />
                      
        </Routes>

    </BrowserRouter>
</>
  );
}


