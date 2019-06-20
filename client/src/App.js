import React, {Component} from "react";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import Chart from "./components/MainContentComponents/GraphComponents/Chart"

 
class App extends Component {

	render() {
		return (
		<div>
      <Sidebar />
      {/* <LandingPage /> */}
			<Chart />
			
		</div>
		);
	}
}
export default App;        