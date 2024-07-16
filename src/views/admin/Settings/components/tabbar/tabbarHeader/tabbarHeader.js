import React from 'react';
import styled from 'styled-components';
import themes from '../../../../../../helpers/themes';
import TabbarHeaderItem from './tabbarHeaderItem';

const StyledElement = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: inline-flex;
  }
`;

const BorderStyledElement = styled.div`
  height: 3px;
  width: 70px;
  background-color: ${themes.common.sidebar_navigate_active_bgcolor};
  margin-left: ${(props) => props.active * 70}px;
  transition: all 0.3s;
`;

function TabbarHeader({ onSelectTab, selectedTab }) {
    const tabs = [
        { title: 'General', key: 'General' },
        { title: 'Address', key: 'Address' },
        { title: 'Security', key: 'Security' },
    ];

    const activeTabIndex = 0;
    //tabs.findIndex((tab) => tab.key === selectedTab);

    return (
        <>
            <StyledElement>
                <div>
                    {tabs.map((tab) => (
                        <TabbarHeaderItem
                            key={tab.key}
                            title={tab.title}
                            active={tab.key === selectedTab}
                            onClick={() => onSelectTab(tab.key)}
                        />
                    ))}
                </div>
                <BorderStyledElement active={activeTabIndex} />
            </StyledElement>
        </>
    );
}

export default TabbarHeader;