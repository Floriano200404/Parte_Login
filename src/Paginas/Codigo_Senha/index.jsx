import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../Img/Logo.png';

export default function Codigo_Senha() {
  return (
    <div className='pai'>
        
    <div className='card'>
    <img src= { Logo}  className = 'img'/>
    <h1 class="Title">SA</h1>
    <h3 class="Subtitle">SISTEMA DE AGENDAMENTO</h3>
    <div className='text2'>
    <h2>Olá usuário!</h2>
    <h5>Você solicitou a recuperação <br></br> da sua senha de acesso ao SA. </h5>
    <br></br>
    </div>
    <input className='campo_C' type="number" placeholder="DIGITE O CODIGO AQUI" id = 'senha'></input>
    
  

  
    
    <button className='Button_C'>
    <Link to="/Recu_Senha">
        <h2  >Confirmar</h2>
    </Link>
    </button> 

    
   
    </div>
</div>
  )
}
