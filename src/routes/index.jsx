import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Register from '../pages/Register';
 import Admin from '../pages/Admin';
  import Private from './Private';
import Senha_Nova from '../pages/Senha_Nova';
import Codigo_Senha from '../pages/Codigo_Senha';
import Recu_Senha from '../pages/Recu_Senha';
import Entrar from '../pages/Entrar';
import Perfil from '../pages/Perfil';
function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='register' element={<Register/>} />
            <Route path='admin' element={<Private><Admin/></Private>}/> 
            <Route path='codigo_senha' element={<Codigo_Senha/>}/>
            <Route path='recu_senha' element={<Recu_Senha/>}/>
            <Route path='senha_nova' element={<Senha_Nova/>} />
            <Route path='entrar' element={<Entrar/>} />
            <Route path='perfil' element={<Perfil/>} />
            

        </Routes>
    )
}//fim da função RoutesApp()
export default RoutesApp;