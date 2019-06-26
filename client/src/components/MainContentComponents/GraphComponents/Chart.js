import React, { Component } from "react";
import CanvasJSReact from "../../../canvasjs.react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  state = {
    dataPoints: []
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
      default:
        stockTicker = "NTDOY";
    }
    axios({
      url:
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey="+ process.env.REACT_APP_CHART_KEY +"P&symbol=" +
        stockTicker
    }).then(response => {
      // pass the symbol as a prop?

      //console.log(response.data["Weekly Time Series"]);
      // console.log(responseValue);
      let obj = response.data["Weekly Time Series"];
      let dataPoints = [];
      for (var property in obj) {
        //   console.log(property)
        let y = obj[property]["4. close"];
        let x = property;
        //  dataPoints.push([x,y])
        dataPoints.push({ x: new Date(x), y: parseInt(y) });
      }
      //   console.log(allPoints)
      this.setState({ dataPoints });
    });
  }

  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      interactivityEnabled: true,
      zoomEnabled: true,
      zoomType: "xy",

      //backgroundColor: "#F5DEB3"
      theme: "light1", // "light1","light2", "dark1", "dark2"
      title: {
        text: "Fast Travel Stocks: " + this.props.data
      },
      axisY: {
        title: "Price",
        includeZero: false,
        prefix: "$"
      },
      axisX: {
        valueFormatString: "DD-MMM-YY",
        labelAngle: -50
      },
      data: [
        {
          color: "green",
          type: "line",
          toolTipContent: "{x}: {y}$",
          dataPoints: this.state.dataPoints
        }
      ]
    };

    return (
      <div>
        <Paper
          style={{
            borderRadius: "0.5rem",
            boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.65)"
          }}
        >
          <CanvasJSChart options={options} />
        </Paper>
      </div>
    );
  }
}

export default Chart;
