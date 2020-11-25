import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 1920px;
  height: 200px;
  background-color: #00deaa;
  margin: 0;
`
export const Titulo = styled.h1`
  color : ${(props) => props.color || '#ffa1bc'};
  font-size: 30px;
`
