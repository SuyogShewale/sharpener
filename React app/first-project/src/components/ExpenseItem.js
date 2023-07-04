import React from 'react';
import './ExpenseItem.css';


function ExpenseItem(props) {
  


  return (
    <div className='expense-item' style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <div>
        {props.date.toISOString()}
      </div>
      <div className='expense-item__description'>
        <h2 style={{ color: 'blue', fontSize: '20px' }}>
          {props.Title}
        </h2>
        <div className='expense-item__price' style={{ fontWeight: 'bold' }}>
          {props.amount}
        </div>
        <div className='LocationOfExpenditure'>
          {props.LocationOfExpenditure}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
