import React, { Component } from "react";
import Header from "./Header/Header";
import Routes from "../Routes/Routes";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

import { connect } from "react-redux";
import { firstTimeLoad } from "../Redux/actions/userActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.firstTimeLoad();
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, { firstTimeLoad })(App);
