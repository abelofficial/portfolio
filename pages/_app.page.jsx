// Core components
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { Provider as StateProvider } from 'react-redux';

// Material ui
import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  responsiveFontSizes
} from '@material-ui/core';

// Local
import { store } from '@local-store/store';
import SEO from '@local/src/utils/next-seo.config';
import theme from '@local-utils/globalTheme';
import Layout from '@local-components/Layout';

const App = (props) => {
  const { Component, pageProps } = props;

  // Auto detect browser theme mode
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const globalTheme = responsiveFontSizes(theme(false));

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <DefaultSeo {...SEO} />
      </Head>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <StateProvider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
