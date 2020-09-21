import React, { PureComponent } from "react";
import Input from "./components-ToDoApp/Input";
import Configs from "./components-ToDoApp/Configs";
import TaskEditer from "./components-ToDoApp/TaskEditor";
import TasksArea from "./components-ToDoApp/TasksArea";
import idGenerator from "./GlobalFunctionsLibrary/idGenerator";
import pushInArray from "./GlobalFunctionsLibrary/pushInArray";

class ToDoApp1 extends PureComponent {
  state = {
    isSelected: false,
    taskEditerIsOpen: false,
    tasks: [],
  };
  addTask = () => {
    this.setState({
      taskEditerIsOpen: true,
    });
  };
  onHidden = () => {
    this.setState({
      taskEditerIsOpen: false,
    });
  };

  //Task Object Model TOM
  onAdd = (TOM) => {
    const { tasks } = this.state;
    const newTasks = tasks.slice();
    TOM.id = idGenerator();
    TOM.date = new Date().toDateString();
    this.setState({
      tasks: pushInArray(newTasks, TOM),
    });
  };

  onRemove = (id) => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((task) => task.id !== id) });
  };

  //when the 'Select' button is pressed
  onSelect = () => {
    let { isSelected } = this.state;
    this.setState({ isSelected: !isSelected });
  };

  render() {
    const { onHidden, onAdd, onRemove, addTask, onSelect } = this;
    const { taskEditerIsOpen, tasks, isSelected } = this.state;

    return (
      <div>
        <Input addTask={addTask} />
        <Configs onSelect={onSelect} />
        {taskEditerIsOpen && <TaskEditer onHidden={onHidden} onAdd={onAdd} />}
        {/* ToDoCard -ը ռենդերա լինում 2 անգամ ինչիցա?  */}
        <TasksArea tasks={tasks} onRemove={onRemove} isSelected={isSelected} />
      </div>
    );
  }
}
export default ToDoApp1;
