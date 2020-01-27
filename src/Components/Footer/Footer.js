import React from "react";
import { PageHeader, Button, Descriptions, Modal, Input, Row, Col } from "antd";
import { Component } from "react";
import "../../Css/Login.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isLoginSelected: true
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24} style={{ textAlign: "center", minHeight: "5vh" }}>
            <p style={{ marginTop: "2vh" }}>
              Copyright @2019 Feastry. All rights reserved
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
