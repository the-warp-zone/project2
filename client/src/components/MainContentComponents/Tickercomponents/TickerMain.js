import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const Ticker = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Nintendo(NTDOY): "" | Activision(ATVI): "" | Electronic Arts(EA): ""
        </Typography>
        <Typography variant="h5" component="h3">
          Take Two Interactive(TTWO): "" | Sony Interactive Entertainment(SNE):
          ""
        </Typography>
      </Paper>
    </div>
  );
};

export default Ticker;
