import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from '../components/Form';
import { mockDatabasesData } from '../mocks/mockDatabasesData';

export const Container = () => {
  const [amount, setAmount] = useState(18);
  const [databases, setDatabases] = useState([]);

  const defaultDatabases = mockDatabasesData.map((database) => {
    return { ...database, isChecked: Boolean(database.isDefault) };
  });

  const checkedDatabases = databases.filter((database) => database.isChecked);

  const indeterminate =
    checkedDatabases.length !== databases.length &&
    checkedDatabases.length !== 0;

  useEffect(() => {
    setDatabases(defaultDatabases);
  }, []);

  const handleChange = (e) => {
    console.log('handleChange!!');
    console.log(databases);
    const { id, checked } = e.target;
    if (id === 'selectAll') {
      setDatabases(
        databases.map((database) => {
          return { ...database, isChecked: checked };
        })
      );
    } else {
      setDatabases(
        databases.map((database) =>
          database.id === Number(id)
            ? { ...database, isChecked: checked }
            : { ...database }
        )
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Form submitted`);

    console.log(
      `You've submitted the databases with the following ids: ${databases
        .filter((database) => database.isChecked)
        .map((database) => database.id)
        .join()}`
    );
  };

  const handleReset = (e) => {
    e.preventDefault();
    setDatabases(defaultDatabases);
  };

  return (
    <Form
      amount={amount}
      setAmount={setAmount}
      databases={databases}
      indeterminate={indeterminate}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
    />
  );
};
