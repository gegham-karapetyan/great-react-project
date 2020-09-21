import React, { Component } from "react";
import styles from "./TaskArea.module.css";
import ToDoCard from "./components-TaskArea/ToDoCard";

class TasksArea extends Component {
  

  render() {
    console.log("props barev", this.props);
    
    const { onRemove, isSelected,onSelected } = this.props;
    // ստեղ const {tasks} = this.state չի աշխատում
    const {tasks} = this.props;

    console.log("TaskArea render", tasks);
    return (
      <div className={styles.background}>
        {tasks.map((task) => (
          <ToDoCard
            key={task.id}
            id={task.id}
            header={task.header}
            body={task.body}
            date={task.date}
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
