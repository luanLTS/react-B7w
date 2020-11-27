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
            { titulo : texto, feito : false }
        ])
    }
    const CleanList = () => {
        setList( [] )
    }

    const HandingFeito = (index) => {
        let modList = [...list]
        modList[index].feito = !modList[index].feito
        setList(modList)
    }
    
    return (
        <>
            <p>Lista de convidados</p>
            <Input type="text" value={texto} onKeyUp={ HandingList } onChange={ ( e ) => ( setTexto(e.target.value) ) } />
            <button onClick={ CleanList }>Limpar lista</button>
            { list.map((item, index) => {
                return(
                    <Lista key={index} onClick={ () => HandingFeito(index)}>
                        { item.feito &&
                            <del>{item.titulo}</del>
                        }
                        { !item.feito &&
                            item.titulo
                        }
                    </Lista>
                )
            }) }
        </>
    )
}