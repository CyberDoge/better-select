import React, { Component } from "react";
import PropertyInput from "../PropertyInput/PropertyInput";
import {
  ADVANTAGE,
  DISADVANTAGE,
  NOTICE,
} from "../PropertyInput/PropertyInputTypes";

class Main extends Component {
  render() {
    return (
      <div>
        <PropertyInput type={ADVANTAGE} />
        <PropertyInput type={DISADVANTAGE} />
        <PropertyInput type={NOTICE} />
      </div>
    );
  }
}

export default Main;
