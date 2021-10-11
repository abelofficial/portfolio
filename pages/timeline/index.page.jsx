// Core
import { NextSeo } from "next-seo";
// Material
import { Box } from "@material-ui/core";

// Local
import data from "./data.json";
import TimeLine from "@local/src/components/sections/TimeLine";

// Style
import useStyle from "./index.style";

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
      <TimeLine title='Experience' data={data.experience} />
      <TimeLine title='Education' data={data.education} />
    </Box>
  );
}
