import React, { PureComponent } from "react";
import styles from "./TaskArea.module.css";
import ToDoCard from "./components-TaskArea/ToDoCard";

class TasksArea extends PureComponent {
  // երբ որ փորձում եմ props-ից ստանամ գցեմ state
  // ու հետո state-ից վերցնեմ չի լինւմ; դաժե constructor -ի մեջի
  // console.log-ը չի աշխատում,  ԽԻ?

  // constructor(props){
  //   super(props);
  //   console.log('constructor',props)
  //   this.state={
  //         tasks : props.tasks
  //       }
  // }
  SelectedTasksIds = {};

  onSelected = (id, selected) => {
    this.SelectedTasksIds[id] = selected;
    console.log("ID", id);
    console.log(this.SelectedTasksIds);
  };

  render() {
    const { onSelected } = this;
    const { onRemove, isSelected } = this.props;
    // ստեղ const {tasks} = this.state չի աշխատում
    const { tasks } = this.props;
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
