import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Track.css";

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

export default Track;
