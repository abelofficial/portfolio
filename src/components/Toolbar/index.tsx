import { Box, Grid, Title } from "@mantine/core";
import React from "react";
import NavLink from "@components/NavLinks";
import { BurgerMenuIcon } from "@components/Icons";
import useStyles from "./style";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();
  return (
    <>
      <Grid className={classes.mainSection}>
        <Box className={classes.headerContainer}>
          <Title order={4} className={classes.initial}>
            A.S
          </Title>
        </Box>
        <Box my='lg'>
          <NavLink invert />
        </Box>
      </Grid>
      <Box>
        <BurgerMenuIcon isActive={true} invert={true} />
      </Box>
    </>
  );
};

export default index;
