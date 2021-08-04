import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const getDatafromForm = (datafromForm) => {
    const expenseData = {
      ...datafromForm,
      id: Math.random().toString(),
    };

    props.getDatafromNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm getDatafromForm={getDatafromForm} />
    </div>
  );
};

export default NewExpense;
