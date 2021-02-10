import { COLUMNS_LOCAL_STORE_KEY } from "../../const/localStorageConsts";
import { getObjectByKey } from "../../store/localStoreHelper";
import {
  ADD_INPUT_TO_COLUMN,
  CHANGE_NAME,
  CREATE_COLUMN,
  DELETE_COLUMN,
} from "./columnActions";

const columns = getObjectByKey(COLUMNS_LOCAL_STORE_KEY);

let nextId = columns
  ? columns.reduce((a, b) => (a.columnId > b.columnId ? a : b)).columnId + 1
  : 0;
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

export const changeName = (columnId, columnName) => ({
  type: CHANGE_NAME,
  payload: { columnId, columnName },
});

export const deleteColumn = (columnId) => ({
  type: DELETE_COLUMN,
  payload: columnId,
});
