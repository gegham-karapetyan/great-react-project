import React, { PureComponent } from "react";
import styles from "./TaskEditor.module.css";
import Editor from "./TaskEditor/Editor";
class TaskEditor extends PureComponent {
  render() {
    return (
      <div className={styles.background}>
        <Editor />
      </div>
    );
  }
}
export default TaskEditor;
