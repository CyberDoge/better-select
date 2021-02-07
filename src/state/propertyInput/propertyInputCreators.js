import { PropertyInputTypes } from "../../components/PropertyInput";
import { ADD_INPUT, CHANGE_TEXT } from "./propertyInputActions";

let lastId = 0;
export const addPropertyInput = () => ({
  type: ADD_INPUT,
  payload: { id: ++lastId, text: "", type: PropertyInputTypes.ADVANTAGE },
});

export const changePropertyText = (text, inputId) => ({
  type: CHANGE_TEXT,
  payload: { text, inputId },
});
