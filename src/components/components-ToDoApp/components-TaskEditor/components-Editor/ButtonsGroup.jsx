import React from "react";
import styles from "./ButtonsGroup.module.css";

function ButtonsGroup({ setImportance, onAdd, onHidden, buttonText }) {
  return (
    <div className={styles.buttonsGroup}>
      <div
        className={styles.important}
        onClick={() => {
          setImportance("important");
        }}>
        important
      </div>
      <div
        className={styles.warning}
        onClick={() => {
          setImportance("warning");
        }}>
        warning
      </div>
      <div
        className={styles.casual}
        onClick={() => {
          setImportance("casual");
        }}>
        casual
      </div>
      <div
        className={styles.add}
        onClick={() => {
          onAdd();
          onHidden();
        }}>
        {buttonText || "add"}
      </div>
    </div>
  );
}
export default ButtonsGroup;
