import React from 'react';
import styled from 'styled-components';
import configs from '../../../../configs/configs';

const StyledElement = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

function SidebarLogo() {
    return <StyledElement>{configs.projectName}</StyledElement>;
}

export default SidebarLogo;