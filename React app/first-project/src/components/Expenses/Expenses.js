import React from 'react'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
    console.log("props",props,props.items)
  return (    <div>
                  {props.items.map((el)=>{
                return  <ExpenseItem title = {el.Title} amount = {el.amount} date = {el.date} LocationOfExpenditure = {el.LocationOfExpenditure}></ExpenseItem>

              })}
              </div>
  )
}

export default Expenses