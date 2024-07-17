import React from 'react'
import PageLayout from '../../../components/page_layout/PageLayout'
import styled from 'styled-components';
import Header from '../../../components/header/header';
import Tabbar from './components/tabbar/tabbar';
import themes from '../../../helpers/themes';

const StyledElement = styled.div`
  display: grid;
`;

function Settings() {
    return (
        <PageLayout>
            <StyledElement>
                <Header primaryColor={themes.admin.primary} title='Settings' />
                <Tabbar />
            </StyledElement>
        </PageLayout>
    )
}

export default Settings 