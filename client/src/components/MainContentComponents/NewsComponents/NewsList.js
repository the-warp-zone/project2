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
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    float: "right",
    marginTop: "15%",
    overflowY: "scroll",
    maxHeight: 600
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
  const bStyle = {
    // marginRight: "1%",
    // marginTop: "17%",
    // float: "right",
    // background: "linear-gradient(45deg, #0a9df1 , #62058d )",
    // color: "white"
  };
  const classes = useStyles();
  var id = 0;

  const newsItem = props.data.map(item => (
    <NewsListItem key={id++} data={item} />
  ));

  console.log(props.data);

  return (
    <div>
      {/* <Button variant="contained" size="small" color="third" style={bStyle}>
        Close
      </Button> */}
      <h1>Hey</h1>
      <List className={classes.root}>{newsItem}</List>
    </div>
    // <div>
    //   <li>
    //     Title: {props.title}, Desciption: {props.description}
    //   </li>
    // </div>
  );
};

export default NewsList;
