import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";
import "./ticker.css";

const color = blue[800];

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: color  
  }
}));


export default function TickerComp() {
  const classes = useStyles();
     
  return (

    <div className="questionare">
      <Paper
        style={{
          padding: 10
        }}
      >
        <Typography
          variant="h4"
          component="h5"
          style={{ textAlign: "center" }}
        >
            Would you purchase stock for this Publisher? 
        </Typography>
          
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
              Yes
        </Button>

        <Button variant="contained" size="large" color="primary" className={classes.margin}>
              No
        </Button>
      </Paper>
    </div>
  );
}



