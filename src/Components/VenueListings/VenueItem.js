import React, { Component } from "react";
import { Row, Col, Button, Tag } from "antd";
import { Link } from "react-router-dom";
import "../../Css/VenueItem.css";
import FootBall from "../../Images/greenBall.svg";
import RatingStar from "../../Images/ratingStar.png";

class VenueItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureUrl: null,
      Name: null,
      rating: null,
      deliveryTime: null,
      minimumOrderPrice: null,
      deliveryFee: null
    };
  }

  componentWillMount() {
    this.setState({
      pictureUrl: this.props.dataToPass.pictureUrl,
      Name: this.props.dataToPass.Name,
      rating: this.props.dataToPass.rating,
      deliveryTime: this.props.dataToPass.deliveryTime,
      minimumOrderPrice: this.props.dataToPass.minimumOrderPrice,
      deliveryFee: this.props.dataToPass.deliveryFee
    });
  }
  render() {
    return (
      <Row>
        <Col offset={1} span={22}>
          <Link to={{ pathname: `/venues/1`, query: this.state }}>
            <div className="itemCard">
              <Row>
                <Col xs={24} md={24}>
                  <div className="imageContainer">
                    <img src={this.state.pictureUrl} className="venueImage" />
                  </div>
                </Col>
                <Col xs={24} md={24}>
                  <Row>
                    <Col md={18} xs={18}>
                      <p className="venueTitle">{this.state.Name}</p>
                      <p className="venueDescription">Fast Food•Burgers </p>
                      <Tag>{this.state.deliveryTime}</Tag>
                      <Tag>
                        {this.state.rating}{" "}
                        <img
                          src={RatingStar}
                          style={{
                            width: "14px",
                            height: "14px",
                            marginTop: "-0.5vh"
                          }}
                        />
                      </Tag>
                      <Tag>{this.state.deliveryFee} Delivery Fee</Tag>
                    </Col>
                    <Col md={6} xs={6}>
                      <p className="venueDescriptionSecondary">Fresh</p>
                      <p className="venueDescriptionTertiary">10% Off</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default VenueItem;
