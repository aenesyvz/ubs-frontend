import React from 'react'

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TabbarGeneralViewItem from './components/tabbarGeneralViewItem/tabbarGeneralViewItem';
import TabbarSecurityViewItem from './components/tabbarSecurityViewItem';

const StyledElement = styled.div`
  padding-inline: 10px;
`;

function TabbarView() {
    const { selectedTab } = useSelector((state) => state.settingsTabBar);

    return (
        <StyledElement>
            {selectedTab === 'General' && <TabbarGeneralViewItem />}
            {selectedTab === 'Security' && <TabbarSecurityViewItem />}
        </StyledElement>
    )
}

export default TabbarView;
