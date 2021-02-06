import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInput } from "../../state/column/columnActionCreators";
import { addPropertyInput } from "../../state/propertyInput/propertyInputCreators";
import Column from "../Column";

const Main = () => {
  const columns = useSelector((state) => state.columns);
  const dispatch = useDispatch();
  const addInputToColumn = (columnName) => () => {
    const addInputAction = addPropertyInput();
    const inputId = addInputAction.payload.id;
    dispatch(addInput(columnName, inputId));
    dispatch(addInputAction);
  };
  return (
    <div>
      {columns.map((column) => (
        <Column
          addInput={addInputToColumn(column.columnName)}
          key={column.columnName}
          columnName={column.columnName}
          inputIds={column.inputIds}
        />
      ))}
    </div>
  );
};

export default Main;
