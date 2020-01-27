import React, { Component } from "react";
import { Row, Col, Input, Divider } from "antd";
import VenueItem from "./VenueItem";
import FiltersSection from "./FiltersSection";
import TagsSection from "./TagsSection";
// import Resturant Images
import Burger from "../../Images/ResturantsImages/Burger.jpg";
import Coco from "../../Images/ResturantsImages/coco.jpg";
import Coffee from "../../Images/ResturantsImages/coffee.jpg";
import Desi from "../../Images/ResturantsImages/desi.jpg";
import Howdy from "../../Images/ResturantsImages/howdy.jpg";
import Noodles from "../../Images/ResturantsImages/Noodles.jpg";
import Pizza from "../../Images/ResturantsImages/Pizza.jpg";
import Tikka from "../../Images/ResturantsImages/tikka.jpg";
import Covfee from "../../Images/ResturantsImages/covfe.jpg";

class VenueListings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col offset={1} span={22}>
          <Row>
            <Col md={23}>
              <Input size="large" placeholder="Search" className="inputForm" />
            </Col>
          </Row>
          <Row
            style={{ marginTop: "2vh" }}
            gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}
          >
            <Col md={24} xs={24} sm={24}>
              <div className="divider">
                <Divider orientation="left">Featured</Divider>
              </div>
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Coco,
                  Name: "The Posh Angel",
                  rating: 5,
                  deliveryTime: "30 min",
                  minimumOrderPrice: "250",
                  deliveryFee: "No"
                }}
              />
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Tikka,
                  Name: "Jack in the Box",
                  rating: 4.5,
                  deliveryTime: "25-50 min",
                  minimumOrderPrice: "150",
                  deliveryFee: "300 Rs"
                }}
              />
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Burger,
                  Name: "Burger King",
                  rating: 4.7,
                  deliveryTime: "40 min",
                  minimumOrderPrice: "400",
                  deliveryFee: "100 Rs"
                }}
              />
            </Col>
            <Col md={24} xs={24} sm={24}>
              <div className="divider">
                <Divider orientation="left">Top Rated</Divider>
              </div>
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Noodles,
                  Name: "Deli Delicious",
                  rating: 3.6,
                  deliveryTime: "30-60 min",
                  minimumOrderPrice: "345",
                  deliveryFee: "No"
                }}
              />
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Desi,
                  Name: "Frosted Cakery",
                  rating: 4,
                  deliveryTime: "50 min",
                  minimumOrderPrice: "150",
                  deliveryFee: "330 Rs"
                }}
              />
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Coffee,
                  Name: "The Coffee House",
                  rating: 4.7,
                  deliveryTime: "27-35 min",
                  minimumOrderPrice: "350",
                  deliveryFee: "70 Rs"
                }}
              />
            </Col>
            <Col md={24} xs={24} sm={24}>
              <div className="divider">
                <Divider orientation="left">All Restrants</Divider>
              </div>
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Howdy,
                  Name: "Tower Burgerz",
                  rating: 5,
                  deliveryTime: "30-40 min",
                  minimumOrderPrice: "550",
                  deliveryFee: "No"
                }}
              />
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Pizza,
                  Name: "Pizza N Things",
                  rating: 5,
                  deliveryTime: "60 min",
                  minimumOrderPrice: "310",
                  deliveryFee: "No"
                }}
              />
            </Col>
            <Col md={8} xs={24} sm={12}>
              <VenueItem
                dataToPass={{
                  pictureUrl: Covfee,
                  Name: "Kripsy Creme",
                  rating: 5,
                  deliveryTime: "30 min",
                  minimumOrderPrice: "250",
                  deliveryFee: "No"
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default VenueListings;
