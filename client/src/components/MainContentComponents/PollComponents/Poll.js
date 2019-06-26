import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";

const color = blue[800];

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: color  
  }
}));


var PollComp = (props) => {
  const classes = useStyles();
  if(props.isButtonClicked === false) {
    return (
      <div>
        <Paper
          style={{
            padding: 10
          }}>
          <Typography
            variant="h4"
            component="h5"
            style={{ textAlign: "center" }}
          >
              Would you purchase stock from this Publisher? 
          </Typography>
            
          <Button value="Yes" variant="contained" size="large" color="primary" count={props.yes} className={classes.margin} onClick={props.onClick}>
                Yes
          </Button>

          <Button value="No" variant="contained" size="large" color="primary" count={props.no}className={classes.margin} onClick={props.onClick}>
                No
          </Button>
        </Paper>
      </div>
    );
  } else {
    return(
      <div>
      <Paper
          style={{
            padding: 10
          }}>
            <Typography
            variant="h4"
            component="h5"
            style={{ textAlign: "center" }}
          >
              Would you purchase stock from this Publisher? 
          </Typography>
          <Typography
            variant="h4"
            component="h5"
            style={{ textAlign: "center" }}
          >
              {props.yes} Other people said yes, {props.no} people said No
          </Typography>   
        </Paper>
      </div>
    )
  }

}

export default PollComp;

