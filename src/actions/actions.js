import { selectTab } from '../redux/SettingsTabbar/SettingsTabbar';
import { openSidebar } from '../redux/Sidebar/Sidebar';
import { store } from '../redux/store';

export const handleTabSelect = (tab) => {
    store.dispatch(selectTab({ selectedTab: tab }));
};


export const handleOpenSidebar = (response) => {
    store.dispatch(openSidebar(response));
};