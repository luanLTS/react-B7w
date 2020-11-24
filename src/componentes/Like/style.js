import styled from 'styled-components'

//styled components com props

export const Botao = styled.button`
  height: 20px;
  background-color: ${props => props.color || '#AAA'};
  flex: 1;
`

export const Wrapper = styled.div`
    display: flex;
    width: 300px;
    height: 20px;
    background-color: #00aabc;
    align-content: space-around;
`

export const Counter = styled.div`
    flex: 1;
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 20px;   
`