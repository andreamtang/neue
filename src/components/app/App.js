import React, { Component } from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";

import "./App.css";
import DropDownFilter from "../dropdownfilter/DropDownFilter.js";
import HeaderSection from "../headersection/HeaderSection.js";
import Playlist from "../playlist/Playlist.js";
import Track from "../track/Track.js";

class App extends React.Component {
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
