
import React from 'react'
import Logo from '../../Img/Logo.png';
import {Link} from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { GrRevert } from "react-icons/gr";
import { GrPlan } from "react-icons/gr";
import { GrHome } from "react-icons/gr";
export default function Entrar() {
  return (
    <div className='pai '>
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
     
      <h2>Sistema de Agendar</h2>
      <h3> O sistema SA tem por objetivo o agendamento de salas e laboratórios, para que haja <br></br>uma organização entre os professores e as salas desejadas. Somos um grupo de 7 integrantes <br></br> cada um desenvolvendo uma parte do projeto e desafiando limites e aprimorando os conhecimentos.!  </h3>
    
    
    <h1>HORÁRIOS MATUTINO</h1>
<table border="10">
    <tr>
      <th>HORÁRIOS:</th>
      <th>Segunda-Feira</th>
      <th>Terça-Feira</th>
      <th>Quarta-Feira</th>
      <th>Quinta-Feira</th>
      <th>Sexta-Feira</th>
    </tr>
    <tr>
    <th>7:00</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>7:50</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>8:40</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>9:30</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>9:50</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>10:40</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>11:30</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>12:20</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>
   
   
    </table>







    <h1>HORÁRIOS VESPERTINO</h1>
<table border="10" >
    <tr>
    <th>HORÁRIOS:</th>
      <th>Segunda-Feira</th>
      <th>Terça-Feira</th>
      <th>Quarta-Feira</th>
      <th>Quinta-Feira</th>
      <th>Sexta-Feira</th>
    </tr>
    <tr>
    <th>13:00</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>13:50</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>14:40</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>15:30</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>15:50</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>16:40</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>17:30</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>

    <tr>
    <th>18:20</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>
   
   
    </table>
      
      </div>
     
    
    </div>
    
  )
}
