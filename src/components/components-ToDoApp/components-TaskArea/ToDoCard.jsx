import React, { PureComponent } from "react";
import styles from "./ToDoCard.module.css";
import paperPin from "./paper-pin-mini.png";
import select from "./select.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import View from "./components-ToDoCard/View";
class ToDoCard extends PureComponent {
  state = {
    selected: false,
    doShowView: false,
  };

  onClick = () => {
    let { selected } = this.state;

    this.setState({ selected: !selected });
  };
  closeView = () => {
    let { doShowView } = this.state;
    this.setState({ doShowView: !doShowView });
  };
  render() {
    const props = this.props;

    let { selected, doShowView } = this.state;

    return (
      <div
        className={`${styles.card} ${props.isSelected ? styles.selected : ""}`}>
        <div className={styles.header}>{props.header}</div>
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
        {doShowView && <View closeView={this.closeView} text={props.body} />}
        <div
          className={styles.body}
          onClick={() => this.setState({ doShowView: true })}>
          {props.body}
        </div>
        <div className={styles.footer}>
          <div className={styles.date}>
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
          </div>
          <div className={styles.configs}>
            <span className={styles.edit}>
              <FontAwesomeIcon icon={faEdit} />
              Edit
            </span>
            {props.isSelected && (
              <div
                className={styles.checkbox}
                onClick={() => {
                  this.onClick();

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
        </div>
      </div>
    );
  }
}
export default ToDoCard;
