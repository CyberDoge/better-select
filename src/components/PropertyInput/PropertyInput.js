import {
  Button,
  CrossIcon,
  HeartBrokenIcon,
  HeartIcon,
  InfoSignIcon,
  Pane,
  Text,
  TextInput,
} from "evergreen-ui";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePropertyText,
  changePropertyType,
  deleteProperty,
} from "../../state/propertyInput/propertyInputCreators";
import "./PropertyInput.sass";
import { ADVANTAGE, DISADVANTAGE, NOTICE } from "./PropertyInputTypes";

const PropertyInput = ({ inputId, type }) => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.propertyInputs.find((pi) => pi.id === inputId).text
  );
  const onChange = (event) => {
    dispatch(changePropertyText(event.target.value, inputId));
  };
  const onDelete = () => {
    dispatch(deleteProperty(inputId));
  };
  const changeType = () => {
    const getNextType = () => {
      switch (type) {
        case ADVANTAGE:
          return DISADVANTAGE;
        case DISADVANTAGE:
          return NOTICE;
        default:
          return ADVANTAGE;
      }
    };
    dispatch(changePropertyType(getNextType(), inputId));
  };
  const [isView, setView] = useState(false);
  const getIcon = () => {
    switch (type) {
      case ADVANTAGE:
        return <HeartIcon color="success" />;
      case DISADVANTAGE:
        return <HeartBrokenIcon color="danger" />;
      case NOTICE:
        return <InfoSignIcon color="info" />;
      default:
        return <InfoSignIcon color="info" />;
    }
  };
  return (
    <Pane className="container">
      <Button
        className="typeButton"
        marginRight={6}
        onClick={changeType}
        appearance="minimal"
      >
        {getIcon()}
      </Button>
      {isView ? (
        <Text
          textAlign="left"
          alignContent="center"
          className={"view"}
          onClick={() => setView(false)}
        >
          &#8203;
          {value}
        </Text>
      ) : (
        <TextInput
          onBlur={() => setView(true)}
          autoFocus
          onChange={onChange}
          value={value}
          className={"input"}
          placeholder={type}
        />
      )}
      <Button
        marginLeft={4}
        padding={8}
        onClick={onDelete}
        appearance="minimal"
      >
        <CrossIcon />
      </Button>
    </Pane>
  );
};

export default PropertyInput;
