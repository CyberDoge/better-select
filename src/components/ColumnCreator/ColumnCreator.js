import { AddIcon, Button } from "evergreen-ui";
import React from "react";
import { useDispatch } from "react-redux";
import { createColumn } from "../../state/column/columnActionCreators";
import styles from "./ColumnCreator.module.sass";
export const ColumnCreator = () => {
  const dispatch = useDispatch();
  const onCreate = () => {
    dispatch(createColumn(""));
  };
  return (
    <div className={styles.container}>
      <Button
        appearance="minimal"
        className={styles.addButton}
        onClick={onCreate}
      >
        <AddIcon size={32} color="success" />
      </Button>
    </div>
  );
};
