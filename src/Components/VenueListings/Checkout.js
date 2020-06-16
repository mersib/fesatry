import React, { Component } from "react";
import "../../Css/landing.css";
import { Row, Col, Input, Select, Cascader, Button } from "antd";
import Cooking from "../../Images/cooking.svg";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Modal } from "antd";
const { Search } = Input;
const { Option } = Select;
const InputGroup = Input.Group;

class Checkout extends Component {
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
    {
      console.log(this.props);
    }
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
                    <b>Your order</b>
                  </h1>
                  <div className="foodItemCard">
                    <p className="foodTitle">
                      {this.props.location.query.foodItemName}
                    </p>
                    <p className="foodDescription">
                      {this.props.location.query.foodItemDescription}
                    </p>
                    <p className="foodPrice">
                      {this.props.location.query.foodItemPrice}
                    </p>
                  </div>
                  <h3 className="inputGroupLanding" style={{ color: "black" }}>
                    <b>Delivering To</b>
                    <p>Sector A, Street 5, House 69-D, Dha Phase 3, Lahore </p>
                  </h3>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={this.showModal}
                  >
                    Confirm Order
                  </Button>
                </Col>
                <Modal
                  title="Order Confirmed"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Your food will be delivered to you soon.</p>
                  <p>Estimated Time: 30-60 Mins</p>
                </Modal>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Checkout);
