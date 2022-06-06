import { ThemeProvider } from "@hoc/ThemeProvider";
import { Box } from "@mantine/core";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import { Provider as StateProvider } from "react-redux";
import { getCookie } from "cookies-next";
import store from "src/store";

const App = ({ Component, pageProps }: AppProps) => (
  <StateProvider store={store}>
    <ThemeProvider>
      <Box
        styles={{
          main: {
            margin: 0,
            padding: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  </StateProvider>
);

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default App;
