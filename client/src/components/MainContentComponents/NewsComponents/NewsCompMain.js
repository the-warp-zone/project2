import React, { Component } from "react";
import NewsSmall from "./NewsSmall";
import NewsLarge from "./NewsLarge";

class News extends Component {
  render() {
    return (
      <div>
        {/* {conditional if button is pressed load either small or large}  */}
        <NewsLarge />

        {/* <NewsSmall /> */}
      </div>
    );
  }
}
export default News;
