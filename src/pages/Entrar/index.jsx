
import React from 'react'
import Logo from '../../Img/Logo.png';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db, auth } from '../../firebaseConnection';
import { doc, setDoc, 
  collection, addDoc, 
  getDoc, getDocs, 
  updateDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import './table.css'

function Entrar() {
  const[tarefas, setTarefas] = useState([])
  const [sala, setSala] = useState('');
  const [turma, setTurma] = useState('');
  const [turno, setTurno] = useState('');
  const [dia, setDia] = useState('');
  const [horai, setHorai] = useState('');

  const [horaf, setHoraf] = useState('');



  useEffect(()=>{
    async function loadPost(){
      const unsub = onSnapshot(collection(db,'tarefas'),(snapshot)=>{
        let listaPost = [];
        snapshot.forEach((doc) => {
        listaPost.push({
          id: doc.id,
          sala: doc.data().sala,
          turma: doc.data().turma,
          turno: doc.data().turno,
          dia: doc.data().dia,
          horai: doc.data().horai,
          horaf: doc.data().horaf
        })
      })
      setTarefas(listaPost);
      })
    }
    loadPost();
  },[])

  // async function handleAdd(){
  //   // await setDoc(doc(db, "posts", "12345"), {
  //   //   titulo: titulo,
  //   //   autor: autor,
  //   // })
  //   // .then(() => {
  //   //   console.log("DADOS REGISTRADO NO BANCO!")
  //   // })
  //   // .catch((error) => {
  //   //   console.log("GEROU ERRO" + error)
  //   // }) 

    
  //   await addDoc(collection(db, "tarefas"), {
  //         id:id,
  //         sala:sala,
  //         turma:turma, 
  //         turno: turno,
  //         dia: dia,
  //         horai: horai,
  //         horaf:horaf
  //   })
  //   .then(() => {
  //     console.log("CADASTRADO COM SUCESSO")
  //     setSala('');
  //     setTurma('');
  //     setTurno('');
  //     setDia('');
  //     setHorai('');
  //     setHoraf('');
      
  //   })
  //   .catch((error) => {
  //     console.log("ERRO " + error)
  //   })


  // }

  async function buscarPost(){
    // const postRef = doc(db, "posts", "vFvZAyFqebXFsFv0X89l")
    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setAutor(snapshot.data().autor)
    //   setTitulo(snapshot.data().titulo)

    // })
    // .catch(()=>{
    //   console.log("ERRO AO BUSCAR")
    // })

    const tarefasRef = collection(db, "tarefas")
    await getDocs(tarefasRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({  
          id: doc.id,
          sala: doc.data().sala,
          turma: doc.data().turma,
          turno: doc.data().turno,
          dia: doc.data().dia,
          horai: doc.data().horai,
          horaf: doc.data().horaf
        })
      })

      setTarefas(lista);

    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR")
    })
  }

  async function excluirPost(id){
    const docRef = doc(db,'tarefas',id) 
    await deleteDoc(docRef)
    .then(()=>{
     alert("post deletedao com sucesso")
    })
    .catch((error)=>{
     alert("Erro"+error)
    })
 }


  return (
    <div className='pai_entar '>
    <h1 className='Text_alto'>SA</h1>
  <img src= { Logo}  className = 'img_2'/>
  
  <ul>
    <li>
    <Link to="/perfil">
    <a href='#' >
      <span className='icon'> 
        </span>
      <span className='list'>Perfil</span>
    </a>
    </Link>
    </li>

    
    <li>
    <Link to="/Entrar">
    <a href='#' >
      <span className='icon'></span>
      <span className='list'>Inicio</span>
    </a>
        
    
    </Link>
    </li>
    <li className='ajust'>
    <Link to="/admin">
    <a href='#' >
      <span className='icon2'></span>
      <span className='list'>Reservar</span>
    </a>
        
      </Link>


    </li>
    <li className='botão_sair'>
    <Link to="/">
    <a href='#' >
      <span className='icon'></span>
      <span className='list'>Sair</span>
    </a>
        
        
    </Link>
    </li>
  </ul>
  
    
  <div className='sub_card'>
 
  <h2>Sistema de Agendar</h2>
  <h3> O sistema SA tem por objetivo o agendamento de salas e laboratórios, para que haja <br></br>uma organização entre os professores e as salas desejadas. Somos um grupo de 7 integrantes <br></br> cada um desenvolvendo uma parte do projeto e desafiando limites e aprimorando os conhecimentos.!  </h3>

 
  <br/><br/>
<hr/>
<h1>HORÁRIOS RESEVADO</h1>
<table border="10">

    <tr>
     <th>HORÁRIOS:</th>
      
    </tr>
    
    <tr>
    
      <td><ul>
        {tarefas.map( (post) => {
          return(
            <li key={post.id}>
              <strong>Id Post: {post.id}</strong> <br/>
              <span>Sala: {post.sala} </span> <br/>
              <span>Turma: {post.turma}</span> <br/> 
              <span>Turno: {post.turno}</span> <br/> 
              <span> Dia: {post.dia}</span> <br/> 
              <span> Horai: {post.horai}</span> <br/> 
              <span> Horaf: {post.horaf}</span> <br/>
              <button onClick={()=>excluirPost(post.id)}>Excluir</button> <br/>
            </li>
          )
        })}
      </ul></td>
      

    </tr>
   
   
    </table>

      
      <button onClick={buscarPost}>Buscar post</button>





    </div>

    </div>
  );
}

export default Entrar;

/*
import {useState} from 'react';
import {db} from './firebaseConnection';
import {doc, setDoc, collection, addDoc, getDoc, getDocs} from 'firebase/firestore';
import "./App.css";
import { async } from '@firebase/util';

function App(){
const[titulo, setTitulo] = useState('');
const[autor, setAutor] = useState('');
const[post, setpost] = useState([]);

   async function handleAdd(){
      await setDoc(doc(db,"posts","12345"),{
        titulo: titulo,
        autor: autor,
       })
       .then(()=>{
        console.log("Dados registrados no  banco!")
       })
       .catch((error)=>{
        console.log("Gerrou Erro "+ error)
       }) 
       
       await addDoc(collection(db,"posts"),{
        titulo:titulo,
        autor:autor,
       })
       .then(()=>{
        console.log("Dados gravados no banco!")
        setAutor('');
        setTitulo('');
       })
       .catch((error)=>{
        console.log("Gerou erro "+ error)
       })
    }
    async function buscarPost(){
        const postsRef = collection(db, "posts")
    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })

      setPosts(lista);

    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR")
    })
        
        const postRef = doc(db,"posts", "p5OHYqMl8tsT5wGiX861")
        await getDoc(postRef)
        .then((snapshat)=>{
            setAutor(snapshat.data().autor)
            setTitulo(snapshat.data().titulo)
        })
        .catch(()=>{
        console.log("Gerou erro "+ error)
        })
        
    }
    return(
        <div>
            <h1>React + Firebase</h1>
            <div className='container'>
                <label>Titulo:</label>
                <textarea type="text"
                placeholder="Digite o titulo"
                value={titulo}
                onChange={(e)=> setTitulo(e.target.value)}
                >  
               
                </textarea>
                <label>Autor:</label>
                <input type="text"
                placeholder="Digite o autor do post"
                value={autor}
                onChange={(e)=> setAutor(e.target.value)}>
                </input>
                <button onClick={handleAdd}>Cadastrar</button>
                <button onClick={buscarPost}>Buscar Post</button>

                <ul>
        {posts.map( (post) => {
          return(
            <li key={post.id}>
              <span>Titulo: {post.titulo} </span> <br/>
              <span>Autor: {post.autor}</span> <br/>  <br/>
            </li>
          )
        })}
      </ul>

            </div>
        </div>
    );
}

export default App;
*/
