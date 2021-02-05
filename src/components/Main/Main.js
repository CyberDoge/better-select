import React, { Component } from "react";
import { Column } from "../Column/Column";
import PropertyInput from "../PropertyInput";
import { PropertyInputTypes } from "../PropertyInput";

const tmp = [
  <PropertyInput type={PropertyInputTypes.ADVANTAGE} />,
  <PropertyInput type={PropertyInputTypes.DISADVANTAGE} />,
  <PropertyInput type={PropertyInputTypes.NOTICE} />,
];
class Main extends Component {
  render() {
    return (
      <div>
        <Column columnName="first" inputs={tmp}></Column>
      </div>
    );
  }
}

export default Main;
