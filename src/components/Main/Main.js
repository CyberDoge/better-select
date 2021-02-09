import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DEFAULT } from "../../const/sortDirection";
import Column from "../Column";
import { ColumnCreator } from "../ColumnCreator/ColumnCreator";
import styles from "./Main.module.sass";

const Main = () => {
  const columns = useSelector((state) => state.columns);
  const [sortDirection, setSortDirection] = useState(DEFAULT);
  return (
    <div className={styles.container}>
      {columns.map((column) => (
        <div key={column.columnId} className={styles.item}>
          <Column
            sortDirection={sortDirection}
            className={styles.item}
            columnName={column.columnName}
            columnId={column.columnId}
            handleSortChanged={(direction) => {
              setSortDirection(direction);
            }}
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
