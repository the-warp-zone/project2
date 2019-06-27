import React, { Component } from "react";
import axios from "axios";
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles } from '@material-ui/core/styles';
import NewsList from "./NewsList";

// const useStyles = makeStyles(theme => ({
//   progress: {
//     margin: theme.spacing(2),
//   },
// }));

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
    // const classes = useStyles();
    return (
      <div>
        {/* <CircularProgress className={classes.progress} /> */}
        <NewsList data={this.state.newsList} />
      </div>
    );
  }
}
export default NewsLarge;
