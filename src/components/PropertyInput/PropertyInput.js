import {
  Button,
  CrossIcon,
  HeartBrokenIcon,
  HeartIcon,
  InfoSignIcon,
  Pane,
  TextInput,
} from "evergreen-ui";
import React from "react";
import "./PropertyInput.sass";
import { ADVANTAGE, DISADVANTAGE, NOTICE } from "./PropertyInputTypes";

const PropertyInput = ({ type, onDelete }) => {
  const getIcon = () => {
    switch (type) {
      case ADVANTAGE:
        return <HeartIcon color="success" marginRight={16} />;
      case DISADVANTAGE:
        return <HeartBrokenIcon color="danger" marginRight={16} />;
      case NOTICE:
        return <InfoSignIcon color="info" marginRight={16} />;
      default:
        return <InfoSignIcon color="info" marginRight={16} />;
    }
  };
  return (
    <Pane className="container">
      {getIcon()}
      <TextInput className={"input"} placeholder={type} />
      <Button marginLeft={4} padding={8} appearance="minimal">
        <CrossIcon onClick={onDelete} />
      </Button>
    </Pane>
  );
};

export default PropertyInput;
