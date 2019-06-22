import React, {Component} from "react";
import NewsSmall from "./NewsSmall";
import NewsLarge from "./NewsLarge";
 
class News extends Component {

	render() {
		return (
		<div>
            {/* {conditional if button is pressed load either small or large}  */}
            <NewsLarge />
      
			<NewsSmall />
			
		</div>
		);
	}
}
export default News;      

/*
import axios from "axios";

axios({
url: https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?fromPublishedDate=2004-01-01&toPublishedDate=2010-01-01&autoCorrect=true&pageNumber=1&pageSize=10&q=Activision&safeSearch=false,
method: 'GET',
headers: {"X-RapidAPI-Key": "32a10d7338mshd41fd36d30be39cp1eec1ejsnd23f7aebd654"}
})

catch (error) {
    console.log(error),
    console.log(data)
}
*/