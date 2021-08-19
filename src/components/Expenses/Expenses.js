import ExpenseFilter from "../YrFillter/YearFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpenseList from './ExpensesList';
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const FilterChanagesHandlar = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const yearFilterOption = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChanageFilter={FilterChanagesHandlar}
      />
      <ExpenseChart expense={ yearFilterOption} />
      {<ExpenseList item={yearFilterOption}/>}
    </div>
  );
};

export default Expense;
//
