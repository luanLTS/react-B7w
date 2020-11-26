import React, { useState } from 'react'
import axios from 'axios'
import SearchBox from '../SearchBox/SearchBox'

export default function CEP () {
    
    const [ cep, setCep ] = useState('')
    const [ dados, setDados ] = useState([])

    const BuscarCep = () => {
        axios.get('https://viacep.com.br/ws/'+ cep +'/json/').then((result) => {
            setDados(result.data)
        }) 
    }
    const LimparDados = () => {
        setDados([])
        setCep('')
    }

    return (
        <>
        <SearchBox textoPadrão="Digite o cep" onValueChange={(newcep)=>(setCep(newcep))} />
        <button onClick={()=>BuscarCep()}>Buscar</button>
        <button onClick={()=>LimparDados()}>Limpar</button>
        <p>{cep}</p>
        {console.log(dados.cep)}
        {console.log(dados.logradouro)}
        {console.log(dados.bairro)}
        {console.log(dados.uf)}
        {console.log(dados.localidade)}
        <input type="text" value={dados?.bairro ?? ""} />
        <input type="text" value={dados?.logradouro ?? ""} />
        <input type="text" value={dados?.localidade ?? ""} />
        <input type="text" value={dados?.uf ?? ""} />
        <input type="text" value={dados?.cep ?? ""} />
        </>
    )
}