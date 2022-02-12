// Core components
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Provider as StateProvider } from "react-redux";

// Material ui
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";

// Local
import { store } from "@local-store/store";
import SEO from "@local-assets/next-seo.config";
import createEmotionCache from "@local-utils/createEmotionCache";
import { CustomThemeProvider } from "@local-components/hoc";
import Layout from "@local-components/Layout";
import { AnimatePresence } from "framer-motion";

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
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </CustomThemeProvider>
      </StateProvider>
    </CacheProvider>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
