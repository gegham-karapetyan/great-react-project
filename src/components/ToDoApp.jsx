import React, { Component } from "react";
import Input from "./components-ToDoApp/Input";
import Configs from "./components-ToDoApp/Configs";
import TaskEditor from "./components-ToDoApp/TaskEditor";
import TasksArea from "./components-ToDoApp/TasksArea";
import idGenerator from "./GlobalFunctionsLibrary/idGenerator";
import pushInArray from "./GlobalFunctionsLibrary/pushInArray";

class ToDoApp extends Component {
  state = {
    isSelected: false,
    taskEditorIsOpen: false,
    tasks: [],
  };

  selectedTasksIds = {};

  //for conditional rendering when the 'Add your task' button is pressed
  openEditor = () => {
    this.setState({
      taskEditorIsOpen: true,
    });
  };
  closeEditor = () => {
    this.setState({
      taskEditorIsOpen: false,
    });
  };

  //Task Object Model TOM
  //when pressing 'add' button from Editor
  onAdd = (TOM) => {
    let { tasks } = this.state;
    const newTasks = tasks.slice();
    TOM.id = idGenerator();
    TOM.date = new Date().toDateString();
    TOM.importance = TOM.importance || "casual";

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

  //for getting tasks ids from the checkbox
  onSelected = (id, selected) => {
    const selectedIds = this.selectedTasksIds;
    if (selected) {
      selectedIds[id] = selected;
    } else delete selectedIds[id];
  };

  //when pressing Delete button
  onRemoveSelected = () => {
    const { tasks } = this.state;
    this.setState({
      isSelected: false,
      tasks: tasks.filter(({ id }) => !this.selectedTasksIds[id]),
    });
    this.selectedTasksIds = {};
  };

  render() {
    const {
      closeEditor,
      onAdd,
      onRemove,
      openEditor,
      onSelect,
      onRemoveSelected,
      onSelected,
    } = this;
    const { taskEditorIsOpen, tasks, isSelected } = this.state;

    return (
      <div>
        <Input openEditor={openEditor} />
        <Configs
          onSelect={onSelect}
          permission={!!tasks.length}
          isSelected={isSelected}
          onRemoveSelected={onRemoveSelected}
          selectedTasksIds={this.selectedTasksIds}
        />
        {taskEditorIsOpen && (
          <TaskEditor onHidden={closeEditor} onAdd={onAdd} />
        )}
        {/* Խիա ամենինչ 2 անգամ ռենդեր անում?  */}
        <TasksArea
          tasks={tasks}
          onRemove={onRemove}
          isSelected={isSelected}
          onRemoveSelected={onRemoveSelected}
          onSelected={onSelected}
        />
      </div>
    );
  }
}
export default ToDoApp;
