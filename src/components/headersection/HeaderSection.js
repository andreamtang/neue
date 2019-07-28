import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./HeaderSection.css";
import { Button, Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";
import { Avatar } from 'antd';
import App from "../app/App.js";



const menu = (
  <Menu>
    <Menu.Item key="0">sign out</Menu.Item>
  </Menu>
);


class HeaderSection extends React.Component {

  const disname = this.getDisplayName();

  getDisplayName() {
    spotifyApi.getME()
    .then(response => return response.item.display_name)
  }

  render () {
    return (
      <div class="header">
        <div class="inner_header">
          <div class="logo_container">
            <h1>neue.</h1>
          </div>
          <div className="profile_container">
          <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Dropdown overlay={menu}>
            <a className="profilename" href="#"> display_name <Icon type="down"/>
            </a>
          </Dropdown>
          <div>
          <a href='http://localhost:8888'> Login to Spotify </a>
          </div>
            </div>
        </div>
      </div>
    );
  }
}


export default HeaderSection;
