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

const GameSmall = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={NintendoPic}
          title="Nintendo Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            "Nintendo" Games
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            List of Game Releases by "Nintendo" sorted by date.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See List
        </Button>
      </CardActions>
    </Card>
  );
};
export default GameSmall;
