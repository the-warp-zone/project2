import React from "react";
import { Line } from "react-chartjs-2";
import "./chart.css";
import zoom from 'chartjs-plugin-zoom'
import Hammer from 'hammerjs';

const Chart = props => {
 return (
  <div className="chart">
   <Line
    data={props.data}
    options={{
     responsive: true,
     title: {
      display: props.displayTitle,
      text: "Fast Travel Stocks: " + props.company,
      fontSize: 20
     },
     legend: {
      display: props.displayLegend,
      position: props.legendPosition
     },
     plugins: {
        zoom: {
            // Container for pan options
            pan: {
                // Boolean to enable panning
                enabled: true,
     
                // Panning directions. Remove the appropriate direction to disable
                // Eg. 'y' would only allow panning in the y direction
                mode: 'x',
                
            
                // Function called once panning is completed
                // Useful for dynamic data loading
                onPan: function({chart}) { console.log(`I was panned!!!`); }
            },
     
            // Container for zoom options
            zoom: {
                // Boolean to enable zooming
                enabled: true,
     
                // Enable drag-to-zoom behavior
                drag: true,
     
                // Drag-to-zoom rectangle style can be customized
                // drag: {
                // 	 borderColor: 'rgba(225,225,225,0.3)'
                // 	 borderWidth: 5,
                // 	 backgroundColor: 'rgb(225,225,225)'
                // },
     
                // Zooming directions. Remove the appropriate direction to disable
                // Eg. 'y' would only allow zooming in the y direction
                mode: 'xy',
     
                
                
     
                // Speed of zoom via mouse wheel
                // (percentage of zoom on a wheel event)
                speed: 0.1,
     
                // Function called once zooming is completed
                // Useful for dynamic data loading
                onZoom: function({Chart}) { console.log(`I was zoomed!!!`); }
            }
        }
    }
    }}
   />
  </div>
 );
};
export default Chart;