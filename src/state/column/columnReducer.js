import produce from "immer";
import {
  ADD_INPUT_TO_COLUMN,
  CHANGE_NAME,
  DELETE_COLUMN,
} from "./columnActions";

// state = [{columnId: string, columnName: string, inputIds: [number]}]
const initialState = [{ columnName: "test", columnId: 0, inputIds: [1] }];

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
        draft.indexOf((column) => column.columnId === action.payload),
        1
      );
      break;
    default:
      break;
  }
}, initialState);

export default columns;
