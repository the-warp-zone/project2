import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import NewsList from "./NewsList";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import "./news.css";
import InfiniteScroll from "react-infinite-scroll-component";

class NewsLarge extends Component {
  state = {
    newsList: []
  };
  componentDidMount() {
    axios({
      url:
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=true&pageNumber=1&pageSize=10&q=Nintendo&safeSearch=false",
      headers: {
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "32a10d7338mshd41fd36d30be39cp1eec1ejsnd23f7aebd654"
      }
    })
      .then(response => {
        //console.log(response.data);

        let titles = this.getTitles(response.data.value);
        let descriptions = this.getDescriptions(response.data.value);
        let mixed = this.getFinalList(titles, descriptions);
        console.log(response.data.value[0]); //.url, .title, .description, you are either .yeeted or .yooted
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
    return (
      <InfiniteScroll dataLength={this.state.newsList.length}>
        <NewsList data={this.state.newsList} />
      </InfiniteScroll>
    );
  }
}
export default NewsLarge;
