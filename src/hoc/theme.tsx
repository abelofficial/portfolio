import { MantineProvider } from "@mantine/core";
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
      {children}
    </MantineProvider>
  );
};
