import React, { Component } from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";

import "./App.css";
import DropDownFilter from "../dropdownfilter/DropDownFilter.js";
import Playlist from "../playlist/Playlist.js";
import Track from "../track/Track.js";

let fakeServerData = {
  user: {
    name: "Andrea",
    songs: [
      {
        time: "4:37",
        title: "VIVID DREAMS (feat. River Tiber)",
        artist: "KAYTRANADA, River Tiber",
        album: "99.9%"
      },
      {
        time: "1:50",
        title: "Basement Jack",
        artist: "Steve Lacy",
        album: "Apollo XXI"
      },
      {
        time: "3:42",
        title: "Small Worlds",
        artist: "Mac Miller",
        album: "Swimming"
      },
      {
        time: "4:19",
        title: "Snakes (feat. T'nah Apex)",
        artist: "Joey Bada$$, T'nah Apex",
        album: "1999"
      },
      {
        time: "5:07",
        title: "Nights",
        artist: "Frank Ocean",
        album: "Blonde"
      }
    ]
  }
};

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="75%">
        <div>
          <h1 className="title">neue.</h1>
          <hr className="divider" />
          <DropDownFilter />
          <hr className="divider" />
          <Playlist tracks={this.props.tracks} />
        </div>
      </Container>
    );
  }
}

ReactDOM.render(
  <App tracks={fakeServerData} />,
  document.getElementById("root")
);

export default App;
