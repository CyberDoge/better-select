import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInput } from "../../state/column/columnActionCreators";
import { addPropertyInput } from "../../state/propertyInput/propertyInputCreators";
import Column from "../Column";

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
    <div>
      {columns.map((column) => (
        <Column
          addInput={addInputToColumn(column.columnId)}
          key={column.columnId}
          columnName={column.columnName}
          columnId={column.columnId}
          inputIds={column.inputIds}
        />
      ))}
    </div>
  );
};

export default Main;
