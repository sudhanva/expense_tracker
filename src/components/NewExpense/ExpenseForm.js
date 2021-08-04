import React from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {
  return (<div>
      <form>
          <div className="new-expense__controls">
              <div className="new-expense__control">
                  <label>Title</label>
                  <input type="text"  />
              </div>
              <div className="new-expense__control">
                  <label>Amount</label>
                  <input type="number" min="0.01" step="0.01" />
              </div>
              <div className="new-expense__control">
                  <label>Date</label>
                  <input type="date" />
              </div>          
              <div className="new-expense__actions">
                  <button>Add Expense</button>
                </div>
                
          </div>
      </form>
  </div>);
};

export default ExpenseForm;
