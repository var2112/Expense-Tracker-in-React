import Expense from "./components/Expenses/NewExpenseComponent";
import NewExpense from "./components/NewExpense/NewExpense";
import react, { useState } from "react";

const DEFAULT_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);

  const onAddExpenseData = (addedExpense) => {
    setExpenses((prevExpenses) => {
      return [addedExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense addExpenseData={onAddExpenseData} />
      <Expense data={expenses}></Expense>
    </div>
  );
}

export default App;
