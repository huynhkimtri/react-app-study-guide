import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
