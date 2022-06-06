import { ThemeProvider } from "@hoc/ThemeProvider";
import { Box } from "@mantine/core";
import { motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import { Provider as StateProvider } from "react-redux";
import { getCookie } from "cookies-next";
import store from "src/store";
import Layout from "@hoc/Layout";

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
        <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </Box>
    </ThemeProvider>
  </StateProvider>
);

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default App;
