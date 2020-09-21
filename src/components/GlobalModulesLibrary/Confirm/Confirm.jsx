import React from "react";
import { Component } from "react";
import styles from "./Confirm.module.css";

class Confirm extends Component {
  render() {
    const { text, closeConfirm, confirmAction } = this.props;
    return (
      <div
        className={styles.background}
        onClick={(e) => {
          if (
            e.target === e.currentTarget ||
            (e.target.tagName === "INPUT" && e.target.value === "Cancel")
          )
            closeConfirm();
          else if (e.target.tagName === "INPUT" && e.target.value === "OK") {
            confirmAction();
            closeConfirm();
          }
        }}>
        <div className={styles.confirm}>
          <div className={styles.text}>{text}</div>
          <input type="button" className={styles.buttonOK} value="OK" />
          <input
            type="button"
            className={styles.buttonCancel}
            value="Cancel"
            autoFocus
          />
        </div>
      </div>
    );
  }
}
export default Confirm;
