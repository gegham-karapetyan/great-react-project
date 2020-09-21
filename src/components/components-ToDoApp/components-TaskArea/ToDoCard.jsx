import React, { PureComponent } from "react";
import styles from "./ToDoCard.module.css";
import paperPin from "./paper-pin-mini.png";
import select from "./select.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

class ToDoCard extends PureComponent {
  state = {
    selected: false,
  };

  onClick = () => {
    let { selected } = this.state;

    this.setState({ selected: !selected });
  };
  render() {
    console.log("todo card render this.props",this.props);

    const props = this.props;

    let { selected } = this.state;

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
        <div className={styles.body}>{props.body}</div>
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
