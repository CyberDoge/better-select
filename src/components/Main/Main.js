import React from "react";
import { useSelector } from "react-redux";
import Column from "../Column";
import { ColumnCreator } from "../ColumnCreator/ColumnCreator";
import styles from "./Main.module.sass";

const Main = () => {
  const columns = useSelector((state) => state.columns);
  return (
    <div className={styles.container}>
      {columns.map((column) => (
        <div key={column.columnId} className={styles.item}>
          <Column
            className={styles.item}
            columnName={column.columnName}
            columnId={column.columnId}
            inputIds={column.inputIds}
          />
        </div>
      ))}
      <div className={styles.item}>
        <ColumnCreator />
      </div>
    </div>
  );
};

export default Main;
