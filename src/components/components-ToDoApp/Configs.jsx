import React, { PureComponent } from "react";
import styles from "./Configs.module.css";
import Select from "./components-Configs/Select";
import Delete from "./components-Configs/Delete";
import Modal from "../GlobalModulesLibrary/Modal/Modal";
import Confirm from "../GlobalModulesLibrary/Confirm/Confirm";

class Configs extends PureComponent {
  state = { doShowModal: false, doShowConfirm: false };
  showModal = () => {
    this.setState({ doShowModal: true });
  };
  closeModal = () => {
    this.setState({ doShowModal: false });
  };
  showConfirm = () => {
    this.setState({ doShowConfirm: true });
  };
  closeConfirm = () => {
    this.setState({ doShowConfirm: false });
  };
  render() {
    const {
      permission,
      onSelect,
      isSelected,
      onRemoveSelected,
      selectedTasksIds,
    } = this.props;
    const { doShowModal, doShowConfirm } = this.state;
    const size = Object.keys(selectedTasksIds).length;
    return (
      <div className={styles.configs}>
        {doShowModal && (
          <Modal
            text="To SELECT some task you first need to create "
            closeModal={this.closeModal}
          />
        )}
        <Select
          onSelect={() => {
            if (permission) onSelect();
            else this.showModal();
          }}
        />
        <Delete isSelected={isSelected} showConfirm={this.showConfirm} />
        {doShowConfirm && (
          <Confirm
            text={`are you sure you want to delete ${size} ${
              size > 1 ? "tasks" : "task"
            }`}
            closeConfirm={this.closeConfirm}
            confirmAction={onRemoveSelected}
          />
        )}
      </div>
    );
  }
}
export default Configs;
