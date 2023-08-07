import React from 'react';
import ExpenseForm from './ExpenseForm'

const newExpense = () => {

  const saveExpenseHandler = (enteredExpenseData) => {
     const expenseData = {
      ...enteredExpenseData ,
      id : Math.random().toString()
     }
     console.log(expenseData);
  }


  return (
    <div className='new-expense'>


      <ExpenseForm  onSaveExpesnseData={saveExpenseHandler} />


    </div>
  )
}

export default newExpense