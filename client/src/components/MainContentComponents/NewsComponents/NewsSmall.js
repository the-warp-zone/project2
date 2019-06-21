import React, {Component} from "react";
var request = require("request");
import axios from "axios";
import moment from "moment";


class NewsSmall extends Component {
	state = {
	  gamesList: []
	};
	componentDidMount() {
var options = { method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI',
  qs: 
   { fromPublishedDate: '2004-01-01',
     toPublishedDate: '2010-01-01',
     autoCorrect: 'true',
     pageNumber: '1',
     pageSize: '10',
     q: 'Activision',
     safeSearch: 'false' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'accept-encoding': 'gzip, deflate',
     Host: 'contextualwebsearch-websearch-v1.p.rapidapi.com',
     'Postman-Token': '6d778e0e-7b9c-46c6-8295-656c0922549f,4c343c53-702e-4199-a8d8-b0e2e2765e91',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.15.0',
     'X-RapidAPI-Key': '32a10d7338mshd41fd36d30be39cp1eec1ejsnd23f7aebd654' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

class NewsSmall extends Component {

	render() {
		return (
		<div>
            
		</div>
		);
	}
}
export default NewsSmall;        