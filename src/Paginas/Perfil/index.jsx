import React from 'react'
import Logo from '../../Img/Logo.png';

import {Link} from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { GrRevert } from "react-icons/gr";
import { GrPlan } from "react-icons/gr";
import { GrHome } from "react-icons/gr";
export default function Perfil() {
  return (
    <div className='pai'>
           <h1 className='Text_alto'>SA</h1>
      <img src= { Logo}  className = 'img_2'/>
      <ul>
        <li>
        <Link to="/Perfil">
        <a href='#' >
          <span className='icon'> <FiUser />
            </span>
          <span className='list'>Perfil</span>
        </a>
        </Link>
        </li>

        
        <li>
        <Link to="/Entrar">
        <a href='#' >
          <span className='icon'><GrHome /></span>
          <span className='list'>Inicio</span>
        </a>
            
        
        </Link>
        </li>
        <li className='ajust'>
        <Link to="/Reservar">
        <a href='#' >
          <span className='icon2'><GrPlan/></span>
          <span className='list'>Reservar</span>
        </a>
            
            
        </Link>
        </li>
        <li className='botão_sair'>
        <Link to="/">
        <a href='#' >
          <span className='icon'><GrRevert/></span>
          <span className='list'>Sair</span>
        </a>
            
            
        </Link>
        </li>
      </ul>
    <div className='sub_card'>
      <h1>Perfil</h1>
      <br></br>
      
      

    <div class="personal-image">
  <label class="label"> 
    <input type="file" />
    <figure class="personal-figure">
      <img src= {Logo} class="personal-avatar" alt="avatar" />
      <figcaption class="personal-figcaption">
        <img src= {Logo} />
      </figcaption>
    </figure>
  </label>
</div>

<div className='Informacoes'>
      <h3>Nome:</h3>
      <h3>E-mail:</h3>
      <h3>‎ ‎ ‎ ‎ ‎ ‎ N° Celular:</h3>
      <h3>CPF:</h3>
      <h3>‎ ‎ ‎  Biografia:</h3>
     
      </div>
      <input type='text' className='biografia'></input>
    </div>


    </div>
  )
}
