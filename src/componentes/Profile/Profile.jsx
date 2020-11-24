import React from 'react'
import { Wrapper, Img, Title } from './style'

function Profile (props) {
    return (
        <Wrapper>
            <Img src={props.user.url} alt={props.user.name} />
            <Title>Olá, {props.user.name}</Title>
        </Wrapper>
      );
}

export default Profile;