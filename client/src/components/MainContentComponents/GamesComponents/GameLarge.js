import React, {Component} from "react";
import axios from "axios";
 
class GameLarge extends Component {
    state = {

    }
    componentDidMount() {
        axios({ 
        url: "https://api-v3.igdb.com/companies", 
        method: 'POST', 
        headers: { 
            'Accept': 'application/json', 
            'user-key': "c1c717a3e484c33bb482bdb7f9fb7eb4" 
        }, 
        data: "fields logo.*,name,published.name,published.first_release_date; where name = \"Ubisoft\";" 
    }) .then(response => {
         console.log(response.data); 
        }) .catch(err => { console.error(err); });
    }
	render() {
		return (
		<div>
            
		</div>
		);
	}
}
export default GameLarge;        