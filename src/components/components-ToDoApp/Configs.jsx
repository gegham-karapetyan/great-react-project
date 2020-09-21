import React, { PureComponent } from "react";
import styles from "./Configs.module.css";
import Select from "./components-Configs/Select";
import Delete from "./components-Configs/Delete";
import Modal from "../GlobalModulesLibrary/Modal/Modal";

class Configs extends PureComponent {
  state = { doShowModal: false };
  showModal = () => {
    this.setState({ doShowModal: true });
  };
  closeModal = () => {
    this.setState({ doShowModal: false });
  };

  render() {
    const { permission, onSelect, isSelected, onRemoveSelected } = this.props;
    const { doShowModal } = this.state;
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
        <Delete isSelected={isSelected} onRemoveSelected={onRemoveSelected} />
      </div>
    );
  }
}
export default Configs;
