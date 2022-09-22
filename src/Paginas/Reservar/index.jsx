import React from 'react'

import Logo from '../../Img/Logo.png';
import {Link} from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { GrRevert } from "react-icons/gr";
import { GrPlan } from "react-icons/gr";
import { GrHome } from "react-icons/gr";

export default function Reservar() {
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
          
          <h1 >Reservar</h1>
            <h2>Agendar:</h2>
            <select id="Sala" name="Agendar_Sala" className='ajust_meio'>
		<option value="laboratório 4">laboratório 4</option>
		<option value="laboratório 6">laboratório 6</option>
		<option value="laboratório 7">laboratório 7</option>
	  </select>

            <h2>Turmas:</h2>
            <select id="anos" name="{1,2,3}" className='ajust_meio'>
		<option value="Turma 1">Turma 1° ano</option>
		<option value="Turma 2">Turma 2° ano</option>
		<option value="Turma 3">Turma 3° ano</option>
	  </select>

            <h2>Turnos:</h2>
            <select id="matutino" name="Vespertino" className='ajust_meio'>
		<option value="Manhã">Matutino</option>
		<option value="Tarde">Vespertino</option>
		
	  </select>

            <h2>Dia:</h2>
            <input type='date' id='dtnasc' name='dtnasc' className='ajust_meio'></input>

            <h2>Horas:</h2>
            <input type="time" id="hora-desejada" name="hora-desejada" required className='ajust_meio' />
            <h3>ATÉ</h3>
            <input type="time" id="hora-desejada" name="hora-desejada" required className='ajust_meio' />

            <button className='Button_D' >
        <h2  >Concluir</h2>
    </button> 
            
        </div>
    </div>
  )
}