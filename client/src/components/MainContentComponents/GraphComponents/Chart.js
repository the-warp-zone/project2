import React, { Component } from "react";
import "./chart.css";
import CanvasJSReact from "../../../canvasjs.react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  state = {
    dataPoints: []
  };
  
  componentDidMount() {
    axios({
      url:
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=NTDOY"
    }).then(response => {
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
        text: "Fast Travel Stocks"
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
      <Paper style={{ 
      borderRadius: "0.5rem",
      boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.65)"
       }}>
        <CanvasJSChart options={options} />
      </Paper>
    </div>
    );
  }
}

export default Chart;
