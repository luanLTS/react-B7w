import React, { useState } from 'react'
import './App.css';
import Profile from './componentes/Profile/Profile'
import Likes from './componentes/Like/Likes'
import Header from './componentes/Header/Header'
import CalculaGorjata from './componentes/Calculadora/Calculadora'
  

function App() {
  let user = {
    url: "https://www.google.com.br/google.jpg",
    name : "Luan Teixeira"
  };
/*
  maneira de alterar criando funções
  const HandleNome = (e) => {
    setNome(e.target.value)
  }
  const HandleEmail = (e) => {
    setEmail(e.target.value)
  }
*/
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <Header/>
      {/* <Titulo>Titulo</Titulo> */}
      {/* </Header> */}
      <Profile user={user} />
      <Likes />
      {/* <CalculaGorjata/> */}
      <label>Nome:</label><input type='text' value={nome} onChange={ (e)=>setNome(e.target.value) } />
      {nome.length > 0 && 
        <p>{nome.length} caractere{nome.length == 1 ? '' : 's'}</p>
        }
      <br />
      <label>Email:</label><input type='text' value={email} onChange={ (e)=>setEmail(e.target.value) } />
      {email.length > 0 && 
        <p>{email.length} caractere{email.length == 1 ? '' : 's'}</p>
      }
    </>
  );
}



export default App;

