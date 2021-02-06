import produce from "immer";
import { ADD_INPUT_TO_COLUMN } from "./columnActions";

// state = [{columnId: string, inputIds: [number]}]
const initialState = [{ columnName: "test", inputIds: [1] }];

const columns = produce((draft, action) => {
  switch (action.type) {
    case ADD_INPUT_TO_COLUMN:
      draft
        .find((column) => column.columnName === action.payload.columnName)
        .inputIds.push(action.payload.inputId);
      break;
    default:
      break;
  }
}, initialState);

export default columns;
