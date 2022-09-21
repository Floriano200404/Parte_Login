import React from 'react'
import {Link} from 'react-router-dom';
export default function Criar_Conta() {
  return (
    <div className='pai'>
        
    <div className='card'>
    
    <h1 class="Title_C">CADASTRO</h1>
    <input type="text" placeholder="NOME" ></input>
    <input type="email" placeholder="E-MAIL" ></input>
    <input type="text" placeholder="CPF" ></input>
    <input type="number" placeholder="N° de celular" ></input>
   
    <input type="password" placeholder="SENHA"></input>

  <br></br>
    
  <button className='cads'>
        <Link to="/Entrar">
            <h2  >CADASTRAR</h2>
        </Link>
        </button> 

    </div>
</div>
  )
}
