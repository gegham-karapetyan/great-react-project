import React, { PureComponent } from "react";
import styles from "./Body.module.css";
class Body extends PureComponent {
  state = { value: "" };

  onInput = (e) => {
    this.props.getBodyValue(e.target.innerHTML);
    this.setState({
      value: e.target.innerHTML,
    });
  };
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.textOfbody}>Body :</div>
        <div
          className={styles.content}
          contentEditable={true}
          onInput={this.onInput}
        />
      </div>
    );
  }
}
export default Body;
