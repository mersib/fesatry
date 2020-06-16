import React from "react";
import {
  PageHeader,
  Button,
  Modal,
  Input,
  Row,
  Alert,
  Col,
  Icon,
  Spin,
  message,
} from "antd";
import { Component } from "react";
import "../../Css/Login.css";

import { connect } from "react-redux";
import { loginUser, logOut } from "../../Redux/actions/userActions";
import { Redirect, withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visible2: false,
      isLoginSelected: true,
      // login states
      email: "",
      password: "",
      loginLoading: false,
      backPressed: 0,
    };
  }

  //Modal Functions
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showModal2 = () => {
    this.setState({
      visible2: true,
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

  handleOk2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  handleLogoClick = () => {
    console.log("iIm insane");
    return <Redirect to="/" />;
  };
  setIsLogin() {
    this.setState((prevState) => ({
      isLoginSelected: !prevState.isLoginSelected,
    }));
  }

  // Forms
  LoginForm = (e) => {
    e.preventDefault();

    if (this.state.email.length !== 0 && this.state.password.length !== 0) {
      this.setState({
        loginLoading: true,
      });
      this.props
        .loginUser(this.state.email, this.state.password)
        .then((res) => {
          if (!this.props.id_token) {
            message.error(this.props.error_msg);
            this.setState({ loginLoading: false });
          } else {
            this.setState({ loginLoading: false, visible: false });
            message.success("Logged in succes.");
          }
        });
    }
  };

  logOutUser = () => {
    if (this.props.id_token) {
      this.props.logOut(this.props.id_token);
      message.success("Logged Out success");
      return <Redirect to="/" />;
    }
  };

  // Input
  onHandleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <PageHeader
          onBack={() => window.location.replace("/")}
          title="Feastry"
          subTitle="Have it your way"
          extra={
            this.props.id_token
              ? [
                  <Button key="2" onClick={this.showModal}>
                    Have a resturant?
                  </Button>,
                  <Button onClick={this.logOutUser} key="1">
                    Log Out
                  </Button>,
                ]
              : [
                  <Button key="2" onClick={this.showModal2}>
                    Have a resturant?
                  </Button>,
                  <Button key="1" onClick={this.showModal}>
                    Login
                  </Button>,
                ]
          }
        />
        <Modal
          title="Add Resturant"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
        >
          <Input
            placeholder="Resturant Name"
            size="large"
            className="inputForm"
          />
          <Input placeholder="Owner Name" size="large" className="inputForm" />
          <Input
            placeholder="Resturant Address"
            size="large"
            className="inputForm"
          />
          <Input
            placeholder="Onwer Contact Number"
            size="large"
            className="inputForm"
          />
        </Modal>
        <Modal
          title="Log In/Sign Up"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={false}
        >
          {this.state.isLoginSelected && (
            <div className="inputForm">
              {this.state.loginLoading ? (
                <Spin tip="Loading...">
                  <Alert
                    message="Please wait"
                    description="Checking and matching credentials with database."
                    type="info"
                  />
                </Spin>
              ) : (
                <form onSubmit={this.LoginForm}>
                  <Input
                    size="large"
                    placeholder="Email/Username"
                    onChange={this.onHandleChange("email")}
                    className="inputForm"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                  />
                  <Input
                    size="large"
                    placeholder="Password"
                    type="password"
                    onChange={this.onHandleChange("password")}
                    className="inputForm"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                  />
                  <Row type="flex" justify="end">
                    <Col span={12} className="onHoverPointer">
                      <p onClick={this.setIsLogin.bind(this)}>
                        Create an account
                      </p>
                    </Col>
                    <Col span={12} className="alignEnd">
                      <p>Reset Password</p>
                    </Col>
                  </Row>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    disabled={
                      this.state.password.length === 0 ||
                      this.state.email.length === 0
                        ? true
                        : false
                    }
                  >
                    Log in
                  </Button>
                </form>
              )}
            </div>
          )}
          {!this.state.isLoginSelected && (
            <div className="inputForm">
              <Input
                size="large"
                placeholder="Email/Username"
                className="inputForm"
              />
              <Input
                size="large"
                placeholder="Password"
                className="inputForm"
              />
              <Input
                size="large"
                placeholder="Confirm Password"
                className="inputForm"
              />
              <Row type="flex" justify="end">
                <Col span={12}>
                  <p onClick={this.setIsLogin.bind(this)}>
                    Already have an account?
                  </p>
                </Col>
                <Col span={12} className="alignEnd">
                  <p>Forgot Password</p>
                </Col>
              </Row>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={
                  this.state.password.length === 0 ||
                  this.state.email.length === 0
                    ? true
                    : false
                }
              >
                Submit
              </Button>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // user
    id_token: state.user.id_token,
    isLoading: state.user.isLoading,
    error_msg: state.user.message,
  };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, logOut })(Header)
);
