import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        <span style={{ color: "#282c34", fontStyle: "italic" }}>name</span> :{" "}
        {this.props.name}
      </h1>
    );
  }
}
export default Name;
