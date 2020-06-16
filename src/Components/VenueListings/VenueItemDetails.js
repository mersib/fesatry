import React, { Component } from "react";
import { Row, Col, Button, Tag, Tabs } from "antd";
import "../../Css/VenueItemDetails.css";
import RatingStar from "../../Images/ratingStar.png";
import FoodItem from "./FoodItem";
import Grid from "antd/lib/card/Grid";

const { TabPane } = Tabs;
class VenueItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureUrl: null,
      Name: null,
      rating: null,
      deliveryTime: null,
      minimumOrderPrice: null,
      deliveryFee: null,
    };
  }
  componentWillMount() {
    this.setState({
      pictureUrl: this.props.location.query.pictureUrl,
      Name: this.props.location.query.Name,
      rating: this.props.location.query.rating,
      deliveryTime: this.props.location.query.deliveryTime,
      minimumOrderPrice: this.props.location.query.minimumOrderPrice,
      deliveryFee: this.props.location.query.deliveryFee,
    });
  }

  render() {
    return (
      <Row type="flex" justify="start" align="middle">
        {this.state.pictureUrl && (
          <Col
            span={24}
            className="resturantJumbotron"
            style={{ backgroundImage: `url(${this.state.pictureUrl})` }}
          >
            <Row type="flex" justify="start" align="middle">
              <Col md={8} xs={24} sm={24} className="jumbotronCard">
                <p className="resturantTitle">{this.state.Name}</p>
                <p className="resturantDescription">
                  Fast Food.Burgers.BreakFast
                </p>
                <p className="resturantDescription">
                  Commercial Plaza St 69, New York
                </p>
                <div className="tagsSection">
                  <Tag>{this.state.deliveryTime}</Tag>
                  <Tag>
                    {this.state.rating}{" "}
                    <img
                      src={RatingStar}
                      style={{
                        width: "14px",
                        height: "14px",
                        marginTop: "-0.5vh",
                      }}
                    />
                  </Tag>
                  <Tag>{this.state.deliveryFee} Delivery Fee</Tag>
                </div>
              </Col>
            </Row>
          </Col>
        )}
        <Col offset={1} span={22}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Deals" key="1">
              <Row gutter={[24, 24]}>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Mains" key="2">
              <Row gutter={[24, 24]}>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="BreakFast" key="3">
              <Row gutter={[24, 24]}>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Side Orders" key="4">
              <Row gutter={[24, 24]}>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Beverages" key="5">
              <Row gutter={[24, 24]}>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 1",
                      foodItemPrice: "500 Rs",
                      foodItemDescription: "1.5L",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 2",
                      foodItemPrice: "1200 Rs",
                      foodItemDescription: "Served with fries and cold drink",
                    }}
                  />
                </Col>
                <Col md={8} xs={24} sm={24}>
                  <FoodItem
                    foodDetails={{
                      foodItemName: "Item 3",
                      foodItemPrice: "300 Rs",
                      foodItemDescription: "Ask for vanilla or chocolate",
                    }}
                  />
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default VenueItemDetails;
