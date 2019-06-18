import React, {Component} from "react";
import {Line} from "react-chartjs-2";
import "./chart.css"


class Chart extends Component {
constructor(props){
    super(props);
    this.state = {
        chartData: props.chartData
    }
}
    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition: "bottom",
        company: "Company"
    }

    render(){
        return(
            <div className="chart">
                <Line 
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: "Fast Travel Stocks: " + this.props.company,
                            fontSize: 20
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }} />
            </div>
        )
    }
}

export default Chart;