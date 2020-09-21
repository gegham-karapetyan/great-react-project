import React, { PureComponent } from "react";
import styles from "./ToDoCard.module.css";
import paperPin from "./paper-pin-mini.png";
import select from "./select.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import View from "./components-ToDoCard/View";
import TaskEditor from "../TaskEditor";

class ToDoCard extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      selected: false,
      doShowView: false,
      doOpenTaskEditor: false,
      header: props.header,
      body: props.body,
    };
  }

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
    this.setState({ header: TOM.header, body: TOM.body });
  };

  render() {
    const props = this.props;
    console.log("id", props.id);
    let { selected, doShowView, doOpenTaskEditor, header, body } = this.state;

    return (
      <div
        className={`${styles.card} ${props.isSelected ? styles.selected : ""}`}>
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
          <img src={paperPin} alt="paper-pin" width="50px" />
        </div>

        <div
          className={styles.body}
          onClick={() => this.setState({ doShowView: true })}>
          {body}
        </div>
        <div className={styles.footer}>
          <div className={styles.date}>
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
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
          {doShowView && <View closeView={this.closeView} text={props.body} />}
          {doOpenTaskEditor && (
            <TaskEditor
              onAdd={this.changeTask}
              onHidden={this.closeTaskEditor}
              initialHeaderValue={props.header}
              initialBodyValue={props.body}
              buttonText="save"
            />
          )}
        </div>
      </div>
    );
  }
}
export default ToDoCard;
