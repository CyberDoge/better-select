import {
  ADD_COLUMN,
  ADD_INPUT_TO_COLUMN,
  CHANGE_NAME,
  DELETE_COLUMN,
} from "./columnActions";

let nextId = 0;
export const addInput = (columnId, inputId) => ({
  type: ADD_INPUT_TO_COLUMN,
  payload: {
    columnId,
    inputId,
  },
});
export const addColumn = (columnName) => ({
  type: ADD_COLUMN,
  columnId: ++nextId,
  payload: columnName,
});

export const changeName = (columnId, columnName) => ({
  type: CHANGE_NAME,
  payload: { columnId, columnName },
});

export const deleteColumn = (columnId) => ({
  type: DELETE_COLUMN,
  payload: columnId,
});
