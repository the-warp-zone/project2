import React, {Component} from "react";
import axios from "axios";
 
class GameLarge extends Component {
    state = {
        gamesList: []
    }
    componentDidMount() {
        axios({ 
        url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/companies", 
        method: 'POST', 
        headers: { 
            'Accept': 'application/json', 
            'user-key': "c1c717a3e484c33bb482bdb7f9fb7eb4" 
        }, 
        data: "fields name,published.name,published.first_release_date; sort popularity desc; where name = \"Ubisoft\";" 
    }) .then(response => {
         console.log(response.data[0]['published'][0]['first_release_date']); 
            
            let obj = response.data[0]['published'];
            let gamesList = [];
            console.log(obj);
            
            for (var property in obj) {
            let x = obj[property]["name"];
            let y = obj[property]["first_release_date"];
            // console.log(y);
            // console.log(x);
            gamesList.push([x,y])
            
        }
        console.log(gamesList);
        this.setState({ gamesList });



        }) .catch(err => { console.error(err); });
    }
	render() {
		return (
		<div>
            <p>
                {this.state.gamesList}
            </p>
		</div>
		);
	}
}
export default GameLarge;        