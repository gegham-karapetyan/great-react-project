import React, { Component } from "react";

function convertCurrency(currency) {
  const price = parseFloat(currency);
  if (currency.includes("$")) {
    return price * 487 + String.fromCharCode(1423);
  } else return price / 487 + "$";
}

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = { price: this.props.price };
  }
  handlerClick() {
    let { price } = this.state;
    price = convertCurrency(price);
    this.setState({ price });
  }
  render() {
    return (
      <h2>
        <span style={{ color: "#282c34", fontStyle: "italic" }}>price</span> :{" "}
        <span
          style={{ border: "1px solid #282c34", cursor: "pointer" }}
          onClick={this.handlerClick.bind(this)}
          title="change currency">
          {this.state.price}
        </span>
      </h2>
    );
  }
}
export default Price;
