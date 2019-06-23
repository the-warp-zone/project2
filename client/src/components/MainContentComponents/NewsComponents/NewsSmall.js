import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NintendoPicNews from "../../../../src/src_images/nintendo_news.jpg";
import "./news.css";

const useStyles = makeStyles({
  card: {
  width: "100%",
  justifyItems: "right",
  boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.65)"
  },
  media: {
    height: 140,
  },

});

const NewsSmall = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={NintendoPicNews}
          title="Nintendo News Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            "Nintendo" News
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Checkout recent news for "Nintendo"
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
export default NewsSmall;
