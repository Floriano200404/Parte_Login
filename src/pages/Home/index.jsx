import {useState} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Logo from "../../Img/Logo.png"
import './home.css'
function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleLogin(e){
        e.preventDefault();
        if(email !== '' && password !==''){
           await signInWithEmailAndPassword(auth,email,password)
           .then(()=>{
              //navegar para /admin
              navigate('/admin',{replace:true})
           })
           .catch(()=>{
            console.log("Erro ao fazer login")
           })
        }else{
            alert("Preencha todos os campos!")
        }//fim do else
    }//fim da função handleLogin
    return (
      <div className='pai'>
        <div className='card'>
        <h1 class="Title">SA</h1>
        <span class="Subtitle">SISTEMA DE AGENDAMENTO</span>
        <img src= { Logo}  className = 'img'/>
        <form className='input_login' onSubmit={handleLogin}>
            <input type="email"
                   placeholder='EMAIL'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}/> <br/>
            <input type="password"
                   placeholder='Senha'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}/> <br/>
                   <button type="submit" to={"/entrar"} className='acesso'>Acessar</button>
        </form>
        <button className='acesso'>
        <Link to={'/register'}>
            <h3>Cadastre-se</h3>
        </Link>
        </button>

        
        <Link className="password" to={'/senha_nova'}>
            Esqueceu a senha? 
        </Link>
        
      </div>
      </div>
    )
    }//fim da função Home
   
  export default Home;
  