import React from "react";
import NewsLarge from "./NewsLarge";
import NewsListItem from "./NewsListItem";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    float: "right",
    margin: 0,
    overflowY: "scroll",
    maxHeight: 500
  },
  inline: {
    display: "inline"
  }
}));

// var AlignItemsList = props => {
//   const classes = useStyles();

//   return (
//     <List className={classes.root}>
//       <NewsListItem data={} style={}/>
//     </List>
//   );
// };

const NewsList = props => {
  const classes = useStyles();
  var id = 0;

  const newsItem = props.data.map(item => (
    <NewsListItem key={id++} data={item} />
  ));

  console.log(props.data);

  return (
    <List className={classes.root}>{newsItem}</List>
    // <div>
    //   <li>
    //     Title: {props.title}, Desciption: {props.description}
    //   </li>
    // </div>
  );
};

export default NewsList;
