import React, { Component } from "react";
import { Input, Col, Row, Button } from "antd";
import "../../Css/VenueItem.css";
import { Tag } from "antd";
const InputGroup = Input.Group;

class TagsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col span={24}>
          <div className="tagsSection">
            <h1>Tags</h1>
            {/* <Tag className="tags">Football</Tag>
            <Tag className="tags">Cricket</Tag>
            <Tag className="tags">Stadium</Tag>
            <Tag className="tags">Multisport</Tag>
            <Tag className="tags">Playfield</Tag>
            <Tag className="tags">Night Lights</Tag>
            <Tag className="tags">Sports</Tag>
            <Tag className="tags">Cheap</Tag> */}
          </div>
        </Col>
      </Row>
    );
  }
}

export default TagsSection;
