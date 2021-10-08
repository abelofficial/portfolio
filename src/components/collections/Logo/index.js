import LogoSvg from '@local/src/assets/svgs/logo/image';
import { Box } from '@material-ui/core';

const Logo = (props) => {
  return (
    <Box m={2} {...props}>
      <LogoSvg src="/images/logo.svg" width={140} height={60} />
    </Box>
  );
};

export default Logo;
