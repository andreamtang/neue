import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Playlist.css";

class Playlist extends React.Component {
  render() {
    return (
      <table align="left">
        <thead>
          <tr>
            <div className="playlistColumnHeaders">
              <th width="40%">TITLE</th>
              <th width="25%">ARTIST</th>
              <th width="25%">ALBUM</th>
              <th width="10%">TIME</th>
            </div>
          </tr>
        </thead>
        <tbody>
          <td>Song 1</td>
        </tbody>
      </table>
    );
  }
}

export default Playlist;
