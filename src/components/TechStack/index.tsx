import React from "react";
import Image from "next/image";
import clsx from "classnames";
import { v4 as uuid } from "uuid";
import { Box, Title } from "@mantine/core";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";
import { motion } from "framer-motion";
import { ITechstackModule } from "@src/types";

export interface ITechStackProps {
  title: string;
  data: Array<ITechstackModule>;
}

const Index = ({ title, data }: ITechStackProps) => {
  const { classes, theme } = useStyles();

  return (
    <InfoContainer>
      <Box>
        <Title order={4}> {title} </Title>
        <div className={classes.section}>
          {data.map((item, i) => (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                x: { type: "spring", damping: 100 },
                opacity: { duration: 1 },
              }}
              key={uuid()}
              className={clsx(classes.frameworkContainer)}
            >
              <Image
                alt={item.title + " icon"}
                width={theme.spacing.lg}
                height={theme.spacing.lg}
                src={item.icon.url}
                className={classes.image}
              />
              <small className={classes.text}>{item.title}</small>
            </motion.div>
          ))}
        </div>
      </Box>
    </InfoContainer>
  );
};

export default Index;
