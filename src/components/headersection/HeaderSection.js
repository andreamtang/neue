import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./HeaderSection.css";
import { Button, Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";
import { Avatar } from 'antd';



const menu = (
  <Menu>
    <Menu.Item key="0">sign out</Menu.Item>
  </Menu>
);


class HeaderSection extends React.Component {
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
            <a className="profilename" href="#">Andrea Tang <Icon type="down"/>
            </a>
          </Dropdown>
            </div>
        </div>
      </div>
    );
  }
}


export default HeaderSection;
