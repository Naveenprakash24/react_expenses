import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  const TitleLnr = (event) => {
    setEnteredTitle(event.target.value);
  };
  const DateLnr = (event) => {
    setEnteredDate(event.target.value);
  };
  const AmountLnr = (event) => {
    setEnteredAmount(event.target.value);
  };
  const subMitEvent = (event) => {
    event.preventDefault();

    const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
      props.onSaveExpensesDate(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={subMitEvent}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={TitleLnr} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={AmountLnr}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-01"
            value={EnteredDate}
            onChange={DateLnr}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
