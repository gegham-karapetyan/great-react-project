import React, { PureComponent } from "react";
import styles from "./Configs.module.css";
import Select from "./components-Configs/Select";
import Delete from "./components-Configs/Delete";

class Configs extends PureComponent {
  render() {
    return (
      <div className={styles.configs}>
        <Select onSelect={this.props.onSelect} />
        <Delete />
      </div>
    );
  }
}
export default Configs;
