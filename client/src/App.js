import React, {Component} from "react";
import Sidebar from "./components/MainContentComponents/Sidebar";
import LandingPage from "./components/MainContentComponents/LandingPage";
import Chart from "./components/MainContentComponents/GraphComponents/Chart";
import News from "./components/MainContentComponents/NewsComponents/NewsCompMain";
import Games from "./components/MainContentComponents/GamesComponents/GameCompMain";

 
class App extends Component {

	render() {
		return (
			<div>
				<Sidebar />
				{/* <LandingPage /> 
				<Chart />
				<News /> */}
				<Games />
			</div>
		);
	}
}
export default App;        