import React, { useState } from 'react'
import { Titulo } from '../Header/style'
import { Label, Wrapper, ResultadoFinal, ResultadosValores, Input } from './style'

export default function CalulaGorjeta() {
    
    const [ valor, setValor ] = useState(0)
    const [ porcent, setPorcent ] = useState(0)
    
    return (
        <Wrapper>
            <Titulo color="#000">Calculadora de Gorjetas</Titulo>
            <Label>Quanto deu a conta?</Label>
            <Input type="number" placeholder="R$" onChange={ (e) => setValor(parseInt(e.target.value)) } />
            <Label>Qual a porcentagem de gorjeta?</Label>
            <Input type="number" placeholder="%" onChange={ (e) => setPorcent(parseInt(e.target.value)) } />
            { valor > 0 && <ResultadosValores>Sub-Total R$ {valor}</ResultadosValores> }
            { porcent > 0 &&
            <>
                <ResultadosValores>Gorjeta {porcent} % : R$ { (valor * porcent) / 100 }</ResultadosValores>
                <ResultadoFinal>Total : R$ { (valor * porcent / 100) + valor }</ResultadoFinal>
            </>
            }
        </Wrapper>
    )
}