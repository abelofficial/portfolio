// Core
// Material ui
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

// Local

// Component style
import useStyles from "./style";

const Footer = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Box item xs={12} className={styles.container}>
      <Typography variant='body2'>
        <small>
          Made by Abel © {new Date().getFullYear()}. As always With 💜
        </small>
      </Typography>
    </Box>
  );
};

export default Footer;
