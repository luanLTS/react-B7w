import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBox from '../SearchBox/SearchBox'
//! https://viacep.com.br/ws/03738260/json/
//! https://viacep.com.br/ws/cep que vai ser digitado/json/
//! {
//!   "cep": "03738-260",
//!  "logradouro": "Rua Iberê da Costa Franco",
//!   "complemento": "",
//!   "bairro": "Vila Libanesa",
//!   "localidade": "São Paulo",
//!   "uf": "SP",
//!   "ibge": "3550308",
//!   "gia": "1004",
//!   "ddd": "11",
//!   "siafi": "7107"
//! }

export default function CEP () {
    
    const [ cep, setCep ] = useState('')
    const [ dados, setDados ] = useState([{
        cep:'',
        logradouro:'',
        complemento:'',
        bairro:'',
        localidade:'',
        uf:'',
        ibge: '',
        gia: '',
        ddd: '',
        siafi: ''
    }])

    const BuscarCep = () => {
        axios.get('https://viacep.com.br/ws/'+ cep +'/json/').then((result) => {
            setDados(result.data)
        }) 
    }
    const LimparCep = () => {
        setDados({
            cep: "",
            logradouro: "",
            complemento: "",
            bairro: "",
            localidade: "",
            uf: "",

        })
    }

    // useEffect(()=>{
    //     dados.map((item, index)=>{
    //         return(
    //             <li key={index}>{item}</li>
    //         )
    //     })
    // }, [ dados ])



    return (
        <>
        <SearchBox textoPadrão="Digite o cep" onValueChange={(newcep)=>(setCep(newcep))} />
        <button onClick={()=>BuscarCep()}>Buscar</button>
        <button onClick={()=>LimparCep()}>Limpar</button>
        <p>{cep}</p>
        </>
    )
}