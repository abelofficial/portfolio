import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: false,
  showBurgerMenu: false,
  darkMode: false,
  sideBarPage: {
    summary: false,
    lock: false,
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
    setSideBarSummary: (state, action) => {
      if (!state.sideBarPage.lock) state.sideBarPage.summary = action.payload;
    },
    setSideBarSummaryLock: (state, action) => {
      state.sideBarPage.lock = action.payload;
    },
    showBurgerMenu: (state) => {
      state.showBurgerMenu = true;
    },
    hideBurgerMenu: (state) => {
      state.showBurgerMenu = false;
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
  setSideBarSummary,
  setSideBarSummaryLock,
  showBurgerMenu,
  hideBurgerMenu,
} = siteConfigSlice.actions;

// Selectors
export const selectDrawer = (state) => state.siteConfig.drawer;
export const selectDarkMode = (state) => state.siteConfig.darkMode;
export const selectSideBarPage = (state) => state.siteConfig.sideBarPage;
export const selectBurgerMenu = (state) => state.siteConfig.showBurgerMenu;

export default siteConfigSlice.reducer;
