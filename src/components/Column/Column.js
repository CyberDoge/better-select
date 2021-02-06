import { Button, PlusIcon } from "evergreen-ui";
import React from "react";
import { useSelector } from "react-redux";
import PropertyInput from "../PropertyInput";
import "./Column.sass";

export const Column = ({ inputIds = [], columnName, addInput }) => {
  const inputs = useSelector((state) =>
    state.propertyInputs.filter((input) => inputIds.includes(input.id))
  );
  return (
    <div className="column">
      {inputs.map((input, index) => (
        <div key={`${columnName}-${index}`} className="item">
          <PropertyInput type={input.type} />
        </div>
      ))}
      <div className="item">
        <Button onClick={addInput} iconBefore={<PlusIcon />}>
          Add
        </Button>
      </div>
    </div>
  );
};
