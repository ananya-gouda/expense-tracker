import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
};

export default NewExpense;
