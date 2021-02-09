import classNames from "classnames";
import {
  Button,
  CompassIcon,
  CrossIcon,
  Heading,
  PlusIcon,
  TextInput,
} from "evergreen-ui";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT, DOWN, UP } from "../../const/sortDirection";
import {
  addInput,
  changeName,
  deleteColumn,
} from "../../state/column/columnActionCreators";
import { addPropertyInput } from "../../state/propertyInput/propertyInputCreators";
import PropertyInput from "../PropertyInput";
import { propertyInputTypesSort } from "../PropertyInput/PropertyInputTypes";
import styles from "./Column.module.sass";

export const Column = ({
  inputIds = [],
  columnName,
  columnId,
  sortDirection,
  handleSortChanged,
}) => {
  const inputs = useSelector((state) =>
    state.propertyInputs
      .filter((input) => inputIds.includes(input.id))
      .sort((a, b) => {
        if (sortDirection === DEFAULT) {
          return a.id - b.id;
        } else if (sortDirection === UP) {
          return propertyInputTypesSort(a, b);
        } else {
          return -propertyInputTypesSort(a, b);
        }
      })
  );
  const dispatch = useDispatch();
  const onNameChange = (event) => {
    dispatch(changeName(columnId, event.target.value));
  };
  const onDeleteColumn = () => {
    dispatch(deleteColumn(columnId));
  };
  const onAddInputClick = () => {
    const addInputAction = addPropertyInput();
    const inputId = addInputAction.payload.id;
    dispatch(addInput(columnId, inputId));
    dispatch(addInputAction);
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
            placeholder="column name"
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
      <div className={classNames(styles.controlContainer, styles.item)}>
        <Button
          className={styles.button}
          appearance={"minimal"}
          onClick={() =>
            handleSortChanged(
              sortDirection === UP
                ? DOWN
                : sortDirection === DOWN
                ? DEFAULT
                : UP
            )
          }
        >
          <CompassIcon
            className={classNames(
              sortDirection === UP && styles.sortUp,
              styles.compassIcon
            )}
            color={sortDirection === DEFAULT ? "muted" : "selected"}
          />
        </Button>
        <Button
          intent="success"
          appearance={"primary"}
          className={styles.button}
          onClick={onAddInputClick}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
