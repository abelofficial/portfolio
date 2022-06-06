import { v4 as uuid } from "uuid";
import Image from "next/image";
import { Grid, Box, Divider, Title } from "@mantine/core";
import React from "react";

import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";

const Index = ({ title, data, ...restProps }) => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Grid columns={1} className={classes.container} {...restProps}>
        <Grid.Col span={1}>
          <Title order={4}>{title}</Title>
        </Grid.Col>

        {data.map((item, _i) => (
          <Box
            className={classes.section}
            component={Grid.Col}
            span={1}
            key={uuid()}
          >
            <Divider className={classes.divider} />
            <Title order={5}>{item.title}</Title>
            <Box className={classes.section}>
              <p className={classes.highlightText}>
                {item.place}, {item.startDate} - {item.endDate}
              </p>
              <Box pl='md' className={classes.sectionTop}>
                <Image
                  alt='github-profile-image'
                  className={classes.avatarImage}
                  src={item.logo}
                  width={50}
                  height={50}
                  layout='intrinsic'
                />
                <p className={classes.textContent}>{item.content}</p>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </InfoContainer>
  );
};

export default Index;
