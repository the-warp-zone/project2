import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NintendoPic from "../../../../src/src_images/nintendo_card.jpg";
import UbisoftPic from "../../../../src/src_images/UbisoftGames.jpg";
import SonyPic from "../../../../src/src_images/SIEGames.jpg";
import TakeTwoPic from "../../../../src/src_images/TakeTwoGames.jpg";
import ActivisionPic from "../../../../src/src_images/ActivisionGames.jpg";

const useStyles = makeStyles({
  card: {
    width: "100%",
    justifyContent: "center",
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.65)"
  },
  media: {
    height: 140
  }
});

const GameSmall = props => {
  const classes = useStyles();

  var image = "";
  // conditional statement for image based on props
  switch (props.data) {
    case "Nintendo":
      image = NintendoPic;
      break;
    case "Sony":
      image = SonyPic;
      break;
    case "Ubisoft":
      image = UbisoftPic;
      break;
    case "Take-Two Interactive":
      image = TakeTwoPic;
      break;
    case "Activision":
      image = ActivisionPic;
      break;
    default:
      image = "";
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title={props.data + " Picture"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.data} Games
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          List of Game Releases by {props.data}, sorted by date.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={props.onClick}>
          See List
        </Button>
      </CardActions>
    </Card>
  );
};
export default GameSmall;
