import React, { Component } from "react";
import { Input, Col, Row, Button } from "antd";
import "../../Css/VenueItem.css";
const InputGroup = Input.Group;

class FiltersSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col span={24}>
          <div className="filtersSection">
            <h1>Filters</h1>

            <h3>Details </h3>
            <Input
              size="medium"
              placeholder="Location"
              className="filterSectionElements"
            />
            <Input
              size="medium"
              placeholder="Venue Name"
              className="filterSectionElements"
            />
            <h3>Date </h3>
            <InputGroup compact style={{ width: "100%" }}>
              <Input
                style={{ width: 131, textAlign: "center" }}
                placeholder="Minimum"
              />
              <Input
                style={{
                  width: 40,
                  borderLeft: 0,
                  pointerEvents: "none",
                  backgroundColor: "#fff"
                }}
                placeholder="To"
                disabled
              />
              <Input
                style={{ width: 133, textAlign: "center", borderLeft: 0 }}
                placeholder="Maximum"
              />
            </InputGroup>
            <Button
              icon="search"
              block
              type="primary"
              className="filterSectionElements"
            >
              Search
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default FiltersSection;
