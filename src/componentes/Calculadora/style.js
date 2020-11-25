import styled from 'styled-components'

export const Wrapper  = styled.div`
    background-color: #CCC;
    width: 400px;
    height: 300px;
`

export const Label = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
`

export const ResultadosValores = styled.h2`
    font-size: 12px;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
`

export const ResultadoFinal = styled(ResultadosValores)`
    font-size: 14px;
`

export const Input = styled.input`
    outline: none;
    width: 200px;
    height: 30px;
    border-radius: 15px;
`