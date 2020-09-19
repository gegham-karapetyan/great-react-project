import React, { PureComponent } from "react";
import Header from "./Editor/Header";
import styles from "./Editor.module.css";
class Editor extends PureComponent {
  render() {
    return (
      <div className={styles.editor}>
        <div className={styles.closer}>X</div>
        <Header />
        <div className={styles.body}>
          <div className={styles.textOfbody}>Body :</div>
          <div className={styles.content} contentEditable={true} />
        </div>
        <div className={styles.make}>make</div>
      </div>
    );
  }
}
export default Editor;
