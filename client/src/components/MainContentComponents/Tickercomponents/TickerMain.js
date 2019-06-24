import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./ticker.css";

class TickerComp extends Component {
  state = {
    todaysPrice: "",
    ticker: ""
  };
  componentDidMount() {
    this.axiosCall(this.props.data);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.axiosCall(this.props.data);
    }
  }
  axiosCall(data) {
    var stockTicker = "";
    switch (data) {
      case "Nintendo":
        stockTicker = "NTDOY";
        break;
      case "Sony":
        stockTicker = "SNE";
        break;
      case "Activision":
        stockTicker = "ATVI";
        break;
      case "Take-Two Interactive":
        stockTicker = "TTWO";
        break;
      case "Ubisoft":
        stockTicker = "UBSFY";
        break;
    }
    this.setState({ ticker: stockTicker });
    axios({
      url:
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=" +
        stockTicker +
        "&apikey=W6K6C59BPUWQ6KBK"
    }).then(response => {
      console.log(response);
      console.log(response.data);
      let obj = response.data["Weekly Time Series"];
      let dateObj = Object.keys(obj);
      let todaysDateKey = dateObj[0];
      let todaysPrice = response.data["Weekly Time Series"][todaysDateKey];
      let todaysClosingPrice = todaysPrice["4. close"];
      console.log(todaysClosingPrice);
      this.setState({ todaysPrice: todaysClosingPrice });
    });
  }

  render() {
    return (
      <div className="ticker">
        <Paper
          style={{
            padding: 10
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            style={{ textAlign: "center" }}
          >
            {this.props.data} ({this.state.ticker}) || ${this.state.todaysPrice}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default TickerComp;
