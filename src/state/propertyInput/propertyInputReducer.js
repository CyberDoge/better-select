import produce from "immer";
import { PROPERTIES_LOCAL_STORE_KEY } from "../../const/localStorageConsts";
import { getObjectByKey, setObject } from "../../store/localStoreHelper";
import {
  ADD_INPUT,
  CHANGE_TEXT,
  CHANGE_TYPE,
  DELETE_PROPERTY,
} from "./propertyInputActions";

const initialState = getObjectByKey(PROPERTIES_LOCAL_STORE_KEY) || [];
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
  setObject(PROPERTIES_LOCAL_STORE_KEY, draft);
}, initialState);

export default propertyInputs;
