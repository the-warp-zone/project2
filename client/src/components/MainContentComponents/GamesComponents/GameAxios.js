import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import GameLarge from "./GameLarge";

class GameAxios extends Component {
  state = {
    gamesList: []
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
        "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/companies",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key":  process.env.REACT_APP_GAMES_KEY 
      },
      data:
        'fields name,published.name,published.first_release_date; sort popularity desc; where name = "' +
        data +
        '";'
    })
      .then(response => {
        //console.log(response.data[0]['published'][0]['first_release_date']);

        let obj = response.data[0]["published"];
        let firstList = [];
        //console.log(obj);

        for (var property in obj) {
          let x = obj[property]["name"];
          let y = obj[property]["first_release_date"];

          firstList.push([moment.unix(y).format("MMM DD YYYY"), x]);
          //gamesList.push([y,x]);
        }

        const result = firstList.filter(title => title[0] !== "Invalid date");

        const result2 = result.filter(title => title[1] !== undefined);
        //console.log(result);
        //console.log(gamesList);

        let gamesList = result2.sort(
          (a, b) =>
            new moment(b[0], "MMM DD YYYY") - new moment(a[0], "MMM DD YYYY")
        );
        //console.log(gamesList);

        this.setState({ gamesList });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    //console.log(this.state.gamesList);
    // console.log(this.props.data);
    return (
      <div>
        <GameLarge data={this.state.gamesList} />
      </div>
    );
  }
}
export default GameAxios;
