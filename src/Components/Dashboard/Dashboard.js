import React, { Component } from "react";
import { Input, Col, Row, Button, Layout, Menu, Icon, Tabs } from "antd";
import "../../Css/Dashboard.css";
import CustomCalendar from "./Calendar/CustomCalendar";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className="layout dashboardContainer">
        <Tabs tabPosition="left" className="tabsBar">
          <TabPane className="tabsPane" tab="Calendar" key="1">
            <CustomCalendar />
          </TabPane>
          <TabPane className="tabsPane" tab="Profile" key="2">
            Profile
          </TabPane>
          <TabPane className="tabsPane" tab="Payment" key="3">
            Payment
          </TabPane>
        </Tabs>
      </Layout>
    );
  }
}

export default Dashboard;
