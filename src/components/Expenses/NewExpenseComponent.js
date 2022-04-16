import react, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

import ExpenseList from "./ExpenseList";
import "./NewExpenseComponent.css";

function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const getYearHandler = (year) => {
    setSelectedYear(year);
  };
  // console.log(selectedYear);

  const filterYear = props.data.filter((filtYear) => {
    return filtYear.date.getFullYear().toString() === selectedYear;
  });
  // console.log(filterYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter getYear={getYearHandler} def={selectedYear} />
        <ExpenseChart expenses={filterYear} />
        <ExpenseList yeear={selectedYear} items={props.data} />
      </Card>
    </div>
  );
}
export default Expense;
