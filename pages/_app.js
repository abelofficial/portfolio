// Core components
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

// Material ui
import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  responsiveFontSizes
} from '@material-ui/core';

// Local
import SEO from '@local/src/utils/next-seo.config';
import theme from '@local-utils/globalTheme';

const App = (props) => {
  const { Component, pageProps } = props;

  // Auto detect browser theme mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const globalTheme = responsiveFontSizes(
    theme(prefersDarkMode ? 'dark' : 'light')
  );

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
