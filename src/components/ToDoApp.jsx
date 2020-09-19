import React, { PureComponent } from "react";
import AddTask from "./ToDoApp/AddTask";
import Tasks from "./ToDoApp/Tasks";

class ToDoApp extends PureComponent {
  render() {
    return (
      <>
        <AddTask />
        <Tasks />
      </>
    );
  }
}
export default ToDoApp;
