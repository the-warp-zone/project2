import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
const cardStyles = {
  display: "inline"
};
var NewsItem = props => {
  // If you can read this you don't need glasses HEY
  var StrippedTitle = props.data.title.replace(/(<([^>]+)>)/gi, "");
  var StrippedDescription = props.data.description.replace(/(<([^>]+)>)/gi, "");
  var shortDescription = StrippedDescription.slice(0, 75) + "...";

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="image" src={props.data.image.thumbnail} />
        </ListItemAvatar>
        <ListItemText
          primary={<a href={props.data.url}>{StrippedTitle}</a>} //primary text
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                styles={cardStyles}
                color="textPrimary"
              />
              {shortDescription}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default NewsItem;
