import React, { PureComponent } from "react";
import TaskEditer from "./AddTask/TaskEditer";

class AddTask extends PureComponent {
  state = {
    taskEditerIsOpen: false,
  };
  addTask = () => {
    this.setState({
      taskEditerIsOpen: true,
    });
  };
  render() {
    const { taskEditerIsOpen } = this.state;

    return (
      <>
        {" "}
        <button onClick={this.addTask}>Add Your Task</button>
        {taskEditerIsOpen && <TaskEditer />}
      </>
    );
  }
}
export default AddTask;
