// Core components
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Provider as StateProvider } from "react-redux";
import { AnimatePresence } from "framer-motion";

// Material ui
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";

// Local
import { store } from "@local-store/store";
import SEO from "@local/src/utils/next-seo.config";
import createEmotionCache from "@local/src/utils/createEmotionCache";
import { CustomThemeProvider } from "@local/src/components/hoc";
import Layout from "@local-components/Layout";

const clientSideEmotionCache = createEmotionCache();
const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <DefaultSeo {...SEO} />
      </Head>

      <StateProvider store={store}>
        <CustomThemeProvider>
          <CssBaseline />

          <Layout>
            <h1> Under Construction</h1>
            <Component {...pageProps} />
            {/* <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence> */}
          </Layout>
        </CustomThemeProvider>
      </StateProvider>
    </CacheProvider>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
