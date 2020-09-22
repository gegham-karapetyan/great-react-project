import React, { PureComponent } from "react";
import styles from "./Editor.module.css";
import Header from "./components-Editor/Header";
import Body from "./components-Editor/Body";
import ButtonsGroup from "./components-Editor/ButtonsGroup";

class Editor extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      importance: props.importance,
    };
    this.TOM = {
      header: props.initialHeaderValue,
      body: props.initialBodyValue,
      importance: props.importance,
    };
  }

  setHeaderValue = (headerValue) => {
    this.TOM.header = headerValue;
  };

  setBodyValue = (bodyValue) => {
    this.TOM.body = bodyValue;
  };

  setImportance = (importance) => {
    this.TOM.importance = importance;
    this.setState({ importance: importance });
  };

  render() {
    const { TOM, setImportance, setHeaderValue, setBodyValue } = this;
    const {
      onHidden,
      onAdd,
      initialHeaderValue,
      initialBodyValue,
      buttonText,
    } = this.props;
    let { importance } = this.state;

    return (
      <div className={styles.editor}>
        <div className={styles.closer} onClick={onHidden}>
          X
        </div>
        <Header
          setHeaderValue={setHeaderValue}
          initialHeaderValue={initialHeaderValue}
          importance={importance}
        />
        <Body setBodyValue={setBodyValue} initialBodyValue={initialBodyValue} />
        <ButtonsGroup
          setImportance={setImportance}
          onAdd={() => onAdd(TOM)}
          onHidden={onHidden}
          buttonText={buttonText || "add"}
        />
      </div>
    );
  }
}
export default Editor;
