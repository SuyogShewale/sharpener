import React from 'react';
import './ExpenseItem.css';

import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from './Card';


function ExpenseItem(props) {
  
const Month = props.date.toLocaleString('en-US' , { Month : 'long'});
const day = props.date.toLocaleString('en-US' , { Month : '2-digit'});
const year = props.date.getFullYear();
console.log("props from expense item",props.amount, props.LocationOfExpenditure,  props.title)
console.log("propsExpenseItem" , props);
  // return (
  //   <div className='expense-item' style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
  //     <div>
  //      <div>{Month}</div>
  //      <div>{day}</div>
  //      <div>{year}</div>
  //     </div>
  //       <div className='expense-item__description'>
  //       <h2 style={{ color: 'blue', fontSize: '20px' }}>
  //         {props.title}
  //       </h2>
  //       <div className='expense-item__price' style={{ fontWeight: 'bold' }}>
  //         {props.amount}
  //       </div>
  //       <div className='LocationOfExpenditure'>
  //         {props.LocationOfExpenditure}
  //       </div>
  //     </div>
  //   </div>
  // );

  

return ( <>

   <Card className='expense-item'>
   <h2 style={{ color: 'blue', fontSize: '20px' }}>{"props.title"}</h2>

 <ExpenseDate date ={props.date} />
 <div className='expense-item__description'>
    <h2 style={{ color: 'blue', fontSize: '20px' }}>{props.title}</h2>
    <div className='expense-item__price' style={{ fontWeight: 'bold' }}>${props.amount}</div>
 </div>
  
  {/* <ExpenseDetails amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   Title={props.Title} />  */}

  
</Card>
</>
  
)
  
}


export default ExpenseItem;
