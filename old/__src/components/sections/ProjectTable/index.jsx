import * as React from "react";
import { v4 as uuid } from "uuid";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { InternetIcon } from "@local-components/collections/icons";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import {
  HighLightText,
  Paragraph,
  StrongText,
  SubSectionTitle,
} from "@local-components/collections/text";
import useStyles from "./style";

function Row(props) {
  const { row } = props;
  const theme = useTheme();
  const styles = useStyles(theme)();
  const [open, setOpen] = React.useState(true);

  const getDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return new Date(date).toLocaleString("en-US", options);
  };

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        my={2}
      >
        <Box>
          <SubSectionTitle>{row.name}</SubSectionTitle>
          <Typography
            style={{
              fontStyle: "italic",
              paddingTop: "0.5rem",
              color: theme.palette.text.secondary,
              ...theme.typography.body2,
            }}
          >
            Framework{" "}
            <HighLightText
              variant='body2'
              style={{ fontWeight: 300, paddingLeft: "0.5rem" }}
            >
              {row.framework}
            </HighLightText>
          </Typography>
        </Box>
        <Box display='flex' alignItems='center'>
          <a
            href={`https://${row.link}`}
            style={{
              margin: "0 1rem",
            }}
          >
            <InternetIcon />
          </a>
          <Button
            variant='outlined'
            className={styles.actionButton}
            onClick={() => setOpen(!open)}
            sx={{
              textTransform: "lowercase",
              borderRadius: "1rem ",
              borderColor: theme.palette.secondary.main,
              color:
                theme.palette.type === "light"
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
            }}
          >
            {open ? "see less" : "see more"}
          </Button>
        </Box>
      </Box>
      <Grid column>
        <Grid item style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ padding: 1 }}>
              <StrongText
                style={{ ...theme.typography.h3, fontWeight: 300 }}
                gutterBottom
              >
                Deployment message
              </StrongText>

              <Box size='small' aria-label='purchases'>
                <Grid container direction='column'>
                  {row.history.map((historyRow) => (
                    <Grid
                      item
                      component={Box}
                      py={1}
                      display='flex'
                      flexDirection='column'
                      alignItems='flex-start'
                      key={uuid()}
                    >
                      <Paragraph>
                        Deployed at
                        <HighLightText
                          variant='body2'
                          style={{ fontWeight: 300, paddingLeft: "0.5rem" }}
                        >
                          {getDate(historyRow.lastUpdate)}
                        </HighLightText>
                      </Paragraph>

                      <Paragraph>
                        <Typography
                          style={{
                            fontStyle: "italic",
                            paddingTop: "0.5rem",
                            color: theme.palette.text.secondary,
                            ...theme.typography.body2,
                          }}
                        >
                          {historyRow.commitMessage}
                        </Typography>
                      </Paragraph>
                      <Box px={0.5} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Collapse>
        </Grid>
      </Grid>
    </>
  );
}

export default function ProjectTable({ projectsData }) {
  return (
    <Box
      style={{
        backgroundColor: "transparent",
        padding: "0.5rem",
        width: "100%",
        borderRadius: "1rem",
      }}
    >
      <Grid
        container
        xs={{ flexDirection: "column" }}
        md={{ flexDirection: "row" }}
      >
        {projectsData.map((row) => (
          <Grid item key={uuid()} width='100%'>
            <Row key={row.name} row={row} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}