import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookies } from "cookies-next";

// Define a type for the slice state
interface ConfigState {
  drawer: boolean;
  showBurgerMenu: boolean;
  darkMode: boolean | undefined;
  sideBarPage: {
    summary: boolean;
    lock: boolean;
  };
}

// Define the initial state using that type
const initialState: ConfigState = {
  drawer: false,
  showBurgerMenu: false,
  darkMode: undefined,
  sideBarPage: {
    summary: false,
    lock: false,
  },
};

export const configsSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    // Action to toggle between dark and light mode
    openDrawer: (state) => {
      state.drawer = true;
    },
    closeDrawer: (state) => {
      state.drawer = false;
    },
    setDarkMode: (state) => {
      state.darkMode = true;
      setCookies("mantine-color-scheme", "dark", {
        maxAge: 60 * 60 * 24 * 30,
      });
    },
    turnOffDarkMode: (state) => {
      state.darkMode = false;
      setCookies("mantine-color-scheme", "light", {
        maxAge: 60 * 60 * 24 * 30,
      });
    },
    setSideBarSummary: (state, action) => {
      if (!state.sideBarPage.lock) state.sideBarPage.summary = action.payload;
    },
    setSideBarSummaryLock: (state, action: PayloadAction<boolean>) => {
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

export const {
  openDrawer,
  closeDrawer,
  setDarkMode,
  turnOffDarkMode,
  setSideBarSummary,
  setSideBarSummaryLock,
  showBurgerMenu,
  hideBurgerMenu,
} = configsSlice.actions;

// Selectors
export const selectDrawer = (state) => state.configs.drawer;
export const selectDarkMode = (state) => state.configs.darkMode;
export const selectSideBarPage = (state) => state.configs.sideBarPage;
export const selectBurgerMenu = (state) => state.configs.showBurgerMenu;

export default configsSlice.reducer;
