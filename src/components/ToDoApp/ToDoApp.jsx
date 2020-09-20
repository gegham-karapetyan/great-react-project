import React, { PureComponent } from "react";
import TaskEditer from "./TaskEditor/TaskEditor";
import TasksArea from './TasksArea/TasksArea';
import Input from './Input/Input'
import Configs from './Configs/Configs'
import idGenerator from './ownModules/usfullFunctionsLibrary/idGenerator'
import pushInArray from './ownModules/usfullFunctionsLibrary/pushInArray'


class ToDoApp1 extends PureComponent {
  state = {
    taskEditerIsOpen: false,
    tasks: [],
  };
  addTask = () => {
    this.setState({
      taskEditerIsOpen: true,
    });
  };
  isHidden = () => {
    this.setState({
      taskEditerIsOpen: false,
    });
  };
  onAdd = (TOM) => {
    const {tasks} = this.state;
    const newTasks = tasks.slice()
    TOM.id = idGenerator();
    TOM.date = new Date().toDateString();
    this.setState({
      tasks: pushInArray(newTasks,TOM),
    });
  };
  
  onRemove=(id)=>{
    const {tasks} = this.state;
    this.setState({tasks:tasks.filter(task=>task.id!==id)})
  }

  render() {
    const { isHidden, onAdd, onRemove,addTask} = this;
    const { taskEditerIsOpen,tasks } = this.state;

    return (
      <div >             
        <Input addTask={addTask}/>
        <Configs/>
        {taskEditerIsOpen && <TaskEditer isHidden={isHidden} onAdd={onAdd} />}
        {/* ToDoCard -ը ռենդերա լինում 2 անգամ ինչիցա?  */}
        <TasksArea tasks={tasks} onRemove={onRemove}/>
      </div>
    );
  }
}
export default ToDoApp1;
