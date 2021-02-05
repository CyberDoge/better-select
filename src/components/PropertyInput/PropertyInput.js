import {
  HeartBrokenIcon,
  HeartIcon,
  InfoSignIcon,
  Pane,
  TextInput,
} from "evergreen-ui";
import React from "react";
import "./PropertyInput.sass";
import { ADVANTAGE, DISADVANTAGE, NOTICE } from "./PropertyInputTypes";

const PropertyInput = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case ADVANTAGE:
        return <HeartIcon color="success" marginRight={16} />;
      case DISADVANTAGE:
        return <HeartBrokenIcon color="danger" marginRight={16} />;
      case NOTICE:
        return <InfoSignIcon color="info" marginRight={16} />;
    }
  };
  return (
    <Pane className="container">
      {getIcon()}
      <TextInput placeholder={type} />
    </Pane>
  );
};

export default PropertyInput;
