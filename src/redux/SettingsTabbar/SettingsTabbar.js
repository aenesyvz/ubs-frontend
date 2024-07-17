import { createSlice } from '@reduxjs/toolkit';
import { Reducers } from './reducers';

export const SettingsTabBarSlice = createSlice({
    name: 'settingsTabBar',
    initialState: {
        selectedTab: 'General',
    },
    reducers: Reducers,
});

export const { selectTab } = SettingsTabBarSlice.actions;
export default SettingsTabBarSlice.reducer;