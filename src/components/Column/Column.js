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
      {inputs.map(input=> (
        <div key={`${columnName}-${input.id}`} className="item">
          <PropertyInput inputId={input.id} type={input.type} />
        </div>
      ))}
      <div className="item">
        <Button
          intent="success"
          appearance={"primary"}
          className={"addButton"}
          onClick={addInput}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
