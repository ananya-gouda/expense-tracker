// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/newExpenses/NewExpense";

const DUMMY_EXPENSES = [
  { id: "el1", title: "Car Insurance", amount: "2000", date: new Date(2021, 2, 28) },
  { id: "el2", title: "Health Insurance", amount: "4000", date: new Date(2020, 5, 17) },
  { id: "el3", title: "Life Insurance", amount: "5000", date: new Date(2009, 10, 22) },
  { id: "el4", title: "Mobile Insurance", amount: "1000", date: new Date(2022, 8, 28) },
];

const App = () => {
 
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) =>
  {
    setExpenses([expense,...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
