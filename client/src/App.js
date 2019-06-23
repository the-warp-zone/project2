import React from "react";
import Sidebar from "./components/MainContentComponents/Sidebar";
import LandingPage from "./components/MainContentComponents/LandingPage";
import Chart from "./components/MainContentComponents/GraphComponents/Chart";
import NewsLarge from "./components/MainContentComponents/NewsComponents/NewsLarge";
import GameLarge from "./components/MainContentComponents/GamesComponents/GameAxios";
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

function App() {
  const classes = useStyles();

  return (
    // <div className="app">
    //   <div className={classes.root}>
    //     <Grid container spacing={10}>
    //       <Sidebar />
    //       <Grid container spacing={10} className={classes.inside}>
    //         <Grid item className={classes.paper} xs={12}>
    //           <Ticker />
    //         </Grid>

    //         <Grid item xs={12} lg={6}>
    //           <Chart />
    //         </Grid>

    //         <Grid item xs={12} lg={6}>
    	      
    //           <GameLarge />
    //         </Grid>

    //         <Grid item xs={6} lg={3} />

    //         <Grid item xs={12} lg={3}>
    //           <NewsSmall />
    //         </Grid>

    //         <Grid item xs={12} lg={3}>
    //           <GameSmall />
    //         </Grid>

    //         <Grid item xs={6} lg={3} />
    //       </Grid>
    //     </Grid>
    //   </div>
	// </div>

	// ---------------Conditional Render for either landing page or main content---------------------

	<div className="app">
	<div className={classes.root}>
	  <Grid container spacing={10}>
		<Sidebar />
		<Grid container spacing={10} className={classes.inside}>
			
			<Grid item  lg={3} />
		  <Grid item className={classes.paper} xs={12} lg={6}>
			<LandingPage />
		  </Grid>
		</Grid>
	  </Grid>
	</div>
  </div>

  );
}
export default App;
