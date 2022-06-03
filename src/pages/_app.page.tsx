import { Theme } from "@hoc/theme";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Theme>
    <Component {...pageProps} />
  </Theme>
);

export default MyApp;
