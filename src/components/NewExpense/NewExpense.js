import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormShow, setIsFormShow] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormShow(false);
  };

  const showFormHandeler = () => {
    setIsFormShow(true);
  };

  const hideFormHandeler = () => {
    setIsFormShow(false);
  };

  return (
    <div className="new-expense">
      {!isFormShow && (
        <button onClick={showFormHandeler}>Add New Expense</button>
      )}
      {isFormShow && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={hideFormHandeler}
        />
      )}
    </div>
  );
};

export default NewExpense;
