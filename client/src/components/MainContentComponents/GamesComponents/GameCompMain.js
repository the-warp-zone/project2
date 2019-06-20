import React, {Component} from "react";
import GameSmall from "./GameSmall";
import GameLarge from "./GameLarge";
 
class Games extends Component {

	render() {
		return (
		<div>
            {/* {conditional if button is pressed load either small or large}  */}
           <div className="gamesLarge">
               <GameLarge />
            </div>
            
      
			<GameSmall />
			
		</div>
		);
	}
}
export default Games;        