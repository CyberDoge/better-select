import { PropertyInputTypes } from "../../components/PropertyInput";
import {
  ADD_INPUT,
  CHANGE_TEXT,
  CHANGE_TYPE,
  DELETE_PROPERTY,
} from "./propertyInputActions";

let lastId = 0;
export const addPropertyInput = () => ({
  type: ADD_INPUT,
  payload: { id: ++lastId, text: "", type: PropertyInputTypes.ADVANTAGE },
});

export const changePropertyText = (text, inputId) => ({
  type: CHANGE_TEXT,
  payload: { text, inputId },
});
// todo first id, second value
export const changePropertyType = (type, inputId) => ({
  type: CHANGE_TYPE,
  payload: { type, inputId },
});

// todo rename all inputId to propertyId
export const deleteProperty = (inputId) => ({
  type: DELETE_PROPERTY,
  payload: { inputId },
});
