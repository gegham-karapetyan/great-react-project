import React, { PureComponent } from "react";
import styles from "./Body.module.css";
class Body extends PureComponent {
  constructor(props) {
    super();
    this.state = { value: props.initialBodyValue || "" };
  }

  onChange = (e) => {
    this.props.setBodyValue(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    let { value } = this.state;
    return (
      <div className={styles.body}>
        <div className={styles.textOfbody}>Body :</div>
        <textarea
          className={`${styles.content} + ${styles[this.props.importance]}`}
          onChange={this.onChange}
          value={value}
          textarea="true"
        />
      </div>
    );
  }
}
export default Body;
