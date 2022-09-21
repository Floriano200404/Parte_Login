import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Paginas/Home";
import Entrar from "./Paginas/Entrar";
import Recu_Senha from './Paginas/Recu_Senha';
import Criar_Conta from './Paginas/Criar_Conta';
import Senha_Nova from './Paginas/Senha_Nova';
import Codigo_Senha from './Paginas/Codigo_Senha';

function Rotas() {
  return (
    // Lista de rotas
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Codigo_Senha" element={ <Codigo_Senha /> } />
            <Route path="/senha_nova" element={ <Senha_Nova /> } />
            <Route path="/entrar" element={ <Entrar /> } />
            <Route path="/Recu_Senha" element={ <Recu_Senha /> } />
            <Route path="/criar_conta" element={ <Criar_Conta /> } />
        </Routes>
    </BrowserRouter>
  )
}
export default Rotas;
