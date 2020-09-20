import React from "react";
import styles from "./TaskEditor.module.css";
import Editor from "./components/Editor";

function TaskEditor(props) {
  const { isHidden, onAdd } = props;
  return (
    <div className={styles.background}>
      <Editor isHidden={isHidden} onAdd={onAdd} />
    </div>
  );
}
export default TaskEditor;
