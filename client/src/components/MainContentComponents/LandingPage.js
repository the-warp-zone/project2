import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./landingPage.css";

class LandingPage extends Component {
  state = {
    yeet: "Yeet"
  };

  render() {
    return (
      <div className="landingContainer">
        <Paper>
          <Typography paragraph align="center" variant="h1" className="text">
            About Fast Travel Stocks
          </Typography>
          <Typography paragraph variant="h4" align="center" className="text">
            Fast Travel Stock is an application that allows you to search up
            specific video game developers stocks, news, and games. You can get
            started by clicking on the icon of the company or by clicking the
            list icon to bring up the names of the publishers. Once you select
            your publisher, the stocks will be displayed with clickable buttons
            for news, games, and about the publisher.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default LandingPage;
