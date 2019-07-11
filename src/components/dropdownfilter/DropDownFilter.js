import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";
import "./DropDownFilter.css";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a>LAST 3 MONTHS</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>LAST 6 MONTHS</a>
    </Menu.Item>
    <Menu.Item key="3">LAST 9 MONTHS</Menu.Item>
  </Menu>
);

class DropDownFilter extends React.Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#">
          RELEASE DATE <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

export default DropDownFilter;
