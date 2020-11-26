import React, { useState } from 'react'
import { Lista, Input } from './style'

export default function Listar () {
    
    const [ list, setList ] = useState([])
    const [ texto, setTexto ] = useState('')

    const HandingList = (e) =>{
        if ( e.keyCode == 13 ) {
            onListAdd( texto )
            setTexto( '' )
        }
    }
    const onListAdd = () =>{
        setList([
            ...list,
            texto
        ])
    }
    const CleanList = () => {
        setList( [] )
    }

    
    return (
        <>
            <p>Lista de convidados</p>
            <Input type="text" value={texto} onKeyUp={ HandingList } onChange={ ( e ) => ( setTexto(e.target.value) ) } />
            <button onClick={ CleanList }>Limpar lista</button>
            { list.map((item, index) => {
                return(
                    <Lista key={index}>{item}</Lista>
                )
            }) }
        </>
    )
}