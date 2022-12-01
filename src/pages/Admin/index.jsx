import Logo from "../../Img/Logo.png"
import {Link} from "react-router-dom";
 import {FiUser} from "react-icons/fi";
 import {GrRevert} from "react-icons/gr";
import {GrPlan} from 'react-icons/gr';
import {GrHome} from 'react-icons/gr'
import {useState, useEffect} from 'react';
import './admin.css';
import {auth, db} from '../../firebaseConnection';
import{signOut} from 'firebase/auth';
import{addDoc,collection, onSnapshot,
       query,orderBy, where,
       doc, deleteDoc, updateDoc, limitToLast
      } from 'firebase/firestore';
      import React from 'react'
      import '../../estilização/style.css'

function Admin(){
   
    const[tarefas, setTarefas] = useState([])
    const [sala, setSala] = useState('');
    const [turma, setTurma] = useState('');
    const [turno, setTurno] = useState('');
    const [dia, setDia] = useState('');
    const [horai, setHorai] = useState('');

    const [horaf, setHoraf] = useState('');
   
  
    
    // const[turmaInput, setturmaInput] = useState([])

    async function handleAdd(){
        await addDoc(collection(db, "tarefas"), {
          sala: sala,
          turma: turma,
          horai: horai,
          dia: dia,
          turno: turno,
          horaf: horaf  
        })
        .then(() => {
          toast.sucess("AGENDADO COM SUCESSO")
          setSala('');
          setTurma('');
          setTurno('');
          setDia('');
          setHorai('');
          setHoraf('');
          
        })
        .catch((error) => {
          console.log("ERRO AO AGENDAR " + error)
        })
    
    
      }
      async function handleLogout(){
        await signOut(auth)
    }//fim da função handleLogout
   
    return(
        <div className="pai_reservar">

            <h1 className='Text_alto'>SA</h1>
         
            <img src= {Logo} className = "img_2" ></img> 
            <ul>
           <div className='menu'>
        <Link to="/Perfil">
        <a href='#' >
          <span className='icon'> <FiUser /></span>
          <span className='list'>Perfil</span>
        </a>
        </Link>
        
        <Link to="/Entrar">
        <a href='#' >
          <span className='icon'><GrHome /></span>
          <span className='list'>Inicio</span>
        </a>    
        </Link>
            
        <Link to="/Reservar">
        <a href='#' >
          <span className='icon'><GrPlan/></span>
          <span className='list'>Reservar</span>
        </a>
        </Link>
    
        
        </div>
      </ul>
      <div className='card_reservar'>
            <form className='form' onSubmit={handleAdd}>
            <h1 >Reservar</h1>
            <h2>Sala:</h2>
            <select id="Laboratorio" name="Agendar_Sala" className='ajust_meio'value={sala}
                onChange={(e)=> setSala(e.target.value)}>
          <option value="//"> -- </option>          
		<option value="laboratório 4">laboratório 4</option>
		<option value="laboratório 6">laboratório 6</option>
		<option value="laboratório 7">laboratório 7</option>
	  </select>

            <h2>Turmas:</h2>
            <select id="anos" name="{1,2,3}" className='ajust_meio' value={turma}
                onChange={(e)=> setTurma(e.target.value)}>
        <option value="//"> -- </option>  
		<option value="Turma 1° ano">Turma 1° ano</option>
		<option value="Turma 2° ano">Turma 2° ano</option>
		<option value="Turma 3° ano">Turma 3° ano</option>
	  </select>

            <h2>Turnos:</h2>
            <select id="matutino" name="Vespertino" className='ajust_meio' value={turno}
                onChange={(e)=> setTurno(e.target.value)}>
         <option value="//"> -- </option>              
		<option value="Matutino">Matutino</option>
		<option value="Vespertino">Vespertino</option>
		
	  </select>

            <h2>Dia:</h2>
            <input type='date' id='dtnasc' name='dtnasc' className='ajust_meio'value={dia}
                onChange={(e)=> setDia(e.target.value)}></input>

            <h2>Horas:</h2>
            <select id="horai" name="horas" className='ajust_meio' value={horai}
                onChange={(e)=> setHorai(e.target.value)}>
          <option value="//"> -- </option>             
		<option value="7:00">7:00</option>
		<option value="7:50">7:50</option>
		<option value="8:40">8:40</option>
        <option value="9:50">9:50</option>
        <option value="10:40">10:40</option>
        <option value="11:30">11:30</option>
	  </select>
            <h3>ATÉ</h3>
            <select id="horaf" name="horas2" className='ajust_meio' value={horaf}
                onChange={(e)=> setHoraf(e.target.value)}>
            <option value="//"> -- </option>           
		<option value="7:50">7:50</option>
		<option value="8:40">8:40</option>
        <option value="9:50">9:50</option>
        <option value="10:40">10:40</option>
        <option value="11:30">11:30</option>
        <option value="12:20">12:20</option>
	  </select>

      
               
               
                       
            <button onClick={handleAdd} className='acesso' type="submit" >AGENDAR</button>
                
               
            </form>
         
            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </div>
        </div>
    )
}
export default Admin;