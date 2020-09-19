import React, { PureComponent } from "react";
import styles from "./ToDo.module.css";
import paperPin from "./paper-pin-mini.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

class ToDoCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.header}>{props.toDoHeader}</div>
        <div className={styles.paperPin} title="delete">
          <img src={paperPin} alt="paper-pin" width="50px" />
        </div>
        <div className={styles.body}>{props.toDoBody}</div>
        <div className={styles.footer}>
          <div className={styles.date}>
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
          </div>
          <div className={styles.configs}>
            <span className={styles.edit}>
              <FontAwesomeIcon icon={faEdit} />
              Edit
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ToDoCard;
