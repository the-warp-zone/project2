import React, { Component } from "react";
import Sidebar from "./components/MainContentComponents/Sidebar";
import LandingPage from "./components/MainContentComponents/LandingPage";
import Chart from "./components/MainContentComponents/GraphComponents/Chart";
import NewsLarge from "./components/MainContentComponents/NewsComponents/NewsLarge";
import Games from "./components/MainContentComponents/GamesComponents/GameCompMain";
import NewsList from "./components/MainContentComponents/NewsComponents/NewsList";
import GameAxios from "./components/MainContentComponents/GamesComponents/GameAxios";
import GameSmall from "./components/MainContentComponents/GamesComponents/GameSmall";
import NewsSmall from "./components/MainContentComponents/NewsComponents/NewsSmall";
import Ticker from "./components/MainContentComponents/Tickercomponents/TickerMain";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  inside: {
	flexGrow: 1,
	margin: "5%"
	},
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Sidebar />
        <Grid container spacing={10} className={classes.inside}>
          <Grid item className={classes.paper} xs={12}>
            <Ticker />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Chart />
          </Grid>

          <Grid item xs={12} sm={6}>
			{/* <NewsLarge /> */}
			<GameAxios />
			
          </Grid>

          <Grid item xs={6} sm={3}>
            
          </Grid>
          <Grid item xs={6} sm={3}>
            <NewsSmall />
          </Grid>
          <Grid item xs={6} sm={3}>
            <GameSmall />
          </Grid>
          <Grid item xs={6} sm={3}>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="app">
//         <Sidebar />
//         <LandingPage className="landingGrid"/> 
//         {/* <Ticker /> */}
//         {/* <Chart /> */}
//         {/* <News /> */}
//         {/* <Games /> */}
//         {/* <GameLargeCard /> */}
//         {/* <GameLarge />
// 				<GameCardSmall /> */}
//       </div>
//     );
//   }
// }
// export default App;
