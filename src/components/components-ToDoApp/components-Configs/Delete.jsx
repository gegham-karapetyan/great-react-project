import React from "react";
import styles from "./Delete.module.css";

function Delete(props) {
  return (
    <div className={styles.delete} onClick={()=>{console.log('delete',props);props.onRemoveSelected()}}>
      Delete
    </div>
  );
}
export default Delete;
