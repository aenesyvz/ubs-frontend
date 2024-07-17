import React from 'react';
import styled from 'styled-components';
import themes from '../../../../../../helpers/themes';
import TabbarHeaderItem from './tabbarHeaderItem';
import { useSelector } from 'react-redux';
import { handleTabSelect } from "../../../../../../actions/actions";

const StyledElement = styled.div`
  margin-bottom:10px;
  display: flex;
  flex-direction: column;
  & > div {
    display: inline-flex;
  }
`;

const BorderStyledElement = styled.div`
  height: 3px;
  width: 70px;
  background-color: ${themes.admin.primary};
  margin-left: ${(props) => props.active * 70}px;
  transition: all 0.3s;
`;

function TabbarHeader() {
    const { selectedTab } = useSelector((state) => state.settingsTabBar);

    const tabs = [
        { title: 'General', key: 'General' },
        { title: 'Security', key: 'Security' },
    ];

    const activeTabIndex = tabs.findIndex((tab) => tab.key === selectedTab);

    return (
        <>
            <StyledElement>
                <div>
                    {tabs.map((tab) => (
                        <TabbarHeaderItem
                            key={tab.key}
                            title={tab.title}
                            active={tab.key === selectedTab}
                            onClick={() => handleTabSelect(tab.key)}
                        />
                    ))}
                </div>
                <BorderStyledElement active={activeTabIndex} />
            </StyledElement>
        </>
    );
}

export default TabbarHeader;