import React, {Component} from "react";
import GameSmall from "./GameSmall";
import GameLarge from "./GameAxios";
import GameCardSmall from "./GameSmall";
 
class Games extends Component {

	render() {
		return (
		<div>
            {/* {conditional if button is pressed load either small or large}  */}
           <div>
               {/* <GameLarge /> */}

			   {/* <GameCardSmall /> */}
            </div>
		</div>
		);
	}
}
export default Games;        