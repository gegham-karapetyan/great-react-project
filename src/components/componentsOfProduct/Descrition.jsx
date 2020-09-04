import React, { Component } from "react";

class Description extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2>
        <span style={{ color: "red", fontStyle: "italic" }}>description</span> :{" "}
        {this.props.description}
      </h2>
    );
  }
}
export default Description;
