import react, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseData(expenseData);
  };

  const [isChange, setIsChange] = useState(false);

  const changeHandler = () => {
    setIsChange(true);
  };

  const staticHandler = () => {
    setIsChange(false);
  };

  let display = <button onClick={changeHandler}>Add New Expense</button>;

  if (isChange) {
    display = (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseHandler}
        onChange={staticHandler}
      ></ExpenseForm>
    );
  }

  return <div className="new-expense">{display}</div>;
}

export default NewExpense;
