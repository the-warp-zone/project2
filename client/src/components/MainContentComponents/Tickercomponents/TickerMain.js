import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./ticker.css";


class Ticker extends Component {
  state = {
      Nintendo: 1,
      Activision: 2,
      EA: 3,
      TakeTwo: 4,
      Sony: 5
    
  };
  componentDidMount() {
    axios({
      url:
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=NTDOY"
    }).then(response => {
      
      let obj = response.data["Weekly Time Series"];
      let dateObj = Object.keys(obj);
      let todaysDateKey = dateObj[0];
      let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
      let todaysClosePrice = todaysPrice['4. close']
     
      console.log("Nintendo $" + todaysClosePrice)

    });
    axios({
      url:
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=ATVI"
    }).then(response => {
      
      let obj = response.data["Weekly Time Series"];
      let dateObj = Object.keys(obj);
      let todaysDateKey = dateObj[0];
      let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
      let todaysClosePrice = todaysPrice['4. close']
     
      console.log("Activision $" + todaysClosePrice)

    });
    axios({
      url:
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=EA"
    }).then(response => {
      
      let obj = response.data["Weekly Time Series"];
      let dateObj = Object.keys(obj);
      let todaysDateKey = dateObj[0];
      let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
      let todaysClosePrice = todaysPrice['4. close']
     
      console.log("EA $" + todaysClosePrice)

    });
    axios({
      url:
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=TTWO"
    }).then(response => {
      
      let obj = response.data["Weekly Time Series"];
      let dateObj = Object.keys(obj);
      let todaysDateKey = dateObj[0];
      let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
      let todaysClosePrice = todaysPrice['4. close']
     
      console.log("TAKE2 $" + todaysClosePrice)

    });
    axios({
      url:
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=SNE"
    }).then(response => {
      
      let obj = response.data["Weekly Time Series"];
      let dateObj = Object.keys(obj);
      let todaysDateKey = dateObj[0];
      let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
      let todaysClosePrice = todaysPrice['4. close']
     
      console.log("Sony $" + todaysClosePrice)

    });
  }
   render(){
    return (
    <div className="ticker">
      <Paper style={{
        padding: 10,
        }}>
        <Typography variant="h5" component="h3" style={{textAlign:"center"}}>
          Nintendo(NTDOY): ${this.state.Nintendo} | Activision(ATVI): ${this.state.Activision} | Electronic Arts(EA): ${this.state.EA}
        </Typography>
        <Typography variant="h5" component="h3" style={{textAlign:"center"}}>
          Take Two Interactive(TTWO): ${this.state.TakeTwo} | Sony Interactive Entertainment(SNE): ${this.state.Sony}
        </Typography>
      </Paper>
    </div>
  );
};
}
export default Ticker;
