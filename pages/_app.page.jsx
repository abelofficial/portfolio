// Core components
import React, { useEffect } from "react";
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
import { useRouter } from "next/router";
import * as ga from "@local-utils/googleAnalytics";
// import { AnimatePresence } from "framer-motion";

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.logPageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <DefaultSeo {...SEO} />
      </Head>

      <StateProvider store={store}>
        {/* <AnimatePresence exitBeforeEnter> */}
        <CssBaseline />
        <CustomThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomThemeProvider>
        {/* </AnimatePresence> */}
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
