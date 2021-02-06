import { PropertyInputTypes } from "../../components/PropertyInput";
import { ADD_INPUT } from "./propertyInputActions";

let lastId = 0;
export const addPropertyInput = () => ({
  type: ADD_INPUT,
  payload: { id: ++lastId, text: "", type: PropertyInputTypes.ADVANTAGE },
});
