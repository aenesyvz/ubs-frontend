import { createSlice } from '@reduxjs/toolkit';
import { Reducers } from './reducer';

export const SidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false,
    },
    reducers: Reducers,
});

export const { openSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;