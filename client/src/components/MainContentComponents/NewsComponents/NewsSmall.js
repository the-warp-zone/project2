import React, {Component} from "react";
import axios from "axios";
import moment from "moment";
import NewsList from "./NewsList";

class NewsSmall extends Component {
  state = {
    newsList: []
  };
  componentDidMount() {
    axios({
      url:"https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=true&pageNumber=1&pageSize=10&q=Activision&safeSearch=false",
      headers: {
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "32a10d7338mshd41fd36d30be39cp1eec1ejsnd23f7aebd654"
      }
    })
      .then(response => {
        console.log(response.data);
        
        let titles = this.getTitles(response.data.value);
        let descriptions = this.getDescriptions(response.data.value);
        let mixed = this.getFinalList(titles, descriptions);
        
        this.setState({ newsList:mixed });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getFinalList(titles, descriptions) {
    let a = [];
    for (let i = 0; i < titles.length; i++) {
      a.push([titles[i],descriptions[i]]);
    }
    return(a);
  }

  getTitles(articles) {
    let a = [];
    for (let i = 0; i < articles.length; i++) {
      
      a.push(articles[i].title.replace(/<b>/g, "").replace(/<\/b>/g, ""));
    }
    return(a);
  }

  getDescriptions(articles) {
    let a = [];
    for (let i = 0; i < articles.length; i++) {
      a.push(articles[i].description.replace(/<b>/g, "").replace(/<\/b>/g, ""));
    }
    return(a);
  }
  //   async function get_data() {
  //     try {
  //       console.log("MAKE ME");
  //       var apple = await axios.get("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?fromPublishedDate=2004-01-01&toPublishedDate=2010-01-01&autoCorrect=true&pageNumber=1&pageSize=10&q=Activision&safeSearch=false", {
  //         headers: {
  //           "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  //           "X-RapidAPI-Key": "32a10d7338mshd41fd36d30be39cp1eec1ejsnd23f7aebd654"
            
  //         }
  //       });
        
  //     }
  //     catch(err) {
  //       console.log("FU");
  //     }
  //     return(apple.data);
  //   };
  //   const promise = get_data();
  //   promise.then(function(value) {
  //     console.log('A');
  //     console.log(value);
  //     let newsList = value;
  //     console.log('B');
  //     this.setState({ newsList: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" });
  //   })
    
  // }
  render() {
    const newsItem = this.state.newsList.map(item => (
      <NewsList title={item[0]} description={item[1]}/>
    ));
    return (
      <ul>
        { newsItem }
      </ul>
    );
  }
}
export default NewsSmall;        