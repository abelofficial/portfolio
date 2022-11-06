import { ThemeProvider } from "@hoc/ThemeProvider";
import { Box, ColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import { Provider as StateProvider } from "react-redux";
import { getCookie } from "cookies-next";
import store from "@src/store";

const App = ({
  Component,
  pageProps,
  colorScheme,
}: AppProps & { colorScheme: ColorScheme }) => {
  return (
    <StateProvider store={store}>
      <ThemeProvider mode={colorScheme}>
        <Box
          styles={{
            main: {
              margin: 0,
              padding: 0,
            },
          }}
        >
          <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
            <Component {...pageProps} />
          </motion.div>
        </Box>
      </ThemeProvider>
    </StateProvider>
  );
};

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || undefined,
});

export default App;
