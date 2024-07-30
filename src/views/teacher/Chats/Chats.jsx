import React from 'react'
import styled from 'styled-components'
import Persons from './components/persons';
import MessageByPerson from './components/messageByPerson';

const StyledElement = styled.section`
    display:flex;
`;
function TeacherChats() {
    return (
        <StyledElement>
            <Persons />
            <MessageByPerson />
        </StyledElement>
    )
}

export default TeacherChats