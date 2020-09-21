import React from "react";
import styles from "./Delete.module.css";

function Delete(props) {
  const { isSelected, showConfirm } = props;

  return (
    <div
      className={`${styles.delete} ${isSelected ? styles.active : ""}`}
      onClick={isSelected ? showConfirm : undefined}>
      Delete
    </div>
  );
}
export default Delete;
