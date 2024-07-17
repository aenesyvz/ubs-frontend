import React from 'react'
import ChangePicture from './components/changePicture'
import GeneralForm from './components/generalForm'
import styled from 'styled-components'

const StyledElement = styled.div`
    display:grid;
    gap:2rem;
`;

function TabbarGeneralViewItem() {
    return (
        <StyledElement>
            <ChangePicture />
            <GeneralForm />
        </StyledElement>

    )
}

export default TabbarGeneralViewItem