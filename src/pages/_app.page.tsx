import { Theme } from "@hoc/theme";
import { AppShell } from "@mantine/core";
import { AppProps } from "next/app";
import { Provider as StateProvider } from "react-redux";
import store from "src/store";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StateProvider store={store}>
    <Theme>
      <AppShell
        styles={{ main: { overflow: "hidden", margin: 0, padding: 0 } }}
      >
        <Component {...pageProps} />
      </AppShell>
    </Theme>
  </StateProvider>
);

export default MyApp;
