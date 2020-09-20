import React, { PureComponent } from "react";
import styles from "./Header.module.css";

class Header extends PureComponent {
  state = { value: "" };

  onChange = (e) => {
    this.props.getHeaderValue(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    let { value } = this.state;
    return (
      <div className={styles.header}>
        <div className={styles.textOfheader}>Header :</div>
        <input type="text" value={value} onChange={this.onChange} />
      </div>
    );
  }
}
export default Header;
