import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../Img/Logo.png';

export default function Recu_Senha() {
  return (
    <div className='pai'>
        
    <div className='card'>
    <img src= { Logo}  className = 'img'/>
    <h1 class="Title">SA</h1>
  
    <h3 class="Subtitle">SISTEMA DE AGENDAMENTO</h3>
    <div className='text2'>
    <h2>Alterar senha de acesso!</h2>
    <h4>Preencha os campos a seguir: </h4>
   
    </div>
    <input className='campo_N' type="password" placeholder="DIGITE A SENHA NOVA" id = 'senha'></input>
    <input clasName = 'campo_Conf'type="password" placeholder=" CONFIRMA SENHA NOVA"></input>
    
    
  
    
    <button className='Button_C'>
    <Link to="/Entrar">
        <h2  >Confirmar</h2>
    </Link>
    </button> 

    
   
    </div>
</div>
  )
}
