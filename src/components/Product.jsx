import React, { Component } from "react";
import Price from "./componentsOfProduct/Price";
import Name from "./componentsOfProduct/Name";
import Description from "./componentsOfProduct/Descrition";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Name name={this.props.name} />
        <Price price={this.props.price} />
        <Description description={this.props.description} />
      </div>
    );
  }
}
export default Product;
