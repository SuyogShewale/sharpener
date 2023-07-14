import React from 'react';
import logo from './logo.svg';
import '../src/components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFormm from './components/ExpenseFormm';

function App(){

  const expenses = [
    {Title : 'car insurance' , amount : 294.67 , date : new Date(2021,8,28),   LocationOfExpenditure : 'Nashik'},
    {Title : 'Bike insurance' , amount : 294.67 , date : new Date(2021,8,28)  ,LocationOfExpenditure : 'Pune'},
    {Title : 'Home insurance' , amount : 294.67 , date : new Date(2021,8,28), LocationOfExpenditure : 'Kolhapur'},
    {Title : 'gold loan' , amount : 294.67 , date : new Date(2021,8,28),LocationOfExpenditure : 'Trimbak'}
    
  ]

  return React.createElement( 'div',{},
  React.createElement('h2',{},"let's get started!"),
  React.createElement(Expenses,{items: expenses}),
  React.createElement(ExpenseFormm, {})
    // <div className="App">
    //           {/* <h2>Let's get started</h2>
    //           <ExpenseItem Title = {Expenses[0].Title} amount = {Expenses[0].amount} date = {Expenses[0].date} LocationOfExpenditure = {Expenses[0].LocationOfExpenditure}></ExpenseItem>
    //           <ExpenseItem Title = {Expenses[1].Title} amount = {Expenses[1].amount} date = {Expenses[1].date} LocationOfExpenditure = {Expenses[1].LocationOfExpenditure}></ExpenseItem>
    //           <ExpenseItem Title = {Expenses[2].Title} amount = {Expenses[2].amount} date = {Expenses[2].date} LocationOfExpenditure = {Expenses[2].LocationOfExpenditure}></ExpenseItem>
    //           <ExpenseItem Title = {Expenses[3].Title} amount = {Expenses[3].amount} date = {Expenses[3].date} LocationOfExpenditure = {Expenses[3].LocationOfExpenditure}></ExpenseItem>
    //            */}
    //           {Expenses.map((el)=>{
    //             return  <ExpenseItem Title = {el.Title} amount = {el.amount} date = {el.date} LocationOfExpenditure = {el.LocationOfExpenditure}></ExpenseItem>

    //           })}
    // </div>
  );
}

export default App;
