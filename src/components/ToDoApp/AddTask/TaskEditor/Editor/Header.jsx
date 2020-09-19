import React, { PureComponent } from "react";
import styles from "./Header.module.css";

class Header extends PureComponent {
  state = { value: "" };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.textOfheader}>Header :</div>
        <input type="text" />
      </div>
    );
  }
}
export default Header;
