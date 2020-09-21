import React from "react";
import styles from "./TaskEditor.module.css";
import Editor from "./components-TaskEditor/Editor";

function TaskEditor(props) {
  const {
    onHidden,
    onAdd,
    initialHeaderValue,
    initialBodyValue,
    buttonText,
  } = props;
  return (
    <div className={styles.background}>
      <Editor
        onHidden={onHidden}
        onAdd={onAdd}
        initialHeaderValue={initialHeaderValue}
        initialBodyValue={initialBodyValue}
        buttonText={buttonText}
      />
    </div>
  );
}
export default TaskEditor;
