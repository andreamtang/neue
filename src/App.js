import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

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

const Divider = ({ color }) => (
  <hr
    style={{
      color: "#F8EED6",
      backgroundColor: "#F8EED6",
      height: 1
    }}
  />
);

class Track extends React.Component {
  render() {
    const track = this.props.track;
    return (
      <tr>
        <td>{track.title}</td>
        <td>{track.artist}</td>
        <td>{track.album}</td>
        <td>{track.time}</td>
      </tr>
    );
  }
}

class Playlist extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>neue</h1>
        <Playlist tracks={this.props.tracks} />
      </div>
    );
  }
}

ReactDOM.render(
  <App tracks={fakeServerData} />,
  document.getElementById("root")
);

export default App;
