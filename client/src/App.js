import React, { Component } from "react";
import Sidebar from "./components/MainContentComponents/Sidebar";
import LandingPage from "./components/MainContentComponents/LandingPage";
import Chart from "./components/MainContentComponents/GraphComponents/Chart";
import NewsLarge from "./components/MainContentComponents/NewsComponents/NewsLarge";
import GameAxios from "./components/MainContentComponents/GamesComponents/GameAxios";
import GameSmall from "./components/MainContentComponents/GamesComponents/GameSmall";
import NewsSmall from "./components/MainContentComponents/NewsComponents/NewsSmall";
import Ticker from "./components/MainContentComponents/Tickercomponents/TickerMain";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./app.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  inside: {
    flexGrow: 1,
    margin: "5%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

// Change this to Class
// state
// isLandingPage clicked
// else Main hub

// What about the sidebar?
function AppLoader() {
  const classes = useStyles();
  const [isLandingClicked, setLanding] = React.useState(false);
  const [publisherData, setPublisher] = React.useState("");
  const [ticker, setTicker] = React.useState("");

  function getStarted() {
    setLanding(true);
  }

  function getPublisherInfo(event) {
    if (!isLandingClicked) getStarted(); // isLandingClicked is false, call the getStarted function
    setPublisher(event.currentTarget.getAttribute("value"));
    // API call for News, Games
  }

  var expandGames = event => {
    //
  };

  var expandNews = event => {
    //
  };

  if (isLandingClicked) {
    return (
      <div className="app">
        <div className={classes.root}>
          <Grid container spacing={10}>
            <Sidebar onClick={getPublisherInfo} />
            <Grid container spacing={10} className={classes.inside}>
              <Grid item className={classes.paper} xs={12}>
                <Ticker />
              </Grid>

              <Grid item xs={12} lg={6}>
                <Chart data={publisherData} />
              </Grid>

              <Grid item xs={12} lg={6}>
                {/* {Might want to make this conditional} */}
                <GameAxios data={publisherData} />
              </Grid>

              <Grid item xs={6} lg={3} />

              <Grid item xs={12} lg={3}>
                <NewsSmall onClick={expandNews} data={publisherData} />
              </Grid>

              <Grid item xs={12} lg={3}>
                <GameSmall onClick={expandGames} data={publisherData} />
              </Grid>

              <Grid item xs={6} lg={3} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  } else {
    // ---------------Conditional Render for either landing page or main content---------------------
    return (
      <div className="app">
        <div className={classes.root}>
          <Grid container spacing={10}>
            <Sidebar onClick={getPublisherInfo} />
            <Grid container spacing={10} className={classes.inside}>
              <Grid item lg={3} />
              <Grid item className={classes.paper} xs={12} lg={6}>
                <LandingPage onClick={getStarted} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AppLoader;
