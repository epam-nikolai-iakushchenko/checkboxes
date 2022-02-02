import React from "react";
import { Checkbox } from "../Checkbox";
import "./CheckboxGroup.css";

let currentItem = document.querySelector("[aria-selected=true]") || {
  firstChild: "ditch",
};

const defocusItem = (element) => {
  if (!element) {
    return;
  }
  element.removeAttribute("aria-selected");
  element.classList.remove("focused");
};

const handleOnKeyPress = (event) => {
  console.log("handleOnKeyPress");
  // if (event.shiftKey && event.key === "Tab") {
  //   console.log('event.shiftKey && event.key === "Tab"');
  //   // event.currentTarget.querySelector("input").classList.remove("focused");
  //   // event.currentTarget.removeAttribute("aria-selected");
  //   console.log("event.currentTarget", event.currentTarget);
  //   event.currentTarget.previousSibling.querySelector("input").focus();
  //   // event.currentTarget.previousSibling.scrollIntoView();
  //   // event.currentTarget.previousSibling.setAttribute("aria-selected", "true");
  //   // event.currentTarget.previousSibling
  //   //   .querySelector("input")
  //   //   .classList.add("focused");
  // }
  // if (event.key === "Tab") {
  //   // event.currentTarget.querySelector("input").classList.remove("focused");
  //   // event.currentTarget.removeAttribute("aria-selected");
  //   console.log("event.currentTarget", event.currentTarget);
  //   event.currentTarget.nextSibling.querySelector("input").focus();
  //   // event.currentTarget.nextSibling.scrollIntoView();
  //   // event.currentTarget.nextSibling.setAttribute("aria-selected", "true");
  //   // event.currentTarget.nextSibling
  //   //   .querySelector("input")
  //   //   .classList.add("focused");
  // }
  if (event.key === "Home") {
    console.log("Home");
    event.preventDefault();
    // currentItem.firstChild.setAttribute("aria-selected", "false");
    console.log(
      "event.currentTarget.parentElement.firstChild",
      event.currentTarget.parentElement.firstChild
    );
    event.currentTarget.parentElement.firstChild.querySelector("input").focus();
    // event.currentTarget.parentElement.firstChild.scrollIntoView();
    // event.currentTarget.parentElement.firstChild.setAttribute(
    //   "aria-selected",
    //   "true"
    // );
    // event.currentTarget.parentElement.firstChild
    //   .querySelector("input")
    //   .classList.add("focused");
  }
  if (event.key === "End") {
    console.log("End");
    event.preventDefault();
    console.log(
      "event.currentTarget.parentElement.lastChild",
      event.currentTarget.parentElement.lastChild
    );
    // currentItem.lastChild.setAttribute("aria-selected", "false");
    event.currentTarget.parentElement.lastChild.querySelector("input").focus();
    // event.currentTarget.parentElement.lastChild.scrollIntoView({
    //   block: "center",
    //   inline: "nearest",
    // });
    // event.currentTarget.parentElement.lastChild.setAttribute(
    //   "aria-selected",
    //   "true"
    // );
    // event.currentTarget.parentElement.lastChild
    //   .querySelector("input")
    //   .classList.add("focused");
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
