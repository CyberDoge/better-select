import { Button, PlusIcon } from "evergreen-ui";
import React from "react";
import "./Column.sass";

export const Column = ({ inputs = [], columnName }) => {
  return (
    <div className="column">
      {inputs.map((input, index) => (
        <div id={`${columnName}-${index}`} className="item">
          {input}
        </div>
      ))}
      <div className="item">
        <Button iconBefore={<PlusIcon />}>Add</Button>
      </div>
    </div>
  );
};
