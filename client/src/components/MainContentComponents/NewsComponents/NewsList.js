import React from "react";
import NewsListItem from "./NewsListItem";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
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

const NewsList = props => {
  const listStyle = {
    width: "100%",
    height: "100%"
  };
  const bStyle = {
    marginRight: "5px",
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
      <List className={classes.root}>{newsItem}</List>
    </div>
  );
};

export default NewsList;
