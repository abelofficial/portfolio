import { v4 as uuid } from "uuid";
import { Grid, Title, Timeline, ThemeIcon, Text } from "@mantine/core";
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
          <Title order={4}>{title}</Title>
          <Image src={iconUrl} alt='icon' width={35} height={35} />
        </Grid.Col>

        <Timeline active={0} bulletSize={15} lineWidth={1} color='orange'>
          {data.map((item, _i) => (
            <Timeline.Item
              key={uuid()}
              color={theme.colors.primaryColor[5]}
              bullet={
                <ThemeIcon
                  size={15}
                  variant='gradient'
                  gradient={{
                    from: theme.colors.primaryColor[0],
                    to: theme.colors.primaryColor[3],
                  }}
                  radius='xl'
                >
                  <TimeLineIcon
                    width={10}
                    height={10}
                    isActive
                    invert={false}
                  />
                </ThemeIcon>
              }
            >
              <Title order={4} color='secondary'>
                {item.title}
              </Title>
              <Text className={classes.highlightText} color='gray'>
                {item.startDate} - {item.endDate}
              </Text>
              <Text
                className={classes.highlightText}
                variant='gradient'
                gradient={{ from: "#F76707", to: "#FFA94D", deg: 90 }}
              >
                {item.place}
              </Text>
              <Text className={classes.description}>{item.content}</Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Grid>
    </InfoContainer>
  );
};

export default Index;
