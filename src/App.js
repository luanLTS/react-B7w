import React, {useState} from 'react'
import styled from 'styled-components'
import './App.css';
import Profile from './componentes/Profile/Profile'
import Likes from './componentes/Like/Likes'
  
const Header = styled.div`
  width: 1400px;
  height: 200px;
  background-color: #00deaa;
`
const Titulo = styled.h1`
  color : #ffad01;
  font-size: 30px;
`


function App() {
  let user = {
    url: "https://www.google.com.br/google.jpg",
    name : "Luan Teixeira"
  };
  return (
    <>
      <Header>
      <Titulo>Titulo</Titulo>
      </Header>
      <Profile user={user} />
      <Likes />
    </>
  );
}



export default App;

