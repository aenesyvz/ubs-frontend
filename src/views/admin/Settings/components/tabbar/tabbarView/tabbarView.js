import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TabbarGeneralViewItem from './components/tabbarGeneralViewItem';
import TabbarAddressViewItem from './components/tabbarAddressViewItem';
import TabbarSecurityViewItem from './components/tabbarSecurityViewItem';

const StyledElement = styled.div`
  padding-inline: 10px;
`;

function TabbarView() {
    // const { selectedTab } = useSelector((state) => state.settingsTabBar);
    const selectedTab = "General";


    // const activeTabIndex = tabs.findIndex(tab => tab.key === selectedTab);

    return (
        <StyledElement>
            {selectedTab === 'General' && <TabbarGeneralViewItem />}
            {selectedTab === 'Address' && <TabbarAddressViewItem />}
            {selectedTab === 'Security' && <TabbarSecurityViewItem />}
        </StyledElement>
    )
}

export default TabbarView;
