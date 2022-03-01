import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: false,
  darkMode: false,
  sideBarPage: {
    summary: true,
  },
};

export const siteConfigSlice = createSlice({
  name: "siteConfig",
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
    },
    getSideBarPage: (state) => {
      return state.sideBarPage;
    },
    setSideBarPage: (state, action) => {
      state.sideBarPage = action.payload;
    },
  },
});

// Actions
export const {
  openDrawer,
  closeDrawer,
  setDarkMode,
  turnOffDarkMode,
  getSideBarPage,
  setSideBarPage,
} = siteConfigSlice.actions;

// Selectors
export const selectDrawer = (state) => state.siteConfig.drawer;
export const selectDarkMode = (state) => state.siteConfig.darkMode;
export const selectSideBarPage = (state) => state.siteConfig.sideBarPage;

export default siteConfigSlice.reducer;
