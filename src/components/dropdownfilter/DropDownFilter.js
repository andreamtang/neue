import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";
import "./DropDownFilter.css";

const menu = (
  <Menu>
    <Menu.Item className="menu-item" key="0">
      <a className="link">LAST 6 MONTHS</a>
    </Menu.Item>
    <Menu.Item className="menu-item" key="1">
      <a className="link">LAST 9 MONTHS</a>
    </Menu.Item>
  </Menu>
);

class DropDownFilter extends React.Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#">
          LAST 3 MONTHS <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

export default DropDownFilter;
