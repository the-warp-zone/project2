import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LandingPic from "../../../src/src_images/sekiro.jpg";

const useStyles = makeStyles({
  card: {
    marginBottom: "30%",
    width: "100%",
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.65)"
  },
  media: {
    height: 500
  }
});

const LandingPage = props => {
  const classes = useStyles();
  const bStyle = {
    margin: "auto",
    background: "linear-gradient(45deg, #0a9df1 , #62058d )",
    color: "white"
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={LandingPic}
        title="Fast Travel Stocks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Fast Travel Stocks
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Fast Travel Stock is an application that allows you to search up
          specific video game developers stocks, news, and games. You can get
          started by clicking on the icon of the company or by clicking the list
          icon to bring up the names of the publishers. Once you select your
          publisher, the stocks will be displayed with clickable buttons for
          news, games, and about the publisher.
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="default"
          style={bStyle}
          onClick={props.onClick}
        >
          Get Started
        </Button>
      </CardActions>
    </Card>
  );
};
export default LandingPage;