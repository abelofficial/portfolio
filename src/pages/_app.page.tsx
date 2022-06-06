import { ThemeProvider } from "@hoc/ThemeProvider";
import { Box, ColorScheme } from "@mantine/core";
import { motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import { Provider as StateProvider } from "react-redux";
import { getCookie } from "cookies-next";
import store from "@src/store";
import Layout from "@hoc/Layout";

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
            <Layout>
              <Component {...pageProps} />
            </Layout>
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
