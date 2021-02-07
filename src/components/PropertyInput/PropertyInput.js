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
import { useDispatch, useSelector } from "react-redux";
import { changePropertyText } from "../../state/propertyInput/propertyInputCreators";
import "./PropertyInput.sass";
import { ADVANTAGE, DISADVANTAGE, NOTICE } from "./PropertyInputTypes";

const PropertyInput = ({ inputId, type, onDelete }) => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.propertyInputs.find((pi) => pi.id === inputId).text
  );
  const onChange = (event) => {
    dispatch(changePropertyText(event.target.value, inputId));
  };
  const getIcon = () => {
    switch (type) {
      case ADVANTAGE:
        return (
          <HeartIcon className="typeIcon" color="success" marginRight={16} />
        );
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
      <TextInput
        onChange={onChange}
        value={value}
        className={"input"}
        placeholder={type}
      />
      <Button marginLeft={4} padding={8} appearance="minimal">
        <CrossIcon onClick={onDelete} />
      </Button>
    </Pane>
  );
};

export default PropertyInput;
