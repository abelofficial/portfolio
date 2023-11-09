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
  }, [darkMode, dispatch, mode]);

  const { colorScheme, ...theme } = darkMode ? lightTheme : darkTheme;
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        defaultRadius: "1rem",
        headings: {
          // properties for all headings
          fontWeight: 400,
          fontFamily: "Roboto",
        },
        fontSizes: {
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
          xl: 20,
        },
        colorScheme,
        colors: {
          ...theme.colors,
        },
      }}
    >
      <Global
        styles={(t) => ({
          ".mantine-Code-root": {
            display: "block",
            whiteSpace: "pre",
            "-webkit-overflow-scrolling": "touch",
            overflowX: "scroll",
            maxWidth: "100%",
            minWidth: "100px",
            padding: 0,
          },
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
