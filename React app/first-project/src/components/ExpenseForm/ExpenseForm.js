import React, { useState } from "react";
import Card from "../UI/Card";

const ExpenseForm = (props) => {
 const[enteredTitle,setEnteredTitle]=useState("");
 const[enteredAmount,setEnteredAmount]=useState("");
 const[enteredDate,setEnteredDate]=useState("");

// const [userInput,setUserInput]=useState({
// setEnteredTitle:'',
// setEnteredAmount:'',
// setEnteredDate:''
// });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   setEnteredTitle:event.target.value
        // });
    //   console.log("Title:",event,event.target.value);
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   setEnteredAmount:event.target.value
        // });
        // console.log("Amount:",event,event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   setEnteredDate:event.target.value
        // });
        // console.log("Date:",event,event.target.value);
    };
    const submitHandler=(e)=>{
e.preventDefault();

const expenseData={
title:enteredTitle,
amount:enteredAmount,
date:new Date(enteredDate)
};
props.onSaveExpenseData(expenseData);
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');
    }
  return (
    <form  onSubmit={submitHandler}>
      <Card className="expenses">
        <div>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={enteredDate} min="2000-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </Card>
    </form>
  );
};
export default ExpenseForm;