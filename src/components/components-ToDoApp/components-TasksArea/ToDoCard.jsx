import React, { PureComponent } from "react";
import styles from "./ToDoCard.module.css";
import important from "./images/important.png";
import warning from "./images/warning.png";
import casual from "./images/casual.png";
import select from "./images/select.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import View from "./components-ToDoCard/View";
import TaskEditor from "../TaskEditor";

class ToDoCard extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      selected: false,
      isEdited: false,
      doShowView: false,
      doOpenTaskEditor: false,
      header: props.header,
      body: props.body,
      date: props.date,
      importance: props.importance,
    };
  }
  imageSrc = (importance) => {
    switch (importance) {
      case "important":
        return important;
      case "warning":
        return warning;
      default:
        return casual;
    }
  };
  toggleSelected = () => {
    let { selected } = this.state;

    this.setState({ selected: !selected });
  };
  closeView = () => {
    let { doShowView } = this.state;
    this.setState({ doShowView: !doShowView });
  };
  openTaskEditor = () => {
    this.setState({ doOpenTaskEditor: true });
  };
  closeTaskEditor = () => {
    this.setState({ doOpenTaskEditor: false });
  };
  changeTask = (TOM) => {
    console.log(TOM);
    this.setState({
      header: TOM.header,
      body: TOM.body,
      isEdited: "(edited)",
      importance: TOM.importance,
    });
  };

  render() {
    const props = this.props;
    console.log("props.header", props.header);
    let {
      selected,
      doShowView,
      doOpenTaskEditor,
      isEdited,
      header,
      body,
      date,
      importance,
    } = this.state;

    return (
      <div
        className={`${styles.card} ${styles[importance]} ${
          props.isSelected ? styles.selected : ""
        }`}>
        <div className={styles.header}>{header}</div>
        <div
          className={styles.paperPin}
          title={
            props.isSelected
              ? "To remove one by one turn off the SELECT button"
              : "remove"
          }
          onClick={() => {
            if (!props.isSelected) props.onRemove(props.id);
          }}>
          <img src={this.imageSrc(importance)} alt="paper-pin" width="50px" />
        </div>

        <div
          className={styles.body}
          onClick={() => this.setState({ doShowView: true })}>
          {body}
        </div>
        <div className={styles.footer}>
          <div className={styles.date} title="date of creation">
            <FontAwesomeIcon icon={faCalendarAlt} /> {date}{" "}
            <small style={{ color: "white" }}>{isEdited}</small>
          </div>
          <div className={styles.configs}>
            <span className={styles.edit} onClick={this.openTaskEditor}>
              <FontAwesomeIcon icon={faEdit} />
              Edit
            </span>
            {props.isSelected && (
              <div
                className={styles.checkbox}
                onClick={() => {
                  this.toggleSelected();
                  props.onSelected(props.id, !selected);
                }}>
                {selected && (
                  <img
                    className={styles.selected}
                    src={select}
                    alt="select icon"
                  />
                )}
              </div>
            )}
          </div>
          {doShowView && <View closeView={this.closeView} text={body} />}
          {doOpenTaskEditor && (
            <TaskEditor
              onAdd={this.changeTask}
              onHidden={this.closeTaskEditor}
              initialHeaderValue={header}
              initialBodyValue={body}
              importance={importance}
              buttonText="save"
            />
          )}
        </div>
      </div>
    );
  }
}
export default ToDoCard;
