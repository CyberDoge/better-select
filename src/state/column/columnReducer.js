import produce from "immer";
import { COLUMNS_LOCAL_STORE_KEY } from "../../const/localStorageConsts";
import { getObjectByKey, setObject } from "../../store/localStoreHelper";
import {
  ADD_INPUT_TO_COLUMN,
  CHANGE_NAME,
  CREATE_COLUMN,
  DELETE_COLUMN,
} from "./columnActions";

// state = [{columnId: number, columnName: string, inputIds: [number]}]
const initialState = getObjectByKey(COLUMNS_LOCAL_STORE_KEY) || [];

const columns = produce((draft, action) => {
  switch (action.type) {
    case ADD_INPUT_TO_COLUMN:
      draft
        .find((column) => column.columnId === action.payload.columnId)
        .inputIds.push(action.payload.inputId);
      break;
    case CHANGE_NAME:
      draft.find(
        (column) => column.columnId === action.payload.columnId
      ).columnName = action.payload.columnName;
      break;
    case DELETE_COLUMN:
      draft.splice(
        draft.findIndex((column) => column.columnId === action.payload),
        1
      );
      break;
    case CREATE_COLUMN:
      draft.push({ columnId: action.payload, columnName: "", inputIds: [] });
      break;
    default:
      break;
  }
  setObject(COLUMNS_LOCAL_STORE_KEY, draft);
}, initialState);

export default columns;
