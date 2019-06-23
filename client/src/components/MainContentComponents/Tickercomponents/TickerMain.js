import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./ticker.css";



class TickerComp extends Component {
  state = {
      Nintendo: "",
      Activision: "",
      EA: "",
      TakeTwo:  "",
      Sony: "",
    
  };
  componentDidMount() {
    
//     axios({
//       url:
//         "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=NTDOY"
//     }).then(response => {
      
      
//       let obj = response.data["Weekly Time Series"];
//       let dateObj = Object.keys(obj);
//       let todaysDateKey = dateObj[0];
//       let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
//       let todaysClosingPrice = todaysPrice['4. close'];
     
//       console.log("Nintendo $" + todaysClosingPrice)
//       this.setState({Nintendo: todaysClosingPrice});
//     });
//     axios({
//       url:
//         "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=ATVI"
//     }).then(response => {
      
//       let obj = response.data["Weekly Time Series"];
//       let dateObj = Object.keys(obj);
//       let todaysDateKey = dateObj[0];
//       let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
//       let todaysClosingPrice = todaysPrice['4. close']
     
//       console.log("Activision $" + todaysClosingPrice)
//       this.setState({Activision: todaysClosingPrice});
//     });
//     axios({
//       url:
//         "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=EA"
//     }).then(response => {
      
//       let obj = response.data["Weekly Time Series"];
//       let dateObj = Object.keys(obj);
//       let todaysDateKey = dateObj[0];
//       let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
//       let todaysClosingPrice = todaysPrice['4. close']
     
//       console.log("EA $" + todaysClosingPrice)
//       this.setState({EA: todaysClosingPrice});
//     });
//     axios({
//       url:
//         "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=TTWO"
//     }).then(response => {
      
//       let obj = response.data["Weekly Time Series"];
//       let dateObj = Object.keys(obj);
//       let todaysDateKey = dateObj[0];
//       let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
//       let todaysClosingPrice = todaysPrice['4. close']
     
//       console.log("TAKE2 $" + todaysClosingPrice)
//       this.setState({TakeTwo: todaysClosingPrice});
//     });
//     axios({
//       url:
//         "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=SNE"
//     }).then(response => {
      
//       let obj = response.data["Weekly Time Series"];
//       let dateObj = Object.keys(obj);
//       let todaysDateKey = dateObj[0];
//       let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
//       let todaysClosingPrice = todaysPrice['4. close']
     
//       console.log("Sony $" + todaysClosingPrice)
//       this.setState({Sony: todaysClosingPrice});
// });
   }
   render(){
    return (
    <div className="ticker">
      <Paper style={{
        padding: 10,
        }}>
        <Typography variant="h6" component="h6" style={{textAlign:"center"}}>
          Nintendo(NTDOY): ${this.state.Nintendo} || Activision(ATVI): ${this.state.Activision} || Electronic Arts(EA): ${this.state.EA} ||
        
          Take Two Interactive(TTWO): ${this.state.TakeTwo} || Sony Interactive Entertainment(SNE): ${this.state.Sony}
        </Typography>
      </Paper>
    </div>
  );
};
}
export default TickerComp;
