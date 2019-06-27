import React from "react";
import Sidebar from "./components/MainContentComponents/Sidebar";
import LandingPage from "./components/MainContentComponents/LandingPage";
import Chart from "./components/MainContentComponents/GraphComponents/Chart";
import NewsLarge from "./components/MainContentComponents/NewsComponents/NewsLarge";
import GameAxios from "./components/MainContentComponents/GamesComponents/GameAxios";
import GameSmall from "./components/MainContentComponents/GamesComponents/GameSmall";
import NewsSmall from "./components/MainContentComponents/NewsComponents/NewsSmall";
import Poll from "./components/MainContentComponents/PollComponents/Poll";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "./src_images/BackGroundImage2.png";
import "./app.css";
var axios = require("axios");



const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "repeat",
    paddingTop: "2%"
  },
  landing: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "repeat",
    paddingTop: "5%",
    paddingBottom: "15%"
    
  },
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

function AppLoader() {
  const classes = useStyles();
  const [isLandingClicked, setLanding] = React.useState(false);
  const [isButtonClicked, setClicked] = React.useState(false);
  const [publisherData, setPublisher] = React.useState("");
  const [whichList, setList] = React.useState(true);
  const [totalYesCount, setYesTotal] = React.useState(0);
  const [totalNoCount, setNoTotal] = React.useState(0);

  function getStarted() {
    setLanding(true);
    setPublisher("Nintendo");
    voteOptions("Nintendo");
  }

  function getPublisherInfo(event) {
    if (!isLandingClicked){
      getStarted(); // isLandingClicked is false, call the getStarted function
    }
      var publisher = event.currentTarget.getAttribute("value");
      setPublisher(publisher);
      if(isButtonClicked) setClicked(false);
  }

  var voteOptions = (param) => {
    axios({
      url:
        "/api/survey/results/" + param,
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        setCounts(response.data);
        
      })
      .catch(err => {
        console.error(err);
      });

  }

  var setCounts = (arr) => {
    let totalYes = 0;
    let totalNo = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].yes_count === 1) totalYes++;
      else if(arr[i].no_count === 1) totalNo++;
    }
    setYesTotal(totalYes);
    setNoTotal(totalNo);
  }

  var setVote = (event) => {
    setClicked(true);
    var newCountYes = 0;
    var newCountNo = 0;
    var buttonVal = event.currentTarget.getAttribute("value");
    if(buttonVal === "Yes") {
      newCountYes =  newCountYes + 1;
    } else if (buttonVal === "No") {
      newCountNo = newCountNo + 1;
    }
    putVote(publisherData, newCountYes, newCountNo);
    // getPollResults();
  }

  var putVote = (param, countYes, countNo) => {
    axios({
      url:
        "/api/survey/create/" + param,
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      data: {
        yes_count: countYes,
        no_count: countNo 
      }
    })
      .then(response => {
        // getPollResults();
        voteOptions(publisherData);
      })
      .catch(err => {
        console.error(err);
      });
  }

  var expandGames = event => {
    // Set Large List On
    setList(true);
  };

  var expandNews = event => {
    // Switch Game List with News List
    setList(false);
  };

  if (isLandingClicked) {
    return (
    <div className={classes.image}>
      <div className="app">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Sidebar onClick={getPublisherInfo} />
            <Grid container spacing={10} className={classes.inside}>
              <Grid item xs={12} lg={6}>
                <Chart data={publisherData} />
              </Grid>
              <Grid item xs={12} lg={6}>
                {whichList === true ? (
                  <GameAxios data={publisherData} />
                ) : (
                  <NewsLarge data={publisherData} />
                )}
              </Grid>
              <Grid item xs={6} lg={3} />
              <Grid item xs={12} lg={3}>
                <NewsSmall onClick={expandNews} data={publisherData} />
              </Grid>
              <Grid item xs={12} lg={3}>
                <GameSmall onClick={expandGames} data={publisherData} />
              </Grid>
              <Grid item xs={12} lg={3} />            
              <Grid item xs={12} lg={3} />
              <Grid item className={classes.paper} xs={12} lg={6}>
                <Poll isButtonClicked={isButtonClicked} yes={totalYesCount} no={totalNoCount} onClick={setVote}/>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
    );
  } else {
    // ---------------Conditional Render for either landing page or main content---------------------
    return (
    <div className={classes.landing}>
      <div className="app">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Sidebar onClick={getPublisherInfo} />
            <Grid container spacing={50} className={classes.inside}>
              <Grid item lg={3} />
              <Grid item className={classes.paper} xs={12} lg={6}>
                <LandingPage onClick={getStarted} />
              </Grid>
              <Grid item lg={3} />
              <Grid item lg={3} />
              <Grid item lg={3} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
    );
  }
}

export default AppLoader;
