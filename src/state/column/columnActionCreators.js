import {
  ADD_INPUT_TO_COLUMN,
  CHANGE_NAME,
  CREATE_COLUMN,
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
export const createColumn = () => ({
  type: CREATE_COLUMN,
  payload: ++nextId,
});

export const changeName = (columnId, columnName) => {
  console.log(columnId);
  return {
    type: CHANGE_NAME,
    payload: { columnId, columnName },
  };
};

export const deleteColumn = (columnId) => ({
  type: DELETE_COLUMN,
  payload: columnId,
});
