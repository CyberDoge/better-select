import { combineReducers, createStore } from "redux";
import columns from "../state/column/columnReducer";
import propertyInputs from "../state/propertyInput/propertyInputReducer";

const rootReducer = combineReducers({ columns, propertyInputs });
const store = createStore(rootReducer);
export default store;
