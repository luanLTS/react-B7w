import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from '../SearchBox/SearchBox'
//! https://viacep.com.br/ws/03738260/json/
//! https://viacep.com.br/ws/cep que vai ser digitado/json/

export default function CEP () {
    
    const [ cep, setCep ] = useState('')
           
    useEffect(()=>{
        axios.get('https://viacep.com.br/ws/'+ cep +'/json/').then((result) => {
            console.log(result.data)
        }  
    )
    },[ cep ])
    
    return (
        <>
        <SearchBox textoPadrão="Digite o cep" onValueChange={(newcep)=>(setCep(newcep))} />
        <p>{cep}</p>
        </>
    )
}