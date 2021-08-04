import React, { useState } from "react";

import "./ExpenseItems.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {

  const [title, setTitle] = useState(props.title);

  const updateTitle = () => {
    setTitle('Updated');
    console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
        <div>
          <button onClick={updateTitle}>Click</button>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
