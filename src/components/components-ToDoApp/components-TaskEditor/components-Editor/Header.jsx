import React, { PureComponent } from "react";
import styles from "./Header.module.css";

class Header extends PureComponent {
  constructor(props) {
    super();
    this.state = { value: props.initialHeaderValue || "" };
  }

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
        <input type="text" value={value} onChange={this.onChange} autoFocus />
      </div>
    );
  }
}
export default Header;
