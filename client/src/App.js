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
import purple from "@material-ui/core/colors/purple";
import Image from "./src_images/BackGroundImage2.png";
var axios = require("axios");

const primary = purple[900];

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${Image})`,
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

// var options = { method: 'GET',
//   url: 'http://localhost:3001/api/survey/results',
//   headers: 
//    { 'cache-control': 'no-cache',
//      Connection: 'keep-alive',
//      'accept-encoding': 'gzip, deflate',
//      Host: 'localhost:3001',
//      'Postman-Token': '5929d8c9-c3e9-4add-a639-013b57d76aa6,bd6af312-030f-4d6a-82ff-3b152dbffd39',
//      'Cache-Control': 'no-cache',
//      Accept: '/',
//      'User-Agent': 'PostmanRuntime/7.15.0' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// What about the sidebar?
function AppLoader() {
  const classes = useStyles();
  const [isLandingClicked, setLanding] = React.useState(false);
  const [publisherData, setPublisher] = React.useState("");
  const [whichList, setList] = React.useState(true);
  const [yesCount, setYes] = React.useState(0);
  const [noCount, setNo] = React.useState(0);

  function getStarted() {
    setLanding(true);
    setPublisher("Nintendo");
    voteOptions("Nintendo");
  }

  function getPublisherInfo(event) {
    if (!isLandingClicked){
      getStarted(); // isLandingClicked is false, call the getStarted function
    }
    else {
     var publisher = event.currentTarget.getAttribute("value");
    setPublisher(publisher);
    voteOptions(publisher);
    // API call for votes 
    }
    

  }

  var voteOptions = (param) => {
    axios({
      url:
        "/api/survey/results/",
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        console.log(response.data[0]);
        setYes(response.data[0].yes_count);
        setNo(response.data[0].no_count);
      })
      .catch(err => {
        console.error(err);
      });

  }

  var setVote = (event) => {
    //
    
    var newCountYes = 0;
    var newCountNo = 0;
    console.log("Before Y: " + yesCount);
    console.log("Before N: " + noCount);
    var buttonVal = event.currentTarget.getAttribute("value");
    if(buttonVal === "Yes") {
      newCountYes = yesCount + 1;
      
      setYes(newCountYes);
    } else if (buttonVal === "No") {
      newCountNo = noCount + 1;
      
      setNo(newCountNo);
    }
    
    console.log("After Y: " + newCountYes);
    console.log("After N: " + newCountNo);
    putVote(publisherData, newCountYes, newCountNo);
  }

  var putVote = (param, countYes, countNo) => {
    console.log(param);
    axios({
      url:
        "/api/survey/update/" + param,
      method: "PUT",
      headers: {
        Accept: "application/json"
      },
      data: {
        yes_count: countYes,
        no_count: countNo
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    // axios.post('/api/survey/create/'+param, {yes_count: yesCount, no_count: noCount})
    // .then(function(response){
    //   console.log(response.data)})
    //   .catch(err => {
    //     console.error(err);
    //   });
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
      <div className="app">
        <div className={classes.root}>
          <Grid container spacing={10}>
            <Sidebar onClick={getPublisherInfo} />
            <Grid container spacing={10} className={classes.inside}>
              

              <Grid item xs={12} lg={6}>
                <Chart data={publisherData} />
              </Grid>

              <Grid item xs={12} lg={6}>
                {/* {Might want to make this conditional} */}
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

              <Grid item className={classes.paper} xs={12}>
                <Ticker yes={yesCount} no={noCount} onClick={setVote}/>
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
