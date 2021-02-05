import { ADD_INPUT } from "./columnActions";

let lastIndex = 0

export const addInput = () => ({
  type: ADD_INPUT,
  id: ++lastIndex
});
