import React, { PureComponent } from "react";
import styles from "./Editor.module.css";
import Header from "./components-Editor/Header";
import Body from "./components-Editor/Body";

class Editor extends PureComponent {
  // Task Object Model TOM
  TOM = {};

  getHeaderValue = (headerValue) => {
    this.TOM.header = headerValue;
  };

  getBodyValue = (bodyValue) => {
    this.TOM.body = bodyValue;
  };

  render() {
    const { TOM } = this;
    const { onHidden, onAdd } = this.props;
    return (
      <div className={styles.editor}>
        <div className={styles.closer} onClick={onHidden}>
          X
        </div>
        <Header getHeaderValue={this.getHeaderValue} />
        <Body getBodyValue={this.getBodyValue} />
        <div
          className={styles.add}
          onClick={() => {
            onAdd(TOM);
            onHidden();
          }}>
          add
        </div>
      </div>
    );
  }
}
export default Editor;
