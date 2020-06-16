import React, { Component } from "react";
import { Row, Col } from "antd";
import "../../Css/FoodItem.css";
import { Link } from "react-router-dom";
class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItemName: null,
      foodItemPrice: null,
      foodItemDescription: null,
    };
  }

  componentWillMount() {
    this.setState({
      foodItemDescription: this.props.foodDetails.foodItemDescription,
      foodItemName: this.props.foodDetails.foodItemName,
      foodItemPrice: this.props.foodDetails.foodItemPrice,
    });
  }

  render() {
    console.log(this.props);
    return (
      <Row>
        <Col span={24}>
          <Link to={{ pathname: "/checkout", query: this.state }}>
            <div className="foodItemCard">
              <p className="foodTitle">{this.state.foodItemName}</p>
              <p className="foodDescription">
                {this.state.foodItemDescription}
              </p>
              <p className="foodPrice">{this.state.foodItemPrice}</p>
            </div>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default FoodItem;
