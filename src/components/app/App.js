import React, { Component } from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";

import "./App.css";
import DropDownFilter from "../dropdownfilter/DropDownFilter.js";
import HeaderSection from "../headersection/HeaderSection.js";
import Playlist from "../playlist/Playlist.js";
import Track from "../track/Track.js";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
    spotifyApi.setAccessToken(token);
  }
}
  getHashParams() {
          var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }

  render() {
    return (
      <Container className="App" maxWidth="75%">
        <div>
          <HeaderSection />
          <hr className="divider" />
          <div className="padding">
          <DropDownFilter />
          </div>
          <hr className="divider" />
          <Playlist tracks={this.props.tracks} />
        </div>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
