import produce from "immer";
import {
  ADD_INPUT,
  CHANGE_TEXT,
  CHANGE_TYPE,
  DELETE_PROPERTY,
} from "./propertyInputActions";

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
    case DELETE_PROPERTY:
      draft.splice(
        draft.findIndex(
          (propertyInput) => propertyInput.id === action.payload.inputId
        ),
        1
      );
      break;
    case CHANGE_TYPE:
      draft.find(
        (propertyInput) => propertyInput.id === action.payload.inputId
      ).type = action.payload.type;
      break;
    default:
      break;
  }
}, initialState);

export default propertyInputs;
