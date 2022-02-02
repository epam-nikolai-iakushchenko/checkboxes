import React from 'react';
import { AmountInput } from '../AmountInput';
import { Checkbox } from '../Checkbox';
import { CheckboxGroup } from '../CheckboxGroup';
import './Form.css';

export const Form = ({
  amount,
  setAmount,
  databases,
  indeterminate,
  handleChange,
  handleSubmit,
  handleReset,
}) => {
  return (
    <form className="select-database">
      <div className="modal__header select-database__header">
        <AmountInput amount={amount} setAmount={setAmount} />
        <h1>Select databases to search:</h1>
        <p className="select-database__note">
          Note: Selecting all databases for search may result in slow response
          time.
        </p>
      </div>
      <div
        role="group"
        aria-label="databases"
        className="modal__body select-database__body"
      >
        <Checkbox
          name="Select All"
          id="selectAll"
          handleChange={handleChange}
          indeterminate={indeterminate}
          isChecked={
            !databases.some((database) => database?.isChecked !== true)
          }
        />
        <hr />
        <div className="select-database__list-wrapper">
          <CheckboxGroup
            amount={amount}
            databases={databases}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="modal__footer select-database__footer">
        <hr />
        <button
          type="submit"
          onClick={handleSubmit}
          className="select-database__button--select"
        >
          Select
        </button>
        <button
          type="reset"
          onClick={handleReset}
          className="select-database__button--cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
