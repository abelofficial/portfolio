import React from "react";
import { v4 as uuid } from "uuid";
import { Box, Center, Title } from "@mantine/core";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";
import { Image } from "react-datocms";

const Index = ({ data }) => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Title order={4} pb='xs'>
        Connect with me
      </Title>
      <Box className={classes.listContainer}>
        {data.map((item) => (
          <Center key={uuid()} className={classes.contactContainer}>
            <a
              target='_blank'
              rel='noreferrer'
              href={item.address}
              className={classes.contactLink}
            >
              <Image
                className={classes.icon}
                style={{ width: "25px", height: "25px" }}
                data={item?.icon?.responsiveImage || {}}
              />
              <p className={classes.text}> {item.title} </p>
            </a>
          </Center>
        ))}
      </Box>
    </InfoContainer>
  );
};

export default Index;
