import React from "react";
import { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  render() {
    const { text, closeModal } = this.props;
    return (
      <div
        className={styles.background}
        onClick={(e) => {
          if (e.target === e.currentTarget || e.target.tagName === "INPUT")
            closeModal();
        }}>
        <div className={styles.modal}>
          <div className={styles.text}>{text}</div>
          <input type="button" className={styles.button} value="OK" autoFocus />
        </div>
      </div>
    );
  }
}
export default Modal;
