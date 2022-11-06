import { v4 as uuid } from "uuid";
import { Grid, Box, Title, Timeline, ThemeIcon } from "@mantine/core";
import React from "react";
import Image from "next/image";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";
import { TimeLineIcon } from "@components/Icons";

const Index = ({ title, iconUrl, data, ...restProps }) => {
  const { classes, theme } = useStyles();

  return (
    <InfoContainer>
      <Grid columns={12} className={classes.container} {...restProps}>
        <Grid.Col xs={12} className={classes.header}>
          <Title order={5}>{title}</Title>
          <Image src={iconUrl} alt='icon' width={35} height={35} />
        </Grid.Col>

        <Timeline active={0} bulletSize={15} lineWidth={1} color='orange'>
          {data.map((item, _i) => (
            <Timeline.Item
              key={uuid()}
              color={theme.colors.primaryColor[5]}
              bullet={
                <ThemeIcon
                  size={22}
                  variant='gradient'
                  gradient={{
                    from: theme.colors.primaryColor[1],
                    to: theme.colors.primaryColor[5],
                  }}
                  radius='xl'
                >
                  <TimeLineIcon
                    width={16}
                    height={16}
                    isActive
                    invert={false}
                  />
                </ThemeIcon>
              }
            >
              <Box className={classes.indicator}>
                <p className={classes.highlightText}>{item.place}</p>
              </Box>
              <Title order={5}>{item.title}</Title>
              <p className={classes.highlightText}>
                {item.startDate} - {item.endDate}
              </p>
              <p className={classes.description}>{item.content}</p>
            </Timeline.Item>
          ))}
        </Timeline>
      </Grid>
    </InfoContainer>
  );
};

export default Index;
