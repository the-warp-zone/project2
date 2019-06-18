import React, {Component} from "react";
import Sidebar from "./components/Sidebar";
// import LandingPage from "./components/LandingPage";
import Chart from "./components/MainContentComponents/GraphComponents/Chart"


class App extends Component {
    state = {
      data: {}
    }


  componentDidMount(){
    this.getChartData();
  }
  getChartData(){
    // we are going to do our axios call here for the data
    this.setState({
      data: {
        labels: ["June 1","June 2","June 3","June 4","June 5","June 6","June 7"],
        datasets: [
            {
                label: "Stock Price",
                data: [
                    35,
                    43,
                    22,
                    55,
                    44,
                    37,
                    30
                ],
                backgroundColor: ["rgba(0, 0, 0, .8)"]
            }
        ]
      }
    })
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Chart data={this.state.data}/>
        {/* <LandingPage /> */}
      </div>
    );
  }
}

export default App;
