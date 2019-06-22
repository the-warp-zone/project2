import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NintendoPic from "../../../../src/src_images/nintendo_card.jpg";
import "./games.css";

const useStyles = makeStyles({
  card: {
	maxWidth: 345,
	marginTop: "8%",
	marginLeft: "40%",
	width: "300px"
  },
  media: {
    height: 140,
  },

});

const GameCardSmall = () => {
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
            Checkout a list of games in order of release date
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
}
export default GameCardSmall;