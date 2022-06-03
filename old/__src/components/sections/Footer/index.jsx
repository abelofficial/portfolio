// Core
// Material ui
import { Box, Typography, useTheme } from "@mui/material";

// Local

// Component style
import useStyles from "./style";

const Footer = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Box item xs={12} className={styles.container}>
      <Typography className={styles.smallText}>
        Made by Abel © {new Date().getFullYear()}. As always With 💜
      </Typography>
    </Box>
  );
};

export default Footer;