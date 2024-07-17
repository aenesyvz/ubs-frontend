import { configureStore } from '@reduxjs/toolkit';
import SettingsTabBarReducer from "./SettingsTabbar/SettingsTabbar"
import SidebarReducer from "./Sidebar/Sidebar"

export const store = configureStore({
    reducer: {
        sidebar: SidebarReducer,
        settingsTabBar: SettingsTabBarReducer,
    }

})