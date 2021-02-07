import produce from "immer";
import { ADD_INPUT, CHANGE_TEXT } from "./propertyInputActions";

const initialState = [];
// [{id: number, type: string, text: string}]
const propertyInputs = produce((draft, action) => {
  switch (action.type) {
    case ADD_INPUT:
      draft.push(action.payload);
      break;
    case CHANGE_TEXT:
      const property = draft.find(
        (propertyInput) => propertyInput.id === action.payload.inputId
      );
      if (property) {
        property.text = action.payload.text;
      }
      break;
    default:
      break;
  }
}, initialState);

export default propertyInputs;
