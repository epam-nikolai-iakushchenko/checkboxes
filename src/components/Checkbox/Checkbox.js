import React, { useEffect, useRef } from 'react';
import './Checkbox.css';

export const Checkbox = ({
  id,
  name,
  isChecked,
  handleChange,
  indeterminate,
}) => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked || false}
        onChange={handleChange}
        className="checkbox__input"
        ref={checkboxRef}
      />
      <label htmlFor={id} className="checkbox__label">
        {name}
      </label>
    </div>
  );
};
