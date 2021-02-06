import produce from "immer";
import { ADD_INPUT } from "./propertyInputActions";

const initialState = [];
// [{id: number, type: string, text: string}]
const propertyInputs = produce((draft, action) => {
  switch (action.type) {
    case ADD_INPUT:
      draft.push(action.payload);
      break;
    default:
      break;
  }
}, initialState);

export default propertyInputs;
