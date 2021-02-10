import { PropertyInputTypes } from "../../components/PropertyInput";
import { PROPERTIES_LOCAL_STORE_KEY } from "../../const/localStorageConsts";
import { getObjectByKey } from "../../store/localStoreHelper";
import {
  ADD_INPUT,
  CHANGE_TEXT,
  CHANGE_TYPE,
  DELETE_PROPERTY,
} from "./propertyInputActions";

const properties = getObjectByKey(PROPERTIES_LOCAL_STORE_KEY);
let nextId = properties
  ? properties.reduce((a, b) => (a.id > b.id ? a : b)).id + 1
  : 0;

export const addPropertyInput = () => ({
  type: ADD_INPUT,
  payload: { id: ++nextId, text: "", type: PropertyInputTypes.ADVANTAGE },
});

export const changePropertyText = (text, inputId) => ({
  type: CHANGE_TEXT,
  payload: { text, inputId },
});
export const changePropertyType = (inputId, type) => ({
  type: CHANGE_TYPE,
  payload: { type, inputId },
});

// todo rename all inputId to propertyId
export const deleteProperty = (inputId) => ({
  type: DELETE_PROPERTY,
  payload: { inputId },
});
