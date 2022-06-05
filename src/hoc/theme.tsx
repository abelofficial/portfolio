import { Global, MantineProvider } from "@mantine/core";
import { IProps } from "src/types";
import lightTheme from "@utils/lightTheme";
// import darkTheme from "@assets/darkTheme";

export const Theme = ({ children }: IProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        defaultRadius: "1rem",
        ...lightTheme,
      }}
    >
      <Global
        styles={(theme) => ({
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },

          body: {
            paddingLeft: "0.4rem",
            ...theme.fn.fontStyles(),
            // backgroundColor:
            //   theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
            lineHeight: theme.lineHeight,
          },
        })}
      />
      {children}
    </MantineProvider>
  );
};
