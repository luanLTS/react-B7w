import React, { useState, useEffect } from 'react'
import { InputBox } from './style'

export default function SearchBox (props) {
    
    const [ valor, setValor ] = useState('')
    
    useEffect(()=>{
        props.onValueChange(valor)
    }, [valor])

    return (
        <InputBox
            type="text"
            value={valor}
            onChange={(e)=>setValor(e.target.value)}
            placeholder={props.textoPadrao}
        />
    )
}