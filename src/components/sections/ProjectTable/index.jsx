import * as React from "react";
import { v4 as uuid } from "uuid";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import { InternetIcon } from "@local-components/collections/icons";
import { Button, Chip, Grid, useTheme } from "@mui/material";
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
          <Chip
            style={{
              backgroundColor: theme.palette.secondary.main,
              padding: "0.1em",
              fontSize: "0.7rem",
            }}
            label={row.framework}
          />
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
              <StrongText>Latest activities</StrongText>

              <Box size='small' aria-label='purchases'>
                <Grid container>
                  {row.history.map((historyRow) => (
                    <Grid item scope='row' key={historyRow.date}>
                      <HighLightText>
                        {getDate(historyRow.lastUpdate)}
                      </HighLightText>
                      <Paragraph>{historyRow.commitMessage}</Paragraph>
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
    <Paper
      component={Paper}
      style={{
        backgroundColor: "transparent",
        padding: "0.5rem",
        width: "100%",
        borderRadius: "1rem",
      }}
    >
      <Grid column direction='row' aria-label='collapsible table'>
        {projectsData.map((row) => (
          <Grid item key={uuid()}>
            <Row key={row.name} row={row} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
