import React from 'react'

const ExpenseFormm = () => {
    console.log("suyog")
    const handler = (event) =>{
        event.preventDefault();
        let Title = document.getElementById('Text').value
        let amount = document.getElementById('amount').value
        let date = document.getElementById('date').value

        console.log("Title :" , Title , "Amount :", amount , "date :" , date)
    }
  return (
    <form>
        <div className='New-expense__constrol'>
        <div className='New-expense__constrol'>
            <lable>Title</lable>
            <input type='text' id='Text'/>
        </div>
        <div className='New-expense__constrol'>
            <lable>Amount</lable>
            <input type='number' min="0.01" step="0.01" id='amount'/>
        </div>
        <div className='New-expense__constrol'>
            <lable>Date</lable>
            <input type='date' min="2021-01-01" step="2022-12-31" id='date'/>
        </div>
        <div className='New-expense__constrol'>
            <button onClick={handler}>Submit</button>
        </div>
        </div>
    </form>
  )
}

export default ExpenseFormm