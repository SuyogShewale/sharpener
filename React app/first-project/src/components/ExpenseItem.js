import React from 'react'

function expenseItem() {
  const ExpenseDate = new Date(2021,2,28)
  const ExpenseTitle = 'Car Insurance'
  const expenceAmount = 294.67

  return (<>
    <div className='expense-item'>

    <div>
      {ExpenseDate.toISOString()}
    </div>

    <div className='expense-item__discription'>

      <h2>
       {ExpenseTitle}
      </h2>

      <div className='expense-item__price'>
          {expenceAmount}
      </div>

    </div>

        </div>
    </>

  )
}

export default expenseItem