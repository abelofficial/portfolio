// Core
import { NextSeo } from "next-seo";
// Material
import { Box } from "@material-ui/core";

// Local

// Style
import useStyle from "./index.style";
import { ComingSoon } from "@local/src/components/collections/text";

export default function Education() {
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
      <ComingSoon title='Education' />

      <Box height='100vh' />
    </Box>
  );
}
