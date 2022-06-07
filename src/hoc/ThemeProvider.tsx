import { ColorScheme, Global, MantineProvider } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode,
} from "@store/SiteConfig";
import { useEffect } from "react";
import darkTheme from "@utils/theme/darkTheme";
import lightTheme from "@utils/theme/lightTheme";

export interface IThemeProviderProps {
  mode: ColorScheme | undefined;
  children: JSX.Element;
}

export const ThemeProvider = ({ mode, children }: IThemeProviderProps) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    if (darkMode === undefined) {
      mode === "light" && dispatch(turnOffDarkMode());
      mode === "dark" && dispatch(setDarkMode());
      return;
    }
    darkMode || dispatch(turnOffDarkMode());
    darkMode && dispatch(setDarkMode());
  }, [darkMode]);

  const theme = darkMode ? lightTheme : darkTheme;
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        defaultRadius: "1rem",
        ...theme,
      }}
    >
      <Global
        styles={(t) => ({
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },

          body: {
            ...t.fn.fontStyles(),
            color: t.colorScheme === "dark" ? t.colors.dark[0] : t.black,
            lineHeight: t.lineHeight,
          },
        })}
      />
      {children}
    </MantineProvider>
  );
};
