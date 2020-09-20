import React, { PureComponent } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import styles from "./Editor.module.css";
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
    const { isHidden, onAdd } = this.props;
    return (
      <div className={styles.editor}>
        <div className={styles.closer} onClick={isHidden}>
          X
        </div>
        <Header getHeaderValue={this.getHeaderValue} />
        <Body getBodyValue={this.getBodyValue} />
        <div
          className={styles.add}
          onClick={() => {
            onAdd(TOM);
            isHidden();
          }}>
          add
        </div>
      </div>
    );
  }
}
export default Editor;
