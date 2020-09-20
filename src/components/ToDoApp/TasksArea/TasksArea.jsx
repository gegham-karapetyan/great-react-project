import React, { PureComponent } from "react";
import ToDoCard from '../ownModules/ToDoCard/ToDoCard';
import styles from './TaskAre.module.css'

class TasksArea extends PureComponent {
  render() {
    
    const {tasks,onRemove}=this.props;
    console.log('TaskArea render',tasks)
    return (
    <div className={styles.background}>
    {tasks.map((task)=><ToDoCard 
      key={task.id}
      id= {task.id}
      header ={task.header} 
      body={task.body} 
      date={task.date}
      onRemove ={onRemove}
      />)}
    </div>);
  }
}
export default TasksArea;
