import React, { Component } from "react";
import axios from "axios";
import NewsList from "./NewsList";

class NewsLarge extends Component {
  state = {
    newsList: []
  };

  componentDidMount() {
    this.axiosCall(this.props.data);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.axiosCall(this.props.data);
    }
  }
  axiosCall(data) {
    if (data === "Sony") data = "Sony Interactive Entertainment";
    axios({
      url:
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=true&pageNumber=1&pageSize=10&q=" +
        data +
        "&safeSearch=false",
      headers: {
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_NEWS_KEY 
      }
    })
      .then(response => {
        //console.log(response.data);

        // let titles = this.getTitles(response.data.value);
        // let descriptions = this.getDescriptions(response.data.value);
        // let mixed = this.getFinalList(titles, descriptions);
        //console.log(response.data.value[0]); //.url, .title, .description, you are either .yeeted or .yooted
        this.setState({ newsList: response.data.value });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getFinalList(titles, descriptions) {
    let a = [];
    for (let i = 0; i < titles.length; i++) {
      a.push([titles[i], descriptions[i]]);
    }
    return a;
  }

  getTitles(articles) {
    let a = [];
    for (let i = 0; i < articles.length; i++) {
      a.push(articles[i].title.replace(/<b>/g, "").replace(/<\/b>/g, ""));
    }
    return a;
  }

  getDescriptions(articles) {
    let a = [];
    for (let i = 0; i < articles.length; i++) {
      a.push(articles[i].description.replace(/<b>/g, "").replace(/<\/b>/g, ""));
    }
    return a;
  }

  render() {
    console.log(process.env.REACT_APP_NEWS_KEY );
    // const bStyle = {
    //   marginRight: "1%",
    //   marginTop: "17%",
    //   float: "right",
    //   background: "linear-gradient(45deg, #0a9df1 , #62058d )",
    //   color: "white"
    // };
    return (
      <div>
        <NewsList data={this.state.newsList} />
      </div>
    );
  }
}
export default NewsLarge;
