import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

//Import Components
import LandingPage from "../Components/Landing/LandingPage";
import VenueListings from "../Components/VenueListings/VenueListings";
import Dashboard from "../Components/Dashboard/Dashboard";
import VenueItemDetails from "../Components/VenueListings/VenueItemDetails";
import Checkout from "../Components/VenueListings/Checkout";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/venues" component={VenueListings} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/venues/1" component={VenueItemDetails} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
