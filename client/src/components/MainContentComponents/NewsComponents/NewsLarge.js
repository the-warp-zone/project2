import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import NewsList from "./NewsList";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import "./news.css";
import Button from "@material-ui/core/Button";

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
    const bStyle = {
      marginRight: "1%",
      marginTop: "17%",
      float: "right",
      background: "linear-gradient(45deg, #0a9df1 , #62058d )",
      color: "white"
    };
    return (
      <div>
        <NewsList data={this.state.newsList} />
      </div>
    );
  }
}
export default NewsLarge;
