import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawer: false
};

export const siteConfigSlice = createSlice({
  name: 'siteConfig',
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.drawer = true;
    },
    closeDrawer: (state) => {
      state.drawer = false;
    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  }
});

// Action creators are generated for each case reducer function
export const { openDrawer, closeDrawer } = siteConfigSlice.actions;

export default siteConfigSlice.reducer;
