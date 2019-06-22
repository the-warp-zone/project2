import React, {Component} from "react";
import Sidebar from "./components/MainContentComponents/Sidebar";
import LandingPage from "./components/MainContentComponents/LandingPage";
import Chart from "./components/MainContentComponents/GraphComponents/Chart";
import News from "./components/MainContentComponents/NewsComponents/NewsCompMain";
import Games from "./components/MainContentComponents/GamesComponents/GameCompMain";
import GameListItem from "./components/MainContentComponents/GamesComponents/GameListItem";
import GameLarge from "./components/MainContentComponents/GamesComponents/GameLarge";

import LargeCard from "./components/MainContentComponents/GamesComponents/LargeCard";
 
class App extends Component {

	render() {
		return (
			<div>
				<Sidebar /> 
				{/* <LandingPage /> 
				<Chart />
				<News /> */}
				{/* <Games /> */}
				{/* <GameLargeCard /> */}
				<GameLarge />
			</div>
		);
	}
}
export default App;        