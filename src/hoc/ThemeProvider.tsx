import { ColorScheme, Global, MantineProvider } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode,
} from "@store/SiteConfig";
import { useEffect } from "react";
import darkTheme from "@styles/darkTheme";
import lightTheme from "@styles/lightTheme";

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
        headings: {
          // properties for all headings
          fontWeight: 400,
          fontFamily: "Roboto",

          // properties for individual headings, all of them are optional
          sizes: {
            h1: { fontWeight: 100, fontSize: 32, lineHeight: 1.4 },
            h2: { fontSize: 28, lineHeight: 1.5 },
            // ...up to h6
            h6: { fontWeight: 900 },
          },
        },
        fontSizes: {
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
          xl: 20,
        },

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
