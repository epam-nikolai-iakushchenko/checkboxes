import React from "react";
import { Checkbox } from "../Checkbox";
import "./CheckboxGroup.css";

const defocusItem = (element) => {
  if (!element) {
    return;
  }
};

const handleOnKeyPress = (event) => {
  if (event.key === "Home") {
    event.preventDefault();
    event.currentTarget.firstChild.focus();
    event.currentTarget.firstChild.scrollIntoView();
    event.currentTarget.firstChild.setAttribute("aria-selected", "true");
    event.currentTarget.firstChild
      .querySelector("input")
      .classList.add("focused");
  }
  if (event.key === "End") {
    event.preventDefault();
    event.currentTarget.lastChild.focus();
    event.currentTarget.lastChild.scrollIntoView({
      block: "center",
      inline: "nearest",
    });
    event.currentTarget.lastChild.setAttribute("aria-selected", "true");
    event.currentTarget.lastChild
      .querySelector("input")
      .classList.add("focused");
    console.log(
      'event.currentTarget.lastChild.querySelector("input"):',
      event.currentTarget.lastChild.querySelector("input")
    );
  }
};

export const CheckboxGroup = ({ amount, databases, handleChange }) => {
  return (
    <ul onKeyDown={handleOnKeyPress} className="select-database__list">
      {databases
        .map(({ name, id, isChecked }) => {
          return (
            <li className="select-database__list-item" key={id}>
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
