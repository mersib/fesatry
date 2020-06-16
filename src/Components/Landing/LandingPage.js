import React, { Component } from "react";
import "../../Css/landing.css";
import { Row, Col, Input, Select, Cascader, Button } from "antd";
import Cooking from "../../Images/cooking.svg";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Modal } from "antd";
const { Search } = Input;
const { Option } = Select;
const InputGroup = Input.Group;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Address: null,
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleSearchClicked(value) {
    if (value !== null) {
      this.setState({
        Address: value,
      });
      return <Redirect to="/venues" />;
    }
  }

  render() {
    return (
      <Row className="landingContainer">
        <Col span={24}>
          <Row>
            <Col offset={1} span={22}>
              <Row justify="center">
                <Col md={6}></Col>
                <Col md={12} xs={24}>
                  <img src={Cooking} className="logoLanding" />
                  <h1 className="inputGroupLanding" style={{ color: "black" }}>
                    <b>Order delicious food now</b>
                  </h1>
                  <Search
                    className="inputOutlined"
                    placeholder="Enter your Address"
                    size="large"
                    style={{ width: "80%" }}
                  />
                  <Link to="/venues">
                    <Button size="large">Search</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withRouter(LandingPage);
