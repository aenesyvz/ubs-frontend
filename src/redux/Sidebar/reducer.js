export const Reducers = {
    openSidebar: (state, action) => {
        const { isOpen } = action.payload;
        state.isOpen = isOpen;
    },
};