import React , { useState }from 'react';
import './ExpenseItem.css';

import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props)  => {
 
const Month = props.date.toLocaleString('en-US' , { Month : 'long'});
const day = props.date.toLocaleString('en-US' , { Month : '2-digit'});
const year = props.date.getFullYear();
const [title ,settitle ] = useState(props.title);
const clickHandler = ()=>{
settitle("updated")
console.log(title);
}


const removeExpense = ()=>{
  console.log("deleted")
}


return (
  <>

   <Card className='expense-item'>


 <ExpenseDate date ={props.date} />
 <div className='expense-item__description'>
    <h2 style={{ color: 'blue', fontSize: '20px' }}>{props.title}</h2>
    <div className='expense-item__price' style={{ fontWeight: 'bold' }}>${props.amount}</div>
 </div>
  <button onClick={clickHandler}>Change Title</button>
  <button onClick={removeExpense}>Delete</button>

  
  {/* <ExpenseDetails amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   Title={props.Title} />  */}

  
</Card>
</>
  
)
  
}


export default ExpenseItem;
