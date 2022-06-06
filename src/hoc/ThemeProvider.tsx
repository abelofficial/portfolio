import { Global, MantineProvider } from "@mantine/core";
import { IProps } from "@src/types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode,
} from "@store/SiteConfig";
import { useEffect } from "react";
import darkTheme from "@utils/theme/darkTheme";
import lightTheme from "@utils/theme/lightTheme";
import { setCookies } from "cookies-next";

export const ThemeProvider = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    darkMode || dispatch(turnOffDarkMode());
    darkMode && dispatch(setDarkMode());
    setCookies("mantine-color-scheme", darkMode ? "dark" : "light", {
      maxAge: 60 * 60 * 24 * 30,
    });
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
