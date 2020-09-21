import React from "react";
import styles from "./TaskEditor.module.css";
import Editor from "./components-TaskEditor/Editor";

function TaskEditor(props) {
  const { onHidden, onAdd } = props;
  return (
    <div className={styles.background}>
      <Editor onHidden={onHidden} onAdd={onAdd} />
    </div>
  );
}
export default TaskEditor;
