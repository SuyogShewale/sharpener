import React, { useState } from 'react'

const ExpenseFormm = () => {

    // const [enteredTitle , setEnteredTitle]= useState('')
    // const [enteredAmount , setEnteredAmount]= useState('')
    // const [enteredDate , setEnteredDate]= useState('')
    const [userinput , setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    })

    setUserInput({
        ...userinput,
        enteredTitle : Event.target.value
    })



    
    


    const handler = (event) =>{
        event.preventDefault();
        
    const ExpenseData = {
        Title : enteredTitle,
        Amount : enteredAmount,
        Date : new Date(enteredDate)
    }

    console.log(ExpenseData);
        // console.log("Title :" , enteredTitle , "Amount :", enteredAmount , "date :" , enteredDate)
    }

  return (
    <form>
        <div className='New-expense__constrol'>
        <div className='New-expense__constrol'>
            <lable>Title</lable>
            <input type='text' id='Text' onChange={(e)=>{
                 setUserInput({
                    ...userinput,
                    enteredTitle : e.target.value
                })
            }}/>
        </div>
        <div className='New-expense__constrol'>
            <lable>Amount</lable>
            <input type='number' min="0.01" step="0.01" id='amount' onChange={(e)=>{
 setUserInput({
    ...userinput,
    enteredAmount: e.target.value
})            }}/>
        </div>
        <div className='New-expense__constrol'>
            <lable>Date</lable>
            <input type='date' min="2021-01-01" step="2022-12-31" id='date' onChange={(e)=>{
                 setUserInput({
                    ...userinput,
                    enteredDate: e.target.value
                })
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