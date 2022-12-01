import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../Img/Logo.png';

export default function Recu_Senha() {
  return (
    <div className='pai'>
        
    <div className='container_recup'>
    <img src= { Logo}  className = 'img'/>
    <h1 className="title_recup">SA</h1>
  
    <h3 class="subtitle_recup">SISTEMA DE AGENDAMENTO</h3>
    <div className='texts_recup'>
    <h2>Alterar senha de acesso!</h2>
    <h4>Preencha os campos a seguir: </h4>
   
    </div>
    <input className='input_recup1' type="password" placeholder="DIGITE A SENHA NOVA" id = 'senha'></input>
    <input className = 'input_recup2'type="password" placeholder=" CONFIRMA SENHA NOVA"></input>
    
    
  
    
    <button className='Button_recup'>
    <Link to="/admin">
        <h2  >Confirmar</h2>
    </Link>
    </button> 


    
   
    </div>
</div>
  )
}
