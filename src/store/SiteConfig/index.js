import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawer: false,
  darkMode: false
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
    },
    setDarkMode: (state) => {
      state.darkMode = true;
    },
    turnOffDarkMode: (state) => {
      state.darkMode = false;
    }
  }
});

// Actions
export const { openDrawer, closeDrawer, setDarkMode, turnOffDarkMode } =
  siteConfigSlice.actions;

// Selectors
export const selectDrawer = (state) => state.siteConfig.drawer;
export const selectDarkMode = (state) => state.siteConfig.darkMode;

export default siteConfigSlice.reducer;
