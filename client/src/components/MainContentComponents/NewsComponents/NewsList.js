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
    backgroundColor: theme.palette.background.paper,
    borderRadius: "0.5rem",
    overflowY: "scroll",
    maxHeight: 400,
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.65)"
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
  const listStyle = {
    width: "100%",
    height: "100%"
  }
  const bStyle = {
    marginLeft: "5px",
    marginTop: "5px",
    float: "right",
    background: "linear-gradient(45deg, #0a9df1 , #62058d )",
    color: "white"
  };
  const classes = useStyles();
  var id = 0;

  const newsItem = props.data.map(item => (
    <NewsListItem key={id++} data={item} />
  ));

  //console.log(props.data);

  return (
    <div style={listStyle}>
      
      <List className={classes.root}>
        <Button variant="contained" size="small" color="third" style={bStyle}>
        Close
      </Button>
        {newsItem}
      </List>
      
    </div>
    // <div>
    //   <li>
    //     Title: {props.title}, Desciption: {props.description}
    //   </li>
    // </div>
  );
};

export default NewsList;
