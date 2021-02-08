import { Button, CrossIcon, Heading, PlusIcon, TextInput } from "evergreen-ui";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  deleteColumn,
} from "../../state/column/columnActionCreators";
import PropertyInput from "../PropertyInput";
import styles from "./Column.module.sass";

export const Column = ({ inputIds = [], columnName, columnId, addInput }) => {
  const inputs = useSelector((state) =>
    state.propertyInputs.filter((input) => inputIds.includes(input.id))
  );
  const dispatch = useDispatch();
  const onNameChange = (event) => {
    dispatch(changeName(columnId, event.target.value));
  };
  const onDeleteColumn = () => {
    dispatch(deleteColumn(columnId));
  };
  const [isView, setView] = useState(!!columnName);
  return (
    <div className={styles.column}>
      <div className={styles.nameContainer}>
        {isView ? (
          <Heading
            size={300}
            alignContent="center"
            className={styles.nameView}
            onClick={() => setView(false)}
          >
            {columnName}
          </Heading>
        ) : (
          <TextInput
            className={styles.nameInput}
            onBlur={() => setView(true)}
            autoFocus
            onChange={onNameChange}
            value={columnName}
          />
        )}

        <Button
          marginLeft={4}
          padding={8}
          onClick={onDeleteColumn}
          appearance="minimal"
        >
          <CrossIcon />
        </Button>
      </div>
      {inputs.map((input) => (
        <div key={`${columnId}-${input.id}`} className={styles.item}>
          <PropertyInput inputId={input.id} type={input.type} />
        </div>
      ))}
      <div className={styles.item}>
        <Button
          intent="success"
          appearance={"primary"}
          className={styles.addButton}
          onClick={addInput}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
