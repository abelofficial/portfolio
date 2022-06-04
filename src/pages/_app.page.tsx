import { Theme } from "@hoc/theme";
import { AppProps } from "next/app";
import { Provider as StateProvider } from "react-redux";
import store from "src/store";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StateProvider store={store}>
    <Theme>
      <Component {...pageProps} />
    </Theme>
  </StateProvider>
);

export default MyApp;
