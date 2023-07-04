import logo from './logo.svg';
import './App.css';
import ExpenseItem from '../src/components/ExpenseItem';

function App(){

  const Expenses = [
    {Title : 'car insurance' , amount : 294.67 , date : new Date(2021,8,28),   LocationOfExpenditure : 'Nashik'},
    {Title : 'car insurance' , amount : 294.67 , date : new Date(2021,8,28)  ,LocationOfExpenditure : 'Pune'},
    {Title : 'Home insurance' , amount : 294.67 , date : new Date(2021,8,28), LocationOfExpenditure : 'Kolhapur'},
    {Title : 'car insurance' , amount : 294.67 , date : new Date(2021,8,28),LocationOfExpenditure : 'Trimbak'}
    
  ]

  return (
    <div className="App">
              {/* <h2>Let's get started</h2>
              <ExpenseItem Title = {Expenses[0].Title} amount = {Expenses[0].amount} date = {Expenses[0].date} LocationOfExpenditure = {Expenses[0].LocationOfExpenditure}></ExpenseItem>
              <ExpenseItem Title = {Expenses[1].Title} amount = {Expenses[1].amount} date = {Expenses[1].date} LocationOfExpenditure = {Expenses[1].LocationOfExpenditure}></ExpenseItem>
              <ExpenseItem Title = {Expenses[2].Title} amount = {Expenses[2].amount} date = {Expenses[2].date} LocationOfExpenditure = {Expenses[2].LocationOfExpenditure}></ExpenseItem>
              <ExpenseItem Title = {Expenses[3].Title} amount = {Expenses[3].amount} date = {Expenses[3].date} LocationOfExpenditure = {Expenses[3].LocationOfExpenditure}></ExpenseItem>
               */}
              {Expenses.map((el)=>{
                return  <ExpenseItem Title = {el.Title} amount = {el.amount} date = {el.date} LocationOfExpenditure = {el.LocationOfExpenditure}></ExpenseItem>

              })}
    </div>
  );
}

export default App;
