import React from 'react'
import PageLayout from '../../../components/page_layout/PageLayout'
import styled from 'styled-components';
import Header from '../../../components/header/header';
import Tabbar from './components/tabbar/tabbar';

const StyledElement = styled.div`
  display: grid;
  row-gap: 12px;
`;

function Settings() {
    return (
        <PageLayout>
            <StyledElement>
                <Header title='Settings' />
                <Tabbar />
            </StyledElement>
        </PageLayout>
    )
}

export default Settings 