import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  const { openEditor } = props;
  return (
    <div className={styles.input} onClick={openEditor}>
      Add Your Task
    </div>
  );
}
export default Input;
