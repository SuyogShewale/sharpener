import React, { useState } from 'react'

const ExpenseFormm = () => {

    const [enteredTitle , setEnteredTitle]= useState('')
    const [enteredAmount , setEnteredAmount]= useState('')
    const [enteredDate , setEnteredDate]= useState('')

    
    


    const handler = (event) =>{
        event.preventDefault();
        console.log("Title :" , enteredTitle , "Amount :", enteredAmount , "date :" , enteredDate)
    }
  return (
    <form>
        <div className='New-expense__constrol'>
        <div className='New-expense__constrol'>
            <lable>Title</lable>
            <input type='text' id='Text' onChange={(e)=>{
                setEnteredTitle(e.target.value)
            }}/>
        </div>
        <div className='New-expense__constrol'>
            <lable>Amount</lable>
            <input type='number' min="0.01" step="0.01" id='amount' onChange={(e)=>{
setEnteredAmount(e.target.value)
            }}/>
        </div>
        <div className='New-expense__constrol'>
            <lable>Date</lable>
            <input type='date' min="2021-01-01" step="2022-12-31" id='date' onChange={(e)=>{
                setEnteredDate(e.target.value)
            }}/>
        </div>
        <div className='New-expense__constrol'>
            <button onClick={handler}>Submit</button>
        </div>
        </div>
    </form>
  )
}

export default ExpenseFormm