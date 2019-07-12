import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./HeaderSection.css";



class HeaderSection extends React.Component {
  render () {
    return (
      <div>
      <section align="left"><h1 className="title">neue.</h1></section>
      <section align="right"><h2 className="profilename"> andrea tang </h2></section>
      </div>
    );
  }
}

export default HeaderSection;
