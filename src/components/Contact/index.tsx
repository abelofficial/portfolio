import React from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { Box, Center, Title } from "@mantine/core";
import data from "@static/contactData.json";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";

const Index = () => {
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
                alt='Github Icon'
                src={item.icon}
                height={35}
                width={35}
                className={classes.icon}
              />
              <p> {item.name} </p>
            </a>
          </Center>
        ))}
      </Box>
    </InfoContainer>
  );
};

export default Index;
