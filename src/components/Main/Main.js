import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInput } from "../../state/column/columnActionCreators";
import { addPropertyInput } from "../../state/propertyInput/propertyInputCreators";
import Column from "../Column";
import { ColumnCreator } from "../ColumnCreator/ColumnCreator";
import styles from "./Main.module.sass";

const Main = () => {
  const columns = useSelector((state) => state.columns);
  const dispatch = useDispatch();
  const addInputToColumn = (columnId) => () => {
    const addInputAction = addPropertyInput();
    const inputId = addInputAction.payload.id;
    dispatch(addInput(columnId, inputId));
    dispatch(addInputAction);
  };
  return (
    <div className={styles.container}>
      {columns.map((column) => (
        <div className={styles.item}>
          <Column
            className={styles.item}
            addInput={addInputToColumn(column.columnId)}
            key={column.columnId}
            columnName={column.columnName}
            columnId={column.columnId}
            inputIds={column.inputIds}
          />
        </div>
      ))}
      <div className={styles.item}>
        <ColumnCreator className={styles.item} />
      </div>
    </div>
  );
};

export default Main;
