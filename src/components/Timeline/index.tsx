import { v4 as uuid } from "uuid";
import Image from "next/image";
import { Grid, Box, Divider, Title, Center } from "@mantine/core";
import React from "react";

import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";

const Index = ({ title, data, ...restProps }) => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Grid className={classes.container} {...restProps}>
        <Title order={4}>{title}</Title>
        {data.map((item, _i) => (
          <Box className={classes.section} key={uuid()}>
            <Divider className={classes.divider} />
            <Grid className={classes.section}>
              <Title order={5}>{item.title}</Title>
              <Center>
                <Image
                  alt='github-profile-image'
                  className={classes.avatarImage}
                  src={item.logo}
                  width={50}
                  height={50}
                />
                <Box pl='md'>
                  <p className={classes.highlightText}>
                    {item.place}, {item.startDate} - {item.endDate}
                  </p>
                  <p>{item.content}</p>
                </Box>
              </Center>
            </Grid>
          </Box>
        ))}
      </Grid>
    </InfoContainer>
  );
};

export default Index;
