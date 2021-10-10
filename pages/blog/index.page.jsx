// Core
import { NextSeo } from "next-seo";
// Material
import { Box } from "@material-ui/core";

// Local

// Style
import useStyle from "./index.style";
import TechStack from "@local/src/components/sections/TechStack";

export default function Home() {
  const styles = useStyle();

  return (
    <Box>
      <NextSeo
        title='Nextjs With Material Ui'
        canonical='http://localhost/3000'
        openGraph={{
          title: "Nextjs With Material Ui",
          url: "http://localhost/3000",
        }}
      />
      <TechStack />

      <Box height='200vh' />
    </Box>
  );
}
