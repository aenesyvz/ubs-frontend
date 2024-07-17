export const Reducers = {
    selectTab: (state, action) => {
        const { selectedTab } = action.payload;
        state.selectedTab = selectedTab;
    }
}