import React, { Component } from "react";
import Input from "./components-ToDoApp/Input";
import Configs from "./components-ToDoApp/Configs";
import TaskEditer from "./components-ToDoApp/TaskEditor";
import TasksArea from "./components-ToDoApp/TasksArea";
import idGenerator from "./GlobalFunctionsLibrary/idGenerator";
import pushInArray from "./GlobalFunctionsLibrary/pushInArray";

class ToDoApp1 extends Component {
  state = {
    isSelected: false,
    taskEditerIsOpen: false,
    tasks: [],
  };
   
   SelectedTasksIds = {};
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

  //when removing one by one
  onRemove = (id) => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((task) => task.id !== id) });
  };

  //when the 'Select' button is pressed
  onSelect = () => {
    let { isSelected } = this.state;
    this.setState({ isSelected: !isSelected });
  };

  
  
  

  onSelected = (id, selected) => {
    const SelectedIds = this.SelectedTasksIds;
    const { onRemoveSelected } = this.props;

    if (selected) {
      SelectedIds[id] = selected;
    } else delete SelectedIds[id];

    
    console.log("ID", id);
    console.log(SelectedIds);
  };

  onRemoveSelected = () => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(({ id }) => !this.SelectedTasksIds[id]) });
  };

  render() {
    const {
      onHidden,
      onAdd,
      onRemove,
      addTask,
      onSelect,
      onRemoveSelected,
      onSelected
    } = this;
    const { taskEditerIsOpen, tasks, isSelected } = this.state;

    return (
      <div>
        <Input addTask={addTask} />
        <Configs
          onSelect={onSelect}
          permission={!!tasks.length}
          isSelected={isSelected}
          onRemoveSelected={onRemoveSelected}
        />
        {taskEditerIsOpen && <TaskEditer onHidden={onHidden} onAdd={onAdd} />}
        {/* ToDoCard -ը ռենդերա լինում 2 անգամ ինչիցա?  */}
        <TasksArea tasks={tasks} onRemove={onRemove} isSelected={isSelected} onRemoveSelected={onRemoveSelected}
        onSelected={onSelected}
        />
      </div>
    );
  }
}
export default ToDoApp1;
