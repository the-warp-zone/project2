import React, {Component} from "react";
import "./chart.css";
import CanvasJSReact from '../../../canvasjs.react';
import axios from 'axios';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class Chart extends Component {
    state = {
        dataPoints: []
      }
      componentDidMount() {
        axios({
            url: "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&apikey=6J7PBJ5E6ZV76KME&symbol=UBSFY"
            })
          .then(response => {
            //const dataPoints = response.data['Weekly Time Series'];
            // let responseKeys = Object.keys(response.data['Weekly Time Series'])
            // let responseKeysUpdated = Object.values(responseKeys)
            // let responseValue = Object.values(response.data['Weekly Time Series']);
            console.log(response.data['Weekly Time Series']);
           // console.log(responseValue);
           let obj = response.data['Weekly Time Series'];
           let dataPoints = [];
               for (var property in obj) {
                //   console.log(property)
                 let y = obj[property]["4. close"]
                 let x = property
                //  dataPoints.push([x,y])
                 dataPoints.push({x: new Date(x), y: parseInt(y)});
            }
        //   console.log(allPoints)
            this.setState({ dataPoints });
          })
      }
    render() {
		const options = {
			animationEnabled: true,
            exportEnabled: true,
            interactivityEnabled: true,
            zoomEnabled:true,
            zoomType: "xy",
			// width: 600,
			height: 600,
            //backgroundColor: "#F5DEB3"
			theme: "light1", // "light1","light2", "dark1", "dark2"
			title:{
				text: "Fast Travel Stocks"
			},
			axisY: {
				title: "Price",
				includeZero: false,
				prefix: "$"
			},
			axisX: {
				valueFormatString: "DD-MMM-YY" ,
                labelAngle: -50
			},
			data: [{
                color: "green",
				type: "line",
				toolTipContent: "{x}: {y}$",
                dataPoints: this.state.dataPoints
                
                // [
				// 	{ x: 1, y: 64 },
				// 	{ x: 2, y: 61 },
				// 	{ x: 3, y: 64 },
				// 	{ x: 4, y: 62 },
				// 	{ x: 5, y: 64 },
				// 	{ x: 6, y: 60 },
				// 	{ x: 7, y: 58 },
				// 	{ x: 8, y: 59 },
				// 	{ x: 9, y: 53 },
				// 	{ x: 10, y: 54 },
				// 	{ x: 11, y: 61 },
				// 	{ x: 12, y: 60 },
				// 	{ x: 13, y: 55 },
				// 	{ x: 14, y: 60 },
				// 	{ x: 15, y: 56 },
				// 	{ x: 16, y: 60 },
				// 	{ x: 17, y: 59.5 },
				// 	{ x: 18, y: 63 },
				// 	{ x: 19, y: 58 },
				// 	{ x: 20, y: 54 },
				// 	{ x: 21, y: 59 },
				// 	{ x: 22, y: 64 },
				// 	{ x: 23, y: 59 }
				// ]
			}]
		}
		
		return (
		<div className="chart">
			{/* {this.state.dataPoints.map()} */}
			<CanvasJSChart  options = {options} />
		</div>
		);
	}
}
 
export default Chart;