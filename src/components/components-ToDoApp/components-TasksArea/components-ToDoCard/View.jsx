import React from "react";
import { Component } from "react";
import styles from "./View.module.css";

class View extends Component {
  render() {
    const { text, closeView } = this.props;
    return (
      <div
        className={styles.background}
        onClick={(e) => {
          if (e.target === e.currentTarget || e.target.tagName === "INPUT")
            closeView();
        }}>
        <div className={styles.view}>
          <div>
            <div className={styles.text}>{text}</div>
          </div>
          <div className={styles.buttonArea}>
            <input
              type="button"
              className={styles.button}
              value="OK"
              autoFocus
            />
          </div>
        </div>
      </div>
    );
  }
}
export default View;
