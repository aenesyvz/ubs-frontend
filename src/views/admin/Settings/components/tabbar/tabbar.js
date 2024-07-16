import React from 'react';
import styled from 'styled-components';
import TabbarHeader from './tabbarHeader/tabbarHeader';
import TabbarView from './tabbarView/tabbarView';
const StyledElement = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

function Tabbar() {
    // const { selectedTab } = useSelector((state) => state.settingsTabBar);

    return (
        <>
            <StyledElement>
                <TabbarHeader onSelectTab={null} selectedTab={null} />
            </StyledElement>
            <TabbarView></TabbarView>
        </>
    );
}

export default Tabbar;