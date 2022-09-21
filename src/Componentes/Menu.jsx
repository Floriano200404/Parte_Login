import React from 'react';
import {Link} from 'react-router-dom';
import "./Menu.css";
import Logo from '../Img/Logo.png';

export default function Menu() {
  return (
    
      <div className='pai'>
        
        <div className='card'>
        <img src= { Logo}  className = 'img'/>
        <h1 class="Title">SA</h1>
        <h3 class="Subtitle">SISTEMA DE AGENDAMENTO</h3>
        <input type="e-mail" placeholder="E-MAIL" id = 'senha'></input>
        <br></br>
        <input type="password" placeholder="SENHA"></input>

      <br></br>
        <Link to="/Senha_Nova" className='password'>
           esqueci minha senha
        </Link>
        <button className='acesso'>
        <Link to="/Entrar">
            <h2  >Login</h2>
        </Link>
        </button> 

        <button className='criar'>
        <Link to="/Criar_Conta">
            Criar Conta
        </Link>
        </button>
       
        </div>
    </div>
  )
}

