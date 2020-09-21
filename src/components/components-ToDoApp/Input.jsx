import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  const { addTask } = props;
  return (
    <div className={styles.input} onClick={addTask}>
      Add Your Task
    </div>
  );
}
export default Input;
