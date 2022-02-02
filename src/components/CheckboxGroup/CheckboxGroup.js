import React from "react";
import { Checkbox } from "../Checkbox";
import "./CheckboxGroup.css";

const handleOnKeyPress = (event) => {
  if (event.key === "Home") {
    event.currentTarget.parentElement.firstChild.querySelector("input").focus();
  }
  if (event.key === "End") {
    event.currentTarget.parentElement.lastChild.querySelector("input").focus();
  }
};

export const CheckboxGroup = ({ amount, databases, handleChange }) => {
  return (
    <ul className="select-database__list">
      {databases
        .map(({ name, id, isChecked }) => {
          return (
            <li
              onKeyDown={handleOnKeyPress}
              className="select-database__list-item"
              key={id}
            >
              <Checkbox
                id={id}
                name={name}
                isChecked={isChecked}
                handleChange={handleChange}
              />
            </li>
          );
        })
        .slice(0, amount)}
    </ul>
  );
};
