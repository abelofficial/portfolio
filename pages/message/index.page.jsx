// Core
import { NextSeo } from "next-seo";
// Material
import { Box } from "@material-ui/core";

// Local
import ChatBox from "@local/src/components/sections/ChatBox";
// Style
import useStyle from "./index.style";

export default function Message() {
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
      <ChatBox />
    </Box>
  );
}
