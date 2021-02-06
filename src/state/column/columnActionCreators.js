import { ADD_COLUMN, ADD_INPUT_TO_COLUMN } from "./columnActions";

export const addInput = (columnName, inputId) => ({
  type: ADD_INPUT_TO_COLUMN,
  payload: {
    columnName,
    inputId,
  },
});
export const addColumn = (columnName) => ({
  type: ADD_COLUMN,
  payload: columnName,
});
