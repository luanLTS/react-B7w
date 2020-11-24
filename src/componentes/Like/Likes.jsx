import React, { useState } from 'react'
import { Botao, Wrapper, Counter } from './style'

//useState
// é basicamente uma props que vc pode alterar o seu valor, coisa que a props não pode
//   const [ nomedavariavel, modificador da variavel ] = useState( valorInicial );

//Componente de like e deslike

export default function Likes() {

    const [ contador, setContador ] = useState( 0 );
    
    const like = () => {
        setContador(contador + 1);
    };
    const deslike = () => {
        setContador(contador - 1);
    };
    return (
      <Wrapper>
        <Counter>{contador} vezes</Counter>
        <Botao onClick={like} color="#0f0">LIKE</Botao>
        <Botao onClick={deslike} color="#f00">DESLIKE</Botao>
      </Wrapper>
    );
  }
  