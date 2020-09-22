import React, { Component } from "react";
import styles from "./TaskArea.module.css";
import ToDoCard from "./components-TaskArea/ToDoCard";

class TasksArea extends Component {
  render() {
    const { onRemove, isSelected, onSelected } = this.props;

    const { tasks } = this.props;

    return (
      <div className={styles.background}>
        {tasks.map((task) => (
          <ToDoCard
            key={task.id}
            id={task.id}
            header={task.header}
            body={task.body}
            date={task.date}
            importance={task.importance}
            onRemove={onRemove}
            onSelected={onSelected}
            isSelected={isSelected}
          />
        ))}
      </div>
    );
  }
}
export default TasksArea;
