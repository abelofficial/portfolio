// Core components
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Provider as StateProvider } from "react-redux";
import { AnimatePresence } from "framer-motion";

// Material ui
import { CssBaseline } from "@material-ui/core";

// Local
import { store } from "@local-store/store";
import SEO from "@local/src/utils/next-seo.config";
import { CustomThemeProvider, SiteContainer } from "@local/src/components/hoc";
import Layout from "@local-components/Layout";

const App = (props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <DefaultSeo {...SEO} />
      </Head>

      <StateProvider store={store}>
        <CustomThemeProvider>
          <SiteContainer>
            <CssBaseline />
            <Layout>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence>
            </Layout>
          </SiteContainer>
        </CustomThemeProvider>
      </StateProvider>
    </>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
